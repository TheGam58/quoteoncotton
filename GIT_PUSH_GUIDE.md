# Git Push Guide - Manual Terminal Commands

## Current Status
✅ Your repository is already connected to: `https://github.com/TheGam58/quoteoncotton.git`
✅ All changes are committed
✅ Everything is up-to-date with remote

## If You're Getting Errors

### Common Error 1: Authentication Failed

**Error:** `fatal: Authentication failed` or `remote: Invalid username or password`

**Solution:**
1. GitHub no longer accepts passwords. You need a **Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control of private repositories)
   - Copy the token
   - When git asks for password, paste the token instead

2. Or update your remote URL to use SSH:
   ```bash
   git remote set-url origin git@github.com:TheGam58/quoteoncotton.git
   ```

### Common Error 2: Branch Diverged

**Error:** `Updates were rejected because the remote contains work that you do not have locally`

**Solution:**
```bash
# Pull and merge first
git pull origin master --no-rebase

# Then push
git push origin master
```

Or if you want to overwrite remote (use with caution):
```bash
git push origin master --force
```

### Common Error 3: Nothing to Commit

**Error:** `nothing to commit, working tree clean`

**This is normal!** It means all your changes are already committed and pushed.

## Complete Manual Push Process

If you want to push manually from scratch, follow these steps:

### Step 1: Navigate to Project
```bash
cd "C:\F Drive\Website"
```

### Step 2: Check Status
```bash
git status
```

### Step 3: Add All Changes
```bash
git add .
```
Or add specific files:
```bash
git add src/
git add package.json
git add *.md
```

### Step 4: Commit Changes
```bash
git commit -m "Your commit message here"
```

### Step 5: Check Remote
```bash
git remote -v
```

If not set, add it:
```bash
git remote add origin https://github.com/TheGam58/quoteoncotton.git
```

### Step 6: Push to GitHub
```bash
git push origin master
```

Or if pushing for the first time:
```bash
git push -u origin master
```

## Verify Your Push

After pushing, verify it worked:
```bash
# Check remote branches
git ls-remote origin

# View commit history
git log --oneline -5

# Check status
git status
```

## Quick Troubleshooting Commands

```bash
# See what's different between local and remote
git fetch origin
git log HEAD..origin/master  # Commits on remote not in local
git log origin/master..HEAD  # Commits in local not on remote

# Reset if something went wrong (use carefully!)
git reset --hard origin/master

# See all branches
git branch -a
```

## Current Repository Info

- **Remote URL:** https://github.com/TheGam58/quoteoncotton.git
- **Local Branch:** master
- **Remote Branch:** master (and main exists)
- **Status:** Up to date

Your code should be visible at: https://github.com/TheGam58/quoteoncotton
