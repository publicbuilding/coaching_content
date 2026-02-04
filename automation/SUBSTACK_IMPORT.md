# Substack Import Guide

How to set up email sequences and automation in Substack.

---

## OVERVIEW

Substack's automation is simpler than ConvertKit but more limited. Key constraints:

- **No multi-step automations:** You can't set up a 5-email sequence triggered by signup
- **Broadcasts only:** Scheduling happens manually or via Substack's draft system
- **Newsletter focus:** Substack is designed for regular broadcasts to all subscribers
- **Paid tiers:** You can set up paid subscriptions but no native "post-purchase automation"

**Workaround:** Use Zapier to fill gaps, or manage some sequences manually.

---

## SETUP CHECKLIST

- [ ] Set up Substack publication
- [ ] Create free tier (default)
- [ ] Create paid tier (for premium content)
- [ ] Create Zapier account (for automations)
- [ ] Connect Gumroad + Substack via Zapier
- [ ] Schedule broadcasts
- [ ] Set up paid subscriber email flows

---

## WELCOME SEQUENCE (5 Emails)

### Option A: Manual (Simpler, No Zapier)

1. **Go to:** Posts > Draft new post
2. **Create 5 drafts with names:**
   - "Welcome 1 - Immediate"
   - "Welcome 2 - Day 1"
   - "Welcome 3 - Day 2"
   - "Welcome 4 - Day 3"
   - "Welcome 5 - Day 5"

3. **Paste email copy** from email-sequences.md into each draft

4. **Schedule publish dates:**
   - Email 1: Publish immediately to all new subscribers
   - Email 2: Draft (send manually to new signups on Day 1)
   - Email 3: Draft (send manually on Day 2)
   - Email 4: Draft (send manually on Day 3)
   - Email 5: Draft (send manually on Day 5)

**Problem:** You have to manually send emails 2-5. Not true automation.

### Option B: Automated with Zapier (Recommended)

1. **In Zapier:**
   - Create new Zap
   - Trigger: "New subscriber in Substack"
   - Action 1: Send Email 1 (delay: 0 minutes)
   - Action 2: Send Email 2 (delay: 1 day)
   - Action 3: Send Email 3 (delay: 2 days)
   - Action 4: Send Email 4 (delay: 3 days)
   - Action 5: Send Email 5 (delay: 5 days)

2. **But Zapier doesn't have "send Substack email" action**
   - Workaround: Use "Send email" via Gmail/your email provider
   - Or use Substack API + Zapier's webhook action

3. **Simpler workaround:**
   - Use ConvertKit for automation (better suited)
   - Cross-post to Substack manually or via RSS-to-email

**Recommendation:** If you're serious about automation, use ConvertKit for these sequences, then republish to Substack.

---

## POST-PURCHASE SEQUENCE (5 Emails)

### Setup:

1. **In Zapier:**
   - Trigger: New purchase in Gumroad
   - Action 1: Send Email 1 (Gmail or custom action)
   - Action 2: Send Email 2 (delay: 1 day)
   - Action 3: Send Email 3 (delay: 3 days)
   - Action 4: Send Email 4 (delay: 7 days)
   - Action 5: Send Email 5 (delay: 14 days)

2. **Alternative: Use Substack's paid tier**
   - Instead of separate post-purchase emails
   - Create a paid article series on Substack
   - Email 1: Access instructions
   - Email 2-5: Weekly deep-dives for paid subscribers
   - This integrates natively with Substack

**Recommendation:** Use Zapier to send transactional emails (confirmation, access), then redirect to Substack paid tier for content delivery.

---

## WEEKLY NURTURE SEQUENCE (4 Emails, Rotating)

### In Substack (Native Support):

1. **Create 4 blog posts** (publish as drafts first):
   - "Culture Problem" post
   - "Strategy Trap" post
   - "Hiring Mistake" post
   - "Communication Breakdown" post

2. **Schedule for publication:**
   - Week 1, Tuesday 8:00 AM: Culture post
   - Week 5, Tuesday 8:00 AM: Strategy post
   - Week 9, Tuesday 8:00 AM: Hiring post
   - Week 13, Tuesday 8:00 AM: Communication post
   - Week 17, Tuesday 8:00 AM: Culture post (repeat cycle)

3. **Substack will auto-email subscribers:**
   - When you publish, Substack automatically sends email to all free subscribers
   - No additional setup needed
   - Opens/clicks tracked automatically

4. **Optional: Create free-only tier**
   - Go to: Settings > Subscription settings
   - Make weekly emails free to all
   - Keep premium deep-dives for paid subscribers

---

## PROMOTION SEQUENCES (3 Campaigns)

### In Substack (Broadcast to all subscribers):

1. **Promotion 1: Bundle Offer (5-day campaign)**

   - **Email 1 (Day 1):** "30% off all my playbooks (this week only)"
     - Post as new post
     - Publish at 10:00 AM
     - Include Gumroad bundle link

   - **Email 2 (Day 3):** "The bundle is still available (36 hours left)"
     - Post as new post
     - Publish at 2:00 PM

   - **Email 3 (Day 5):** "Last chance: Bundle expires tonight"
     - Post as new post
     - Publish at 10:00 AM

   **Note:** You can't delay these automatically. Publish as separate posts or schedule in advance.

2. **Promotion 2: Seasonal (7-day campaign)**
   - Same approach: Create 3 separate posts, publish on specified dates

3. **Promotion 3: Social Proof (3-day campaign)**
   - Same approach: Create 3 separate posts, publish on specified dates

### Advanced: Segment promotions

If you want promotions only for paid subscribers:

1. Go to Settings > Subscription settings
2. Create a "Promotions" section
3. Post promotions in that section (only paid subscribers see them)
4. Or tag promotions with a category

