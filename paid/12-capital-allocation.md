# Capital Allocation: ROI Frameworks and Investment Decisions

## The Executive Problem

You've got money. More than you've ever had. Now you need to decide where to invest it.

Do you hire? Build product? Buy marketing? Acquire a company?

Most executives make capital allocation decisions based on instinct:
- "We need to hire" (because we're growing)
- "We should invest in product" (because product is important)
- "Let's do an acquisition" (because everyone else is)

This is backwards. Capital allocation should be ruthlessly logical.

Every dollar you spend should return more than a dollar in present value. If it doesn't, don't spend it.

Getting this right separates companies that compound over decades from companies that burn out.

## The Capital Allocation Framework: The Decision Tree

For any investment, ask four questions in order:

### Question 1: Do We Return More Than We Invest?

For every dollar invested, do we get back more than a dollar (in present value terms)?

**Examples:**

**Hire a salesperson (cost: $150K/year)**
- Expected revenue generated: $1M/year
- Contribution margin: 30%
- Net contribution: $300K/year
- Payback: 6 months
- Multi-year value: $1.5M+ (if they stay 3 years)
- **Verdict:** Yes. Expected return is 10x. Hire.

**Buy marketing software (cost: $100K/year)**
- Expected MQLs generated: 100
- Conversion rate: 10%
- SAL value: $50K avg
- Revenue: $500K
- Contribution margin: 30%
- Net contribution: $150K
- **Verdict:** Yes. Return is 1.5x. Reasonable.

**Rebrand the company (cost: $500K)**
- Expected revenue uplift: ?
- Brand awareness improvement: ?
- Stock price impact: ?
- **Verdict:** Unclear. Unknown return. Question: Can we quantify the expected return?

**If you can't quantify return, don't invest.**

### Question 2: What's the Opportunity Cost?

Where else could this money go? And would it return more?

**Example:**
You have $1M to allocate:

Option A: Hire 2 salespeople ($300K/year, $1.5M multi-year return)
Option B: Rebrand ($500K/year, unknown return)
Option C: Build new product line ($200K/year, could be huge or zero)

If Options A and B are mutually exclusive, and A returns 1.5M while B returns unknown, do A first.

**Capital allocation isn't about good ideas. It's about better ideas.**

### Question 3: What's the Probability of Success?

Best case scenarios feel good. Realistic scenarios are different.

**Example:**
Acquisition target for $10M:
- Best case: Integrate smoothly, revenue synergies = 2x
- Realistic case: Integration is messy, limited synergies = 1.2x
- Worst case: Doesn't work out = 0.5x

Probability-weighted return: (0.2 × 2) + (0.6 × 1.2) + (0.2 × 0.5) = 1.14x

If you can only earn 1.14x, is that worth the risk and management distraction?

**Be realistic about odds.**

### Question 4: What's the Timeline?

When does this return happen? Is it year 1 or year 5?

**Example:**
- Hire salesperson: Returns start month 3, peak year 1
- Invest in product: Returns might start year 2, peak year 3
- Build platform: Returns start year 3, peak year 5

**Time value of money matters.** A return that happens in year 1 is better than the same return in year 3.

---

## Original Framework: The Capital Stack Model

This model helps you sequence investments in a way that compounds.

The idea: Early investments should reduce risk and increase returns for later investments.

### The Stack

```
Tier 5 (High Risk, High Return)
   Big Bets (New Markets, M&A)
         |
Tier 4 (Medium Risk, Good Return)
   Growth (Expansion Markets, New Products)
         |
Tier 3 (Core Risk, Core Return)
   Core Product (Product Development, Sales)
         |
Tier 2 (Low Risk, Defensive)
   Survival (Operations, Tech Debt, Security)
         |
Tier 1 (Foundation)
   Cash/Runway (Never allocate 100%)
```

### How to Use It

**Rule 1: Always maintain Tier 1** (Cash/Runway)

Never allocate 100% of capital. Keep runway (months of expenses you can cover with cash).

Minimum: 6 months. Better: 12 months.

Why: Market downturns, unexpected costs, opportunities.

**Rule 2: Tier 2 Comes Before Tier 5**

Don't invest in big bets until your core business is solid.

Example: Don't expand to new geography until you've fixed your tech debt in the current geography.

If your infrastructure breaks down because of tech debt, all other investments fail.

**Rule 3: Layer Up**

Once Tier 2 is solid, invest in Tier 3.
Once Tier 3 is proven, invest in Tier 4.
Once Tier 4 is working, consider Tier 5.

**Example path for a $10M revenue company:**

- Tier 1: 12 months runway ($5M cash)
- Tier 2: 20% of annual spending ($2M) → Tech debt, security, operations
- Tier 3: 50% of annual spending ($5M) → Sales, product, core investment
- Tier 4: 20% of annual spending ($2M) → New markets, new products
- Tier 5: 10% of annual spending ($1M) → Bets (acquisitions, labs)

(Total: $15M annual spending against $10M revenue; you're investing profits and capital)

### Rebalancing

Each year, assess:
1. Is Tier 2 solid? (Is the core business stable?)
2. Is Tier 3 growing? (Is core business growing?)
3. Should we increase Tier 4-5? (Can we afford higher risk?)

As your business matures, Tier 5 (high-risk bets) can grow.

---

## Case Studies

### Case Study 1: The Company That Said No to a Bad Acquisition

**Situation:** A $50M revenue software company was offered an acquisition target for $20M.

Acquisition Target:
- $5M revenue
- 30% growth
- Overlapping customer base (60% same customers)

**The Analysis:**
- Cost: $20M
- Expected value: Eliminate duplicate costs, add revenue
  - Cost savings: $500K/year (eliminate 1 duplicate team)
  - New revenue: $2M/year (expanding into new market)
  - Revenue synergies: $1M/year (cross-sell to existing customer base)
  - Total benefit: $3.5M/year

- Return: 3.5M / 20M = 17.5% annual return

- Problem: Integration risk
  - 50% chance it goes smoothly: 1.75x return in year 3
  - 50% chance it's messy: 0.8x return (we write down the acquisition)
  - Probability-weighted return: 1.27x

**The Decision:** Pass.

Why: 1.27x return over 3 years is 8% annual. Better to invest that $20M in organic growth (sales team, product) which returns 30%+ annually.

**Lesson:** Most M&A happens because it feels strategic, not because it's economically smart. Run the numbers.

### Case Study 2: The Company That Invested in Tier 2 and Saved Itself

**Situation:** A SaaS company had grown to $10M revenue without paying attention to technical debt.

Code was messy. Infrastructure was brittle. Onboarding new engineers took months.

Every new feature was a battle because the codebase was so tangled.

**The Problem:**
- Feature velocity dropping (15% decline year-over-year)
- Engineer turnover (frustrated developers leaving)
- Customer churn (product stagnating, customers leaving)

They had capital ($20M from Series B). Tempting to spend it on sales.

**The Difficult Decision:**
Instead, they allocated $10M to tech debt:
- Rewrite core platform (12 months, 5 engineers)
- Modernize infrastructure
- Build better developer tools
- Document architecture

**What happened:**
- Year 1: No new features (scary)
- Year 2: Feature velocity doubled
- Engineer hiring: Easier (good codebase attracts talent)
- Churn: Reduced (product improved faster)

**Result:**
By addressing Tier 2 (foundation), Tier 3 (core business) got stronger.

If they'd skipped this and invested in sales, they'd have quickly hit a ceiling (architecture couldn't scale).

### Case Study 3: The Portfolio Approach to Capital

**Situation:** A $100M revenue company had $30M annual capital to allocate.

They took a portfolio approach:

**Allocation:**
- 10% ($3M) → Runaway (maintain 12 months)
- 25% ($7.5M) → Core (tech debt, infrastructure, security)
- 40% ($12M) → Core Product (sales team, product development)
- 15% ($4.5M) → Expansion (new geography, new product line)
- 10% ($3M) → Bets (acquisitions, internal labs)

**Rules:**
- Tier 1 (runaway) is sacred (never spend below 6 months)
- Tier 2 gets 25% minimum (don't starve foundation)
- Tier 3-5 can be reallocated based on opportunity

**Results:**
- Stable, compounding growth (30% CAGR)
- Product quality maintained (Tier 2 prevented degradation)
- New initiatives launched (Tier 4-5 creating optionality)
- No crisis moments (healthy runway, no forced decisions)

---

## The Capital Allocation Process

### Annual Capital Planning

**Step 1: Calculate Available Capital**

```
Operating Profit: $[X]
+ Non-cash items (depreciation, stock comp): $[Y]
+ External funding: $[Z]
= Available Capital: $[X+Y+Z]
```

**Step 2: Allocate by Tier**

```
Tier 1 (Runaway): 12-month expenses
Tier 2 (Foundation): 25-40% of capital
Tier 3 (Core): 40-50% of capital
Tier 4 (Growth): 10-20% of capital
Tier 5 (Bets): 5-10% of capital
```

**Step 3: Generate Proposals**

Each department proposes investments. For each, calculate:
- Cost (annual and multi-year)
- Expected benefit (revenue, cost savings, risk reduction)
- Probability of success
- Timeline to return
- Opportunity cost (what else could this capital do?)

**Step 4: Rank by ROI**

Rank proposals by Expected Return / Cost.

Go down the list, allocating capital to highest ROI first (within tier constraints).

**Step 5: Monthly Review**

Track actual returns vs. expected. If something is underperforming, reallocate.

---

## Templates

### Investment Decision Template

```
Investment: [Name]

Cost: $[X] upfront, $[Y] annually

Expected Benefit:
- Quantifiable: [Revenue, cost savings, time saved]
- Unquantifiable: [Brand, risk reduction, optionality]

Expected Return:
- Year 1: [X]
- Year 2: [X]
- Year 3: [X]

Probability of Success: [X]%

Probability-Weighted Return: [Calculate]

Opportunity Cost: [What else could we do with this capital?]

Decision: [Approve/Reject]
```

### Capital Stack Allocation Template

```
Tier | Purpose | Allocation | Amount |
1 | Runaway (maintain cash) | 10-15% | $[X] |
2 | Foundation (tech, ops, security) | 25-40% | $[X] |
3 | Core (product, sales, marketing) | 40-50% | $[X] |
4 | Growth (new markets, new products) | 10-20% | $[X] |
5 | Bets (acquisitions, labs) | 5-10% | $[X] |
```

---

## Next Steps

**This Month:**
- Calculate your available capital (profit + external funding)
- Build Tier 1-2 budget (runaway + foundation)
- Generate 5-10 investment proposals with ROI estimates

**This Quarter:**
- Allocate full capital across the stack
- Implement monthly tracking of returns vs. expectations
- Kill 2-3 underperforming investments

**This Year:**
- Allocate capital twice (mid-year rebalancing)
- Measure actual returns vs. expected for each Tier
- Adjust allocation based on results

Capital allocation is how you compound. Most companies compound slowly because they allocate capital poorly. Get this right, and you double your business without working harder—you just work more strategically.

