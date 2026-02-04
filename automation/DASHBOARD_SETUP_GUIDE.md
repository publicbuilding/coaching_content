# Dashboard Setup Guide

## Quick Start (30 minutes)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank spreadsheet**
3. Name it: `Revenue & Analytics Dashboard [Your Name]`
4. Share it with yourself (or team)

### Step 2: Create Sheet Tabs
Right-click the default "Sheet1" tab and create 6 new sheets:
- [ ] Tab 1: Daily Revenue Log
- [ ] Tab 2: Calculations & Charts
- [ ] Tab 3: Subscriber Tracking
- [ ] Tab 4: Conversion Funnel
- [ ] Tab 5: Projections (12-Month)
- [ ] Tab 6: Notes & Insights

Rename by double-clicking each tab.

### Step 3: Set Up Daily Revenue Log (Tab 1)

**Headers (Row 1):**
```
Date | Gumroad $ | Gumroad Customers | Gumroad Followers | Substack $ | Substack Free | Substack Paid | Email $ | Email List Size | Twitter | LinkedIn | Social Clicks | Email Signups | Total Daily $ | Notes
```

**Data Format (Row 2 onwards):**
```
2026-02-04 | 45.50 | 2 | 128 | 12.00 | 340 | 8 | 0 | 1250 | 2840 | 340 | 45 | 8 | 57.50 | Viral tweet
```

**Formula for "Total Daily $":**
```
=A2+D2+G2
```
(Gumroad + Substack + Email)

**Data Entry:**
- Add one row per day
- Fill in your daily numbers
- Total will auto-calculate

---

## Detailed Setup by Tab

### TAB 1: Daily Revenue Log

**Purpose:** Single source of truth for daily metrics.

**Structure:**

| Column | Field | Type | Formula/Notes |
|--------|-------|------|----------------|
| A | Date | Date | YYYY-MM-DD format |
| B | Gumroad Revenue | Currency | Manual entry |
| C | Gumroad Customers | Number | Manual entry |
| D | Gumroad Followers | Number | Manual entry (or auto if using API) |
| E | Substack Revenue | Currency | Manual entry |
| F | Substack Free | Number | Manual entry |
| G | Substack Paid | Number | Manual entry |
| H | Email Revenue | Currency | Manual entry |
| I | Email List Size | Number | Manual entry |
| J | Twitter Followers | Number | Manual entry |
| K | LinkedIn Followers | Number | Manual entry |
| L | Social Clicks | Number | Manual entry |
| M | Email Signups | Number | Manual entry |
| N | Total Daily Revenue | Currency | =B2+E2+H2 |
| O | Notes | Text | Manual entry |

**Formatting Tips:**
- Format columns B, E, H, N as **Currency** ($)
- Format columns C, D, F, G, I, J, K, L, M as **Numbers**
- Format column A as **Date**
- Freeze Row 1 (View → Freeze → 1 row)

**Optional: Add Calculated Columns in Tab 1**

Add these in columns P onward for quick reference:

| Column | Field | Formula |
|--------|-------|---------|
| P | Daily AOV | =N2/C2 (Total $ / Gumroad customers) |
| Q | Email List Growth | =I2-I1 (Today - Yesterday) |
| R | Email Growth % | =(I2-I1)/I1*100 |
| S | Week | =WEEK(A2) |

---

### TAB 2: Calculations & Charts

**Purpose:** Auto-calculated summaries and visualizations.

**Section A: Today's Snapshot (Top of sheet)**

```
TODAY (as of latest entry):
Date: [formula pulls latest date from Tab 1]
Daily Revenue: $[auto-sum]
Total Customers (lifetime): [auto-sum]
Email List: [latest count]
AOV: $[auto-calculate]
```

**Formulas for Today's Snapshot:**

```
Latest Date: =MAX('Daily Revenue Log'!A:A)

Today's Revenue: =SUMIF('Daily Revenue Log'!A:A, MAX('Daily Revenue Log'!A:A), 'Daily Revenue Log'!N:N)

Lifetime Customers: =SUM('Daily Revenue Log'!C:C)

Email List (latest): =INDEX('Daily Revenue Log'!I:I, COALESCE(MATCH(2,1/('Daily Revenue Log'!I:I<>""),0)))

AOV: =TODAY'S REVENUE / LIFETIME CUSTOMERS
```

**Section B: Weekly Summary**

Create a small table (rows 10-20):

```
WEEKLY SUMMARY (Last 7 Days)

Week Ending: [DATE]
Days in week: 7
Total Revenue: $[auto-sum of last 7 days]
Daily Average: $[auto-divide]
Customers: [sum of last 7 days]
Email Growth: [delta from 7 days ago]
Top Day: $[MAX of last 7 days]
```

