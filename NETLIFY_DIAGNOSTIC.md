# Netlify Diagnostic - Why Redirects Aren't Working

## Check These Things in Netlify Dashboard

### 1. Verify Build Settings
Go to: **Site settings → Build & deploy → Build settings**

Make sure:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (leave empty or set to root `/`)

### 2. Check Deploy Logs
Go to: **Deploys → Click on latest deploy → View build log**

Look for:
- Does it show "Building..."?
- Does it show "Published"?
- Any errors about `_redirects` or `netlify.toml`?
- Does it say "Deploy log" at the end?

### 3. Check Published Files
In the deploy log, scroll to the bottom. You should see:
```
Published directory
dist/
├── index.html
├── _redirects  ← This should be here!
├── assets/
└── ...
```

If `_redirects` is NOT in the published files, that's the problem!

### 4. Verify netlify.toml is Being Read
In the build log, look for:
- "Reading netlify.toml"
- "Redirect rules from netlify.toml"

If you don't see this, Netlify might not be reading the file.

---

## Solution: Force Add Redirect via Netlify API

If files aren't working, we can add the redirect directly via Netlify's API.

### Step 1: Get Your Site ID
1. Go to: **Site settings → General**
2. Look for **"Site information"**
3. Copy the **"Site ID"** (looks like: `abc123-def456-ghi789`)

### Step 2: Get Your Access Token
1. Go to: https://app.netlify.com/user/applications
2. Click **"New access token"**
3. Name it: "Redirect Fix"
4. Copy the token (you'll only see it once!)

### Step 3: Add Redirect via API
Use this command (replace YOUR_SITE_ID and YOUR_TOKEN):

```bash
curl -X POST "https://api.netlify.com/api/v1/sites/YOUR_SITE_ID/redirects" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"rule":"/*","to":"/index.html","status":200,"force":true}'
```

---

## Alternative: Check Netlify's Redirects Tab

Try this direct URL:
```
https://app.netlify.com/sites/quoteoncotton/configuration/redirects
```

You should see a list of redirects. If it's empty, that's the problem!

---

## Manual Fix: Add Redirect in Dashboard

1. Go to: https://app.netlify.com/sites/quoteoncotton
2. Click **"Configuration"** in the top menu (or "Site settings")
3. Click **"Redirects"** in the left sidebar
4. Click **"Add redirect rule"**
5. Enter:
   - **From:** `/*`
   - **To:** `/index.html`
   - **Status:** `200` (NOT 301!)
6. Click **"Save"**
7. Go to **"Deploys"** → **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## Verify What's Actually Deployed

### Check Deployed Files
1. Go to **Deploys** tab
2. Click on the latest deploy
3. Scroll to **"Deploy log"** section
4. Look for **"Published directory"** or **"Deploy summary"**
5. Check if `_redirects` file is listed

### Test the Redirect File
Try accessing the redirect file directly:
```
https://quoteoncotton.netlify.app/_redirects
```

If you see the redirect rule, it's deployed. If you get 404, it's not there.

---

## Common Issues

### Issue 1: netlify.toml in Wrong Location
The `netlify.toml` MUST be in the repository root (same level as `package.json`).

### Issue 2: _redirects Not in dist
The `_redirects` file MUST be in the `dist` folder after build.

### Issue 3: Build Command Wrong
If your build command is wrong, the files won't be built correctly.

### Issue 4: Publish Directory Wrong
If publish directory is wrong, Netlify won't find the files.

---

## Quick Test

After deploying, test these URLs:
- ✅ https://quoteoncotton.netlify.app (should work)
- ❌ https://quoteoncotton.netlify.app/explore (might show 404)
- ❌ https://quoteoncotton.netlify.app/custom-prints (might show 404)

If the second two show 404, the redirect isn't working.

---

## Nuclear Option: Reconnect Site

If nothing works:
1. Go to **Site settings → General**
2. Scroll to **"Danger zone"**
3. Click **"Delete site"** (don't worry, we'll reconnect)
4. Go to **"Add new site"** → **"Import from GitHub"**
5. Select your repository
6. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy

This will start fresh with all the correct settings.
