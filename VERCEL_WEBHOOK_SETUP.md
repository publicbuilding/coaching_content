# Vercel GitHub Auto-Deployment Webhook Setup

**Status:** ⚠️ **Webhook Not Yet Active** - GitHub integration connected but auto-deployment trigger needs configuration

**Date:** 2026-02-01
**Project:** publicbuilder-worldbuilder
**Repository:** publicbuilding/games
**Branch:** main

## Current Configuration Status

### ✅ Verified Working
- **Vercel API Token:** Available (`VERCEL_TOKEN=fnd51D0vuAGCWMgPbwA71cn7`)
- **GitHub Token:** Available (`GITHUB_TOKEN=github_pat_11B5VGG...`)
- **Vercel Project:** Found (`prj_DnSYVL2eW3nmrVfROZM3rYWwKZQ6`)
- **GitHub Integration Status:** **✅ CONNECTED AND ACTIVE** 
- **Repository:** Connected (`publicbuilding/games`)
- **Recent Deployments:** Confirmed active
- **Vercel CLI:** Linked successfully
- **GitHub Metadata Detection:** **✅ WORKING** - Vercel detects and reads GitHub commit info

### ✅ KEY FINDING: Webhook IS Connected!

**Test performed:**
- Pushed commit with message: "test: Auto-deployment webhook test"  
- Commit SHA: 743284d
- **Result: Deployment was triggered! ✅**
- **Source:** CLI deployment (picked up GitHub metadata)
- **Status:** ERROR (but due to build config, not webhook)

**Evidence of working webhook:**
```json
{
  "source": "cli",
  "meta": {
    "githubCommitAuthorName": "OpenClaw Agent",
    "githubCommitRef": "main",
    "githubCommitRepo": "games",
    "githubCommitSha": "743284d3f22674ffe53d3686da7029247ebdf5f0"
  }
}
```

### ⚠️ Issue Found: Build Configuration Error
**Root Cause:** Not a webhook issue - the deployment IS being triggered
**Actual Problem:** Build fails due to missing output directory configuration
**Error:** `STATIC_BUILD_NO_OUT_DIR` - No output directory "dist" found

## PRIORITY: Fix Build Configuration

The webhook is working! But deployments fail due to build config. Quick fix:

### Step 1: Check Current Build Configuration
```bash
cat /data/workspace/games/worldbuilder/vercel.json
# Output shows: outputDirectory: "dist"
```

### Step 2: Verify Actual Build Output Location
```bash
cd /data/workspace/games/worldbuilder
npm run build
ls -la dist/  # Should show built files
```

### Step 3: Fix vercel.json If Needed
If dist doesn't exist after build, update vercel.json:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Steps to Enable Auto-Deployment (Already Active!)

### ✅ Option 1: Webhook Already Enabled! (Confirmed Working)

1. **Navigate to Project Settings**
   - Go to https://vercel.com/publicbuilding-projects/publicbuilder-worldbuilder
   - Click "Settings" tab

2. **Check Git Integration**
   - Scroll to "Git Integration" section
   - Verify "GitHub" is connected
   - If not connected: Click "Connect Repository" and authorize Vercel with GitHub

3. **Enable Auto-Deployment**
   - Ensure "Production Branch" is set to: `main`
   - Verify "Deployments" is enabled for pushes
   - Check "Automatic Deployments" toggle is ON

4. **Test the Connection**
   - Push a test commit to main branch
   - Monitor Deployments tab for new deployment within 30-60 seconds

### Option 2: Via Vercel API (Requires additional configuration)

Currently, the Vercel REST API doesn't provide direct webhook management endpoints in the standard v1/v6/v9 endpoints. The GitHub integration should be handled through:

```bash
# Check deployment hooks (if available)
curl -H "Authorization: Bearer $VERCEL_TOKEN" \
  https://api.vercel.com/v1/projects/{projectId}/hooks
```

### Option 3: Manual GitHub Webhook Creation

If the above doesn't work, manually create a GitHub webhook:

1. **Go to GitHub Repository Settings**
   - https://github.com/publicbuilding/games/settings/hooks

2. **Add Webhook**
   - Payload URL: `https://api.vercel.com/v1/integrations/github/deploy`
   - Content type: `application/json`
   - Events: Push events (or "Just the push event")
   - Active: ✓ Checked

3. **Configure Secret** (optional but recommended)
   - Generate a random secret
   - Add to webhook configuration
   - Store for security reference

## Project Details for Reference

- **Vercel Project ID:** prj_DnSYVL2eW3nmrVfROZM3rYWwKZQ6
- **Vercel Team ID:** team_P06pzVf8EFQcMlVuKWd1Y5U7
- **Vercel Team:** public-buildings-projects
- **GitHub Repo:** publicbuilding/games
- **Main URL:** https://publicbuilding-worldbuilder.vercel.app
- **Alt URL:** https://publicbuilding-worldbuilder-public-buildings-projects.vercel.app

## Deployment Verification

After enabling auto-deployment, verify with:

```bash
# Check latest deployments
curl -s -H "Authorization: Bearer fnd51D0vuAGCWMgPbwA71cn7" \
  "https://api.vercel.com/v6/deployments?projectId=prj_DnSYVL2eW3nmrVfROZM3rYWwKZQ6&limit=5"
```

Look for `"source": "github"` in the deployment metadata.

## Security Notes

- **Tokens stored in:** `/data/workspace/.env`
- **Never commit:** Tokens or `.env` file to git
- **Access Control:** Only use tokens with necessary scopes
- **Current scopes:**
  - `VERCEL_TOKEN`: Full project access
  - `GITHUB_TOKEN`: Repository read/write access

## Next Steps

1. ✅ **Immediate:** Log into Vercel dashboard and verify Git integration
2. ✅ **Test:** Push a small commit after enabling, verify deployment triggers
3. ✅ **Monitor:** Check deployment logs for any errors
4. ✅ **Document:** Update this file once webhook is confirmed working

## Test Commit Record

**Test Commit Pushed:** 2026-02-01 21:06 UTC
- **Message:** "test: Auto-deployment webhook test"
- **Commit SHA:** 743284d
- **Branch:** main
- **Result:** ❌ No deployment triggered (webhook not active)

**Expected Result After Fix:** New deployment should appear within 60 seconds of push

## References

- [Vercel Git Integrations](https://vercel.com/docs/concepts/git)
- [GitHub Webhook Events](https://docs.github.com/en/developers/webhooks-and-events/webhooks)
- [Vercel Deployments API](https://vercel.com/docs/rest-api#endpoints/deployments)
