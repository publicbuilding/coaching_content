# ConvertKit Import Guide

How to set up all 17 email sequences as ConvertKit automations.

---

## SETUP CHECKLIST

### 1. Create Forms/Landing Pages
First, create the lead magnets and signup forms:

- [ ] Create "Welcome" form on ConvertKit
  - Trigger: Free signup
  - Redirect: Confirmation page
  - Tag: `welcome-signup` (you'll use this for automation)

- [ ] Create "Purchase" conversion
  - Trigger: Purchase from Gumroad (via Zapier webhook)
  - Tag: `customer-purchase`

- [ ] Create "Newsletter" form (optional, for weekly sends)
  - Trigger: Free signup
  - Redirect: Confirmation page
  - Tag: `newsletter-subscriber`

---

## WELCOME SEQUENCE (5 Emails)

### In ConvertKit:

1. **Create automation rule:**
   - Go to: Automations > Create New Rule
   - **Trigger:** Tag added = `welcome-signup`
   - **Name:** "Welcome Sequence"

2. **Add email sequence (5 emails):**

   - **Email 1 (Immediate):** "Your Executive's First 90 Days guide (it's ready)"
     - Delay: 0 minutes
     - Subject: Your Executive's First 90 Days guide (it's ready)
     - Paste full body from email-sequences.md
     - Add link: [Gumroad PDF link]
   
   - **Email 2 (Day 1):** "The 27-page framework founders don't talk about"
     - Delay: 1 day
     - Subject: The 27-page framework founders don't talk about
     - Paste full body from email-sequences.md
   
   - **Email 3 (Day 2):** "How one startup founder fixed her culture problem in 11 days"
     - Delay: 2 days
     - Subject: How one startup founder fixed her culture problem in 11 days
     - Paste full body from email-sequences.md
   
   - **Email 4 (Day 3):** "One thing from the guide will probably save you 40+ hours"
     - Delay: 3 days
     - Subject: One thing from the guide will probably save you 40+ hours
     - Paste full body from email-sequences.md
   
   - **Email 5 (Day 5):** "Heads up: The pricing changes on [DATE]"
     - Delay: 5 days
     - Subject: Heads up: The pricing changes on [DATE]
     - Paste full body from email-sequences.md
     - Add link: [Gumroad PDF link]

3. **Review email order:**
   - Verify all 5 emails are queued in order
   - Test by creating test subscriber and checking email delivery

---

## POST-PURCHASE SEQUENCE (5 Emails)

### In ConvertKit:

1. **Set up purchase webhook (requires Zapier or native integration):**
   - Go to Settings > Integrations > Zapier
   - OR use ConvertKit's native Gumroad integration if available
   - When customer purchases: Add tag `customer-purchase`

2. **Create automation rule:**
   - Go to: Automations > Create New Rule
   - **Trigger:** Tag added = `customer-purchase`
   - **Name:** "Post-Purchase Sequence"

3. **Add email sequence (5 emails):**

   - **Email 1 (Immediate):** "You're in. Here's everything you need."
     - Delay: 0 minutes (5 minutes in real time)
     - Subject: You're in. Here's everything you need.
     - Paste full body from email-sequences.md
     - Include: [Access link], [Password reset link]
   
   - **Email 2 (Day 1):** "Don't read the whole thing yet. Do this first."
     - Delay: 1 day
     - Subject: Don't read the whole thing yet. Do this first.
     - Paste full body from email-sequences.md
   
   - **Email 3 (Day 3):** "The #1 way people screw this up (and how to avoid it)"
     - Delay: 3 days
     - Subject: The #1 way people screw this up (and how to avoid it)
     - Paste full body from email-sequences.md
   
   - **Email 4 (Day 7):** "What other people discovered after a week"
     - Delay: 7 days
     - Subject: What other people discovered after a week
     - Paste full body from email-sequences.md
   
   - **Email 5 (Day 14):** "You're in. Here's everything you need."
     - Delay: 14 days
     - Subject: You're in. Here's everything you need.
     - Paste full body from email-sequences.md
     - Add links: [Bundle link], [Substack paid link]

