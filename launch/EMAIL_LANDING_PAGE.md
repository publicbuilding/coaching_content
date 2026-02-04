# Email Landing Page Guide - "Executive's First 90 Days" Lead Magnet

**Timeline:** 1-2 hours | **Goal:** Capture 100-200 email signups this week | **Platforms:** Carrd.co (free) or HTML (free)

---

## 🎯 ONE-PAGE STRATEGY

This is NOT a website. It's a single goal: **Collect emails**.

- **One headline:** "Your First 90 Days as an Executive" (or similar)
- **One problem statement:** What you're solving
- **One CTA:** "Get free PDF"
- **One form:** Name + email (don't ask for anything else)

**Time on page:** 30 seconds
**Decision:** Yes (enter email) or No (leave)

That's it. No nav menu, no blog posts, no distractions.

---

## 📝 OPTION 1: CARRD.CO (Easiest, Free)

### Setup (15 minutes)

1. Go to **carrd.co**
2. Click **Start Building** → Free plan
3. Name: "Executive Forge" (or your name)
4. Choose layout: Blank or "One Page"
5. Click **Build**

### Build Your Page

**Section 1: Header + Headline**
```
Headline: "Your Executive Playbook: First 90 Days"
Subheading: "The framework that got me the job—now it's yours."
```

1. Click **+** → Add "Text" block
2. Paste headline and subheading
3. Format: Large font, bold, centered
4. Add background color (light blue or gray) for contrast

**Section 2: Problem Statement**
```
You just got the job.

First week is chaos. 50 meetings. 200 emails. Everyone with opinions. Meanwhile, your boss expects you to show value in 90 days.

You're not sure what to prioritize. You don't want to move too fast. You don't want to move too slow. You need a framework.

Here's what actually works.
```

1. Click **+** → Add "Text" block
2. Paste the problem statement
3. Format: Normal size, left-aligned, readable spacing

**Section 3: What You'll Get**
```
✅ 90-Day Roadmap
When to listen (Days 1-30), when to diagnose (Days 31-60), when to move (Days 61-90)

✅ First 30 Days Playbook
Who to meet, what to learn, how to show you understand the system

✅ Stakeholder Map
Identify who needs what from you (and who you can't afford to upset)

✅ Decision Framework
Cut through noise. Move faster. Make better calls.

✅ 90-Day Milestones
What success looks like on day 30, 60, and 90

✅ Board Presentation Template
Show your progress to leadership on day 91
```

1. Click **+** → Add "Text" block
2. Paste benefits (with checkmarks)
3. Format: Bullet list style, 2-3 columns if possible (Carrd can do this)

**Section 4: Social Proof (Optional but Recommended)**
```
"Used this framework when I took a director role at a 100-person company. Eliminated 3 legacy processes by week 6. Team velocity increased 30% by day 90."
— Sarah, Director of Ops

"The stakeholder mapping alone saved me from a major political mistake. Would have blocked my first win."
— James, VP of Engineering

"Finally someone who gets that you need to listen before you move. This is required reading for new leaders."
— Maya, Exec Coach
```

1. Click **+** → Add "Text" block
2. Paste testimonials
3. Format: Italic, indented, with name/title

**Section 5: Email Capture Form**

1. Click **+** → Choose **"Email"** (not generic form)
2. Configure:
   - **Prompt text:** "Get your free 90-day framework"
   - **Button label:** "Send me the PDF" (not generic "Submit")
   - **Redirect after signup:** Check the box
   - **Redirect URL:** [Set to thank you page or Gumroad store link]

3. Connect email service:
   - Click **Integrate** (next to Email block)
   - Choose **EmailOctopus** (free tier, works great)
   - Or choose **ConvertKit** (free tier)
   - Or choose **Mailchimp** (free tier, more basic)
   - Follow connection steps
   - Test it (sign up with a fake email, verify it captures)

4. Save

### Publish

1. Click **Publish** (top right)
2. Choose: Free domain (carrd.co/yourname) or custom domain
3. Get your link: `https://yourname.carrd.co` or custom
4. Test the page (open link, fill out form, verify email capture works)

**Cost:** Free

---

## 💻 OPTION 2: HTML (CUSTOM, Totally Free)

If you want more control or want it on your own server, use simple HTML:

### Simple HTML Template

Save this as `index.html` and upload to any free host (Vercel, GitHub Pages, Netlify):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Executive's First 90 Days - Free Framework</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .hero p {
            font-size: 1.2rem;
            opacity: 0.95;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .problem {
            background: #f5f5f5;
            padding: 30px;
            border-radius: 8px;
            margin: 30px 0;
        }
        
        .benefits {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 40px 0;
        }
        
        .benefit {
            padding: 20px;
            background: #f9f9f9;
            border-left: 4px solid #667eea;
        }
        
        .benefit strong {
            display: block;
            margin-bottom: 8px;
            color: #667eea;
        }
        
        .benefit p {
            font-size: 0.95rem;
        }
        
        .testimonials {
            margin: 40px 0;
        }
        
        .testimonial {
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #764ba2;
            font-style: italic;
            background: #fafafa;
        }
        
        .testimonial-author {
            margin-top: 10px;
            font-weight: bold;
            font-style: normal;
            color: #666;
        }
        
        .signup {
            background: #f0f0f0;
            padding: 40px;
            border-radius: 8px;
            text-align: center;
            margin: 40px 0;
        }
        
        .signup h2 {
            margin-bottom: 20px;
        }
        
        .signup-form {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }
        
        .signup-form input {
            flex: 1;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        .signup-form button {
            padding: 12px 30px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .signup-form button:hover {
            background: #764ba2;
        }
        
        .footer {
            text-align: center;
            color: #999;
            padding: 20px;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Your Executive Playbook</h1>
        <p>The 90-Day Framework That Got Me the Job</p>
    </div>
    
    <div class="container">
        <div class="problem">
            <p>You just got the job.</p>
            <p>First week is chaos. 50 meetings. 200 emails. Everyone with opinions.</p>
            <p>Meanwhile, your boss expects you to show value in 90 days.</p>
            <p>You need a framework. Here's what actually works.</p>
        </div>
        
        <h2>What You'll Get</h2>
        <div class="benefits">
            <div class="benefit">
                <strong>✅ 90-Day Roadmap</strong>
                <p>When to listen, diagnose, and move.</p>
            </div>
            <div class="benefit">
                <strong>✅ First 30 Days Playbook</strong>
                <p>Who to meet. What to learn.</p>
            </div>
            <div class="benefit">
                <strong>✅ Stakeholder Map</strong>
                <p>Navigate org politics without mistakes.</p>
            </div>
            <div class="benefit">
                <strong>✅ Decision Framework</strong>
                <p>Move faster. Make better calls.</p>
            </div>
            <div class="benefit">
                <strong>✅ 90-Day Milestones</strong>
                <p>Know what success looks like.</p>
            </div>
            <div class="benefit">
                <strong>✅ Board Presentation</strong>
                <p>Show your progress on day 91.</p>
            </div>
        </div>
        
        <div class="testimonials">
            <h2>What People Say</h2>
            
            <div class="testimonial">
                "Used this framework when I took a director role at a 100-person company. Eliminated 3 legacy processes by week 6. Team velocity increased 30% by day 90."
                <div class="testimonial-author">— Sarah, Director of Ops</div>
            </div>
            
            <div class="testimonial">
                "The stakeholder mapping alone saved me from a major political mistake. Would have completely blocked my first win."
                <div class="testimonial-author">— James, VP of Engineering</div>
            </div>
            
            <div class="testimonial">
                "Finally someone who gets that you need to listen before you move. This is required reading for new leaders."
                <div class="testimonial-author">— Maya, Executive Coach</div>
            </div>
        </div>
        
        <div class="signup">
            <h2>Get Instant Access</h2>
            <p style="margin-bottom: 20px;">PDF sent to your email. Read in 90 minutes. Apply immediately.</p>
            
            <!-- Paste your EmailOctopus/ConvertKit form here -->
            <div id="email-signup">
                <form action="YOUR_EMAIL_SERVICE_ENDPOINT" method="POST">
                    <div class="signup-form">
                        <input type="email" name="email" placeholder="your@email.com" required>
                        <button type="submit">Send Me the PDF</button>
                    </div>
                </form>
                <p style="font-size: 0.85rem; color: #999;">No spam. Just frameworks. We'll never share your email.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Executive Forge © 2026. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

### How to Deploy (Free)

**Option A: Vercel (Easiest)**
1. Save file as `index.html`
2. Go to **vercel.com**
3. Click **Import Project**
4. Upload folder with `index.html`
5. Click **Deploy**
6. Get public link (https://yourproject.vercel.app)

**Option B: GitHub Pages (Free)**
1. Create GitHub account (if you don't have one)
2. Create new repo: `yourusername.github.io`
3. Upload `index.html`
4. Page goes live at `https://yourusername.github.io`

**Option C: Netlify (Free)**
1. Go to **netlify.com**
2. Drag and drop `index.html`
3. Get public link instantly

---

## 📧 EMAIL INTEGRATION

### Connect Your Email Service

**Using EmailOctopus (Recommended, Free Tier)**

1. Go to **emailoctopus.com**
2. Sign up (free)
3. Create new email list
4. Go to **Email → Capture → HTML Forms**
5. Generate form code
6. Paste form code into your HTML page (replace "YOUR_EMAIL_SERVICE_ENDPOINT")
7. When someone signs up, they're automatically added to your list
8. You can then:
   - Send them the PDF (manually or auto-email)
   - Build email sequences
   - Segment them

**Using Carrd Email Integration:**
- Carrd handles this automatically
- Connect EmailOctopus or ConvertKit in Carrd settings
- Forms submit directly to your list
- You're done

---

## 📤 FOLLOW-UP SEQUENCE

Once someone signs up, here's your follow-up:

**Email 1 (Immediate - Auto):** Welcome + PDF Link
```
Subject: Your Executive's 90-Day Framework (inside)

Hi [name],

Here's your free framework: [PDF link]

Read it in 90 minutes. The framework is proven—I've used it in 3 roles and seen it work for a dozen executives.

**Quick next steps:**

1. Read the playbook (you'll see yourself in here)
2. Use the templates (stakeholder map, 90-day roadmap)
3. Check out the full version on Gumroad (goes way deeper)

Let me know if you have questions.

—[Your Name]
```

**Email 2 (Day 2):** Story + Social Proof
```
Subject: How this framework saved my first 90 days

Hi [name],

I wanted to tell you a story about why I built this.

Year ago, I took a director role at a company 10x bigger than anything I'd managed. First week was chaos. Second month, I started making changes too fast. Third month, I realized I'd upset people I needed.

I documented what actually worked—and reverse-engineered it from executives I respected who landed well.

This is that playbook.

The 25-page version has templates, decision matrices, and real examples. If you want to go deeper, it's here: [Gumroad link]

Otherwise, use the free framework. It's solid.

—[Your Name]
```

**Email 3 (Day 7):** Soft Offer
```
Subject: One thing I added to the playbook

Hi [name],

Since publishing the 90-day framework, executives asked about one thing: "How do I handle the political navigation?"

I added a deep section on stakeholder mapping (how to identify who needs what, and who you can't afford to upset).

If you're stepping into a new role with org politics, you need this. It's in the full version on Gumroad.

If you have questions about the free version, reply. I read every email.

—[Your Name]
```

---

## 🎯 TRAFFIC SOURCES

### Where to Drive People

1. **Twitter posts** (use templates in TWITTER_LAUNCH_POSTS.md)
   - Share the landing page link
   - Repeat 3-5 times during the week
   - Expected traffic: 100-200 clicks

2. **LinkedIn posts** (use templates in LINKEDIN_LAUNCH_POSTS.md)
   - More formal, professional angle
   - Expected traffic: 50-100 clicks

3. **Email (your existing list)**
   - If you have subscribers, email them the link
   - Expected traffic: 50-100 clicks (if you have 100+ existing people)

4. **Communities**
   - Slack communities for executives/managers
   - Reddit (r/managers, r/leadership)
   - Only share if it's genuinely helpful (don't spam)
   - Expected traffic: 20-50 clicks

5. **Facebook/Reddit ads** (optional, paid, not week 1)
   - Too slow for this week's launch
   - Good for next month

### Conversion Math

**Traffic assumptions:**
- Twitter: 200 clicks
- LinkedIn: 75 clicks
- Email: 50 clicks
- Communities: 25 clicks
- **Total: 350 clicks**

**Conversion rate:**
- Landing page → email signup: 20-30% (good page + clear offer)
- **Conservative (20%):** 350 clicks × 20% = 70 signups
- **Optimistic (30%):** 350 clicks × 30% = 105 signups

**Target:** 100-150 email signups by Friday

---

## ✅ LANDING PAGE CHECKLIST

- [ ] Headline is clear (you understand it in 5 seconds)
- [ ] Problem statement is relatable (you think "that's me")
- [ ] Benefits are specific (not vague like "save time")
- [ ] Email form works (test it yourself)
- [ ] Thank you email is set up (they get PDF within 1 minute)
- [ ] Page is mobile-friendly (works on phone)
- [ ] Link is shareable (easy to copy/paste)
- [ ] CTAs are consistent (same message everywhere)
- [ ] No typos (read it twice)
- [ ] Page loads fast (test on slow connection)

---

## 🚨 COMMON MISTAKES

❌ **Asking for too much info.** Just name + email. Nothing else.

❌ **Unclear CTA.** "Submit" is weak. "Send me the PDF" is strong.

❌ **Too much copy.** People scan. Keep it short (300 words max for main pitch).

❌ **No social proof.** Add 3-5 testimonials (even if from friends or beta testers).

❌ **Doesn't match your brand.** If it looks janky, people won't trust it.

✅ **One goal.** Collect emails. That's it. Everything else is noise.

✅ **Mobile responsive.** 60% of traffic is mobile. Make it work there.

✅ **Clear value.** "Here's what you get" beats "Here's our product."

---

## 📊 SUCCESS METRICS

| Metric | Target | Excellent |
|--------|--------|-----------|
| Traffic to page | 300-500 clicks | 700+ |
| Email signups | 60-100 | 200+ |
| Conversion rate | 15-20% | 25%+ |
| Email opens (follow-up) | 40%+ | 60%+ |
| Click to Gumroad/Substack | 20-30% | 50%+ |

---

**Remember:** This is your first funnel step. Imperfect page that converts is better than perfect page that's still in design. Launch it. Iterate based on real data.**
