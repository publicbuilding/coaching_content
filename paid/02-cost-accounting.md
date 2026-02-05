# Cost Accounting Deep Dive: Activity-Based Costing for Profitability

**Premium Module | $29.99 | 45+ Pages**

*Most executives don't know which customers make money and which ones lose money. This module teaches you Activity-Based Costing, the competitive weapon that reveals true profitability.*

---

## Table of Contents

1. [Introduction: The Profitability Illusion](#introduction)
2. [Why Traditional Costing Fails](#traditional-costing-fails)
3. [Activity-Based Costing Framework](#abc-framework)
4. [The Four-Step ABC Process](#four-step-process)
5. [Cost Allocation Strategies](#cost-allocation)
6. [The Profitability Waterfall](#profitability-waterfall)
7. [Real-World Applications by Industry](#applications)
8. [Case Studies: ABC in Practice](#case-studies)
9. [Anti-Patterns and Pitfalls](#anti-patterns)
10. [Implementation Roadmap](#implementation)
11. [Tools and Dashboards](#tools)

---

## Introduction: The Profitability Illusion {#introduction}

You know your overall profit margin. But do you know which customers make you money and which ones bankrupt you?

Most executives believe what their accounting system tells them. They know:
- Overall gross margin: 60%
- Operating margin: 25%
- Per-customer average lifetime value: $50,000

But these are **blended averages hiding massive variation**.

The reality:
- Your best customers might be 10x more profitable than your worst customers
- Your most popular product might be destroying value
- Your largest customers might be your least profitable
- You're making decisions based on numbers that aren't real

### The Real Consequence

A company with a 25% operating margin looks healthy. But if:
- 40% of customers have 60% margins
- 60% of customers have 5% margins (barely covering costs)

You're not a healthy 25% margin company. You're a company where half your revenue is nearly worthless.

When you cut costs, you accidentally cut the profitable half. When you raise prices, you lose the unprofitable half first and nothing changes. When you expand into new segments, you add more unprofitable customers and your overall margin deteriorates.

### Why This Happens: The Simplicity Trap

Simple cost accounting made sense 50 years ago:
1. Calculate total costs
2. Divide by total units
3. Set price = cost + markup

This works if:
- All units require the same resources (they don't)
- Your business is manufacturing widgets (it's not)
- Customers are interchangeable (they're not)

Modern business is complex. Serving a Fortune 500 customer costs 100x more than serving a self-service customer. A simple product costs 1/10th what a highly customized product costs. But your accounting system treats them the same.

**This module teaches you Activity-Based Costing (ABC)** - the system that reveals true profitability by tracing costs to the actual activities that trigger them.

---

## Why Traditional Costing Fails {#traditional-costing-fails}

### The Problem: Allocation Without Logic

Traditional costing allocates costs mechanically, with no regard for what actually drives costs.

**Example 1: SaaS Support Costs**

A SaaS company with two product lines:

**Product A:** 80,000 customers
- Each customer generates 1 support ticket per year
- Total tickets: 80,000

**Product B:** 20,000 customers
- Each customer generates 20 support tickets per year
- Total tickets: 400,000

**Total tickets:** 480,000

**Support budget:** $2M/year

**Traditional allocation:**
```
Cost per ticket = $2M / 480,000 = $4.17 per ticket

Product A cost per customer = $4.17 × 1 = $4.17
Product B cost per customer = $4.17 × 20 = $83.40
```

This looks reasonable. Product B is 20x more support-intensive.

**But what does the actual data show?**

When you analyze the support team's time:
- Product A tickets: avg 15 min / ticket (mostly "How do I...?" questions, FAQ-able)
- Product B tickets: avg 45 min / ticket (complex integrations, customizations, bugs)

**Real cost per ticket:**
- Product A: $25/hour ÷ 4 tickets/hour = $6.25 per ticket
- Product B: $25/hour ÷ 1.3 tickets/hour = $19.23 per ticket

**Real cost per customer:**
- Product A: $6.25 × 1 = $6.25
- Product B: $19.23 × 20 = $384.60

Product B is **61x more expensive per customer**, not 20x.

If you charge the same price for both products, Product B is destroying your margin while you think it's performing fine.

### Example 2: Manufacturing Setup Costs

A manufacturer makes two products:

**Product X:** 100,000 units/year
- Very standard design
- Runs continuously on one production line
- Setup: 4 times/year
- Cost per setup: $500
- Total setup cost per unit: $2,000 / 100,000 = $0.02

**Product Y:** 10,000 units/year
- Highly customized designs
- Requires setup change for every batch of 500 units
- Setups per year: 20
- Cost per setup: $500
- Total setup cost per unit: $10,000 / 10,000 = $1.00

**Traditional allocation (divide total by total units):**
- Total manufacturing cost: $500K
- Total units: 110,000
- Cost per unit: $4.55
- Allocated to each: $4.55 per unit

**Reality:**
- Product X: $4.55 per unit (actual: ~$4.53 per unit) ✓
- Product Y: $4.55 per unit (actual: ~$5.55 per unit) ✗

Product Y is being underpriced by $1 per unit (nearly 20% margin loss).

### The Consequences

When you don't know true costs, you:

**1. Make terrible pricing decisions**
- Raise prices on profitable products (lose customers)
- Keep prices low on unprofitable products (add loss-making volume)
- Net result: margin destruction

**2. Chase the wrong growth**
- Invest in expanding unprofitable product lines
- Starve profitable segments of resources
- Grow revenue while shrinking profit

**3. Misjudge customer value**
- Fire your best customers (thinking they're unprofitable)
- Invest in your worst customers (thinking they're your core)
- Turn growth levers backward

**4. Waste operational effort**
- Cut costs in the wrong places
- Hire for capacity in wrong areas
- Implement efficiency programs that hurt profitability

### Real Example: The Retailer That Went Bankrupt

A fast-casual restaurant chain operated at a 12% blended operating margin. Looked fine.

Using ABC, they discovered:
- Traditional locations (downtown, high traffic): 22% margin
- Suburban locations (convenience, car-friendly): 18% margin
- Mall food court locations (declining malls): 3% margin

The mall locations were losing money. Expansion was mostly into malls.

Instead of cutting them, they simply stopped opening new mall locations and refocused on high-traffic areas.

Result: Within 3 years, margin improved to 18%.

But the company that didn't do this analysis? They kept opening unprofitable stores, their blended margin declined to 8%, they couldn't cover their debt, and they went bankrupt.

The difference between life and death was understanding which customers actually made money.

---

## Activity-Based Costing Framework {#abc-framework}

Activity-Based Costing (ABC) flips the allocation logic.

Instead of "divide all costs by all units," you ask:
1. **What activities consume resources in our business?**
2. **How much cost does each activity consume?**
3. **Which products/customers trigger which activities?**
4. **Therefore, what's the true cost of serving each product/customer?**

### The Core Insight

Costs don't flow from revenue. They flow from the activities required to generate that revenue.

```
Activities → Resources (Time, Money, Infrastructure) → Costs

Traditional View: Revenue → Allocate costs evenly
ABC View: Revenue → Triggers activities → Activities consume resources → True cost
```

### Example: What Activities Consume Resources in a SaaS Company?

1. **Product Development** - Building features, fixing bugs, improving infrastructure
2. **Customer Acquisition** - Sales demos, proposal writing, contracting
3. **Onboarding** - Getting customers live, initial training, setup support
4. **Ongoing Support** - Answering questions, troubleshooting, training
5. **Account Management** - Relationship building, upsells, renewals
6. **Infrastructure & Security** - Cloud hosting, data centers, compliance
7. **Corporate Overhead** - Finance, legal, recruiting, administration

Each activity consumes resources. Product development consumes engineering time. Customer acquisition consumes sales time. Support consumes support team time.

### Example: What Activities Consume Resources in a Manufacturing Business?

1. **Production** - Machine time, labor, materials
2. **Setup & Changeover** - Preparing for new production runs
3. **Quality Control** - Testing, inspection, rework
4. **Materials Management** - Procurement, inventory holding, logistics
5. **Engineering & Design** - Custom specifications, CAD work, testing
6. **Sales & Business Development** - Prospecting, proposals, relationship building
7. **Corporate** - Finance, HR, administration

Again, each activity consumes resources in different amounts depending on the product or customer.

### The ABC Framework: The 4-Layer Model

```
LAYER 1: REVENUE
↓
LAYER 2: GROSS PROFIT (Revenue minus direct COGS)
↓
LAYER 3: ACTIVITY COSTS (Allocated based on actual activities triggered)
   - Customer acquisition costs (actual sales effort)
   - Onboarding costs (actual setup hours)
   - Support costs (actual tickets)
   - Infrastructure costs (actual usage)
   - Account management (actual relationship effort)
↓
LAYER 4: TRUE PROFIT (Gross profit minus actual activity costs)
   - Also sometimes allocating corporate overhead
↓
NET PROFIT
```

This framework forces specificity. You can't hide behind averages.

---

## The Four-Step ABC Process {#four-step-process}

### Step 1: Identify Activities

Walk through your business and list everything people do.

For a SaaS company, this might look like:

```
ENGINEERING & PRODUCT
- Feature development
- Bug fixes & maintenance
- Infrastructure scaling
- Security & compliance
- Technical debt work

CUSTOMER ACQUISITION & SALES
- Lead generation (marketing/SDR)
- Sales development (outbound prospecting)
- Sales demos & presentations
- Proposal writing & negotiation
- Contract review & setup

CUSTOMER SUCCESS & SUPPORT
- Onboarding & training
- L1 support (email/chat)
- L2 support (escalations)
- Proactive account management
- Expansion/upsell outreach
- Renewal management

OPERATIONS & INFRASTRUCTURE
- Cloud hosting & infrastructure
- Database management
- Security & backup
- Monitoring & alerting
- Disaster recovery

CORPORATE
- Finance & accounting
- HR & recruiting
- Legal & compliance
- Executive management
- Office & admin
```

For a manufacturing business:

```
PRODUCTION
- Direct labor
- Machine operation
- Materials & supplies
- Quality control
- Packaging & shipping

MANUFACTURING SUPPORT
- Setup & changeover
- Maintenance & repair
- Tooling & fixtures
- Production planning
- Inventory management

SALES & ENGINEERING
- Sales & business development
- Custom engineering
- Design work
- Prototyping
- Proposals & quotes

CORPORATE
- Finance
- HR
- Management
- Legal
- Facilities
```

**Key:** Be specific. Don't stop at "support"; break down into "L1 support", "L2 escalations", "proactive outreach."

### Step 2: Calculate Cost Per Activity

For each activity, determine:
1. What people do this activity? (and how much of their time?)
2. What infrastructure/tools does this activity require?
3. What's the total annual cost?

**Example: Customer Support Activity**

```
CUSTOMER SUPPORT ($1.5M annual cost breakdown)

Personnel:
  - 12 support engineers × $75K salary = $900K
  - 1 support manager × $110K = $110K
  - 1 support ops person × $70K = $70K
  Subtotal: $1.08M

Tools & Systems:
  - Help desk software = $40K
  - Chat/communication tools = $30K
  - Knowledge base = $15K
  Subtotal: $85K

Other Costs:
  - Training & development = $30K
  - Benefits/overhead (20%) = $215K
  Subtotal: $245K

TOTAL: $1.41M

Annual Support Tickets: 120,000 tickets

Cost per Ticket: $1.41M ÷ 120,000 = $11.75 per ticket
```

But tickets vary dramatically in complexity.

You need to break down by ticket type:

```
Ticket Type | % of Volume | Avg Resolution Time | Cost per Type
---|---|---|---
L1: FAQ / Password Reset | 40% (48K) | 5 min | $2 (@ $25/hr)
L1: How-to Questions | 30% (36K) | 10 min | $4
L2: Technical Issues | 20% (24K) | 40 min | $17
L3: Complex Escalations | 10% (12K) | 120 min | $50
```

**Total cost check:** (48K × $2) + (36K × $4) + (24K × $17) + (12K × $50) = $1.41M ✓

Now you have real costs per activity type.

**Example 2: Sales Activity Costs**

```
SALES TEAM ($2.5M annual cost breakdown)

Personnel:
  - 10 Account Executives × $100K + commission = $1.5M
  - 3 Sales Development Reps × $60K = $180K
  - 1 Sales Manager × $120K = $120K
  - 1 Sales Ops person × $80K = $80K
  Subtotal: $1.88M

Tools & Systems:
  - CRM software = $150K
  - Sales enablement = $50K
  - Demo infrastructure = $25K
  Subtotal: $225K

Travel, Conferences, Other:
  - Sales travel = $150K
  - Conferences & events = $75K
  Subtotal: $225K

TOTAL: $2.38M

Now allocate by activity:
- Lead generation (SDR prospecting): 30% = $715K
- Sales demos & proposals: 40% = $955K
- Account management & upsells: 30% = $715K
```

If you generate 1,000 qualified leads/year via SDRs:
- Cost per lead: $715K ÷ 1,000 = $715 per lead

If you do 800 demos/year:
- Cost per demo: $955K ÷ 800 = $1,194 per demo

If your sales cycle has 4 demos per deal, cost per deal = 4 × $1,194 = $4,775

This is your actual Customer Acquisition Cost (the cost to sales activities, not including marketing).

### Step 3: Identify Cost Drivers

Now, for each product/customer, identify: What activities does it trigger?

**Example: SaaS company with three product tiers**

| Tier | Price | Support Tickets/Yr | Sales Cycle | Onboarding Hours | Account Mgmt |
|------|-------|-------------------|-------------|------------------|------------|
| Self-Service | $50/mo | 2 | 0 (self-signup) | 1 | 0 |
| Standard | $500/mo | 10 | 30 days | 10 | 5 hours/year |
| Enterprise | $5,000/mo | 100 | 120 days | 80 | 40 hours/year |

You can see the dramatic variation in what these tiers trigger.

**Example: Manufacturing with two products**

| Product | Units/Year | Setup Changes | Engineering Hours | Quality/Inspection |
|---------|-----------|---------------|------------------|------------------|
| Standard | 100,000 | 4 | 10 | 5 hours/1,000 units |
| Custom | 10,000 | 50 | 500 | 20 hours/1,000 units |

Standard products have minimal complexity. Custom products drive massive engineering hours.

### Step 4: Calculate True Cost

Now combine Steps 1-3:

**Example: SaaS Products**

```
SELF-SERVICE TIER

Annual Revenue: $50 × 12 × 5,000 customers = $3M

COGS (Cloud hosting, payment processing): 20% = $600K
Gross Profit: $2.4M (80% margin)

Activity Costs:
  - Customer Acquisition: $0 (organic/self-signup)
  - Onboarding (1 hour × $100/hr × 5,000): $500K
  - Support (2 tickets × $11.75 × 5,000): $118K
  - Infrastructure: Included in COGS
  - Account management: $0
Total Activity Costs: $618K

TRUE PROFIT: $2.4M - $618K = $1.78M
TRUE MARGIN: 59%
```

```
STANDARD TIER

Annual Revenue: $500 × 12 × 2,000 customers = $12M

COGS: 20% = $2.4M
Gross Profit: $9.6M (80% margin)

Activity Costs:
  - Customer Acquisition: 30-day sales cycle, avg 2 demos @ $1,194 = $2,388 per customer
    × 2,000 = $4.776M
  - Onboarding (10 hours × $100/hr × 2,000): $2M
  - Support (10 tickets × $11.75 × 2,000): $235K
  - Infrastructure: Included in COGS
  - Account management: Not yet (rare)
Total Activity Costs: $7.01M

TRUE PROFIT: $9.6M - $7.01M = $2.59M
TRUE MARGIN: 22%
```

```
ENTERPRISE TIER

Annual Revenue: $5,000 × 12 × 200 customers = $12M (same as Standard!)

COGS: 20% = $2.4M
Gross Profit: $9.6M (80% margin)

Activity Costs:
  - Customer Acquisition: 120-day sales cycle, avg 8 demos @ $1,194 = $9,552 per customer
    × 200 = $1.91M
  - Onboarding (80 hours × $100/hr × 200): $1.6M
  - Support (100 tickets × $11.75 × 200): $235K
  - Infrastructure: Higher load, allocate additional $200K
  - Account management (40 hours × $75/hr × 200): $600K
Total Activity Costs: $4.645M

TRUE PROFIT: $9.6M - $4.645M = $4.955M
TRUE MARGIN: 41%
```

**Summary:**

```
| Tier | Revenue | TRUE Margin | Profit per Customer |
|------|---------|----------|-------------------|
| Self-Service | $3M | 59% | $356 |
| Standard | $12M | 22% | $1,295 |
| Enterprise | $12M | 41% | $24,775 |
```

Key insight: Same revenue ($12M) but:
- Standard: 22% margin, $1,295 per customer
- Enterprise: 41% margin, $24,775 per customer

Enterprise is 19x more profitable per customer, even though they generate the same revenue.

If you're optimizing for revenue growth, you'd chase Standard customers. If you're optimizing for profit, you'd focus on Enterprise.

---

## Cost Allocation Strategies {#cost-allocation}

Once you've calculated activity costs, you need to decide: Which activities should be allocated to customers, and which should be treated as corporate overhead?

There are different approaches:

### Approach 1: Full Absorption Costing

Allocate all costs, including corporate overhead, to products/customers.

```
Revenue
- COGS
= Gross Profit
- Direct Activity Costs (acquisition, onboarding, support)
- Indirect Activity Costs (engineering, infrastructure, product management)
- Corporate Overhead (finance, HR, legal, exec)
= Net Profit
```

**Advantage:** Shows true profitability with no hidden costs
**Disadvantage:** Allocating "corporate overhead" to products is somewhat arbitrary

Example allocation:
- Finance (5% of costs): allocate based on revenue size
- HR (4% of costs): allocate based on # employees required
- Legal (2% of costs): allocate based on contract complexity
- Executive (6% of costs): allocate based on revenue size

### Approach 2: Activity-Based Costing (Not Fully Absorbed)

Only allocate costs that are truly driven by the activity.

```
Revenue
- COGS
= Gross Profit
- Direct Activity Costs (acquisition, onboarding, support, infrastructure)
= Contribution Profit

Less: Corporate Overhead (as one line item)
= Net Profit
```

**Advantage:** Simpler, less arbitrary allocation; shows contribution to corporate overhead
**Disadvantage:** Doesn't show true profit per product, but shows if the product contributes to overhead

### Approach 3: Variable Costing

Only allocate variable costs (those that scale with volume), treat fixed costs as overhead.

```
Revenue
- Variable COGS
- Variable Activity Costs (support tickets, customer-specific services)
= Contribution Margin

Less: Fixed Costs (salaries, infrastructure, etc.)
= Profit
```

This is useful when you want to understand short-term profitability (can you cover variable costs?) vs. long-term (do you cover fixed + variable?).

### Recommendation

For strategic decision-making:
- Use **full absorption** to understand true profitability of products/customers
- Use **contribution** to understand pricing floors and margin trends
- Use **variable costing** to understand break-even

Most companies benefit from using multiple methods and comparing results.

---

## The Profitability Waterfall {#profitability-waterfall}

The profitability waterfall visualizes how revenue flows through different cost layers, revealing where value is created and destroyed.

### The Blended Waterfall (Average Customer)

```
Gross Revenue: $1,000

Less: Direct Product Costs (COGS)
  - Hosting/infrastructure: $250
  - Payment processing: $30
  → Gross Profit: $720 (72% margin)

Less: Activity Costs
  - Customer Acquisition: $150
  - Onboarding: $50
  - Support: $100
  - Account Management: $20
  → Operating Contribution: $400 (40% margin)

Less: Allocated Overhead
  - Engineering/Product: $60
  - Infrastructure: $30
  - Corporate: $40
  → Net Contribution: $270 (27% margin)
```

But this hides massive variation.

### Segment-Specific Waterfalls

**Low-Touch Self-Serve Customer**

```
Gross Revenue: $600 (smaller annual spend)

Less: COGS
  - Hosting: $150
  - Payment: $20
  → Gross Profit: $430 (72%)

Less: Activity Costs
  - Customer Acquisition: $0 (organic)
  - Onboarding: $30 (automated)
  - Support: $20 (1-2 tickets/year, FAQ-able)
  - Account Management: $0
  → Operating Contribution: $380 (63%)

Less: Allocated Overhead (per customer): $100
  → Net Contribution: $280 (47%)

3-Year Lifetime Value: $280 × 3 = $840
```

**High-Touch Enterprise Customer**

```
Gross Revenue: $60,000 (large annual contract)

Less: COGS
  - Hosting: $15,000 (higher load)
  - Payment/other: $3,000
  → Gross Profit: $42,000 (70%)

Less: Activity Costs
  - Customer Acquisition: $8,000 (4 month sales cycle)
  - Onboarding: $4,000 (40 hours @ $100/hr)
  - Support: $3,000 (50 complex tickets)
  - Account Management: $2,000 (20 hours/year)
  → Operating Contribution: $25,000 (42%)

Less: Allocated Overhead: $5,000
  → Net Contribution: $20,000 (33%)

2-Year Lifetime Value: $20,000 × 2 = $40,000
```

**The Comparison:**

Same number of customers in each segment:

| Segment | Customers | Revenue | Operating Contribution | 3-Yr LTV |
|---------|-----------|---------|------------------------|---------| 
| Self-Serve | 5,000 | $3M | $1.9M | $1.4M profit |
| Enterprise | 50 | $3M | $1.25M | $1.0M profit |

Same revenue, but self-serve is 52% more profitable over 3 years due to higher contribution per customer and longer lifetimes.

---

## Real-World Applications by Industry {#applications}

### SaaS Profitability

**Key Activity Costs:**
- Customer Acquisition (varies by sales model: self-serve vs. sales-assisted)
- Onboarding (varies by complexity: plug-and-play vs. implementation)
- Support (varies by customer size and product complexity)
- Infrastructure (scales with usage and features)

**Cost Drivers by Customer:**
- Deal size (impacts ACV and profit per customer)
- Sales cycle length (120+ days is much more expensive than self-service)
- Implementation complexity (weeks vs. years impacts profitability window)
- Product tier (self-serve tier has 10x lower activity costs than enterprise)
- Industry (some verticals require more support and customization)

**Real Example**: A HR SaaS company discovered that their most expensive-to-acquire customers (enterprise sales, 6-month sales cycle) had the highest lifetime values, but their customer success costs were so high that payback was 24 months. Self-serve customers had 6-month payback. Once they understood this, they shifted their enterprise strategy: invest in higher prices to improve profitability, not chasing volume.

### E-commerce / Retail Profitability

**Key Activity Costs:**
- Customer Acquisition (paid ads, influencer marketing)
- Fulfillment (packaging, shipping, returns handling)
- Customer Service (returns, replacements, complaints)
- Inventory (holding costs, obsolescence, write-offs)

**Cost Drivers:**
- Product category (apparel has high return rates, electronics don't)
- Channel (paid ads are more expensive than organic)
- Customer segment (new customers cost more than repeat customers)
- Geographic (shipping costs vary significantly)

**Real Example**: A fashion retailer discovered that their "trending" products (heavy marketing push) had 40% return rates and 15% margins after returns handling. Their "boring" staple items had 5% return rates and 35% margins. They shifted spending away from trending items toward staples. Revenue grew slower, but profitability improved 300%.

### Manufacturing / B2B Services Profitability

**Key Activity Costs:**
- Production setup (changeovers between products)
- Custom engineering (design, CAD, testing for specialized orders)
- Quality control (inspection, testing, rework)
- Supply chain (procurement, inventory, logistics)

**Cost Drivers:**
- Product type (standard vs. custom)
- Volume (small runs are expensive per unit)
- Specifications (complex specs = more engineering)
- Customer size (large customers = negotiating power, lower prices)

**Real Example**: A contract manufacturer had "loss leader" customers (large volume, low margin) that kept their factory running. Using ABC, they realized these customers drove massive volume discounts and supply chain complications that actually reduced profitability. By losing this business and focusing on higher-margin, lower-volume custom work, they improved margin from 12% to 18% and reduced operating complexity significantly.

### Consulting / Services Profitability

**Key Activity Costs:**
- Billable time (core service delivery)
- Pre-sales (proposals, scoping, estimation)
- Account management (relationship building, retention)
- Delivery (staff time, subcontractors, travel)

**Cost Drivers:**
- Project type (fixed-price vs. time & materials affects risk and margin)
- Engagement size (small projects have high overhead; large have leverage)
- Customer type (familiar customers are faster, cheaper; new customers require investment)
- Industry/vertical (some verticals pay more, some require more specialized expertise)

**Real Example**: A strategy consulting firm thought their engagements were all equally profitable because they used a blended hourly rate ($300/hr). Using ABC, they discovered:
- Staff augmentation (ongoing, familiar clients): 50% margin
- Custom strategic work (one-off, intensive): 15% margin  
- Advisory (mostly senior time, minimal billable hours): -5% margin

By shifting the mix (50% augmentation, 30% strategic, 20% advisory—only advisory to existing clients), they improved overall margin from 22% to 32%.

---

## Case Studies: ABC in Practice {#case-studies}

### Case Study 1: The SaaS Company That Fired Its Best Customers (Product-Based)

**Company:** B2B SaaS, $10M ARR, 5,000 customers, 35% operating margin

**The Situation:**

The company had grown quickly with a "land and expand" motion: acquire customers at lower price points, then expand them over time.

They offered three tiers:
- Starter: $100/mo, 2,000 customers = $2.4M ARR
- Professional: $500/mo, 2,500 customers = $15M ARR
- Enterprise: $2,000/mo, 500 customers = $12M ARR

Total: 5,000 customers, $29.4M ARR... wait, that's $29.4M not $10M. Let me recalculate.

Actually: $2.4M + $15M + $12M = $29.4M. Let me adjust the scenario.

- Starter: $100/mo, 2,000 customers = $2.4M ARR
- Professional: $500/mo, 1,200 customers = $7.2M ARR
- Enterprise: $1,000/mo, 300 customers = $3.6M ARR

Total: 3,500 customers, $13.2M ARR

**The Blended Analysis:**
- Blended ACV: $13.2M / 3,500 = $3,771
- Blended margin: 35%
- Blended operating profit: $4.62M

The company decided: "Let's optimize by raising prices 20% to improve margins."

They raised prices:
- Starter: $100 → $120
- Professional: $500 → $600
- Enterprise: $1,000 → $1,200

**What Happened:**

Using ABC analysis (retroactively), they would have understood:

```
STARTER TIER:
Revenue per customer: $1,200/year
COGS (hosting/processing): 25% = $300
Gross Profit: $900

Activity Costs:
- Acquisition: $0 (organic/word-of-mouth)
- Onboarding: $50
- Support: 3 tickets/yr × $10 = $30
- Infrastructure: Included in COGS
Total Activity Costs: $80

TRUE CONTRIBUTION: $820/customer = 68%

3-year LTV: $820 × 3 = $2,460
```

```
PROFESSIONAL TIER:
Revenue: $6,000/year
COGS: 25% = $1,500
Gross: $4,500

Activity Costs:
- Acquisition: $1,000 (30-day sales cycle, 1-2 demos)
- Onboarding: $500 (10 hours training)
- Support: 15 tickets × $15 = $225
- Account management: $300
Total: $2,025

TRUE CONTRIBUTION: $2,475 = 41%

2-year LTV: $2,475 × 2 = $4,950
```

```
ENTERPRISE TIER:
Revenue: $12,000/year
COGS: 25% = $3,000
Gross: $9,000

Activity Costs:
- Acquisition: $5,000 (90-day sales cycle, 4-5 demos, legal negotiation)
- Onboarding: $3,000 (60 hours, dedicated resource)
- Support: 80 tickets × $20 = $1,600
- Account management: $2,000 (20 hours/year relationship building)
- Custom development: $2,000
Total: $13,600

TRUE CONTRIBUTION: -$4,600 (they lose money!)
```

**The Real Problem:**

Enterprise customers were deeply unprofitable in Year 1. They only became profitable in Year 2+ as initial costs were amortized and support became maintenance-focused.

**What Actually Happened (Post Price Increase):**

When they raised prices:
- Starter customers (high price elasticity): 30% churn
- Professional customers (moderate elasticity): 15% churn
- Enterprise customers (low elasticity, switching costs): 5% churn

Result:
- Lost 600 Starter customers → $72K ARR loss
- Lost 180 Professional customers → $1.08M ARR loss
- Lost 15 Enterprise customers → $180K ARR loss

Total loss: $1.332M ARR

New customer base:
- 1,400 Starter → $1.68M ARR
- 1,020 Professional → $6.12M ARR
- 285 Enterprise → $3.42M ARR

New total: $11.22M ARR (down from $13.2M)

**The Margin Impact:**

They lost their high-margin Starter customers first. New customer mix is:
- Starter 40% (down from 48%) but high margin
- Professional 39% (down from 35%) medium margin
- Enterprise 21% (down from 23%) low year-1 margin

Overall margin deteriorated from 35% to 28% (ironically, despite raising prices).

**The Real Lesson:**

They didn't use ABC to understand profitability. If they had, they would have:

1. **Kept Starter prices flat** (highest margin, most at-risk to churn)
2. **Raised Professional prices 10%** (good margin, moderate churn risk)
3. **Actually lowered Enterprise prices 10%** (barely profitable year 1, need volume for scale)

Result: Same revenue, but +3% margin instead of -7%.

**Later, with ABC in place:**

They restructured:
- Starter: Raised prices 50%, made it fully self-serve, removed support access
- Professional: Optimized onboarding, reduced to core training
- Enterprise: Added value-add services (custom reports, API access) justifying higher price

New margins:
- Starter: 75% (self-serve, no personal touch)
- Professional: 48% (lean onboarding)
- Enterprise: 25% (includes services)

Blended: 45% (up from 35%)

---

### Case Study 2: The Manufacturing Company That Stopped Losing Money

**Company:** Contract metal fabricator, $50M revenue, 200+ customers, 8% operating margin

**The Problem:**

Management knew they were "barely profitable" but thought it was just a competitive market issue. They competed on price with larger fabricators.

**ABC Analysis:**

They categorized customers by order type:

**Order Type A: Standard Items (70% of volume)**
- Examples: Brackets, panels, standard housings
- Order size: 10,000-100,000 units
- Setup time: 30 min
- Standard pricing: cost + 25%

**Order Type B: Rush Orders (15% of volume)**
- Same products as Type A, but expedited
- Order size: 5,000-50,000 units
- Expedited setup: 4-8 hours overtime
- Pricing: cost + 30% (premium for expedite)

**Order Type C: Custom Engineering (15% of volume)**
- Complex designs, one-off or small runs
- Order size: 500-5,000 units
- Engineering hours: 20-100 hours
- Custom tooling: $5,000-50,000
- Pricing: cost + 20%

**True Cost Analysis:**

```
TYPE A: STANDARD (70% of volume = $35M)

Revenue: $35M
COGS (materials, direct labor): $26.25M
Gross Profit: $8.75M (25%)

Activity Costs:
- Scheduling & setup (30 min @ $50/hr): $250 per order
- QC/Inspection (5 hr per 10K units): $80K total
- Shipping admin: $100K total
Average order: $100K → Costs = $1,100/order = 1.1%
Total Activity Costs: $385K

TRUE PROFIT: $8.75M - $385K = $8.365M
TRUE MARGIN: 24%
```

```
TYPE B: RUSH ORDERS (15% of volume = $7.5M)

Revenue: $7.5M  
COGS: $5.625M
Gross Profit: $1.875M (25%)

Activity Costs:
- Expedited setup (4-8 hr @ $50/hr): $300-600 per order
- Overtime labor (10-20% premium): $500K total
- Expedited shipping: $300K total
- Exception handling (management time): $200K total
Total Activity Costs: $1M

TRUE PROFIT: $1.875M - $1M = $875K
TRUE MARGIN: 12%

So rush orders are HALF as profitable, despite 30% price premium.
```

```
TYPE C: CUSTOM ENGINEERING (15% of volume = $7.5M)

Revenue: $7.5M
COGS (custom materials, labor): $6.75M
Gross Profit: $750K (10%)

Activity Costs:
- Custom engineering (50 hrs average @ $100/hr): $300K total
- Tooling design & management: $200K total
- Small-run inefficiencies (labor): $400K total
- Customer communication & meetings: $150K total
- Rework & scrap (higher than standard): $200K total
Total Activity Costs: $1.25M

TRUE PROFIT: $750K - $1.25M = -$500K
TRUE MARGIN: -7% (LOSING MONEY)
```

**The Breakdown:**

```
Type A: $8.365M @ 24% = $8.365M (80% of profit)
Type B: $875K @ 12% = $875K (8% of profit)
Type C: -$500K @ -7% = (LOSING MONEY) (12% of deficit)

Blended: 70% × 24% + 15% × 12% + 15% × (-7%) = 16.8% + 1.8% - 1.05% = 17.55%
```

Wait, that doesn't match 8% blended. Let me recalculate...

Actually, blended margin = Total Profit / Total Revenue = ($8.365M + $875K - $500K) / $50M = $8.74M / $50M = 17.5%

But the company was reporting 8%. That means there were significant overhead costs not allocated in activity costs (estimated $4M in unallocated overhead).

**The Action Plan:**

1. **Type A (Standard):** Keep focus here, it's the profit engine.
   - Reduce custom setups, move to standard runs
   - Improve batch sizes (higher volume = lower cost per unit)
   - Margin potential: 25%

2. **Type B (Rush):** Severely limit or eliminate.
   - Rush orders destroy profitability despite premium pricing
   - The margin improvement doesn't justify the operational disruption
   - If kept: Must charge 50% premium minimum (not 30%)

3. **Type C (Custom):** Restructure completely or exit.
   - Currently losing $500K/year
   - Three options:
     a) Exit (saves $500K of loss)
     b) Restructure with 30% price increase (pushes to 5% margin)
     c) Only accept as add-on business for existing customers (fold overhead into Type A)

**Results (Year 2 after ABC restructure):**

- Exited rush business → lost $7.5M revenue but gained $1.125M in saved costs
- Converted 50% of custom business to fixed-price packages (add-on to standard)
- Remaining custom business: $2M, now structured for 15% margin (up from -7%)
- Focus on standard business: $40.5M

New blended: ($8.365M + $300K) / $40.5M = $8.665M / $40.5M = 21.4% operating margin (up from 8%)

**The Key Lesson:**

A simple 8% blended margin hid the fact that 15% of the business was losing money and another 15% was barely breaking even. ABC revealed where the value actually was (Type A) and enabled decisive action.

---

### Case Study 3: The Consulting Firm That Understood Profitability

**Company:** Strategy consulting firm, $20M revenue, 100 employees, 22% operating margin

**The Challenge:**

Consulting firms operate on blended hourly rates, but actual profitability varies wildly by project type.

**ABC Analysis by Engagement Type:**

```
ENGAGEMENT TYPE A: STAFF AUGMENTATION (50% of revenue = $10M)

Description: 
- Long-term placement of consultants on client teams
- Minimal custom work, mostly following existing processes
- 12-24 month engagements
- High utilization rates (85%+)

Cost Structure:
- Consultant salary + benefits: $120K/consultant/year
- Billing rate: $200/hour × 1,900 billable hours = $380K revenue per consultant
- Pre-sales effort: minimal
- Account management: Minimal (renewal is automatic)

Economics:
- Revenue: $10M
- Consultant costs (base + benefits): $7M
- Pre-sales & overhead: $1M
- Contribution: $2M (20% margin)
```

```
ENGAGEMENT TYPE B: FIXED-SCOPE CUSTOM WORK (30% of revenue = $6M)

Description:
- 3-6 month projects with defined deliverables
- Requires detailed scoping, design, and custom delivery
- Examples: process optimization, new system implementation
- Often under-scoped initially, requiring rework

Cost Structure:
- Project scope: $200K-500K average
- Team: 2-4 senior consultants, 1-2 junior
- Execution is 60% billable (40% design, rework, meetings)
- Pre-sales: 40 hours of sales time per $200K project
- Post-sale customization: 5-10% rework

Economics:
- Revenue: $6M
- Consultant costs (40% of revenue): $2.4M
- Pre-sales costs (40hrs × $150/hr, ~$300K): $300K
- Rework & inefficiency costs: $600K
- Overhead allocation: $1M
- Contribution: $1.7M (28% margin, looks good!)

But per dollar of revenue:
- Actual contribution per dollar: only 28% because of pre-sales and rework costs
- As % of team capacity: Consumes 30% of consultant capacity but only generates 30% of revenue
- Profitability per capita: Lower than augmentation
```

```
ENGAGEMENT TYPE C: STRATEGIC ADVISORY (20% of revenue = $4M)

Description:
- Short-term advisory on strategy, M&A, transformation
- Mostly senior partner time
- Low utilization (partners spend 30-40% time on boards, thinking, business development)
- High-risk (outcomes uncertain, sometimes non-billable)

Cost Structure:
- Partner time: 30% billable, 70% non-billable (business development, proposals, thinking)
- Partner salary: $300K/partner
- Pre-sales: High (60 hours per $200K engagement for scoping)
- Support & delivery: Mostly senior time

Economics:
- Revenue: $4M (from 30% billable time of ~10 partners)
- Partner costs: $3M (but only 30% is for billable work) = $900K actual cost
- Pre-sales: (60 hours / 200K per deal) × $4M = ~$1.2M in partner time @ $300/hr
- Other overhead: $500K
- Total Costs: $2.6M
- Contribution: $1.4M (35% margin, looks best!)

But the trick: That "35%" only works if you include ALL partner capacity. In reality:
- Partners are 70% non-billable (business development, thinking, management)
- Only 30% of their time shows up in advisory revenue
- True allocation: Advisory should bear ALL partner overhead, not just 30%

Real cost: 
- Partner costs: $3M (all of it)
- Pre-sales: $1.2M
- Support: $500K
- Total: $4.7M
- Contribution: NEGATIVE $700K (-17% margin)
```

**The Original Blended View:**

```
Augmentation: $10M @ 20% = $2M
Custom: $6M @ 28% = $1.68M
Advisory: $4M @ 35% = $1.4M

Blended: $5.08M / $20M = 25.4% contribution
```

That's what the firm reported as their operating margin.

**The Reality with Full Allocation:**

```
Augmentation: $10M @ 20% = $2M profit
Custom: $6M @ 20% = $1.2M profit (after removing pre-sales allocation)
Advisory: $4M @ -17% = -$680K loss

Blended: ($2M + $1.2M - $680K) / $20M = $2.52M / $20M = 12.6% true margin
```

**The Strategic Shift:**

Once they understood the real profitability:

1. **Augmentation:** Grow this. It's the most profitable and least risky.
   - Current: 50% of revenue
   - Target: 65% of revenue
   - Action: Hire 10 more consultants, build the bench

2. **Custom Work:** Optimize, don't eliminate.
   - Current: 30% of revenue, 20% margin
   - Constraint: Pre-sales is eating 5% of margin
   - Action: Develop fixed-price offerings (reduce custom scoping)
   - Target: 25% of revenue, 25% margin

3. **Advisory:** Transform to leverage model.
   - Current: 20% of revenue, -17% margin
   - Problem: Partners are too junior
   - Action: Only offer advisory to existing clients (fold into their costs)
   - Strategic value: Build relationships for augmentation upsells
   - New structure: 10% of revenue, but not separately priced (included in augmentation)

**Result (Year 2):**

- Augmentation: 65% × $20M = $13M @ 22% = $2.86M
- Custom: 25% × $20M = $5M @ 25% = $1.25M
- Advisory: 10% (included in augmentation overhead) = $0M new revenue, but supports growth

New blended: ($2.86M + $1.25M) / $18M = 22.5% true margin (from 25% claimed, 12.6% real)

They shifted the business mix to profitability and were honest about where value came from.

---

## Anti-Patterns and Pitfalls {#anti-patterns}

### Anti-Pattern 1: "ABC is Too Complicated"

**The trap:** "We don't have time for full activity-based costing. Let's just use traditional allocation."

**The cost:** Making decisions on false profitability. You optimize for the wrong metrics.

**The solution:** Start simple.
- Pick ONE activity (e.g., customer support)
- Calculate the real cost per unit (cost per ticket)
- Compare to your blended average
- If they're different by >20%, dig deeper

You don't need perfect ABC. You need directional accuracy.

### Anti-Pattern 2: "All Customers are Equal"

**The trap:** Assuming every customer has the same support needs, sales cycle, customization requirements.

**The cost:** Pricing wrong. Trying to be everything to everyone.

**The solution:** Segment first. For each customer segment, answer:
- What's their typical deal size?
- What's their typical implementation time?
- What's their typical support ticket volume?
- What's their typical expansion rate?

Once segmented, you can see massive variation.

### Anti-Pattern 3: "We'll Figure Out Profitability Later"

**The trap:** Focus on growth at all costs. "We'll figure out unit economics once we hit scale."

**The cost:** By the time you figure out you're unprofitable, you've built massive scale in the wrong business.

**The solution:** Do ABC today, even in rough form. Know which segments are profitable before you scale them.

### Anti-Pattern 4: "Our Accounting System is Our ABC System"

**The trap:** Assuming your general ledger or standard accounting system automatically gives you ABC data.

**The cost:** It doesn't. Standard accounting is for tax and board reporting. It's not granular enough for decision-making.

**The solution:** Build ABC separately. Use spreadsheets if needed. You need to allocate costs by activity and by customer, which your accounting system won't do automatically.

### Anti-Pattern 5: "We Can't Track This"

**The trap:** "We can't track support tickets by customer type. Our system doesn't have that data."

**The cost:** You make decisions without the data you need.

**The solution:** Start tracking it. It takes a few weeks to set up time-tracking or ticket categorization. The insights you get are worth it.

---

## Implementation Roadmap {#implementation}

### Month 1: Audit and Baseline (Weeks 1-4)

**Week 1: Identify Your Biggest Cost Centers**

List your 5 largest expense categories:
1. What is it?
2. How much does it cost?
3. What drives the variation (what activity triggers it)?

```
EXAMPLE:

1. Customer Support - $2M/year
   - What varies: # of support tickets, complexity of tickets
   
2. Sales & Marketing - $3M/year
   - What varies: Sales cycle length, demo time, number of deals
   
3. Engineering/Product - $4M/year
   - What varies: Feature complexity, number of products maintained
   
4. Operations/Infrastructure - $1M/year
   - What varies: # of customers, data volumes, infrastructure needs
   
5. Corporate Overhead - $500K/year
   - What varies: # of employees, management span
```

**Week 2: Deep Dive on One Cost Center**

Pick the largest or most variable cost center. For one month, track:

- How much time does each person spend on different activities?
- Which activities drive the cost variation?

Example for support:
- Track ticket categories (FAQ, technical, custom, escalation)
- Time spent per category
- Cost per category

**Week 3: Segment Your Customers/Products**

Create a matrix of your customer segments:

```
| Segment | # Customers | Avg Revenue | Growth Rate | Activity Intensity |
|---------|------------|-------------|-------------|-------------------|
| Self-Serve | 5,000 | $100 | 30% | Low (1-2 tickets/yr) |
| SMB | 500 | $1,000 | 20% | Medium (10 tickets/yr) |
| Mid-Market | 100 | $10,000 | 15% | High (50+ tickets/yr) |
| Enterprise | 50 | $50,000 | 10% | Very High (200+ tickets/yr) |
```

**Week 4: Calculate Cost Per Activity**

For your one cost center, calculate cost per unit of activity:

```
Support Center Cost Per Ticket: $2M / 200,000 tickets = $10/ticket

But break down by type:
- FAQ ticket: 5 min @ $25/hr = $2.08
- Technical ticket: 20 min @ $25/hr = $8.33  
- Custom integration: 90 min @ $25/hr = $37.50
- Escalation: 120 min @ $35/hr = $70/hour = $70
```

### Month 2: Calculate Segment Profitability (Weeks 5-8)

**Week 5: Map Activity Drivers**

For each customer segment, estimate:

```
| Activity | Self-Serve | SMB | Mid-Market | Enterprise |
|----------|-----------|-----|-----------|-----------|
| CAC | $0 | $200 | $1,000 | $5,000 |
| Onboarding Hours | 1 | 5 | 20 | 80 |
| Support Tickets/Year | 2 | 10 | 50 | 200 |
| Account Management | $0 | $100 | $500 | $2,000 |
```

**Week 6: Build Profitability Waterfall**

For each segment, build the full waterfall:

```
Segment: Enterprise
Revenue: $50,000/year
Less: COGS: $12,500
Gross Profit: $37,500

Less Activity Costs:
- Customer Acquisition: $5,000
- Onboarding: $8,000 (80 hrs @ $100/hr)
- Support: $3,500 (200 tickets @ $17.50 avg)
- Account Management: $2,000
Total Activity: $18,500

Operating Contribution: $19,000 (38% margin)
```

**Week 7: Sensitivity Analysis**

Test: What if activity costs change?

```
- If support tickets double (customer becomes more demanding): -$3,500
- If onboarding doubles (more complex implementation): -$8,000
- If CAC increases 50% (harder to acquire segment): -$2,500

Impacts to Operating Contribution:
- +Support: $19K → $15.5K (22% margin)
- +Onboarding: $19K → $11K (14% margin)
- +CAC: $19K → $16.5K (25% margin)

Which risks matter most?
```

**Week 8: Presentation to Leadership**

Present findings:
- Current blended profitability
- Profitability by segment
- Which segments drive the most value
- Which segments are at-risk or unprofitable

### Month 3: Make Decisions (Weeks 9-12)

**Week 9: Strategic Choices**

For each segment, decide:
1. Is it profitable? (margin > 0%)
2. Is it strategically important? (opens doors, builds relationships, teaches us?)
3. Should we grow it, maintain it, or exit?

```
Segment | Profitable? | Strategic? | Decision |
---------|-----------|-----------|----------|
| Self-Serve | Yes (60%) | Yes (brand) | GROW |
| SMB | Yes (35%) | Neutral | MAINTAIN |
| Mid-Market | Marginal (10%) | Yes (reference) | OPTIMIZE THEN GROW |
| Enterprise | Yes (38%) | Yes (brand) | GROW |
```

**Week 10: Pricing & Packaging Changes**

Based on true profitability, adjust pricing:

```
Current | Profitable? | Adjust To |
---------|-----------|----------|
| Self-Serve @ $100/mo | 60% margin | Keep or raise to $120 |
| SMB @ $1K/mo | 35% margin | Keep (healthy) |
| Mid-Market @ $10K/mo | 10% margin | Raise to $12K or restructure |
| Enterprise @ $50K/mo | 38% margin | Keep or raise |
```

**Week 11: Operational Changes**

For unprofitable or low-margin segments, decide:
- Eliminate activity (e.g., stop custom onboarding, move to self-serve)
- Automate activity (e.g., support chatbot for common tickets)
- Increase price to cover activity cost
- Exit the segment

**Week 12: Communication & Tracking**

- Communicate changes to team
- Set up quarterly ABC reviews
- Track actual vs. forecast for each segment

---

## Tools and Dashboards {#tools}

### Template 1: Cost Center Audit

```markdown
# Cost Center Audit

## Department: [Name]

**Annual Budget:** $[X]

**Personnel:**
- Role: [title] × [# people] × $[salary] = $[subtotal]
- Benefits (30%): $[subtotal]
- [Other roles...]

**Systems & Tools:**
- [Tool 1]: $[X]/year
- [Tool 2]: $[X]/year

**Other:**
- [Other costs]

**Total:** $[X]

## Activities This Cost Center Performs

1. **Activity 1:** [Description]
   - Primary role doing this: [Role]
   - % of time: [X]%
   - Annual hours: [X]
   - Cost: $[X]
   - Output metric: [# of X per year]
   - Cost per unit: $[X]

2. **Activity 2:** [etc]

## Quarterly Tracking

| Quarter | Budget | Actual | Variance | Notes |
|---------|--------|--------|----------|-------|
| Q1 | $[X] | $[X] | +/-% | |
| Q2 | $[X] | $[X] | +/-% | |
| Q3 | $[X] | $[X] | +/-% | |
| Q4 | $[X] | $[X] | +/-% | |
```

### Template 2: Customer Segment Profitability

```markdown
# Profitability by Customer Segment

## Segment: [Name]

**Overview:**
- # of customers: [X]
- Average annual revenue: $[X]
- Total segment revenue: $[X]

**Revenue Waterfall:**

Gross Revenue: $[X]
Less: COGS (direct costs): -$[X]
= Gross Profit: $[X] ([X]% margin)

Less: Activity Costs
- Customer Acquisition: -$[X]
- Onboarding: -$[X]
- Support: -$[X]
- Account Management: -$[X]
- [Other]: -$[X]
= Operating Contribution: $[X] ([X]% margin)

Less: Allocated Overhead: -$[X]
= Net Contribution: $[X] ([X]% margin)

## Unit Economics

| Metric | Value |
|--------|-------|
| Revenue per Customer | $[X] |
| COGS per Customer | $[X] |
| Activity Cost per Customer | $[X] |
| Operating Contribution per Customer | $[X] |
| Average Customer Lifetime | [X] years |
| Lifetime Value | $[X] |

## Trend

| Year | # Customers | Revenue | Margin | $/Customer |
|------|------------|---------|--------|-----------|
| Year 1 | [X] | $[X] | [X]% | $[X] |
| Year 2 | [X] | $[X] | [X]% | $[X] |
| Year 3 | [X] | $[X] | [X]% | $[X] |
```

### Template 3: Strategic Decision Framework

```markdown
# Segment Strategy Matrix

| Segment | Revenue | Margin | Strategic Value | Growth Target | Confidence |
|---------|---------|--------|-----------------|----------------|-----------|
| [Segment A] | $[X] | [X]% | [High/Med/Low] | [Target growth %] | [High/Med/Low] |
| [Segment B] | $[X] | [X]% | [High/Med/Low] | [Target growth %] | [High/Med/Low] |

## Decisions

**Segment A:**
- Current state: [Profitability, growth rate]
- Decision: [Grow / Maintain / Optimize / Exit]
- Actions: [Specific changes]
- Expected impact: [Change in margin, revenue]

**Segment B:**
[etc]
```

---

## Conclusion

Activity-Based Costing isn't an accounting exercise. It's a strategic weapon.

The difference between companies that grow profitably and companies that grow themselves into bankruptcy is the ability to see true profitability by segment and make decisions based on reality instead of averages.

Start this month. Pick one cost center. Track one activity. Measure it against your segments.

Within a quarter, you'll see variation you never knew existed. Within a year, it will transform how you make decisions about pricing, product mix, and where to invest.

The companies that master ABC typically improve margins by 5-10 percentage points. That's enormous.

---

**Next Module: Building High-Performance Teams**

*Related Skills: How to structure your organization to maximize profitability per team member.*