4. **Check that purchase emails don't conflict:**
   - Make sure customers who get purchase sequence are removed from welcome sequence
   - (You may want to skip welcome sequence if they've already purchased)

---

## WEEKLY NURTURE SEQUENCE (4 Emails, Rotating)

### In ConvertKit:

1. **Create broadcast schedule (not automation):**
   - Go to: Broadcasts > Schedule New Broadcast
   - **Frequency:** Every Tuesday at 8:00 AM
   - **To:** Segment of subscribers tagged `newsletter-subscriber`

2. **Create 4 scheduled broadcasts:**

   - **Broadcast 1:** "Why fast growth kills culture (and what to do about it)"
     - Day: Tuesday, Week 1
     - Send time: 8:00 AM
     - Subject: Why fast growth kills culture (and what to do about it)
     - Paste full body from email-sequences.md
     - Include soft link to Gumroad product

   - **Broadcast 2:** "Why most strategy fails at scaling"
     - Day: Tuesday, Week 5
     - Send time: 8:00 AM
     - Subject: Why most strategy fails at scaling
     - Paste full body from email-sequences.md
     - Include soft link to Gumroad product

   - **Broadcast 3:** "The one hire that derails growing companies"
     - Day: Tuesday, Week 9
     - Send time: 8:00 AM
     - Subject: The one hire that derails growing companies
     - Paste full body from email-sequences.md
     - Include soft link to Gumroad product

   - **Broadcast 4:** "How communication breaks down (and how to fix it before it kills you)"
     - Day: Tuesday, Week 13
     - Send time: 8:00 AM
     - Subject: How communication breaks down (and how to fix it before it kills you)
     - Paste full body from email-sequences.md
     - Include soft link to Gumroad product

3. **Set up repeat cycle:**
   - After Email 4, cycle back to Email 1
   - Use ConvertKit's "repeat" feature or manually schedule next cycle

**Alternative (simpler):** Use ConvertKit's API or Zapier to automate:
- Every Tuesday, send the next email in the rotating sequence
- Creates a 4-week cycle that repeats

---

## PROMOTION SEQUENCES (3 Campaigns, 3 Emails Each)

### In ConvertKit:

**Option A: Use Broadcasts (manual, better control)**

1. **Promotion 1: Bundle Offer (5-day campaign)**

   - **Day 1 Broadcast:** "30% off all my playbooks (this week only)"
     - Time: 10:00 AM
     - Subject: 30% off all my playbooks (this week only)
     - Paste full body
     - Include: [Bundle Gumroad link]

   - **Day 3 Broadcast:** "The bundle is still available (36 hours left)"
     - Time: 2:00 PM
     - Subject: The bundle is still available (36 hours left)
     - Paste full body

   - **Day 5 Broadcast:** "Last chance: Bundle expires tonight"
     - Time: 10:00 AM
     - Subject: Last chance: Bundle expires tonight
     - Paste full body

2. **Promotion 2: Seasonal (7-day campaign)**

   - **Day 1 Broadcast:** "New year, different skillset"
     - Time: 9:00 AM
     - Subject: New year, different skillset
     - Paste full body

   - **Day 3 Broadcast:** "What people accomplished with this in 2025"
     - Time: 1:00 PM
     - Subject: What people accomplished with this in 2025
     - Paste full body

   - **Day 7 Broadcast:** "The 40% off expires tonight"
     - Time: 11:00 AM
     - Subject: The 40% off expires tonight
     - Paste full body

3. **Promotion 3: Social Proof (3-day campaign)**

   - **Day 1 Broadcast:** "300+ executives have worked through this"
     - Time: 10:00 AM
     - Subject: 300+ executives have worked through this
     - Paste full body

   - **Day 2 Broadcast:** "Here's what shifted for them"
     - Time: 3:00 PM
     - Subject: Here's what shifted for them
     - Paste full body

   - **Day 3 Broadcast:** "Quick window to join the 300"
     - Time: 9:00 AM
     - Subject: Quick window to join the 300
     - Paste full body

**Option B: Use Automations + Tags (for triggered campaigns)**

If you want to trigger promotions based on segments:

1. Create tag: `promotion-bundle-received`
2. Create automation: When tag added, send 3-email sequence with delays
3. Manually add tag to segment when you want promotion to go out

---

## INTEGRATION WITH GUMROAD

### Setup Steps:

1. **In Gumroad:**
   - Go to Settings > Email Sequences
   - Disable auto-emails (you'll handle them via ConvertKit)

2. **Connect Gumroad to ConvertKit:**
   - Use Zapier as middleman:
     - Trigger: "New Gumroad Purchase"
     - Action: "Add tag to subscriber in ConvertKit"
     - Tag: `customer-purchase`

3. **Test the integration:**
   - Make a test purchase on Gumroad
   - Verify tag appears in ConvertKit within 5 minutes
   - Verify post-purchase email sequence triggers

---

## SEGMENTATION BEST PRACTICES

### Segments to Create:

1. **newsletter-subscriber**
   - Receives: Weekly nurture emails
   - Excludes: Customers

2. **customer**
   - Receives: Post-purchase sequence
   - Tag: `customer-purchase`

3. **inactive** (optional)
   - Has not opened email in 30 days
   - Receive lower frequency

4. **engaged**
   - Opened last 3 emails
   - Receive all promotions

### How to segment in ConvertKit:

- Go to: Subscribers
- Click: Create new segment
- Choose condition (e.g., "Has tag: customer-purchase")
- Use in broadcast targeting

---

## TESTING BEFORE LAUNCH

### Checklist:

- [ ] Create test subscriber
- [ ] Add test email to `welcome-signup` tag
- [ ] Verify Email 1 arrives immediately
- [ ] Verify Email 2 arrives next day
- [ ] Verify Email 3 arrives day after
- [ ] Continue through full sequence
- [ ] Test purchase flow → post-purchase sequence
- [ ] Test broadcast scheduling (send one to yourself first)
- [ ] Verify links work (especially Gumroad links)
- [ ] Check email formatting (no broken images, clean layout)

### Common Issues:

**Issue:** Emails not sending  
**Solution:** Check automations are "active" (not paused)

**Issue:** Delays aren't working  
**Solution:** Verify timezone in ConvertKit account settings

**Issue:** Links not tracking  
**Solution:** Use ConvertKit's built-in link tracking (enabled by default)

**Issue:** Subscribers getting multiple sequences  
**Solution:** Use segments to prevent overlap; make sure tag logic is correct

---

## ANALYTICS & OPTIMIZATION

### Key Metrics to Track (ConvertKit Dashboard):

1. **Open Rate:** Target 38-52% depending on sequence
2. **Click Rate:** Target 16-35% depending on CTA
3. **Unsubscribe Rate:** Should stay <0.5%
4. **Reply Rate:** Especially for post-purchase (engagement signal)

### How to view in ConvertKit:

- Go to: Broadcasts > Select email > View analytics
- Or: Automations > Select rule > View performance

### A/B Testing:

1. Create two versions of subject line
2. ConvertKit's "Split Test" feature (if available)
3. Or manually: Send version A to 50% of list, version B to other 50%
4. Measure which wins

### Optimization Loop:

**Every 2 weeks:**
1. Review open rates
2. If <40%, test new subject lines
3. Review click rates
4. If <15%, test new CTA copy
5. Review unsubscribe rate
6. If >0.5%, content may be off-target

---

## ADVANCED: CONDITIONAL LOGIC

If you want emails to vary based on subscriber behavior:

1. **If customer hasn't opened Email 1:** Send reminder
   - Automation: Tag added = `customer-purchase`, No open on Email 1
   - Action: Send reminder email day 2

2. **If clicked link:** Add engagement tag
   - Automation: Clicked link in Email 2
   - Action: Add tag `high-engagement`

3. **If replied to email:** Add VIP tag
   - Manual: Can't automate in ConvertKit natively
   - Manual workaround: Review reply-tos, manually add tag

---

## FINAL SETUP SUMMARY

```
✅ Create forms & tags
✅ Build welcome automation (5 emails)
✅ Build post-purchase automation (5 emails)
✅ Schedule weekly broadcasts (4 emails rotating)
✅ Schedule promotions (3 campaigns, 3 emails each)
✅ Set up Gumroad integration
✅ Test full flows
✅ Launch
✅ Monitor metrics weekly
✅ Optimize based on performance
```

---

**ConvertKit Setup Complete**
