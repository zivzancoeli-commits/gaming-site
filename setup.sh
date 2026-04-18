#!/bin/bash
# ─────────────────────────────────────────────────────────────────
#  Oracle Cloud Ubuntu 22.04 ARM (A1 Flex) – Full Setup Script
#  Run as: sudo bash setup.sh YOUR_DOMAIN
# ─────────────────────────────────────────────────────────────────
set -e

DOMAIN=${1:-"example.com"}
APP_DIR="/opt/gaming-site"
APP_USER="gamesite"

echo "==> Setting up gaming site for domain: $DOMAIN"

# ── 1. System update ─────────────────────────────────────────────
apt-get update -y && apt-get upgrade -y
apt-get install -y curl git ufw nginx certbot python3-certbot-nginx

# ── 2. Node.js 20 LTS ────────────────────────────────────────────
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
echo "Node.js $(node -v) installed"

# ── 3. PM2 process manager ───────────────────────────────────────
npm install -g pm2
echo "PM2 $(pm2 -v) installed"

# ── 4. Firewall ───────────────────────────────────────────────────
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
echo "Firewall configured"

# ── 5. Create app user ───────────────────────────────────────────
id -u $APP_USER &>/dev/null || useradd -m -s /bin/bash $APP_USER
echo "App user: $APP_USER"

# ── 6. Copy project files ────────────────────────────────────────
mkdir -p $APP_DIR
cp -r . $APP_DIR/
chown -R $APP_USER:$APP_USER $APP_DIR

# ── 7. npm install ───────────────────────────────────────────────
cd $APP_DIR
sudo -u $APP_USER npm install
echo "Dependencies installed"

# ── 8. Nginx config ──────────────────────────────────────────────
# Replace YOUR_DOMAIN placeholder in nginx config
sed "s/YOUR_DOMAIN/$DOMAIN/g" $APP_DIR/nginx.conf > /etc/nginx/sites-available/gaming-site
ln -sf /etc/nginx/sites-available/gaming-site /etc/nginx/sites-enabled/gaming-site
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
echo "Nginx configured"

# ── 9. SSL certificate ───────────────────────────────────────────
echo "Getting SSL certificate for $DOMAIN..."
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "admin@$DOMAIN" --redirect
echo "SSL configured"

# ── 10. Start app with PM2 ───────────────────────────────────────
cd $APP_DIR
sudo -u $APP_USER pm2 start server.js --name "gaming-site" --env production
sudo -u $APP_USER pm2 save
env PATH=$PATH:/usr/bin pm2 startup systemd -u $APP_USER --hp /home/$APP_USER

# ── 11. Oracle Cloud iptables (open ports 80 + 443) ──────────────
# Oracle Cloud has a host-level iptables rule that blocks ports by default
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
# Save rules so they survive reboot
apt-get install -y iptables-persistent
netfilter-persistent save

echo ""
echo "═══════════════════════════════════════════════════"
echo "  Setup complete! Your site is live at:"
echo "  https://$DOMAIN"
echo "═══════════════════════════════════════════════════"
echo ""
echo "  Useful commands:"
echo "  pm2 logs gaming-site    - View logs"
echo "  pm2 restart gaming-site - Restart app"
echo "  pm2 status              - Check status"
