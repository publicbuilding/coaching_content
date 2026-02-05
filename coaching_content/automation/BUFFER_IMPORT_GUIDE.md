# Buffer CSV Import Guide

## Overview
Buffer allows bulk scheduling of social media posts via CSV upload. This guide walks you through importing the Executive Forge social scheduler files.

## Prerequisites
- **Buffer account** (any paid plan supports CSV import)
- **CSV files** from `/automation/`:
  - `social-scheduler-TWITTER.csv`
  - `social-scheduler-LINKEDIN.csv`
  - `social-scheduler-INSTAGRAM.csv`
  - `social-scheduler-TIKTOK.csv`

---

## Step-by-Step Import Process

### 1. Log Into Buffer
- Go to: **https://buffer.com**
- Sign in with your credentials
- You should land on the **Dashboard**

### 2. Access Bulk Scheduling
- Click **Create** (top left menu)
- Select **Bulk Composer**
  - *(Alternative: Some versions call this "Import Posts")*
- You'll see a new interface with import options

### 3. Select Your Platform
- Buffer imports one platform at a time
- Start with **Twitter**
- Click **Select a Channel** → Choose your Twitter account

### 4. Import the CSV
- Click **Choose File** or **Upload CSV**
- Navigate to `/automation/social-scheduler-TWITTER.csv`
- Select and confirm upload
- Buffer will preview the posts before importing

### 5. Review Column Mapping
Buffer will show the columns it detected:

| Buffer Column | Our CSV Column | Status |
|---|---|---|
| **Content** | `content` | ✅ Auto-mapped |
| **Publish Date** | `scheduled_time` | ✅ Auto-mapped |
| **Images** | `image_link` | ✅ Auto-mapped |
| **Hashtags** | `hashtags` | ✅ Auto-mapped (optional) |
| **Notes** | `notes` | ℹ️ Buffer treats as internal notes |

**⚠️ IMPORTANT:** 
- **Timestamp format:** Our CSVs use `YYYY-MM-DD HH:MM:SS` (e.g., `2026-02-05 08:00:00`)
- If Buffer doesn't recognize timestamps, set them manually or use Buffer's time picker
- **Timezone:** Set to **UTC** to match our scheduled times

### 6. Set Timezone
- Before confirming, Buffer will ask: **"What timezone?"**
- Select: **UTC** (all our times are in UTC)
- This ensures posts go out at the exact times we planned

### 7. Review & Confirm
- Buffer shows a preview of all posts
- Verify:
  - ✅ Correct number of posts (Twitter: 47)
  - ✅ Correct timestamps
  - ✅ Images loading properly
  - ✅ Hashtags included
- Click **Schedule All Posts** or **Import**

### 8. Posts Added to Queue
- Posts are now in Buffer's **Pending Queue**
- They'll post automatically at their scheduled times
- You can edit, reschedule, or delete any post from the queue

---

## Repeat for Other Platforms

Repeat steps 1-8 for:
- **LinkedIn** (use `social-scheduler-LINKEDIN.csv`)
- **Instagram** (use `social-scheduler-INSTAGRAM.csv`)
- **TikTok** (use `social-scheduler-TIKTOK.csv`)

---

## Troubleshooting

### "Timestamp not recognized"
- **Issue:** Buffer can't parse the date format
- **Solution:** 
  - Try re-uploading the CSV
  - Or manually set publish times in Buffer's UI
  - Ensure timezone is set to UTC

### "Images not loading"
- **Issue:** Image URLs are broken or unreachable
- **Solution:**
  - Replace `https://example.com/img/...` with actual image URLs
  - Before importing, ensure images are uploaded and accessible
  - Test one URL to confirm it works

### "Hashtags stripped or duplicated"
- **Issue:** Buffer processes hashtags differently per platform
- **Solution:**
  - For Twitter/Instagram: Include hashtags in the CSV content column (we did this)
  - For LinkedIn: Some hashtags may need formatting adjustments
  - Verify post preview before scheduling

### "Too many posts at same time"
- **Issue:** Multiple posts scheduled for the same timestamp
- **Solution:**
  - Buffer will queue them if multiple posts hit simultaneously
  - Or manually stagger times by 5-10 minutes to avoid overwhelming feeds