---

## GUMROAD + SUBSTACK INTEGRATION

### Goal: 
When someone purchases on Gumroad, they get:
1. Transactional email with access info
2. Invitation to join Substack paid tier

### Setup with Zapier:

1. **Create Zap:**
   - Trigger: "New purchase in Gumroad"
   - Action 1: Send email via Gmail (transactional)
     - To: [Customer email]
     - Subject: "You're in. Here's everything you need."
     - Body: [Access info + Substack paid link]

2. **Create tag in Zapier:**
   - When purchase detected, tag customer as "Gumroad customer"
   - Manually add these emails to Substack list (if possible)

3. **Manual fallback:**
   - Export Gumroad customers weekly
   - Invite them to Substack paid tier via Substack's invite feature

---

## PAID TIER STRATEGY

Instead of separate post-purchase emails, use Substack's native paid tier:

### Setup:

1. Go to: Settings > Subscription settings
2. Enable paid subscriptions
3. Set price (e.g., $15/month or $150/year)

4. Create paid post series:
   - **Post 1:** "How to get the most from this" (paywalled)
   - **Post 2:** "Common mistakes" (paywalled)
   - **Post 3:** "What others discovered" (paywalled)
   - **Post 4:** "Ready for the next level?" (paywalled)

5. When someone purchases a product on Gumroad:
   - Send transactional email with Substack paid tier link
   - They subscribe to your paid tier for ongoing access
   - No complex automation needed

**Advantage:** Recurring revenue, native Substack support, clean experience

---

## BEST PRACTICES FOR SUBSTACK

### Content Structure:

1. **Free tier (default):**
   - Weekly nurture emails (Tuesdays)
   - Occasional promotional posts
   - Value-driven, builds trust

2. **Paid tier:**
   - Deep-dive content (playbooks, frameworks)
   - Access to archives
   - Q&A sessions

### Publishing Schedule:

```
Monday:   Prepare weekly email
Tuesday:  Publish nurture email (8:00 AM)
Thursday: Publish bonus/promotional content (if available)
Friday:   Schedule promotion campaigns
```

### Promotion Timing:

- **Bundle offer:** Quarterly (every 3 months)
- **Seasonal:** Q1 (New Year), back-to-school, holiday
- **Social proof:** Monthly or after hitting milestone

---

## CONVERSION FUNNEL

### Flow:

1. **Free signup:** Visitor subscribes to free tier
2. **Welcome sequence:** Automated or manual (5 emails)
3. **Nurture sequence:** Weekly content (Tuesday)
4. **Promotion campaigns:** Periodic offers (quarterly, seasonal)
5. **Paid signup:** Customers on Gumroad invited to paid tier
6. **Retention:** Ongoing content, community, updates

### Optimization:

- Track open rates on weekly emails (target: 40%+)
- Track click rates on promotions (target: 20%+)
- Track paid tier conversion (target: 5-10% of free subscribers)
- A/B test subject lines for promotions

---

## ANALYTICS & METRICS

### In Substack dashboard:

1. **Audience:** Total subscribers, growth rate
2. **Posts:** View analytics per post
   - Open rate
   - Click rate
   - Shares
3. **Subscriptions:** Paid tier signups, churn rate

### Tracking external links:

For Gumroad links:
- Use UTM parameters: `?utm_source=substack&utm_campaign=bundle-offer`
- Track clicks in Gumroad analytics
- Correlate with email campaigns in Substack

---

## LIMITATIONS & WORKAROUNDS

### Substack Limitations:

| Limitation | Workaround |
|-----------|-----------|
| No multi-step automation | Use Zapier or ConvertKit |
| No segmentation | Use paid tiers to segment |
| No conditional logic | Manual segment creation |
| No A/B testing (native) | Create variations, compare manually |
| Limited post-purchase | Use Substack paid tier instead |

### When to use each tool:

- **Substack:** Weekly broadcasts, paid content, community
- **ConvertKit:** Welcome sequences, post-purchase, complex automations
- **Zapier:** Bridge between Gumroad and Substack, transactional emails

---

## SUBSTACK SETUP CHECKLIST

```
✅ Create Substack publication
✅ Set up free tier
✅ Enable paid tier (optional)
✅ Create 4 weekly nurture posts (drafts)
✅ Create 3 promotion post series (drafts)
✅ Connect Gumroad via email (manual or Zapier)
✅ Schedule weekly posts (Tuesdays, 8:00 AM)
✅ Test email delivery
✅ Launch first post
✅ Monitor open rates weekly
✅ Invite Gumroad customers to paid tier
✅ A/B test subject lines
✅ Optimize based on metrics
```

---

## SAMPLE CALENDAR

```
Week 1:
  Tue 8:00 AM - Publish "Culture Problem" email
  
Week 2:
  Fri 10:00 AM - Publish "Bundle Promo #1"
  Fri 2:00 PM - Publish "Bundle Promo #2"
  
Week 3:
  Tue 8:00 AM - Publish "Strategy Trap" email
  Fri 10:00 AM - Publish "Bundle Promo #3" (last chance)

Week 4-5:
  Mon - Prepare next week's content
  Tue 8:00 AM - Publish "Hiring Mistake" email

And repeat...
```

---

## ADVANCED: CUSTOM DOMAIN

If you use a custom domain:

1. Go to Settings > Publication settings
2. Add custom domain (e.g., newsletter.yourdomain.com)
3. Update DNS records
4. Substack will send from your domain
5. Improves deliverability and branding

---

**Substack Setup Complete**

**Next:** If you need true automation, consider using ConvertKit for sequences + cross-posting to Substack via RSS or Zapier.
