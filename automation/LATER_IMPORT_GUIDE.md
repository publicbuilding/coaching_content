# Later.com CSV Import Guide

## Overview
Later (later.com) is a visual content scheduler with powerful calendar management. This guide walks you through importing the Executive Forge social scheduler CSVs to Later.

**Note:** Later is optimized for visual platforms (Instagram, TikTok). For Twitter/LinkedIn, Buffer is better (see BUFFER_IMPORT_GUIDE.md).

---

## Prerequisites
- **Later account** (paid plan; free tier has limited bulk features)
- **CSV files** from `/automation/`:
  - `social-scheduler-INSTAGRAM.csv` ← Best for Later
  - `social-scheduler-TIKTOK.csv` ← Good for Later
  - `social-scheduler-TWITTER.csv` ← Works but Buffer is better
  - `social-scheduler-LINKEDIN.csv` ← Works but Buffer is better

---

## Quick Recommendation
| Platform | Best Tool | Why |
|---|---|---|
| **Instagram** | Later | Visual calendar, strong optimization |
| **TikTok** | Later | Good for video scheduling |
| **Twitter** | Buffer | Better threading, real-time engagement |
| **LinkedIn** | Buffer | Professional audience, longer posts |

---

## Step-by-Step Import to Later

### 1. Log Into Later
- Go to: **https://later.com**
- Sign in with your account
- You'll see the **Calendar** dashboard

### 2. Connect Your Account
If you haven't connected Instagram/TikTok yet:
- Click **Profile icon** (top right)
- Select **Connected Accounts**
- Click **Connect Instagram** or **Connect TikTok**
- Follow OAuth authentication
- Grant Later permission to post

### 3. Access the Content Editor
- Click **Content** (left menu)
- Select **Upload Posts** or **Import**
- You'll see a file upload interface

### 4. Upload CSV File
- Click **Choose File** or **Drag & Drop**
- Navigate to `/automation/social-scheduler-INSTAGRAM.csv`
- Select and upload

### 5. Map Columns
Later will ask you to map CSV columns to their fields:

| Later Field | Our CSV Column | Action |
|---|---|---|
| **Caption** | `content` | ✅ Auto-maps |
| **Image/Video** | `image_link` | ✅ Auto-maps |
| **Hashtags** | `hashtags` | ✅ Auto-maps |
| **Schedule Date** | `scheduled_time` | ✅ Auto-maps |
| **Notes** | `notes` | ℹ️ Maps to internal notes |

**If mapping doesn't auto-detect:**
- Click each Later field
- Select the corresponding CSV column from dropdown
- Confirm mapping

### 6. Set Time Zone
- Later will ask: **"What timezone for scheduling?"**
- Select: **UTC** (to match our prepared times)
- This ensures posts publish at exact planned times

### 7. Review Import Preview
- Later shows a preview of all posts
- Verify:
  - ✅ Correct post count (Instagram: 31 posts)
  - ✅ Images loading properly
  - ✅ Captions complete and formatted
  - ✅ Timestamps are correct
- Click **Next** or **Confirm Import**

### 8. Posts Appear in Calendar
- Posts now appear in your **Content Calendar**
- They're arranged by date
- You can drag-and-drop to reschedule
- Click any post to edit before publishing

---

## Working with Later's Visual Calendar

### Viewing Your Schedule
- **Calendar View:** Click **Calendar** (top)
- See all posts by date
- Color-coded by content type
- Hover to preview post

### Bulk Actions
- Select multiple posts (checkboxes)
- **Reschedule:** Drag across calendar
- **Delete:** Select and click delete
- **Edit:** Click to open editor

### Smart Scheduling (Optional)
Later's **Smart Scheduling** tool:
1. Click **Posts** (left menu)
2. Select batch of posts
3. Click **Smart Schedule**
4. Later analyzes your audience and suggests optimal times
5. You approve before confirming

---

## Scheduling Variations by Platform

### Instagram Scheduling
Later handles Instagram well:
- **Posts:** Caption + Image
- **Stories:** Supported (if you add via their Story editor)
- **Reels:** Upload video URL, Later handles posting
- **Carousel posts:** One per row in CSV

**Special note:** Instagram requires Later's authorization. Approve when prompted.

### TikTok Scheduling
Later added TikTok support (newer feature):
- **Upload video:** Provide TikTok video URL or upload file
- **Captions:** Text posts work
- **Scheduling:** Later queues; you approve before publishing
- **Note:** TikTok requires final approval before posting (not fully automated)

### Twitter/LinkedIn via Later
Works but not optimized:
- **Twitter:** Character limit enforced automatically
- **LinkedIn:** Longer posts work fine
- **Threading:** Not supported (use Buffer instead)
- **Recommendation:** Use Buffer for these platforms

---

## Editing Posts in Later

### Quick Edit
1. Click any post in calendar
2. Click **Edit**
3. Modify:
   - Caption/content
   - Image
   - Hashtags
   - Schedule time
4. Click **Save**

### Bulk Edit
1. Select multiple posts (checkboxes)
2. Click **Bulk Edit**
3. Change common fields:
   - Add hashtags to all
   - Reschedule all
   - Update caption template
4. Click **Apply to All**

### Analytics in Caption
Later lets you add tracking:
- Click **Edit**
- Add Later's tracking link: `click.later.com/yourlink`
- This tracks clicks back to Later's dashboard

---

## Content Calendar View Tips

### Filter by Platform
- Click **Filter** (calendar top)
- Select Instagram, TikTok, etc.
- See only posts for that platform

