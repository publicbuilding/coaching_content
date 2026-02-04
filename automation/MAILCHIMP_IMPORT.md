# Mailchimp Import Guide

How to set up email sequences and automation in Mailchimp.

---

## OVERVIEW

Mailchimp's automation is powerful but requires more setup than ConvertKit. Key strengths:

- **Customer Journey Builder:** Multi-step automations with visual workflow
- **Segmentation:** Advanced audience filtering and tagging
- **Free tier:** Up to 500 contacts
- **API integrations:** Connect with Gumroad, custom tools

Key limitations:

- **Steeper learning curve:** More complex UI than ConvertKit
- **Automation timing:** Limited compared to specialist tools
- **Paid features:** Advanced features require higher tier

---

## SETUP CHECKLIST

- [ ] Create Mailchimp account
- [ ] Import subscriber list (or start fresh)
- [ ] Create audience (list)
- [ ] Set up email address and branding
- [ ] Create welcome automation
- [ ] Create post-purchase automation
- [ ] Create weekly broadcast schedule
- [ ] Set up promotions
- [ ] Test all flows
- [ ] Launch

---

## FOUNDATION: AUDIENCE & TAGS

### Create Main Audience:

1. Go to: Audience > Manage Contacts
2. Click: Create Audience
3. Name: "Main Newsletter"
4. Default from email: your@email.com
5. Default from name: [Your Name]
6. Save

### Create Tags (for segmentation):

1. Go to: Audience > Manage Contacts
2. In the Contacts list, look for "Tags" column
3. Create these tags:
   - `welcome-signup` (new subscriber)
   - `customer-purchase` (purchased product)
   - `weekly-nurture` (wants weekly emails)
   - `high-engagement` (opened/clicked recently)
   - `inactive` (no opens in 30 days)
   - `paid-tier` (subscribed to paid content)

### Create Customer Journey Tags:

Additional tags for automation tracking:
   - `welcome-email-1-sent`
   - `welcome-email-5-opened`
   - `post-purchase-email-1-sent`
   - `customer-upsold`

---

## WELCOME SEQUENCE (5 Emails)

### In Mailchimp (Using Customer Journey Builder):

1. **Go to:** Automations > Customer Journey
2. **Click:** Create Journey
3. **Name:** "Welcome Sequence"

4. **Set trigger:**
   - Trigger type: "Audience subscribed"
   - Or: "Tag added" = `welcome-signup`

5. **Build journey (5 emails):**

   ```
   START (Audience subscribed)
     ↓
   [WAIT] 0 minutes
     ↓
   EMAIL 1: "Your Executive's First 90 Days guide (it's ready)"
     ↓
   [WAIT] 1 day
     ↓
   EMAIL 2: "The 27-page framework founders don't talk about"
     ↓
   [WAIT] 1 day
     ↓
   EMAIL 3: "How one startup founder fixed her culture problem in 11 days"
     ↓
   [WAIT] 1 day
     ↓
   EMAIL 4: "One thing from the guide will probably save you 40+ hours"
     ↓
   [WAIT] 2 days
     ↓
   EMAIL 5: "Heads up: The pricing changes on [DATE]"
     ↓
   [REMOVE TAG] welcome-signup
   [ADD TAG] welcome-complete
   END
   ```

### Create Each Email:

1. In journey, click "Add email"
2. Choose: "Create new email"
3. **Email 1 Details:**
   - Subject: Your Executive's First 90 Days guide (it's ready)
   - From: [Your Name]
   - Template: Choose blank or existing template
   - Paste body from email-sequences.md
   - Add link: [Gumroad link]
   - Save draft

4. Repeat for emails 2-5 with appropriate delays

### Test Before Launch:

1. Click: "Preview"
2. Select test email address
3. Verify emails arrive at correct times
4. Check formatting and links
5. Click: "Activate" when ready

---

## POST-PURCHASE SEQUENCE (5 Emails)

### Setup Purchase Trigger (Zapier):

