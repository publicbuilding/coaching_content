# Gumroad Payment Setup Guide - For Tomorrow

*This document is your reference for connecting payment processing to your Gumroad store.*

---

## Overview

Gumroad handles all payment processing through integrated payment partners. You don't need a separate merchant account—everything routes through Gumroad and into your bank.

**Key Info:**
- **Setup Time:** 15-30 minutes
- **Requirements:** Valid email, ID verification, bank account details
- **Fees:** 10% Gumroad fee + payment processor fee (~2.9% + $0.30 per transaction)
- **Payout:** Automatic weekly or on-demand to your bank account

---

## Payment Methods: Which One to Choose?

### Option A: Stripe (RECOMMENDED)
**Best for:** First-time sellers, fast setup, most flexible

**Pros:**
- Fastest account approval (5 min to 1 hour)
- Lower fees overall
- Broader geographic coverage
- Better currency support
- Industry standard

**Cons:**
- Requires ID verification
- May ask security questions

**Setup Time:** 5-15 minutes
**When to use:** Start here

---

### Option B: PayPal
**Best for:** If you already have PayPal business account, prefer PayPal

**Pros:**
- Easier if you already use PayPal
- No additional ID verification (if already verified with PayPal)
- Familiar interface

**Cons:**
- May take 24-48 hours for approval
- Slightly fewer payment options for customers

**Setup Time:** 5-10 minutes (once verified)
**When to use:** As backup if Stripe has issues

---

## Step-by-Step Payment Setup

### Step 1: Access Payment Settings

1. **Log into your Gumroad account**
2. **Click your avatar** (top right corner)
3. **Select "Account settings"** or **Dashboard → Settings**
4. **Click "Payout settings"** tab
   - You should see: "Connect a payout method"

---

### Step 2: Connect Stripe (Recommended)

1. **Click "Connect Stripe"** button
2. **You'll be redirected to Stripe's verification page**

#### Stripe Information Required:

**Account Holder Info:**
- Full legal name
- Email address
- Date of birth
- Country

**Business Info:**
- Business type (select: "Sole proprietor" or appropriate type)
- Website URL (optional, can be blank)
- Description of what you'll sell (e.g., "Digital courses, business coaching content")

**Bank Account Info:**
- Bank account number
- Routing number (US) or equivalent
- Account type (checking/savings)