**Formula for Weekly Revenue:**
```
=SUMIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&TODAY()-7)
```

**Section C: Monthly Summary**

```
MONTHLY SUMMARY (Current Month)

Month: [Auto-detect from latest date]
Days elapsed: [Auto-count]
Total Revenue: $[sum of month to date]
Projected Month: $[extrapolate to 30 days]
Daily Average: $[sum / days]
Customers: [sum]
```

**Formula for Monthly Projection:**
```
=SUMIFS('Daily Revenue Log'!N:N, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) / DAY(TODAY()) * 30
```

**Section D: Revenue by Source (Month to Date)**

Create a table:

```
Revenue Breakdown (Month to Date):

Gumroad: $[sum]
Substack: $[sum]
Email: $[sum]
Total: $[sum]
% of Total:
  Gumroad: ___%
  Substack: ___%
  Email: ___%
```

**Formulas:**
```
Gumroad MTD: =SUMIFS('Daily Revenue Log'!B:B, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

Substack MTD: =SUMIFS('Daily Revenue Log'!E:E, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

Email MTD: =SUMIFS('Daily Revenue Log'!H:H, 'Daily Revenue Log'!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))

% Gumroad: =Gumroad_MTD / Total_MTD * 100
```

**Section E: Charts**

**Chart 1: Daily Revenue Trend (Line Chart)**
- Data: Last 30 days from Tab 1 (Date + Total Daily Revenue)
- Type: Line chart
- Axis: Date (X), Revenue in $ (Y)
- Title: "Daily Revenue (Last 30 Days)"

**Chart 2: Revenue by Source (Pie Chart)**
- Data: Revenue Breakdown table (Source + Amount)
- Type: Pie chart
- Title: "Revenue Mix (Month to Date)"

**Chart 3: Cumulative Revenue (Line Chart)**
- Data: Dates + Running total
- Formula for cumulative: In Tab 1, add column with =SUM($N$2:N2)
- Type: Line chart
- Title: "Cumulative Revenue"

**To Create a Chart in Google Sheets:**
1. Highlight your data
2. Click **Insert** → **Chart**
3. Choose chart type
4. Customize title, axis labels, colors
5. Click **Insert**
6. Charts auto-update as you add data

---

### TAB 3: Subscriber Tracking

**Purpose:** Track growth across all platforms.

**Headers (Row 1):**
```
Date | Email List | Email Growth | Email Growth % | Gumroad Followers | Gumroad Growth % | Substack Free | Substack Free Growth % | Substack Paid | Substack Paid Growth % | Twitter Followers | Twitter Growth % | LinkedIn Followers | LinkedIn Growth %
```

**Data Entry:**
- Add one row per day (or weekly if daily is too much)
- Pull subscriber numbers from each platform
- Growth % formulas auto-calculate

**Formulas:**

```
Email Growth: =I2-I1 (Today - Yesterday)
Email Growth %: =(I2-I1)/I1*100

Gumroad Growth %: =(D2-D1)/D1*100

Substack Free Growth %: =(F2-F1)/F1*100

Substack Paid Growth %: =(G2-G1)/G1*100

Twitter Growth %: =(J2-J1)/J1*100

LinkedIn Growth %: =(K2-K1)/K1*100
```

**Weekly View (Optional):**
Create a second section below with weekly growth rates:

```
WEEKLY GROWTH RATES

Week Ending: [DATE]

Email: +___ (+__% WoW)
Gumroad: +___ (+__% WoW)
Substack: +___ (+__% WoW)
Twitter: +___ (+__% WoW)
LinkedIn: +___ (+__% WoW)

Best Performer: [Platform]
Slowest Grower: [Platform]
```

**Chart: Subscriber Growth Over Time (Multi-line)**
- Data: Date + all subscriber columns
- Type: Line chart with multiple series
- Title: "Subscriber Growth Across Platforms"
- Customize colors for each platform

---

### TAB 4: Conversion Funnel

**Purpose:** Track conversion rates across your funnel.

**Section A: Current Funnel Rates**

```
CONVERSION FUNNEL ANALYSIS

Stage 1: Social → Email Signup
  Social Clicks (this period): ___
  Email Signups (this period): ___
  Conversion Rate: __% (Signups / Clicks * 100)

Stage 2: Email List → Gumroad Buyer
  Email List Size: ___
  Gumroad Customers (this period): ___
  Conversion Rate: __% (Customers / List * 100)

Stage 3: Gumroad Visitor → Purchase
  Gumroad Store Visits: ___
  Gumroad Purchases: ___
  Conversion Rate: __% (Purchases / Visits * 100)

End Result: Revenue Per Email Subscriber (LTV Proxy)
  Total Revenue (lifetime): $___
  Email List Size: ___
  Revenue/Subscriber: $___ (Revenue / List Size)
```

