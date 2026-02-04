# Revenue & Analytics Dashboard

## Google Sheets Template Overview

This is a complete, formula-driven revenue tracking and analytics dashboard designed to automatically calculate metrics, generate projections, and visualize your business performance.

**File Location:** [Create in Google Sheets](https://sheets.google.com)
**Workbook Name:** `Revenue & Analytics Dashboard [Your Name]`
**Total Tabs:** 6
**Maintenance:** ~10 min/day data entry, auto-calculations handle the rest

---

## 📊 Tab 1: Daily Revenue Log

### Purpose
Single source of truth for all daily metrics. Every other calculation and chart pulls from here.

### Headers & Data Structure

```
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Date|Gumroad $|Gumroad Cust|Gumroad Followers|Substack $|Substack Free|Substack Paid|Email $|Email List|Twitter|LinkedIn|Social Clicks|Email Signups|Total Daily $|Notes|
|DATE|CURRENCY|NUMBER|NUMBER|CURRENCY|NUMBER|NUMBER|CURRENCY|NUMBER|NUMBER|NUMBER|NUMBER|NUMBER|CURRENCY|TEXT|
```

### Copy-Paste Ready Row Format

**Row 2 (Example Data):**
```
2026-02-04 | 45.50 | 2 | 128 | 12.00 | 340 | 8 | 0 | 1250 | 2840 | 340 | 45 | 8 | [FORMULA] | Viral tweet
```

### Column-by-Column Setup

| Col | Header | Format | Formula/Notes | 
|-----|--------|--------|---|
| A | Date | Date (YYYY-MM-DD) | Manual entry |
| B | Gumroad $ | Currency | Manual entry from Gumroad dashboard |
| C | Gumroad Cust | Integer | Manual entry; count of daily customers |
| D | Gumroad Followers | Integer | Manual entry; current follower count |
| E | Substack $ | Currency | Manual entry from Substack analytics |
| F | Substack Free | Integer | Manual entry; current free subscriber count |
| G | Substack Paid | Integer | Manual entry; current paid subscriber count |
| H | Email $ | Currency | Manual entry; revenue generated from email link |
| I | Email List | Integer | Manual entry; current email subscriber count |
| J | Twitter | Integer | Manual entry; current follower count |
| K | LinkedIn | Integer | Manual entry; current follower count |
| L | Social Clicks | Integer | Manual entry; tracked via UTM params or link shortener |
| M | Email Signups | Integer | Manual entry; new signups from social traffic |
| N | Total Daily $ | Currency | **FORMULA:** `=B2+E2+H2` (Copy down for each row) |
| O | Notes | Text | Manual entry; context about what drove sales |

### Additional Calculated Columns (Optional)

Add these in columns P, Q, R for quick daily insights:

**Column P: Daily AOV**
```
Header: "Daily AOV"
Format: Currency
Formula (Row 2): =IF(C2=0, 0, N2/C2)
Meaning: Average revenue per Gumroad customer today
```

**Column Q: Email Growth**
```
Header: "Email Growth"
Format: Integer
Formula (Row 2): =IF(ROW()=2, 0, I2-I1)
Meaning: Net change in email list (today - yesterday)
```

**Column R: Growth %**
```
Header: "Growth %"
Format: Percentage
Formula (Row 2): =IF(ROW()=2, 0, IF(I1=0, 0, (I2-I1)/I1*100))
Meaning: Percentage growth in email list
```

### Data Entry Best Practices

1. **When to enter:** End of day or first thing next morning
2. **Frequency:** Daily (or batch 2-3 days if needed)
3. **Sources:**
   - Gumroad revenue/customers: Gumroad dashboard
   - Substack: Substack analytics page
   - Email list: Your email provider (ConvertKit, Substack, etc.)
   - Twitter/LinkedIn: Profile page (or API if automated)
   - Social clicks/signups: Google Analytics UTM or link tracking

4. **Validation:**
   - Check that Total Daily $ (N) = B + E + H
   - Email list should only go up (or stay same), never down (unless you cleaned list)
   - Gumroad followers should only go up

### Sample Data (First 10 Days)

```
Date | Gumroad $ | Gumroad Cust | Gumroad Followers | Substack $ | Substack Free | Substack Paid | Email $ | Email List | Twitter | LinkedIn | Social Clicks | Email Signups | Total Daily $ | Notes
2026-02-01 | 0 | 0 | 50 | 0 | 100 | 0 | 0 | 500 | 1200 | 150 | 12 | 2 | 0 | Starting point
2026-02-02 | 0 | 0 | 52 | 0 | 104 | 0 | 0 | 510 | 1220 | 155 | 15 | 3 | 0 | Followed back some Twitter accounts
2026-02-03 | 25.00 | 1 | 55 | 10.00 | 110 | 1 | 0 | 530 | 1250 | 160 | 25 | 4 | 35.00 | Twitter thread, first Gumroad customer
2026-02-04 | 45.50 | 2 | 128 | 12.00 | 340 | 8 | 0 | 1250 | 2840 | 340 | 45 | 8 | 57.50 | Viral tweet, big follower spike
2026-02-05 | 15.00 | 1 | 135 | 8.00 | 350 | 9 | 0 | 1280 | 2900 | 360 | 35 | 6 | 23.00 | Sustained from previous day
2026-02-06 | 32.50 | 2 | 140 | 15.00 | 365 | 10 | 0 | 1310 | 2950 | 375 | 40 | 7 | 47.50 | Newsletter mention
2026-02-07 | 0 | 0 | 142 | 0 | 368 | 10 | 0 | 1315 | 2960 | 378 | 8 | 1 | 0 | Slow day, weekend
2026-02-08 | 18.00 | 1 | 145 | 6.00 | 375 | 11 | 0 | 1330 | 3020 | 400 | 50 | 8 | 24.00 | LinkedIn post got traction
2026-02-09 | 52.00 | 3 | 150 | 18.00 | 395 | 12 | 5.00 | 1360 | 3100 | 425 | 75 | 12 | 75.00 | Major email campaign, best day yet
2026-02-10 | 22.50 | 1 | 152 | 10.00 | 405 | 13 | 0 | 1380 | 3150 | 450 | 45 | 8 | 32.50 | Continuation effect
```

---

## 📈 Tab 2: Calculations & Charts

### Purpose
Auto-calculated summaries, KPIs, and visualizations. This is your dashboard.

### Section A: Today's Snapshot

**Location:** Cells A1:B10 (top-left)

```
| A | B |
|---|---|
| TODAY'S SNAPSHOT | |
| Latest Data Date | [FORMULA] |
| Daily Revenue | $[FORMULA] |
| Total Customers (All-Time) | [FORMULA] |
| Email List | [FORMULA] |
| AOV (All-Time) | $[FORMULA] |
| Growth Status | [TEXT] |
| ... | |
```

**Formulas (Copy these exactly):**

```
Cell B2 (Latest Date):
=MAX('Daily Revenue Log'!A:A)

Cell B3 (Today's Revenue):
=SUMIF('Daily Revenue Log'!A:A, MAX('Daily Revenue Log'!A:A), 'Daily Revenue Log'!N:N)

Cell B4 (Lifetime Customers):
=SUM('Daily Revenue Log'!C:C)

Cell B5 (Latest Email List):
=INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0)))

Cell B6 (Lifetime AOV):
=B3/B4

Cell B7 (Email List Growth Status):
=IF(INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0))) > INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0))-1), "Growing ↑", "Flat/Declining ↓")
```

### Section B: Weekly Summary (7 Days)

**Location:** Cells D1:F15

```
| D | E | F |
|---|---|---|
| WEEKLY SUMMARY | | |
| Week Ending | [DATE] | |
| Revenue (7 days) | $[FORMULA] | |
| Daily Avg | $[FORMULA] | |
| Customers | [FORMULA] | |
| Email Growth | +[FORMULA] | |
| Top Day | $[FORMULA] | |
| Email Growth % | [FORMULA]% | |
```

**Formulas:**

```
Cell E2 (Week Ending Date):
=TODAY()

Cell E3 (Revenue Last 7 Days):
=SUMIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&TODAY()-7, 'Daily Revenue Log'!A:A, "<="&TODAY())

Cell E4 (Daily Average):
=E3/7

Cell E5 (Customers Last 7 Days):
=SUMIFS('Daily Revenue Log'!C:C, 'Daily Revenue Log'!A:A, ">="&TODAY()-7)

Cell E6 (Email List Growth Last 7 Days):
=INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0))) - INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0))-7)

Cell E7 (Top Day Revenue):
=MAXIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&TODAY()-7)

Cell E8 (Email Growth %):
=(E6/INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2, 1/('Daily Revenue Log'!I:I<>""), 0))-7))*100
```

### Section C: Monthly Summary

**Location:** Cells H1:J15

```
| H | I | J |
|---|---|---|
| MONTHLY SUMMARY | | |
| Month | [DATE] | |
| Revenue (MTD) | $[FORMULA] | |
| Days Elapsed | [FORMULA] | |
| Daily Avg | $[FORMULA] | |
| Projected Month | $[FORMULA] | |
| Customers | [FORMULA] | |
| Avg Customer Value | $[FORMULA] | |
```

**Formulas:**

```
Cell I2 (Current Month):
=TEXT(TODAY(),"MMMM YYYY")

Cell I3 (MTD Revenue):
=SUMIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1), 'Daily Revenue Log'!A:A, "<="&TODAY())

Cell I4 (Days Elapsed):
=DAY(TODAY())

Cell I5 (Daily Avg):
=I3/I4

Cell I6 (Projected Month):
=I5*30

Cell I7 (MTD Customers):
=SUMIFS('Daily Revenue Log'!C:C, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1), 'Daily Revenue Log'!A:A, "<="&TODAY())

Cell I8 (Avg Customer Value):
=IF(I7=0, 0, I3/I7)
```

### Section D: Revenue by Source (MTD)

**Location:** Cells A20:D30

Create a table:

```
| A | B | C | D |
|---|---|---|---|
| Revenue Source | Amount | % of Total | Chart Ready |
| Gumroad | $[FORMULA] | [FORMULA]% | |
| Substack | $[FORMULA] | [FORMULA]% | |
| Email | $[FORMULA] | [FORMULA]% | |
| TOTAL | $[FORMULA] | 100% | |
```

**Formulas:**

```
Cell B22 (Gumroad MTD):
=SUMIFS('Daily Revenue Log'!B:B, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

Cell B23 (Substack MTD):
=SUMIFS('Daily Revenue Log'!E:E, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

Cell B24 (Email MTD):
=SUMIFS('Daily Revenue Log'!H:H, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

Cell B25 (Total MTD):
=SUM(B22:B24)

Cell C22 (% Gumroad):
=IF(B25=0, 0, B22/B25*100)

Cell C23 (% Substack):
=IF(B25=0, 0, B23/B25*100)

Cell C24 (% Email):
=IF(B25=0, 0, B24/B25*100)
```

### Section E: Charts

**Chart 1: Daily Revenue (Last 30 Days)**
- Type: Line chart
- X-axis: Date (from Tab 1, Column A)
- Y-axis: Total Daily Revenue (from Tab 1, Column N)
- Data range: Last 30 rows of data
- Chart title: "Daily Revenue (Last 30 Days)"
- Enable trendline for visual reference

**Chart 2: Revenue by Source (Pie Chart)**
- Type: Pie chart
- Data: Revenue Source table (A22:B24)
- Chart title: "Revenue Mix (Month to Date)"
- Show percentages on pie slices

**Chart 3: Cumulative Revenue**
- Type: Line chart
- X-axis: Dates
- Y-axis: Running total
- To create: In Tab 1, add Column S with formula `=SUM($N$2:N2)` and copy down
- Pulls from Tab 1, Columns A and S
- Shows total revenue growth over time

---

## 📱 Tab 3: Subscriber Tracking

### Purpose
Track and visualize growth across email, Gumroad, Substack, Twitter, LinkedIn.

### Headers & Structure

```
| A | B | C | D | E | F | G | H | I | J | K | L | M | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Date|Email List|Email Growth|Email Growth %|Gumroad|GR Growth %|Substack Free|SS Free Growth %|Substack Paid|SS Paid Growth %|Twitter|Twitter Growth %|LinkedIn|LI Growth %|
|DATE|NUMBER|NUMBER|%|NUMBER|%|NUMBER|%|NUMBER|%|NUMBER|%|NUMBER|%|
```

### Data Entry

Pull daily or weekly (suggest weekly on Sundays):

```
| A | B | C | D | E | F | G | H | I | J | K | L | M | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|2026-01-31|500|0|0%|50|0%|100|0%|0|0%|1200|0%|150|0%|
|2026-02-04|1250|750|150%|128|156%|340|240%|8|—|2840|137%|340|127%|
|2026-02-11|1400|150|12%|140|9%|380|12%|12|50%|3150|11%|420|24%|
```

### Growth % Formulas

**Email Growth % (Column D, Row 2):**
```
=IF(ROW()=2, 0, IF(B1=0, 0, (B2-B1)/B1*100))
```
Copy down for each row.

**Gumroad Growth % (Column F):**
```
=IF(ROW()=2, 0, IF(E1=0, 0, (E2-E1)/E1*100))
```

**Same pattern for Substack Free (H), Substack Paid (J), Twitter (L), LinkedIn (N).**

### Optional: Weekly Summary

In rows below main data, create:

```
WEEKLY SUMMARY (as of [DATE])

Platform | Weekly Growth | Growth % | Status |
Email | +___ | __% | [Green/Yellow/Red] |
Gumroad | +___ | __% | |
Substack | +___ | __% | |
Twitter | +___ | __% | |
LinkedIn | +___ | __% | |

Best Growth: [Platform] at __%
Slowest Growth: [Platform] at __% or declining
```

### Chart: Multi-Line Subscriber Growth

- Type: Line chart
- X-axis: Date (Column A)
- Y-axis: Subscriber counts
- Series: Email, Gumroad, Substack Free, Substack Paid, Twitter, LinkedIn
- Chart title: "Subscriber Growth Across Platforms"
- Format each line with distinct colors

---

## 🎯 Tab 4: Conversion Funnel

### Purpose
Track conversion rates through your sales funnel.

### Section A: Funnel Overview

```
CONVERSION FUNNEL SNAPSHOT

Stage 1: Social Media → Email List
  Source: Twitter, LinkedIn posts
  Metric: Social Clicks → Email Signups
  Current Rate: [FORMULA]%
  Goal: 20%+

Stage 2: Email List → Gumroad Purchase
  Source: Email subscribers
  Metric: Gumroad Customers / Email List
  Current Rate: [FORMULA]%
  Goal: 5%+ 

Stage 3: Gumroad Visit → Purchase
  Source: Gumroad store
  Metric: Purchases / Store Visits
  Current Rate: [FORMULA]%
  Goal: 5%+

RESULT: Revenue Per Email Subscriber
  Lifetime: [FORMULA]
  This Month: [FORMULA]
```

### Section B: Funnel Data Table (Track Over Time)

```
| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
|Date|Social Clicks|Email Signups|Social→Email %|Email List|Gumroad Customers|Email→Buy %|Total Revenue|Revenue/Subscriber|
|2026-02-04|45|8|17.8%|1250|2|0.16%|57.50|0.046|
|2026-02-11|320|55|17.2%|1400|15|1.07%|580|0.414|
```

**Formulas (Row 2):**

```
Cell D2 (Social→Email %):
=IF(B2=0, 0, C2/B2*100)

Cell F2 (Pulled from Daily Revenue Log):
=SUMIFS('Daily Revenue Log'!C:C, 'Daily Revenue Log'!A:A, ">="&A2)

Cell G2 (Email→Buy %):
=IF(E2=0, 0, F2/E2*100)

Cell H2 (Total Revenue):
=SUMIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&A2)

Cell I2 (Revenue/Subscriber):
=IF(E2=0, 0, H2/E2)
```

### Section C: Cohort Analysis (Optional)

Track behavior by join month:

```
| A | B | C | D | E | F |
|---|---|---|---|---|---|
|Cohort (Join Month)|New Subscribers|Converted to Buyers|Conversion %|Revenue Generated|LTV|
|January 2026|500|12|2.4%|$450|$0.90|
|February 2026|350|8|2.3%|$280|$0.80|
```

### Chart: Funnel Visualization

Create a simple bar chart showing:
- Stage 1: Social Clicks (e.g., 500)
- Stage 2: Email Signups (e.g., 85 = 17%)
- Stage 3: Purchases (e.g., 2 = 2.4%)

This shows the "drop-off" at each stage.

---

## 📊 Tab 5: Projections (12-Month)

### Purpose
Plan revenue and subscriber targets for next 12 months.

### Section A: Current Baseline

```
BASELINE TODAY:

Daily Revenue (30-day average): $[FORMULA]
Monthly Revenue (projected): $[FORMULA]
Annualized (if same): $[FORMULA]

Daily Customers: [FORMULA]
Email List: [FORMULA]
Email Growth Rate (weekly %): [FORMULA]%

Current Burn Rate: $[FORMULA]/day (if spending on ads)
Runway: [FORMULA] months (if spending)
```

**Formulas:**

```
Cell B3 (30-Day Avg Revenue):
=AVERAGE(QUERY('Daily Revenue Log'!N:N, "SELECT N WHERE A >= DATE(YEAR(TODAY())-0, MONTH(TODAY()), DAY(TODAY())-30)"))

Cell B4 (Monthly Projected):
=B3*30

Cell B5 (Annualized):
=B3*365

Cell B7 (Daily Customer Count - 30 day avg):
=AVERAGE(QUERY('Daily Revenue Log'!C:C, "SELECT C WHERE A >= DATE(YEAR(TODAY())-0, MONTH(TODAY()), DAY(TODAY())-30)"))

Cell B8 (Latest Email List):
=[Reference from Tab 2]

Cell B9 (Weekly Email Growth %):
=[Reference from Tab 3]
```

### Section B: 12-Month Revenue Projection

**Location:** Cells A15:F27

```
| A | B | C | D | E | F |
|---|---|---|---|---|---|
|Month|Conservative (-20%)|Moderate (Baseline)|Aggressive (+20%)|Most Likely|Notes|
|Feb 2026|$[CALC]|$[CALC]|$[CALC]|$[CALC]|New to market|
|Mar 2026|$[CALC]|$[CALC]|$[CALC]|$[CALC]|Growing audience|
|Apr 2026|$[CALC]|$[CALC]|$[CALC]|$[CALC]||
|...|...|...|...|...|...|
|Jan 2027|$[CALC]|$[CALC]|$[CALC]|$[CALC]|1-year target|
```

**How to Fill (Using Feb 2026 as example):**

```
Cell B17 (Conservative):
=BaselineMonthlyRevenue * 0.8

Cell C17 (Moderate):
=BaselineMonthlyRevenue * 1.0

Cell D17 (Aggressive):
=IF(ROW()=17, BaselineMonthlyRevenue*1.2, D16*1.2)
(Compounds monthly growth)

Cell E17 (Most Likely):
=AVERAGE(B17, C17)
(Or your best guess; replace AVERAGE with your estimate)
```

### Section C: 12-Month Subscriber Projections

```
| A | B | C | D |
|---|---|---|---|
|Month|Email List (Moderate)|Email Growth %|Notes|
|Feb 2026|1250|—|Baseline|
|Mar 2026|1400|+12%|Slight acceleration|
|...|...|...|...|
|Jan 2027|3500|+10%|Goal|
```

**Formula for Moderate Growth:**

Assume consistent 10% weekly growth (conservative):
```
Cell B17 (Mar 2026):
=B16 * 1.1^4.3
(10% growth compounded ~4.3 weeks)
```

Or simpler—just estimate manually based on current trajectory.

### Section D: Sustainability Analysis

```
BREAK-EVEN ANALYSIS:

Current Daily Revenue: $[FORMULA] (30-day avg)
Daily Burn Rate (if ad spend): $[FORMULA]
Daily Profit Margin: $[FORMULA]

Profitability Status: [FORMULA - Green/Yellow/Red]
  Green = Revenue > 2x daily burn
  Yellow = Revenue > 1x daily burn
  Red = Revenue < 1x daily burn

Days Until Full Profitability: [FORMULA]
(Days needed to earn 1 month of runway)

Runway Estimate: [FORMULA] months
(if bootstrapping with current profit)
```

**Formulas:**

```
Cell B22 (Current Daily Revenue):
=AVERAGE(QUERY('Daily Revenue Log'!N:N, "SELECT N WHERE A >= TODAY()-30"))

Cell B23 (Daily Burn):
=[Manual entry or reference to expense tracking]

Cell B24 (Daily Profit):
=B22-B23

Cell B25 (Status):
=IF(B22 >= B23*2, "PROFITABLE ✓", IF(B22 >= B23, "BREAKEVEN →", "UNSUSTAINABLE ✗"))

Cell B27 (Runway):
=IF(B24=0, 0, 30/B24)
```

### Section E: Key Milestones

```
MILESTONES TO HIT:

Milestone | Target Date | Probability | Notes |
Break-even daily revenue ($X/day) | 2026-04-30 | 60% | Need viral content |
1000 email subscribers | 2026-03-31 | 80% | On track |
$500/month revenue | 2026-04-30 | 70% | Depends on email growth |
10 Gumroad customers | 2026-03-30 | 85% | Growing daily |
Full profitability (cover all costs) | 2026-06-30 | 50% | Requires ad spend control |
$5000/month revenue | 2026-12-31 | 40% | Stretch goal |
```

### Chart: Revenue Projections (12-Month)

- Type: Line chart
- X-axis: Months (Feb 2026 - Jan 2027)
- Y-axis: Projected Revenue ($)
- Series: Conservative, Moderate, Aggressive, Actual (once data available)
- Chart title: "12-Month Revenue Projections"
- Format: Conservative (light blue), Moderate (medium blue), Aggressive (dark blue), Actual (bold line)

---

## 📝 Tab 6: Notes & Insights

### Purpose
Capture lessons learned, milestones, and strategic insights for future reference.

### Section A: Milestones Achieved

```
🎯 MILESTONES

[2026-02-03] FIRST SALE
  Revenue: $25
  Source: Gumroad
  What worked: Twitter thread on [topic]
  Effort: [High/Medium/Low]

[2026-02-04] VIRAL MOMENT
  Followers gained: +77 (Twitter)
  Why: Tweet about [topic] got 200+ likes
  Impact: 750% email list growth in 1 day

[2026-02-09] BEST DAY YET
  Revenue: $75
  Source: Email campaign + natural sales
  What worked: Combination of email + social timing
  Lesson: Email still your best channel

[2026-02-15] 1000 EMAIL SUBSCRIBERS
  Time to reach: 15 days
  Growth rate: 100/day average
  Projection: 3000 by end of Q1
```

### Section B: What's Working ✅

```
✅ WINNING TACTICS & CHANNELS

**Twitter Threads**
  Format: Long-form education (8-15 tweets)
  Frequency: 2-3x per week
  Success rate: 60% go viral (+100 followers)
  ROI: ~$10 revenue per viral thread (indirect)
  Effort: High (1-2 hours per thread)
  Repeatability: Easy - systematize
  → ACTION: Double down. Create content calendar for threads.

**Email Newsletter (Substack)**
  Content: Curated insights + product mention
  Frequency: 2x per week
  Open rate: 45%
  Click rate: 12%
  Sales conversion: 5% of clickers
  Effort: Medium (1 hour per newsletter)
  Repeatability: Easy - develop templates
  → ACTION: Increase to 3x per week. Test subject lines.

**Product (Gumroad)**
  Price: $45
  Sales rate: 3-5 per week
  Customer feedback: Positive
  Repeat rate: 20%
  Effort: Medium (product evergreen)
  Repeatability: Add 2-3 new products
  → ACTION: Create complementary product. Bundle pricing.
```

### Section C: What's NOT Working ❌

```
❌ FAILED EXPERIMENTS & LOW-ROI ACTIVITIES

**LinkedIn Posts**
  Engagement: 3-5 likes per post
  Click rate: <1%
  Revenue impact: $0
  Effort: Medium (1 hour to write + post)
  Cost: Opportunity cost (could be Twitter)
  Lesson: B2B audience not ready; pivot to Twitter
  → ACTION: Stop posting to LinkedIn. Wait 6 months.

**Guest Posts**
  Outreach: Pitched to 5 blogs
  Accepts: 1 in 10 (20% rate)
  Traffic generated: <50 visitors
  Sales conversion: 0
  Effort: High (3 hours per post + pitch)
  Timeline: 2-4 weeks to publication
  Lesson: Too long lag time for early-stage; focus on owned channels
  → ACTION: Resume in Q2 when brand stronger.

**Paid Ads (Facebook)**
  Budget tested: $50
  Conversions: 1 (break-even)
  CAC: $50
  Customer LTV: $45
  Lesson: CAC > LTV = unprofitable
  → ACTION: Pause ads. Resume only after LTV > $100.
```

### Section D: Product Performance

```
📊 PRODUCT INSIGHTS

**Product #1: [Name]**
  Price: $45
  Units sold: 12 (month-to-date)
  Revenue: $540
  Customer feedback: ★★★★☆ (avg 4.2/5)
  Repeat purchase rate: 20%
  Churn rate: 0% (all customers happy)
  → Opportunity: Bundle with another product. Upsell.

**Product #2: [Name]** (if applicable)
  Price: $25
  Units sold: 0
  Revenue: $0
  Status: Recently launched
  Feedback: Too niche; audience not interested
  → Action: Pivot positioning OR retire product.

**Future Product Idea #3**
  Topic: [Idea]
  Estimated demand: High (requests from X emails)
  Time to create: 20 hours
  Estimated price: $75
  Estimated customers: 10-20 month-1
  Estimated revenue: $750-1500
  Priority: Q2 (after current product scaled)
```

### Section E: Customer Acquisition by Channel

```
💰 CAC BY CHANNEL (Month to Date)

Channel | Customers | Spend | CAC | LTV | ROI |
Twitter | 8 | $0 | $0 | $45 | Infinite ✓ |
Email | 4 | $0 | $0 | $45 | Infinite ✓ |
LinkedIn | 0 | $0 | — | — | — |
Organic search | 0 | $0 | — | — | — |
Paid ads | 1 | $50 | $50 | $45 | -10% ✗ |

Most efficient: Twitter (free, viral potential)
Next focus: Email (free, built-in audience)
Pause: Paid ads (CAC too high)
```

### Section F: Monthly Reflection Template

```
📅 FEBRUARY 2026 REVIEW

**THE WINS:**
- Revenue exceeded projection by 40% ($475 vs $340 target)
- Email list grew 150% (500 → 1250)
- First viral Twitter moment (77 new followers)
- Launched first product successfully

**THE CHALLENGES:**
- Inconsistent daily revenue (0 some days, $75 others)
- Ad spend unprofitable
- Content takes longer than expected

**THE BIGGEST LESSON:**
Consistency beats perfection. The days I posted daily to Twitter saw 5x more growth than sporadic posting.

**NEXT MONTH'S PRIORITIES:**
1. Publish 1 Twitter thread daily (build consistency)
2. Launch product #2 (capitalize on momentum)
3. Test email automation (reduce manual effort)
4. Reach 2000 email subscribers by March 31

**METRICS TO WATCH:**
- Daily revenue trending toward $25-50 range
- Email list growth sustaining 10% weekly
- Twitter followers growing by 100+ per week
```

### Section G: Competitive & Market Insights

```
🎯 MARKET OBSERVATIONS

**What's trending in my niche:**
- [Observation 1] → Opportunity: [Idea]
- [Observation 2] → Risk: [Challenge]
- [Observation 3] → Play: [Action]

**Competitor activity:**
- [Competitor 1]: Launched [product], pricing $X
  Our advantage: [What we do better]
  Their advantage: [What we need to improve]

**Audience pain points I'm hearing:**
- [Pain 1]: Saw X mentions on Twitter this week
  → Product idea: [Solution]
- [Pain 2]: [Customer feedback]
  → Pivot idea: [Adjustment]
```

### Section H: Strategic Questions & Hypotheses

```
🧠 TESTING & EXPERIMENTS

**Hypothesis 1:** "Twitter threads get 10x more engagement than single tweets"
Status: Testing (started Feb 15)
Sample size: 4 threads so far
Early results: 60% hit > 100 likes vs. 10% for singles
Conclusion: CONFIRM - double down on threads

**Hypothesis 2:** "Email subject lines with emojis get 20% higher open rate"
Status: Testing (A/B split)
Sample: 500 subscribers each group
Results: TBD (test ongoing)
Decision point: March 1

**Hypothesis 3:** "Paid ads will be profitable if CAC < $30"
Status: REJECTED (CAC turned out to be $50)
Pivot: Pause ads, focus on organic
Revisit date: May 2026 (when LTV higher)
```

---

## 🔄 Using The Dashboard

### Daily Workflow (10 minutes)

1. Open **Tab 1: Daily Revenue Log**
2. Add new row with today's date
3. Fill in Gumroad, Substack, email metrics
4. Enter email list size + social follower counts
5. Add any notes about what drove sales
6. **All formulas auto-calculate** → Done!

### Weekly Review (30 minutes)

1. Check **Tab 2: Calculations & Charts**
   - Is weekly revenue trending up?
   - AOV healthy?
   
2. Check **Tab 3: Subscriber Tracking**
   - Which platform grew most?
   - Identify your fastest-growing channel
   
3. Check **Tab 4: Conversion Funnel**
   - Are conversion rates improving?
   - Where's your biggest drop-off?
   
4. Update **Tab 6: Notes & Insights**
   - What worked this week?
   - What to test next week?

### Monthly Review (1-2 hours)

1. **Tab 5: Projections**
   - Update 12-month projections
   - Did you hit your milestones?
   - Adjust next month's targets

2. **Tab 6: Notes & Insights**
   - Complete monthly reflection
   - Document lessons learned
   - Plan next month's priorities

3. **Data maintenance**
   - Archive previous month's detailed data (if sheet is getting large)
   - Back up sheet as CSV

---

## 💡 Pro Tips

### Optimization Ideas

1. **Use IMPORTRANGE** to pull data from other sheets (e.g., email provider, analytics)
2. **Google Form integration** to auto-log metrics daily (no manual entry)
3. **Conditional formatting** to highlight green (up), yellow (flat), red (down)
4. **Data validation** to prevent bad entries (e.g., email list going down)
5. **Pivot tables** if you want to analyze by week, month, source
6. **Scheduled email digests** (Apps Script) to send weekly summary

### Scaling the Dashboard

- **If adding more products:** Duplicate columns for each product revenue
- **If adding team:** Set up different sheets per person, then pull data into master
- **If integrating APIs:** Use Zapier/IFTTT to auto-log metrics
- **If going public:** Create separate "Public Dashboard" with non-sensitive metrics only

---

## 📎 Quick Reference: Key Formulas

| Calculation | Formula | Notes |
|-------------|---------|-------|
| Daily Total Revenue | =B2+E2+H2 | Sum all sources |
| Weekly Revenue | =SUMIF(DATE range, ">=TODAY()-7") | Last 7 days |
| Monthly Revenue | =SUMIFS(Revenue, DATE, ">=start of month") | MTD only |
| Revenue per Subscriber | =Total Revenue / Email List Size | LTV proxy |
| Email Growth % | =(Today - Yesterday) / Yesterday * 100 | Weekly change |
| Conversion Rate | = Outcome / Input * 100 | Social→Signup, List→Buy, etc. |
| AOV | = Total Revenue / Customer Count | Avg per transaction |
| Projection | = Daily Average * 30 (or with growth %) | Conservative/Moderate/Aggressive |

---

## 🛡️ Data Safety

- **Back up monthly** → File → Download → Download as Excel/CSV
- **Version control** → Keep timestamped backups (e.g., `Dashboard_Feb2026_backup.xlsx`)
- **Share carefully** → Never share raw customer data
- **Public version** → Create separate sheet with anonymized metrics only

---

## ✅ Setup Checklist

- [ ] Create Google Sheet with 6 tabs
- [ ] Copy headers to Tab 1
- [ ] Enter sample data (10 days)
- [ ] Test formulas in Tab 2
- [ ] Create charts (at least 3)
- [ ] Set up Tab 3 subscriber tracking
- [ ] Build Tab 4 funnel analysis
- [ ] Set up Tab 5 projections
- [ ] Add your first notes to Tab 6
- [ ] Share with trusted accountability partner (optional)
- [ ] Start daily logging habit

**Total time to set up:** 2-3 hours
**Payoff:** Crystal-clear business visibility + data-driven decisions

---

Done! Your dashboard is ready. Start logging data, watch patterns emerge, and adjust your strategy based on facts, not guesses.

