# Gaming Site – Full Setup Guide

A dark-themed school gaming site with 60+ games, Ultraviolet web proxy, Google AdSense,
and GoGuardian bypass via domain cloaking + Cloudflare.

---

## File Structure

```
gaming-site/
├── server.js              ← Express + Bare server (Node.js backend)
├── package.json
├── nginx.conf             ← Copy to /etc/nginx/sites-available/
├── setup.sh               ← One-command Oracle Cloud setup
└── public/
    ├── index.html         ← Main game library
    ├── proxy.html         ← Web proxy with banner ad
    ├── music.html         ← Music/lofi player
    ├── links.html         ← More links page
    ├── css/style.css
    ├── js/app.js
    ├── js/games-data.js   ← Add/remove games here
    └── uv/                ← Ultraviolet files (auto-copied after npm install)
```

---

## STEP 1 – Pick a Domain Name (GoGuardian Bypass)

GoGuardian uses **domain categorization**. If your domain looks educational,
it gets flagged as "Education" instead of "Gaming" and passes through filters.

**Good domain name examples:**
- `mathpracticelab.com`
- `learnhubgames.com`
- `studybreakzone.com`
- `sciencegamelab.net`
- `algebralearn.io`

Register at [Porkbun](https://porkbun.com) (~$10/yr) or [Namecheap](https://namecheap.com).

---

## STEP 2 – Set Up Cloudflare (FREE – Critical for Bypass)

Cloudflare hides your server IP and gives your site a clean, globally-trusted
IP reputation. GoGuardian relies on both domain AND IP reputation.

1. Go to [cloudflare.com](https://cloudflare.com) → Add site → enter your domain
2. Choose the **Free plan**
3. Update your domain's nameservers to Cloudflare's (shown in dashboard)
4. In Cloudflare DNS, add:
   - `A` record: `@` → your Oracle server IP → **Proxied (orange cloud)**
   - `A` record: `www` → your Oracle server IP → **Proxied (orange cloud)**
5. Under **SSL/TLS** → set mode to **Full (Strict)**
6. Under **Speed → Optimization** → enable **Auto Minify** and **Brotli**

> The orange cloud is the key – it routes all traffic through Cloudflare's
> network, hiding your real IP and providing clean IP reputation.

### Optional: Cloudflare Page Rules (Advanced Cloaking)

If you want the site to show something educational to filter-checkers,
add a Page Rule:
- URL: `*yourdomain.com/*`
- Setting: **Cache Level: Cache Everything**

Or use a **Cloudflare Worker** to detect GoGuardian's user-agent and redirect.

---

## STEP 3 – Oracle Cloud Setup (1 OCPU – Free Forever)

### Create the VM

1. Sign up at [cloud.oracle.com](https://cloud.oracle.com) (free, requires credit card for verification)
2. Go to **Compute → Instances → Create Instance**
3. Choose:
   - **Image**: Ubuntu 22.04 (Minimal)
   - **Shape**: `VM.Standard.A1.Flex` (ARM/Ampere) – **1 OCPU, 6 GB RAM** (free)
   - This is much better than AMD micro (1GB RAM) – still counts as 1 OCPU
4. Under **Networking**: Allow public IP
5. Download your SSH key

### Open Ports in Oracle's Security List

Oracle Cloud blocks ports at the network level. You MUST open them:

1. Go to **Networking → Virtual Cloud Networks → your VCN**
2. Click **Security Lists → Default Security List**
3. Add **Ingress Rules**:
   - TCP, port **80**, source `0.0.0.0/0`
   - TCP, port **443**, source `0.0.0.0/0`

### Connect and Deploy

```bash
# SSH into your server
ssh -i your-key.pem ubuntu@YOUR_SERVER_IP

# Clone or upload your project
git clone https://github.com/youruser/gaming-site.git
# OR: scp -r gaming-site/ ubuntu@YOUR_SERVER_IP:/home/ubuntu/

# Run the setup script
cd gaming-site
sudo bash setup.sh your-domain.com
```

The script automatically:
- Installs Node.js 20, Nginx, PM2, Certbot
- Configures SSL with Let's Encrypt
- Opens firewall ports
- Starts the app with PM2 (auto-restarts on reboot)
- Fixes Oracle Cloud's iptables blocking

---

## STEP 4 – Google AdSense

1. Apply at [adsense.google.com](https://adsense.google.com)
   - Your site needs real content and some traffic to get approved
   - Having educational-sounding content helps approval
2. Once approved, get your **Publisher ID** (`ca-pub-XXXXXXXXXXXXXXXX`)
3. Search all HTML files for `ca-pub-XXXXXXXXXXXXXXXX` and replace with yours
4. Also replace `data-ad-slot="XXXXXXXXXX"` with your actual ad slot IDs
5. Create ad units in AdSense dashboard:
   - **Horizontal banner** (728×90) – used in proxy banner and game modal
   - **Responsive display** – used in sidebar and page banners
6. Add `ads.txt` to your public folder:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```

> AdSense ads show as empty boxes until your account is approved.
> The site still works fine without them.

---

## STEP 5 – Ultraviolet Proxy Configuration

After `npm install`, the UV files are in `node_modules/@titaniumnetwork-dev/ultraviolet-static/dist/`.
The server.js automatically serves them at `/uv/`.

To configure UV, edit `public/uv/uv.config.js` (auto-created by the UV package):

```javascript
self.__uv$config = {
  prefix: "/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
```

The proxy page (`/proxy`) has the **always-on banner ad** at the top.
All games open through the proxy, so GoGuardian only sees traffic to YOUR domain.

---

## STEP 6 – Adding / Removing Games

Edit `public/js/games-data.js`. Each game entry:

```javascript
{
  id: 'my-game',          // unique slug
  name: 'My Game',        // display name
  category: 'arcade',     // see categories below
  featured: true,         // shows in Featured section (optional)
  img: 'https://...',     // thumbnail URL
  url: 'https://...',     // game URL (opened via proxy)
  color: '#1a1a2a',       // fallback card color if image fails
}
```

**Categories:** `shooting`, `io`, `platformer`, `sports`, `racing`, `puzzle`,
`arcade`, `strategy`, `runner`, `rhythm`, `multiplayer`

---

## Settings / Cloaking Features

Users can access Settings (gear icon) to configure:

| Feature | Description |
|---------|-------------|
| **Panic Key** | Press Escape (or F1/F2) to instantly redirect to Google Classroom |
| **Panic URL** | Where the panic key redirects (default: Google Classroom) |
| **Tab Title** | Change the browser tab text to look like a school app |
| **Tab Favicon** | Change the tab icon to look like Google Docs/Classroom/Drive |

These are saved to `localStorage` and persist between sessions.

---

## Performance on 1 OCPU

The ARM A1 with 1 OCPU + 6GB RAM can comfortably handle:
- ~50–100 concurrent users
- All static assets served by Nginx (not Node.js)
- Node.js only handles the proxy (bare server) and routes

If you need more capacity, Oracle's free tier allows up to **4 OCPU + 24GB RAM**
on A1 Flex (still free). Just change the shape to 2 or 4 OCPUs.

**To scale up:**
```bash
pm2 start server.js -i max  # Uses all available CPU cores
```

---

## Maintenance

```bash
# View live logs
pm2 logs gaming-site

# Restart after code changes
cd /opt/gaming-site && git pull && pm2 restart gaming-site

# Check SSL renewal (auto via cron)
certbot renew --dry-run

# Monitor resource usage
htop
```
