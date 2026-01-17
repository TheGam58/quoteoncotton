# How to Find Redirect Settings in Netlify - Visual Guide

## Exact Steps to Find Redirects in Netlify Dashboard

### Step 1: Go to Your Site
1. Visit: https://app.netlify.com
2. You'll see a card with "quoteoncotton"
3. **Click directly on the site name "quoteoncotton"** (the big text, not the URL)

### Step 2: Find Site Settings
Once inside your site dashboard, you'll see several tabs at the top:
- Overview
- Deploys  
- Functions
- Domain settings
- **Site settings** ← Click this one!

**OR** look for a **gear icon ⚙️** or **settings icon** in the top right corner

### Step 3: Navigate to Redirects
In the Site settings page, you'll see a **left sidebar menu** with:
- General
- **Build & deploy** ← Click this!
- Identity
- Functions
- Environment variables
- etc.

After clicking "Build & deploy", scroll down the page. You'll see sections like:
- Build settings
- Continuous Deployment
- Post processing
- **Redirects and rewrites** ← This is what you need!

### Step 4: Add the Redirect
Click on "Redirects and rewrites" section. You should see:
- A list of existing redirects (might be empty)
- A button that says **"Add redirect rule"** or **"New rule"** or **"+"**

Click that button and fill in:
- **Rule/From:** `/*`
- **To:** `/index.html`  
- **Status code:** Select `200` from the dropdown (make sure it's 200, not 301!)

Click **"Save"**

---

## Alternative: Direct URL Method

If you can't find it through the menu, try this direct URL:

1. Replace `quoteoncotton` with your actual site name if different
2. Go to: `https://app.netlify.com/sites/quoteoncotton/configuration/redirects`

This should take you directly to the redirects page.

---

## What If You Don't See "Build & deploy"?

### Option A: Look for "Configuration"
Some Netlify layouts have:
- Site settings → **Configuration** → Redirects

### Option B: Use Search
1. Click the search icon (magnifying glass) at the top
2. Type: "redirects"
3. Click on the result

### Option C: Check Different Tabs
Sometimes redirects are under:
- **Domain settings** tab → Redirects
- **Configuration** tab → Redirects

---

## Screenshot Locations to Look For

Look for these text/buttons in your Netlify dashboard:
- "Site settings" (usually top right)
- "Build & deploy" (left sidebar in settings)
- "Redirects and rewrites" (section in Build & deploy)
- "Add redirect rule" (button to add new rule)
- "New rule" (alternative button text)
- "+" (plus icon to add rule)

---

## Quick Test: Is the Redirect Working?

After adding the redirect, test your site:
- Home: https://quoteoncotton.netlify.app
- Should work: https://quoteoncotton.netlify.app/explore
- Should work: https://quoteoncotton.netlify.app/custom-prints

If these show 404, the redirect isn't working yet.

---

## Still Can't Find It? Use Command Line

If the dashboard is too confusing, use Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login (opens browser)
netlify login

# Go to your project
cd "C:\F Drive\Website"

# Link to your site (follow prompts)
netlify link

# Add redirect rule directly
netlify redirects:add "/*" "/index.html" 200

# Deploy
netlify deploy --prod
```

This bypasses the dashboard completely!

---

## What the Redirect Rule Should Look Like

When you add it, it should show in the list as:
```
/*    /index.html    200
```

The important part is the **200** status code - this tells Netlify to serve the file (not redirect).

---

## Need More Help?

If you're still stuck:
1. Take a screenshot of your Netlify dashboard
2. Or describe what you see when you click "Site settings"
3. I can guide you from there!