1. **In Zapier:**
   - Trigger: "New purchase in Gumroad"
   - Action: "Add tag in Mailchimp"
   - Add tag: `customer-purchase`

2. **In Mailchimp:**
   - Verify tag was added: Audience > Manage Contacts > Search by tag

### Create Journey:

1. **Go to:** Automations > Customer Journey
2. **Click:** Create Journey
3. **Name:** "Post-Purchase Sequence"

4. **Set trigger:**
   - Trigger type: "Tag added" = `customer-purchase`

5. **Build journey (5 emails):**

   ```
   START (Tag added: customer-purchase)
     ↓
   [WAIT] 0 minutes (5 min in real time)
     ↓
   EMAIL 1: "You're in. Here's everything you need."
     - Include: Access link, password reset
     ↓
   [WAIT] 1 day
     ↓
   EMAIL 2: "Don't read the whole thing yet. Do this first."
     ↓
   [WAIT] 2 days
     ↓
   EMAIL 3: "The #1 way people screw this up (and how to avoid it)"
     ↓
   [WAIT] 4 days
     ↓
   EMAIL 4: "What other people discovered after a week"
     ↓
   [WAIT] 7 days
     ↓
   EMAIL 5: "Ready for the next level?"
     - Include: Bundle link, Substack paid link
     ↓
   [ADD TAG] post-purchase-complete
   [REMOVE TAG] customer-purchase
   END
   ```

### Create Each Email:

- Follow same steps as welcome sequence
- Use email copy from email-sequences.md
- Add appropriate links (access, upsell)

---

## WEEKLY NURTURE SEQUENCE (4 Emails, Rotating)

### Option A: Broadcast Schedule (Manual)

**Simplest approach:** Don't use automation, just schedule broadcasts.

1. **Go to:** Campaigns > Create > Email
2. **Create 4 separate campaigns:**

   - Campaign 1: "Why fast growth kills culture (and what to do about it)"
     - Scheduled for: Tuesday, Week 1, 8:00 AM
     - To: Audience "Main Newsletter"
     - Subject, body from email-sequences.md

   - Campaign 2: "Why most strategy fails at scaling"
     - Scheduled for: Tuesday, Week 5, 8:00 AM

   - Campaign 3: "The one hire that derails growing companies"
     - Scheduled for: Tuesday, Week 9, 8:00 AM

   - Campaign 4: "How communication breaks down (and how to fix it before it kills you)"
     - Scheduled for: Tuesday, Week 13, 8:00 AM

3. **Set up repeat:**
   - After email 4, manually schedule email 1 again (week 17)
   - Or create recurring campaign rule

### Option B: Automated Rotation (Advanced)

If you want true automation:

1. **Create custom field:** `nurture-cycle` (text field)
2. **Create 4 journeys:** One for each email
3. **Route based on field:**
   - If `nurture-cycle` = "1", send email 1
   - If `nurture-cycle` = "2", send email 2
   - Etc.
4. **Update field periodically:** Rotate subscribers through values

**Note:** This is complex. Stick with Option A (manual scheduling).

---

## PROMOTION SEQUENCES (3 Campaigns)

### In Mailchimp (Using Campaigns):

1. **Promotion 1: Bundle Offer (5-day campaign)**

   - **Email 1 (Day 1):** "30% off all my playbooks (this week only)"
     - Go to: Campaigns > Create > Email
     - Recipient: Main Newsletter
     - Subject: 30% off all my playbooks (this week only)
     - Paste body from email-sequences.md
     - Add link: [Gumroad bundle]
     - Schedule: Day 1, 10:00 AM

   - **Email 2 (Day 3):** "The bundle is still available (36 hours left)"
     - Create new campaign
     - Schedule: Day 3, 2:00 PM

   - **Email 3 (Day 5):** "Last chance: Bundle expires tonight"
     - Create new campaign
     - Schedule: Day 5, 10:00 AM

