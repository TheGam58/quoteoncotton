# Fix "Page Not Found" Error on Netlify

## The Problem
When you visit your Netlify site, you see "Page not found" or 404 errors when navigating to routes like `/explore`, `/custom-prints`, etc.

## Why This Happens
React Router uses client-side routing. When you visit `/explore`, Netlify looks for a file at that path, but it doesn't exist - React Router handles it on the client side.

## Solution 1: Configure Redirects in Netlify Dashboard (Easiest)

1. **Go to your Netlify site dashboard:**
   - Visit: https://app.netlify.com
   - Click on your "quoteoncotton" site

2. **Go to Site settings:**
   - Click "Site settings" in the top menu
   - Scroll down to "Build & deploy"
   - Click "Build settings"

3. **Add Redirect Rule:**
   - Scroll to "Redirects and rewrites"
   - Click "Add redirect rule"
   - **From:** `/*`
   - **To:** `/index.html`
   - **Status:** `200` (not 301 or 302!)
   - Click "Save"

4. **Redeploy:**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Clear cache and deploy site"

## Solution 2: Use netlify.toml (Already Added)

The `netlify.toml` file is already in your repository with the correct redirect rule. Make sure it's being used:

1. **Check if netlify.toml is in root:**
   - It should be at: `C:\F Drive\Website\netlify.toml`

2. **Redeploy:**
   - Go to Netlify dashboard
   - "Deploys" → "Trigger deploy" → "Clear cache and deploy site"

## Solution 3: Use _redirects File (Backup)

A `_redirects` file has been created in the `public` folder. This will be copied to `dist` during build.

1. **Verify it exists:**
   - Check: `public/_redirects`
   - Should contain: `/*    /index.html   200`

2. **Rebuild and redeploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Add _redirects file for Netlify"
   git push origin master
   ```

## Quick Fix Steps

### Option A: Netlify Dashboard (Fastest)
1. Netlify Dashboard → Your Site → Site settings
2. Build & deploy → Redirects and rewrites
3. Add: `/*` → `/index.html` with status `200`
4. Save and redeploy

### Option B: Push Updated Files
```bash
cd "C:\F Drive\Website"
git add .
git commit -m "Fix Netlify routing with _redirects file"
git push origin master
```
Then trigger a new deploy in Netlify.

## Verify It's Working

After applying the fix:
1. Visit: https://quoteoncotton.netlify.app
2. Should load the home page
3. Navigate to: https://quoteoncotton.netlify.app/explore
4. Should work (not show 404)

## Common Issues

### Still seeing 404?
- Clear browser cache (Ctrl+Shift+R)
- Check Netlify build logs for errors
- Verify redirect rule is `200` (not 301/302)
- Make sure `netlify.toml` is in repository root

### Build failing?
- Check Netlify build logs
- Verify `npm run build` works locally
- Check Node version in Netlify settings

## Test Locally

Before deploying, test the build:
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 and test all routes.
