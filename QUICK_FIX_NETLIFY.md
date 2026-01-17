# QUICK FIX: Use Command Line (Easiest Method)

Since you can't find the redirect settings in the dashboard, let's use the command line instead. This is actually faster!

## Step-by-Step Command Line Fix

### Step 1: Install Netlify CLI
Open PowerShell or Command Prompt and run:
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser - just click "Authorize" to allow Netlify CLI access.

### Step 3: Go to Your Project
```bash
cd "C:\F Drive\Website"
```

### Step 4: Link to Your Site
```bash
netlify link
```
- It will ask: "How do you want to link this folder to a site?"
- Choose: **"Search by site name"** or **"Search by site URL"**
- Type: **quoteoncotton**
- Select your site from the list

### Step 5: Add Redirect Rule
```bash
netlify redirects:add "/*" "/index.html" 200
```

### Step 6: Deploy
```bash
netlify deploy --prod
```

**That's it!** Your site should now work.

---

## Alternative: Just Push the Code (Already Done!)

Actually, I've already updated your `netlify.toml` file with the correct redirect rule. 

**Just trigger a new deploy in Netlify:**
1. Go to Netlify dashboard
2. Click on "quoteoncotton" site
3. Click "Deploys" tab
4. Click "Trigger deploy" button (top right)
5. Select "Clear cache and deploy site"
6. Wait 2-3 minutes

The `netlify.toml` file should automatically apply the redirect rule!

---

## Verify It's Working

After deploying, test:
- https://quoteoncotton.netlify.app
- https://quoteoncotton.netlify.app/explore
- https://quoteoncotton.netlify.app/custom-prints

All should work without 404 errors.

---

## If Command Line Doesn't Work

Try this direct URL in your browser:
```
https://app.netlify.com/sites/quoteoncotton/configuration/redirects
```

(Replace "quoteoncotton" with your actual site name if different)

This should take you directly to the redirects page where you can add the rule.