2. **Promotion 2: Seasonal (7-day campaign)**
   - Create 3 campaigns, schedule on specified dates

3. **Promotion 3: Social Proof (3-day campaign)**
   - Create 3 campaigns, schedule on specified dates

### Promotion Tips:

- **Use segments:** Only send promotions to engaged subscribers
- **Exclude recent purchasers:** Don't promote to people who just bought
- **Track clicks:** Use Mailchimp's built-in link tracking
- **Monitor unsubscribes:** If >0.5%, content may be off

---

## GUMROAD + MAILCHIMP INTEGRATION

### Using Zapier (recommended):

1. **In Zapier:**
   - Create new Zap
   - Trigger: "New purchase in Gumroad"
   - Action: "Add tag in Mailchimp"
   - Tag: `customer-purchase`

2. **Verification:**
   - Make test purchase on Gumroad
   - Check Mailchimp for tag within 5 minutes
   - Verify post-purchase sequence triggers

### Alternative: Webhook

If you're comfortable with APIs:

1. **In Gumroad:**
   - Settings > Webhooks
   - Add webhook endpoint

2. **Create webhook handler:**
   - Listen for purchase events
   - Extract customer email
   - Add tag `customer-purchase` via Mailchimp API

---

## SEGMENTATION & TARGETING

### Segments to Create:

1. **Active subscribers** (for promotions)
   - Condition: Opened email in last 30 days
   - Use for: All promotional campaigns

2. **Inactive subscribers** (for re-engagement)
   - Condition: Did NOT open in last 60 days
   - Use for: Occasional re-engagement campaigns

3. **Customers** (for post-purchase)
   - Condition: Tag = `customer-purchase`
   - Use for: Post-purchase sequence only

4. **High engagement** (for VIP treatment)
   - Condition: Clicked email in last 14 days AND opened 3+ emails
   - Use for: Early access to promotions

### How to use segments:

1. Go to: Campaigns > Create > Email
2. Choose recipient
3. Click: Select Segment
4. Choose segment (e.g., "Active subscribers")
5. Email only sends to that segment

---

## TESTING & LAUNCH

### Pre-Launch Checklist:

- [ ] All emails created with correct copy
- [ ] All links tested and working
- [ ] Gumroad integration connected
- [ ] Test subscriber added to welcome sequence
- [ ] Welcome emails arrive on correct schedule
- [ ] Test purchase triggers post-purchase sequence
- [ ] Test broadcast schedule (send 1 test email)
- [ ] Segments created and verified
- [ ] Unsubscribe and preference center working

### Test Steps:

1. **Create test subscriber:**
   - Go to: Audience > Manage Contacts
   - Add contact: test@youremail.com
   - Add tag: `welcome-signup`

2. **Wait for emails:**
   - Email 1 should arrive in ~5 minutes
   - Email 2 should arrive next day
   - Etc.

3. **Test purchase flow:**
   - Make test purchase on Gumroad
   - Verify Mailchimp receives tag within 5 minutes
   - Verify post-purchase email 1 arrives

4. **Test broadcast:**
   - Schedule test broadcast for 5 minutes from now
   - Verify it arrives
   - Check formatting

---

## ANALYTICS & METRICS

### In Mailchimp Dashboard:

1. **Campaign Performance:**
   - Open rate (target: 38-52%)
   - Click rate (target: 15-35%)
   - Unsubscribe rate (target: <0.5%)
   - Bounce rate (target: <2%)

2. **View analytics:**
   - Go to: Campaigns
   - Click on campaign name
   - View stats automatically

3. **Subscriber Engagement:**
   - Go to: Audience > Manage Contacts
   - View recent activity per subscriber
   - Identify most engaged (for VIP treatment)

### A/B Testing:

1. **Go to:** Campaigns > Create > Email
2. **Check:** "Do A/B Testing"
3. **Choose:** Subject line variation (A vs B)
4. **Select:** % to split test (usually 10-20% each variant)
5. **Let run:** Mailchimp sends winner to remaining 60-80%