**Section B: Funnel Table (Track Over Time)**

| Date | Social Clicks | Email Signups | Social→Email % | Email List | Gumroad Buyers | Email→Buy % | Revenue/Subscriber |
|------|---------------|---------------|----------------|------------|----------------|------------|-------------------|
| 2026-02-04 | 45 | 8 | 17.8% | 1250 | 2 | 0.16% | $0.046 |

**Formulas:**

```
Social→Email %: =C2/B2*100

Email→Buy %: =D2/E2*100

Revenue/Subscriber: =SUM('Daily Revenue Log'!N:N) / F2
```

**Section C: Cohort Analysis (Optional)**

Track conversion rates by cohort (when people joined):

```
By Join Month:

January Cohort:
  Size: ___
  Conversion to buyer: ___%
  Revenue generated: $___
  LTV: $___

February Cohort:
  Size: ___
  Conversion to buyer: ___%
  Revenue generated: $___
  LTV: $___
```

**Chart: Funnel Visualization**

Create a simple funnel showing stage progression:

| Stage | Count | % of Previous |
|-------|-------|----------------|
| Social Clicks | 500 | 100% |
| Email Signups | 85 | 17% |
| Purchases | 2 | 2.4% |

---

### TAB 5: Projections (12-Month)

**Purpose:** Plan revenue and subscriber targets.

**Section A: Current State (Snapshot)**

```
TODAY'S BASELINE:

Daily Revenue (30-day avg): $___
Daily Customers: ___
Email List: ___
Burn Rate (daily spend): $___

Month: [CURRENT MONTH]
Projected Month Total: $___
Year Projected (full year if same daily): $___
```

**Section B: 12-Month Projection Table**

| Month | Conservative (−20%) | Moderate (Same) | Aggressive (+20%) | Most Likely | Notes |
|-------|-------------------|-----------------|-------------------|------------|-------|
| Feb 2026 | $___ | $___ | $___ | $___ | [Assumptions] |
| Mar 2026 | $___ | $___ | $___ | $___ | [Assumptions] |
| Apr 2026 | $___ | $___ | $___ | $___ | [Assumptions] |
| ... | ... | ... | ... | ... | ... |

**How to Fill:**

1. **Conservative:** Daily Average × 30 × 0.8 per month
2. **Moderate:** Daily Average × 30 per month
3. **Aggressive:** Monthly × 1.2 (compound each month)
4. **Most Likely:** Your best guess (usually Moderate or between Moderate/Aggressive)

**Formulas (Example for Feb):**

```
Conservative: =Daily_Average * 30 * 0.8
Moderate: =Daily_Average * 30
Aggressive: =Previous_Month_Aggressive * 1.2
Most Likely: =AVERAGE(Conservative, Moderate)
```

**Section C: Break-Even Analysis**

```
SUSTAINABILITY ANALYSIS:

Current Daily Revenue: $___
Daily Burn Rate (if spending): $___
Daily Profit: $___ (Revenue - Burn)

Days until break-even: ___
Runway (months): ___ (if applying for funding)

Profitability Milestone:
- Revenue needed to be sustainable: $___ / day
- Time to reach: ___ days (at current growth)
```

**Section D: Subscriber Projections**

```
EMAIL LIST PROJECTION (12 Months)

Current: ___
Growth Rate (weekly %): ___%
Projected in 12 months: ___
  Conservative (−30% growth): ___
  Moderate: ___
  Aggressive (+30% growth): ___

Gumroad Followers:
Current: ___
12-Month Projection: ___

Twitter Followers:
Current: ___
12-Month Projection: ___
```

**Chart: Revenue Projections**

Create a line chart showing:
- X-axis: Months (Feb 2026 - Jan 2027)
- Y-axis: Projected Revenue ($)
- Three lines: Conservative, Moderate, Aggressive
- Title: "12-Month Revenue Projections"

---

### TAB 6: Notes & Insights

**Purpose:** Capture lessons learned and strategic notes.

**Section A: Key Milestones**

```
🎯 MILESTONES ACHIEVED:

[Date] - [Milestone]
  - Impact: [revenue / subscribers / etc.]
  - What worked: [tactic]
  
Example:
[2026-02-04] - First Gumroad sale
  - Impact: $45.50
  - What worked: Twitter thread about [topic]
```

**Section B: What Worked**

```
✅ WINNING TACTICS:

1. [Tactic Name]
   - Where: [Platform]
   - Result: [metric] ↑ by ___%
   - Effort Level: [High/Medium/Low]
   - Repeatability: [Easy/Medium/Hard]

2. [Tactic Name]
   - Where: [Platform]
   - Result: [metric] ↑ by ___%
   - Effort Level: [High/Medium/Low]
   - Repeatability: [Easy/Medium/Hard]
```