### Search Posts
- Click **Search** (left menu)
- Find posts by keyword
- Useful for finding specific content themes

### Collaboration (Team Plans)
- If multiple people post:
  - Invite team members: **Settings** → **Team**
  - Assign approval workflows
  - Track who posted what

---

## Best Practices for Later

✅ **DO:**
- Use Later primarily for Instagram & TikTok
- Use calendar view to see big picture
- Leverage smart scheduling for optimal times
- Review image quality before importing
- Set timezone correctly (UTC)
- Monitor engagement in Later's analytics

❌ **DON'T:**
- Try to do complex threading in Later (use Buffer for Twitter threads)
- Upload low-res images (Later shows what's posting)
- Ignore hashtag recommendations (Later suggests trending tags)
- Schedule 100+ posts simultaneously without preview
- Miss the account connection step (posts won't publish without it)

---

## Image Requirements for Later

Later auto-optimizes but here are specs:

### Instagram
- **Feed posts:** 1080 x 1350 px (portrait)
- **Or landscape:** 1200 x 628 px
- **Or square:** 1080 x 1080 px
- **Format:** JPG, PNG
- **Max size:** 8 MB

### TikTok
- **Format:** MP4, MOV preferred (video)
- **Dimensions:** 1080 x 1920 px (9:16 vertical)
- **Max file:** 287.6 MB
- **Note:** Later also accepts direct TikTok video links

### Stories (if using)
- **Dimensions:** 1080 x 1920 px (9:16)
- **Format:** JPG, PNG, or MP4
- **Max size:** 8 MB

---

## Troubleshooting

### "CSV format not recognized"
- **Issue:** Later's parser can't read file
- **Solution:**
  - Ensure file is `.csv` (not `.xlsx` or `.xls`)
  - Open CSV in text editor to verify format
  - Re-save as CSV if from Excel (Data → Export → CSV)
  - Try importing smaller batch first

### "Images not uploading"
- **Issue:** Image URLs broken or Later can't access
- **Solution:**
  - Replace `https://example.com/img/...` with real image URLs
  - Ensure images are publicly accessible (not behind login)
  - Test one URL in browser before bulk import
  - For TikTok, upload video files directly instead of links

### "Hashtags being removed"
- **Issue:** Later strips some hashtags
- **Solution:**
  - Instagram has 30-hashtag limit per post (we're under)
  - Later sometimes optimizes hashtag placement
  - You can edit after import if needed
  - Add hashtags in caption instead of separate field

### "Posts not publishing"
- **Issue:** Account not connected or permission issue
- **Solution:**
  - Check **Connected Accounts** (Settings)
  - Reconnect Instagram/TikTok with fresh auth
  - Verify your account has posting permission
  - For TikTok, you may need to approve each post manually

### "Timezone off by several hours"
- **Issue:** Posts publishing at wrong time
- **Solution:**
  - Check timezone setting: **Settings** → **Time Zone**
  - Set to **UTC**
  - Re-import if already imported
  - Later doesn't auto-convert timezones; you must match

---

## Analytics in Later

After posts publish:

### View Engagement
1. Click **Analytics** (left menu)
2. Select date range
3. See:
   - **Likes** per post
   - **Comments**
   - **Saves** (Instagram metric)
   - **Shares**
   - **Reach**

### Top-Performing Content
- Filter by **Engagement**
- Identify which themes/angles work best
- Replicate high-performers

### Export Reports
- Click **Export**
- Download CSV with metrics
- Use to inform next content batch

---

## Syncing with Other Tools

Later integrates with:
- **Slack:** Get post notifications
- **Zapier:** Trigger workflows on post publish
- **Google Sheets:** Track content calendar in spreadsheet

### Setup Slack Notifications
1. **Settings** → **Integrations**
2. Click **Slack**
3. Authorize and select channel
4. Later will notify you when posts publish

---

## Advanced: Content Recycling

Later tracks post performance. Use this for recycling:

1. **Find top post** (Analytics)
2. **Edit and reschedule** it for different day/time
3. **Slightly modify caption** so it doesn't look like duplicate
4. **Use different image** or crop version
5. **Schedule again** 3-4 weeks later

This maximizes ROI on content that already works.

---

## Comparison: Later vs Buffer

| Feature | Later | Buffer |
|---|---|---|
| **Instagram** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Good |
| **TikTok** | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Good |
| **Twitter** | ⭐⭐⭐ Okay | ⭐⭐⭐⭐⭐ Excellent |
| **LinkedIn** | ⭐⭐⭐ Okay | ⭐⭐⭐⭐⭐ Excellent |
| **Visual Calendar** | ⭐⭐⭐⭐⭐ Best-in-class | ⭐⭐⭐ Good |
| **Team Features** | ⭐⭐⭐⭐ Strong | ⭐⭐⭐⭐ Strong |
| **Analytics** | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐ Good |
| **Pricing** | $25-100+/mo | $5-150+/mo |

**Recommendation:** Use **Later for Instagram/TikTok**, **Buffer for Twitter/LinkedIn**. Both tools together = perfect social stack.

---

## Support & Resources

- **Later Support:** https://www.later.com/support
- **CSV Format Help:** https://www.later.com/blog/csv-import
- **Video Tutorials:** https://www.later.com/help

---

**Ready to schedule?**
1. Prepare images (check dimensions above)
2. Start with Instagram CSV (best fit for Later)
3. Import and review in calendar
4. Test 3-5 posts before full batch
5. Monitor engagement for 2 weeks
6. Optimize based on analytics

Good luck! 🚀