### Optimization Loop:

**Weekly:**
- Review open rates
- If <40%, test new subject lines
- Review unsubscribe rate

**Bi-weekly:**
- Check click rates
- If <15%, test new CTA copy

**Monthly:**
- Review overall performance
- Identify top/bottom performers
- Adjust send times if needed

---

## ADVANCED: CONDITIONAL BRANCHING

If you want advanced logic:

### Example: Send different content based on behavior

```
EMAIL 1: "You're in."
  ↓
[WAIT] 1 day
  ↓
[CONDITION] Did subscriber click link?
  ├─ YES: Goto "Engaged path"
  │   ↓
  │   EMAIL 2A: "Here's next steps..."
  │
  └─ NO: Goto "Re-engagement path"
      ↓
      EMAIL 2B: "Did this email help?"
```

### How to set up:

1. In journey, add email
2. After email, click "Add condition"
3. Choose: "Opened email" or "Clicked email"
4. Create two branches: YES and NO
5. Add emails to each branch

---

## MAILCHIMP FEATURE COMPARISON

| Feature | Free | Standard | Pro |
|---------|------|----------|-----|
| Contacts | 500 | Unlimited | Unlimited |
| Automation journeys | 3 | Unlimited | Unlimited |
| A/B testing | No | Limited | Full |
| Advanced segmentation | Basic | Advanced | Advanced |
| API access | Yes | Yes | Yes |
| Support | Email | Email | Phone |

**Recommendation:** Start free, upgrade to Standard once you exceed 500 contacts.

---

## MAILCHIMP SETUP CHECKLIST

```
✅ Create Mailchimp account
✅ Create audience "Main Newsletter"
✅ Set default from email and name
✅ Create tags for segmentation
✅ Build welcome sequence (5 emails)
✅ Build post-purchase sequence (5 emails)
✅ Schedule weekly broadcasts (4 campaigns)
✅ Create 3 promotion campaigns (3 emails each)
✅ Set up Gumroad integration via Zapier
✅ Create segments (active, inactive, customers, VIP)
✅ Test all flows with test subscriber
✅ Verify links work
✅ Launch welcome sequence
✅ Schedule first weekly broadcast
✅ Monitor metrics weekly
✅ A/B test subject lines
✅ Optimize based on performance
```

---

## SAMPLE CALENDAR

```
Week 1:
  Mon - Set up foundation (audience, tags, segments)
  Tue - Create welcome sequence (5 emails)
  Wed - Create post-purchase sequence (5 emails)
  Thu - Create weekly broadcast schedule
  Fri - Test all flows, fix issues

Week 2:
  Mon - Create promotion campaigns
  Tue - Activate welcome sequence (live)
  Tue 8:00 AM - Send first weekly broadcast
  Fri - Monitor results, check open rates

Week 3+:
  Tue 8:00 AM - Send weekly broadcast
  Fri - Promote (bundle offer)
  Monitor, optimize, repeat
```

---

## TROUBLESHOOTING

### Issue: Emails not sending
**Solution:** Check that automation is "Active" (not paused)

### Issue: Delays not working
**Solution:** Verify timezone in Mailchimp account settings

### Issue: Gumroad tag not appearing
**Solution:** Check Zapier Zap is active, test purchase goes through

### Issue: Duplicate emails
**Solution:** Check automation rules don't overlap (only 1 trigger)

### Issue: Low open rates
**Solution:** Test new subject lines, try different send times

### Issue: Unsubscribes increasing
**Solution:** Content may be irrelevant; check email frequency

---

## NEXT STEPS

1. **Start with foundation:** Audience, tags, segments
2. **Build automations:** Welcome + post-purchase first
3. **Add broadcasts:** Weekly nurture schedule
4. **Add promotions:** Monthly/quarterly campaigns
5. **Monitor & optimize:** Track metrics, improve
6. **Scale:** Add paid tier, advanced features as needed

---

**Mailchimp Setup Complete**