### CSV Upload Button Not Appearing
- **Issue:** Your Buffer plan doesn't support CSV import
- **Solution:**
  - **Minimum plan required:** Buffer Team or higher
  - **Alternative:** Use manual upload or contact Buffer support
  - **Free workaround:** Export from another tool and re-import

---

## Advanced Options

### 1. Auto-Repeat Posts
- After import, click any post
- Enable **"Requeue this post"** to repeat it regularly
- Useful for evergreen content (e.g., "Read the newsletter every Thursday")

### 2. Pin Important Posts
- Posts can be pinned to **Favorites** for easy reference
- Useful for tracking high-performing content

### 3. Reschedule Bulk Posts
- Select multiple posts from queue
- Click **Reschedule**
- Shift times (e.g., push all back 1 hour if timezone changes)

### 4. Monitor Performance
- Buffer tracks:
  - **Impressions**
  - **Engagement rate**
  - **Clicks**
  - **Shares/retweets**
- Use this to identify which posts perform best
- Repurpose high-performing content angles

---

## Post-Import Workflow

### Week 1-2: Monitor & Adjust
- **Monitor first 5-10 posts** before they auto-publish
- **Check comments/replies** in real-time
- **Adjust future posts** based on early engagement

### Week 2-4: Engagement Check
- Review Buffer Analytics dashboard
- Identify top-performing posts
- Note which angles resonate most

### Week 4+: Optimization
- Requeue best-performing posts
- Adjust hashtags/timing for underperformers
- Add new variations based on what works

---

## CSV Format Reference

Our CSV columns:
```
platform,content,image_link,hashtags,scheduled_time,notes
Twitter,"Post text here",https://img.url,#Hashtags #Tags,2026-02-05 08:00:00,"Internal note"
```

**Column descriptions:**
- **platform:** Social platform (Twitter, LinkedIn, Instagram, TikTok)
- **content:** The actual post text (what your audience sees)
- **image_link:** URL to image/video (leave blank if no image)
- **hashtags:** Space-separated hashtags (included in content for Twitter/Instagram)
- **scheduled_time:** Publishing timestamp in UTC
- **notes:** Internal notes (not visible to audience)

---

## Exporting Post Performance

Once posts have been published, you can export performance data:

1. Click **Analytics** (top menu)
2. Select date range
3. Click **Export**
4. Choose **CSV format**
5. Download and analyze in Excel/Sheets

This helps you understand:
- Which content themes perform best
- Which posting times get most engagement
- Which platforms drive most traffic

---

## Best Practices

✅ **DO:**
- Import one platform at a time
- Review previews before confirming
- Set timezone correctly (UTC)
- Monitor first week of posts
- Test images before bulk upload
- Save this guide for reference

❌ **DON'T:**
- Import all platforms at once (harder to troubleshoot)
- Miss the timezone setting (posts may go out at wrong times)
- Ignore broken image URLs
- Schedule same content across platforms without variation (should match platform norms)
- Upload images with the wrong dimensions (see platform specs below)

---

## Image Dimensions by Platform

### Twitter
- **Optimal:** 1200 x 675 px (16:9 ratio)
- **Min:** 300 x 157 px
- **Max file size:** 5 MB
- **Format:** JPG, PNG, GIF

### Instagram
- **Optimal:** 1080 x 1350 px (portrait)
- **Or:** 1200 x 628 px (landscape)
- **Min:** 600 x 600 px
- **Max file size:** 8 MB
- **Format:** JPG, PNG

### LinkedIn
- **Optimal:** 1200 x 628 px (16:9 ratio)
- **Min:** 400 x 210 px
- **Max file size:** 10 MB
- **Format:** JPG, PNG, GIF

### TikTok
- **Optimal:** 1080 x 1920 px (9:16 vertical)
- **Max file size:** 287.6 MB
- **Format:** MP4, MOV (videos preferred)
- **Note:** TikTok accepts video links, not just images

---

## Support & Resources

- **Buffer Help:** https://support.buffer.com
- **CSV Import Troubleshooting:** https://support.buffer.com/hc/en-us/articles/CSV-Import
- **Platform Requirements:** https://buffer.com/help/article/upload-your-posting-calendar

---

**Questions?** This guide covers standard import. If you hit unique issues, Buffer's support is responsive. Tag them in your account settings.