**Section C: What Didn't Work**

```
❌ FAILED EXPERIMENTS:

1. [Tactic Name]
   - Why it failed: [reason]
   - Cost: [time / $$ spent]
   - Lesson: [what to do differently]

2. [Tactic Name]
   - Why it failed: [reason]
   - Cost: [time / $$ spent]
   - Lesson: [what to do differently]
```

**Section D: Product Insights**

```
📊 TOP PRODUCTS / CONTENT:

By Revenue:
1. [Product] - $___ (_% of total)
2. [Product] - $___ (_% of total)
3. [Product] - $___ (_% of total)

By Customer Acquisition Cost:
1. [Source] - $___ CAC
2. [Source] - $___ CAC
3. [Source] - $___ CAC
```

**Section E: Monthly Reflection**

```
📅 MONTHLY REVIEW [MONTH/YEAR]:

Revenue: $___ (Target: $___) — __% to goal
Customers: ___ (Target: ___)
Email Growth: +___ subscribers

Biggest Win: [description]
Biggest Challenge: [description]
Top Learning: [description]

Next Month Priorities:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

---

## Formatting & Polish

### Color Coding
- **Green:** Positive metrics or achievements
- **Orange:** Warning (decline, slow growth)
- **Red:** Negative or below-target
- **Blue:** Information or header rows

### Fonts & Hierarchy
- **Headers:** Bold, 12pt, light background
- **Section titles:** Bold, 11pt
- **Data rows:** Regular, 10pt
- **Important numbers:** Bold, larger font

### Freeze Panes
- Freeze Row 1 on all tabs (for headers)
- Consider freezing Column A for dates

### Number Formatting
- **Currency:** $#,##0.00 (e.g., $1,234.56)
- **Percentages:** 0.00% (e.g., 17.8%)
- **Dates:** YYYY-MM-DD (e.g., 2026-02-04)
- **Large numbers:** Use comma separator (e.g., 1,250)

---

## Automation & Time-Savers

### Google Forms Integration
Create a simple Google Form to auto-populate Tab 1:

1. Create a Google Form with fields:
   - Date
   - Gumroad Revenue
   - Gumroad Customers
   - Substack Revenue
   - Email Revenue
   - Email List Size
   - Notes

2. Link form responses to your Google Sheet
3. Form responses auto-populate a new tab
4. Use IMPORTRANGE or manual reference to pull into Tab 1

### IFTTT / Zapier
- Auto-log Twitter follower count daily
- Auto-log email subscriber count from your provider
- Send daily reminder to fill out form

### Apps Script (Advanced)
Create custom functions using Google Apps Script:
- `=FETCH_GUMROAD_DATA()` to pull revenue
- `=DAILY_DIGEST()` to email yourself a summary

---

## Maintenance Schedule

### Daily (5 min)
- Log revenue and customer counts
- Update email list size
- Note what drove sales

### Weekly (20 min)
- Update social followers
- Review conversion rates
- Update projections
- Identify top-performing content

### Monthly (1 hour)
- Complete monthly review (Tab 6)
- Archive previous month's data
- Update 12-month projections
- Plan next month's strategy

### Quarterly (2 hours)
- Deep dive on product performance
- Analyze customer acquisition trends
- Refine pricing strategy
- Update long-term goals

---

## Sharing & Collaboration

**To share with team:**
1. Click **Share** button
2. Add team member email
3. Set permissions: Editor, Viewer, or Commenter

**To create a public dashboard:**
1. Create a separate "Public Dashboard" sheet
2. Use only non-sensitive metrics (total revenue, subscriber counts)
3. Publish to web: File → Publish to web → Share link

**Safety:**
- Never share raw customer data
- Never share individual transaction details
- Safe to share: total revenue, subscriber counts, growth rates

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Formulas showing as text | Check cell format (should be "Number") or re-enter formula |
| Charts not updating | Ensure source data has new rows; expand chart data range if needed |
| #DIV/0! error | Means dividing by zero; check that denominator has data |
| #REF! error | Formula references deleted cells; re-reference correct cells |
| Slow loading | Too many formulas; break into multiple sheets or use simpler calcs |

---

## Next Steps

1. ✅ Create the Google Sheet with 6 tabs
2. ✅ Copy headers and formulas from this guide
3. ✅ Start logging daily data (even if just 1-2 fields)
4. ✅ Build charts once you have 2+ weeks of data
5. ✅ Refine projections monthly as you gather more data
6. ✅ Share monthly insights with your audience (optional)

**Pro tip:** Start simple. Don't try to fill every field on Day 1. Add complexity as you go.