**Identity Verification:**
- Last 4 digits of SSN (US) or equivalent ID
- Stripe may request photo ID (passport, driver's license)
- Be ready for upload

#### Stripe Approval Timeline:
- **Instant to 5 min:** Basic validation completes
- **1-24 hours:** Identity verification (may be automatic)
- **Status:** You'll get email confirmation when approved
- **Failure:** If denied, Stripe will email reason. Usually fixable (typo, ID issue, etc.)

---

### Step 3: Connect Bank Account

This may happen within Stripe's flow OR separately in Gumroad:

1. **Bank Account Details:**
   - Account number
   - Routing number
   - Account holder name (must match ID)
   - Account type

2. **Verification:**
   - Stripe sends 2 small deposits to your bank (arrives in 1-3 business days)
   - You'll see amounts in your bank statement
   - Return to Gumroad and verify amounts
   - This proves ownership of account

⚠️ **Note:** Until bank verification is complete, you can still receive payments, but payouts may be on hold.

---

### Step 4: Set Payout Preferences

1. **In Gumroad Settings → Payout Settings:**
2. **Select Payout Frequency:**
   - **Weekly** (default) - Automatic payout every Monday
   - **On-demand** - Manual payout whenever you want
   - **Monthly** - Payout once per month

3. **Set Payout Amount (optional):**
   - Minimum threshold (e.g., "only pay out when I have $100+")
   - Or receive everything immediately

4. **Save settings**

---

## Fees Breakdown

### What You Keep vs. What Gumroad Takes

**Example: Customer buys $29.99 module**

| Item | Cost |
|---|---|
| Sale price | $29.99 |
| Gumroad fee (10%) | -$3.00 |
| Stripe fee (~2.9% + $0.30) | -$1.17 |
| **You receive** | **$25.82** |
| **Effective fee rate** | **13.8%** |

### Recurring Subscription Fee
Same calculation applies to $14.99/month subscriptions:
- Gumroad: 10%
- Stripe: ~2.9% + $0.30
- **You net:** ~$12.95 per subscription per month

---

## Testing Payment Links

### BEFORE Going Live

1. **Find a test product URL:**
   - Click any product in Dashboard → copy link
   - Example: `gumroad.com/l/strategic-vision`

2. **Attempt $0 purchase:**
   - Open product link in private/incognito window
   - Click "Buy Now"
   - Scroll to payment section
   - Look for option to pay $0 (if available)
   - Complete checkout
   - Verify:
     - ✅ Payment processes
     - ✅ You get download link
     - ✅ Payment shows in Dashboard → Earnings

3. **Attempt small real purchase (optional):**
   - If you want to test real payments
   - Buy your own $29.99 product
   - Refund yourself immediately (or keep it as test data)
   - Verify refund processes

### Post-Launch Monitoring

- Check Dashboard daily for first week
- Monitor "Earnings" tab for sales
- Check customer messages for questions
- Process refunds quickly (builds trust)

---

## Creating Sharable Payment Links

### Individual Product Links

Each product automatically gets a unique link:

**Format:** `gumroad.com/l/[product-slug]`

**Examples:**
- `gumroad.com/l/strategic-vision`
- `gumroad.com/l/core-bundle`
- `gumroad.com/l/executive-coaching-monthly`

**Find links:**
1. Dashboard → Products
2. Click product
3. Copy share link (usually on product page)
4. Paste in:
   - Email campaigns
   - Website
   - Social media
   - Forums

### Storefront Link

Your full profile/storefront:
**Format:** `gumroad.com/[your-username]`

**Example:** `gumroad.com/executiveforge`

- Shows all products
- Customers can browse all offerings
- Good for general sharing

### Embed on Website

If you have a website, embed Gumroad product:

**Embed Code:**
```html
<script src="https://gumroad.com/js/gumroad.js"></script>
<a href="https://gumroad.com/l/[product-slug]" class="gumroad-button">Buy Now</a>
```

Replace `[product-slug]` with actual product slug.

---

## Troubleshooting Payment Issues

### "Payment Failed" or "Connection Error"
- Verify internet connection
- Try different browser
- Clear browser cookies
- Try mobile if on desktop (or vice versa)
- Contact Stripe support

### Stripe Account Denied
**Common Reasons:**
- SSN/ID mismatch
- Name doesn't match bank account
- Incorrect birth date
- Too many failed verification attempts
- High-risk country/industry

**Solution:**
1. Verify all info is 100% correct
2. Try again or appeal through Stripe
3. Use PayPal as backup option

### Payout Not Showing in Bank
- Takes 1-5 business days after approval
- Check spam/other bank accounts
- Verify routing number correct
- Contact Gumroad support with transaction ID

---

## Security Best Practices

### Protecting Your Account

1. **Strong Password:**
   - 16+ characters
   - Mix of upper, lower, numbers, symbols
   - Unique (don't reuse from other sites)

2. **Two-Factor Authentication (2FA):**
   - Enable in Account Settings
   - Use authenticator app (not SMS if possible)
   - Backup codes stored safely

3. **Verify Stripe Connection:**
   - Don't share payment links with strangers
   - Monitor charges in Dashboard
   - Check customer list for suspicious activity

4. **Bank Account Security:**
   - Don't share bank details outside Gumroad
   - Gumroad handles PCI compliance (you don't need to)
   - Monitor your actual bank account for unauthorized deposits

### Refund Policy

- **Gumroad default:** Customers can request refund within 30 days
- You can customize this in product settings
- Process refunds promptly (good for reputation)
- Refund goes back to customer's payment method

---

## After Payment Is Live

### Daily Checklist (First Week)

- [ ] Check Dashboard → Earnings (any sales?)
- [ ] Read incoming customer messages
- [ ] Respond to questions within 24 hours
- [ ] Verify payouts are processing
- [ ] Monitor customer refund requests (if any)

### Weekly Tasks

- [ ] Analyze which products are selling best
- [ ] Check email for Gumroad notifications
- [ ] Review customer feedback
- [ ] Plan next content/product based on demand

### Monthly Tasks

- [ ] Review earnings report
- [ ] Analyze conversion rates by product
- [ ] Plan pricing adjustments (if needed)
- [ ] Respond to customer suggestions

---

## FAQs

**Q: When do I get paid?**  
A: Weekly by default, or on-demand. Funds arrive 1-5 business days after payout.

**Q: What if a customer disputes a charge?**  
A: Gumroad/Stripe handles the dispute. You may need to provide proof that customer received product.

**Q: Can customers get a refund?**  
A: Yes, within 30 days by default. You can customize the refund window.

**Q: What happens to customer data?**  
A: Gumroad collects anonymized data. You can see buyer's email but their payment method is hidden.

**Q: Can I change prices after launch?**  
A: Yes, but existing customers won't be affected. Only new purchases use new price.

**Q: What if I want to add a new product later?**  
A: Just create it same way. It goes live immediately. Customers still pay same fees.

**Q: Can I add more payment methods later?**  
A: Yes, you can add both Stripe and PayPal if you want redundancy.

---

## Next: Marketing Your Store

Once payments are live, focus on:
1. Sharing product links with warm audience
2. Email campaigns to your list
3. Social media posts
4. Paid ads (Facebook, Google) if budget allows
5. Free lead magnet to build email list

---

**Ready for tomorrow!**

When you're set to proceed:
1. Follow Steps 1-4 above (15-30 min)
2. Run test purchases (Step 5)
3. Share links with first customers
4. Monitor earnings

Questions? Gumroad support is helpful: help@gumroad.com

