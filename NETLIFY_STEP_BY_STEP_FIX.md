# Step-by-Step: Fix "Page Not Found" on Netlify

## Method 1: Netlify Dashboard - Detailed Steps

### Step 1: Access Your Site Settings
1. Go to: https://app.netlify.com
2. You should see your "quoteoncotton" site card
3. **Click on the site name** (not the URL, click on "quoteoncotton")

### Step 2: Find Site Settings
Once you're on your site dashboard, look for:
- **Top menu bar** - You'll see tabs like: "Overview", "Deploys", "Functions", etc.
- **Click on "Site settings"** - This is usually in the top right area or in a dropdown menu
- If you don't see it, look for a **gear icon** ⚙️ or **settings icon**

### Step 3: Navigate to Redirects
In Site settings:
1. Look for **"Build & deploy"** in the left sidebar menu
2. Click on **"Build & deploy"**
3. Scroll down to find **"Redirects and rewrites"** section
4. Click on **"Redirects and rewrites"**

### Step 4: Add Redirect Rule
1. Click **"Add redirect rule"** or **"New rule"** button
2. Fill in:
   - **Rule:** `/*`
   - **To:** `/index.html`
   - **Status code:** Select `200` from dropdown (NOT 301 or 302!)
3. Click **"Save"** or **"Add rule"**

### Step 5: Redeploy
1. Go back to your site dashboard (click "quoteoncotton" in breadcrumb)
2. Click on **"Deploys"** tab
3. Click **"Trigger deploy"** button (usually top right)
4. Select **"Clear cache and deploy site"**
5. Wait 2-3 minutes

---

## Method 2: Alternative - Use _redirects File (Already Added)

The `_redirects` file has been added to your `public` folder. Let's verify it's working:

### Check if file exists:
```bash
# The file should be at: public/_redirects
# It should contain: /*    /index.html   200
```

### Rebuild and push:
```bash
cd "C:\F Drive\Website"
npm run build
git add .
git commit -m "Ensure _redirects is included in build"
git push origin master
```

---

## Method 3: Manual Redirect File Creation

If the above doesn't work, create the redirect file manually in Netlify:

1. Go to Netlify Dashboard → Your Site
2. Go to **"Files"** tab (if available)
3. Or go to **"Deploys"** → Click on latest deploy
4. Look for **"Published files"** or **"Deploy log"**
5. Check if `_redirects` file exists in the `dist` folder

---

## Method 4: Use Netlify CLI (Command Line)

If dashboard is confusing, use command line:

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login
netlify login

# Go to your project
cd "C:\F Drive\Website"

# Link to your site
netlify link

# Add redirect rule
netlify redirects:add "/*" "/index.html" 200

# Deploy
netlify deploy --prod
```

---

## Quick Checklist

- [ ] Found "Site settings" in Netlify dashboard
- [ ] Found "Build & deploy" section
- [ ] Found "Redirects and rewrites"
- [ ] Added rule: `/*` → `/index.html` with status `200`
- [ ] Saved the rule
- [ ] Triggered new deploy
- [ ] Waited for deployment to complete
- [ ] Cleared browser cache (Ctrl+Shift+R)
- [ ] Tested the site

---

## Still Can't Find It?

### Alternative Navigation:
1. **Direct URL to redirects:**
   - Go to: `https://app.netlify.com/sites/quoteoncotton/configuration/redirects`
   - (Replace "quoteoncotton" with your actual site name if different)

2. **Look for these menu items:**
   - Configuration → Redirects
   - Settings → Build & deploy → Redirects
   - Site configuration → Redirects

3. **Search in Netlify:**
   - Use the search bar at the top
   - Type: "redirects"

---

## Verify Build Output

Let's make sure the _redirects file is being copied:

```bash
cd "C:\F Drive\Website"
npm run build
# Check if dist/_redirects exists
dir dist\_redirects
```

If it doesn't exist, the public folder might not be configured correctly.

---

## Contact Netlify Support

If nothing works:
1. Go to: https://www.netlify.com/support/
2. Click "Get help"
3. Explain: "React Router SPA showing 404, need redirect rule"

---

## Test Your Site

After applying fix:
- Home: https://quoteoncotton.netlify.app
- Explore: https://quoteoncotton.netlify.app/explore
- Custom Prints: https://quoteoncotton.netlify.app/custom-prints

All should work without 404 errors.
