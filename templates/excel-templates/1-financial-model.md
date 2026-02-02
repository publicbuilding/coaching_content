# FINANCIAL MODEL TEMPLATE - P&L, CASH FLOW & MARGINS

**Usage:** For financial planning, forecasting, and scenario analysis  
**Timeframe:** 12-month rolling forecast (update quarterly)  
**Users:** CFO, Finance team, Executive leadership

---

## PART 1: INCOME STATEMENT (P&L)

### Structure

```
Revenue Stream 1 (e.g., Product Sales)
  Unit Volume × Unit Price = Total Revenue
Revenue Stream 2 (e.g., Service Revenue)
  Volume × Rate = Total Revenue
─────────────────────────────
TOTAL REVENUE

Cost of Goods Sold (COGS)
  Direct Material Costs
  Direct Labor
  Production Overhead
─────────────────────────────
Gross Margin = Revenue - COGS
Gross Margin % = Gross Margin / Revenue

Operating Expenses
  Salaries & Benefits
  Marketing & Sales
  Technology & Infrastructure
  Administrative
  Other
─────────────────────────────
EBITDA (Earnings Before Interest, Tax, Depreciation, Amortization)

Depreciation & Amortization
─────────────────────────────
Operating Income (EBIT)

Interest Expense (Debt service)
─────────────────────────────
Earnings Before Tax (EBT)

Tax Expense (25% of EBT)
─────────────────────────────
NET INCOME
```

### Sample P&L Table

| Line Item | Month 1 | Month 2 | Month 3 | Q1 Total | Q1 Avg |
|-----------|---------|---------|---------|----------|--------|
| **REVENUE** | | | | | |
| Product Sales (Units × $X) | 100,000 | 110,000 | 121,000 | 331,000 | 110,333 |
| Service Revenue (Units × $X) | 50,000 | 50,000 | 50,000 | 150,000 | 50,000 |
| **TOTAL REVENUE** | **150,000** | **160,000** | **171,000** | **481,000** | **160,333** |
| | | | | | |
| **COGS** | | | | | |
| Direct Materials | (30,000) | (33,000) | (36,300) | (99,300) | (33,100) |
| Direct Labor | (20,000) | (20,000) | (20,000) | (60,000) | (20,000) |
| Production Overhead | (15,000) | (15,000) | (15,000) | (45,000) | (15,000) |
| **TOTAL COGS** | **(65,000)** | **(68,000)** | **(71,300)** | **(204,300)** | **(68,100)** |
| | | | | | |
| **GROSS PROFIT** | **85,000** | **92,000** | **99,700** | **276,700** | **92,233** |
| **GROSS MARGIN %** | **56.7%** | **57.5%** | **58.3%** | **57.5%** | **57.5%** |
| | | | | | |
| **OPERATING EXPENSES** | | | | | |
| Salaries & Benefits | (40,000) | (40,000) | (40,000) | (120,000) | (40,000) |
| Marketing & Sales | (15,000) | (15,000) | (15,000) | (45,000) | (15,000) |
| Technology & Infrastructure | (8,000) | (8,000) | (8,000) | (24,000) | (8,000) |
| Administrative | (5,000) | (5,000) | (5,000) | (15,000) | (5,000) |
| **TOTAL OPEX** | **(68,000)** | **(68,000)** | **(68,000)** | **(204,000)** | **(68,000)** |
| | | | | | |
| **EBITDA** | **17,000** | **24,000** | **31,700** | **72,700** | **24,233** |
| **EBITDA MARGIN %** | **11.3%** | **15.0%** | **18.5%** | **15.1%** | **15.1%** |
| | | | | | |
| Depreciation & Amortization | (2,500) | (2,500) | (2,500) | (7,500) | (2,500) |
| | | | | | |
| **OPERATING INCOME (EBIT)** | **14,500** | **21,500** | **29,200** | **65,200** | **21,733** |
| **OPERATING MARGIN %** | **9.7%** | **13.4%** | **17.1%** | **13.5%** | **13.5%** |
| | | | | | |
| Interest Expense | (3,000) | (3,000) | (3,000) | (9,000) | (3,000) |
| | | | | | |
| **EARNINGS BEFORE TAX** | **11,500** | **18,500** | **26,200** | **56,200** | **18,733** |
| | | | | | |
| Tax Expense (25%) | (2,875) | (4,625) | (6,550) | (14,050) | (4,683) |
| | | | | | |
| **NET INCOME** | **8,625** | **13,875** | **19,650** | **42,150** | **14,050** |
| **NET MARGIN %** | **5.8%** | **8.7%** | **11.5%** | **8.8%** | **8.8%** |

### Key Formulas

```
Gross Profit = Total Revenue - COGS
Gross Margin % = (Gross Profit / Revenue) × 100

EBITDA = Gross Profit - Operating Expenses
EBITDA Margin % = (EBITDA / Revenue) × 100

EBIT = EBITDA - Depreciation & Amortization
Operating Margin % = (EBIT / Revenue) × 100

EBT = EBIT - Interest Expense
Tax = EBT × Tax Rate (typically 21-35%)

Net Income = EBT - Tax
Net Margin % = (Net Income / Revenue) × 100
```

---

## PART 2: CASH FLOW STATEMENT

### Structure

```
OPERATING ACTIVITIES
  Net Income (from P&L)
  + Depreciation & Amortization (non-cash)
  + Changes in Working Capital
    - Increase in Accounts Receivable (cash outflow)
    + Decrease in Accounts Receivable (cash inflow)
    - Increase in Inventory (cash outflow)
    + Decrease in Inventory (cash inflow)
    + Increase in Accounts Payable (cash inflow)
    - Decrease in Accounts Payable (cash outflow)
─────────────────────────────
CASH FROM OPERATIONS

INVESTING ACTIVITIES
  - Capital Expenditures (new equipment, infrastructure)
  - Other Investments
─────────────────────────────
CASH FROM INVESTING

FINANCING ACTIVITIES
  - Debt Repayment
  + Equity Financing
  - Dividend Payments
─────────────────────────────
CASH FROM FINANCING

─────────────────────────────
NET CHANGE IN CASH

Beginning Cash Balance
─────────────────────────────
ENDING CASH BALANCE
```

### Sample Cash Flow Table

| Line Item | Month 1 | Month 2 | Month 3 | Q1 Total |
|-----------|---------|---------|---------|----------|
| **OPERATING ACTIVITIES** | | | | |
| Net Income | 8,625 | 13,875 | 19,650 | 42,150 |
| Depreciation & Amortization | 2,500 | 2,500 | 2,500 | 7,500 |
| **Subtotal** | **11,125** | **16,375** | **22,150** | **49,650** |
| | | | | |
| Changes in Working Capital: | | | | |
| Accounts Receivable (increase) | (15,000) | (17,600) | (18,920) | (51,520) |
| Inventory (decrease) | 5,000 | 2,000 | 1,500 | 8,500 |
| Accounts Payable (increase) | 8,000 | 6,600 | 7,130 | 21,730 |
| | | | | |
| **CASH FROM OPERATIONS** | **9,125** | **7,375** | **11,860** | **28,360** |
| | | | | |
| **INVESTING ACTIVITIES** | | | | |
| Capital Expenditures | (5,000) | (5,000) | (5,000) | (15,000) |
| | | | | |
| **CASH FROM INVESTING** | **(5,000)** | **(5,000)** | **(5,000)** | **(15,000)** |
| | | | | |
| **FINANCING ACTIVITIES** | | | | |
| Debt Repayment | (3,000) | (3,000) | (3,000) | (9,000) |
| | | | | |
| **CASH FROM FINANCING** | **(3,000)** | **(3,000)** | **(3,000)** | **(9,000)** |
| | | | | |
| **NET CHANGE IN CASH** | **1,125** | **(625)** | **3,860** | **4,360** |
| | | | | |
| **Beginning Cash Balance** | 50,000 | 51,125 | 50,500 | 50,000 |
| **Ending Cash Balance** | **51,125** | **50,500** | **54,360** | **54,360** |

### Key Formulas

```
Cash from Operations = Net Income + D&A ± Working Capital Changes

Cash from Investing = -Capital Expenditures ± Asset Sales

Cash from Financing = Debt Changes ± Equity Changes - Dividends

Net Change in Cash = Operating + Investing + Financing

Ending Cash = Beginning Cash + Net Change in Cash
```

---

## PART 3: MARGIN ANALYSIS & KEY METRICS

### Profitability Metrics

| Metric | Formula | Target | Interpretation |
|--------|---------|--------|---|
| Gross Margin | (Revenue - COGS) / Revenue | 50-60% | High = strong pricing power |
| Operating Margin | EBIT / Revenue | 15-25% | High = efficient operations |
| Net Margin | Net Income / Revenue | 8-12% | High = strong bottom line |
| EBITDA Margin | EBITDA / Revenue | 20-30% | High = operational efficiency |

### Growth Metrics

| Metric | Formula | Target | Interpretation |
|--------|---------|--------|---|
| Revenue Growth | (Current - Prior) / Prior | 15-30% YoY | Sustained growth strength |
| Gross Profit Growth | (Current - Prior) / Prior | Match or exceed revenue growth | Scale or efficiency improvement |
| EBITDA Growth | (Current - Prior) / Prior | Exceed revenue growth | Operational leverage |

### Cash Efficiency Metrics

| Metric | Formula | Target | Interpretation |
|--------|---------|--------|---|
| Operating Cash Flow | Cash from operations | Positive each month | Company generates cash |
| Cash Conversion | Operating Cash / Net Income | >90% | Earnings converting to cash |
| Cash Balance Runway | Cash Balance / Monthly Burn Rate | >12 months | Adequate liquidity |

### Sample Margin Analysis

```
Q1 Performance Summary:

Revenue:           $481,000  (vs. plan: $480,000) ✓ On target
Gross Margin:      57.5%     (vs. plan: 57.0%)   ✓ Exceeds plan
Operating Margin:  13.5%     (vs. plan: 13.0%)   ✓ Exceeds plan
Net Margin:        8.8%      (vs. plan: 8.5%)    ✓ Exceeds plan

Cash from Ops:     $28,360   (vs. plan: $25,000) ✓ Strong

Analysis:
- Revenue on track, growing at 7% month-over-month
- Gross margin improving as unit volumes increase (better absorption of fixed costs)
- Operating margins expanding due to revenue growth and controlled expenses
- Cash generation strong despite working capital investments in receivables
- Recommendation: Maintain current trajectory, monitor inventory levels
```

---

## PART 4: SCENARIO ANALYSIS

### Sensitivity Analysis Example

```
"What if revenue grows at different rates?"

Base Case (7% monthly growth):
  Month 3 Revenue: $171,000
  Month 3 Net Income: $19,650
  Q1 Cash from Ops: $28,360

Upside Case (10% monthly growth):
  Month 3 Revenue: $180,400
  Month 3 Net Income: $22,750
  Q1 Cash from Ops: $33,890
  Upside Impact: +$5,530 operating cash (+19.5%)

Downside Case (4% monthly growth):
  Month 3 Revenue: $164,900
  Month 3 Net Income: $17,850
  Q1 Cash from Ops: $24,120
  Downside Impact: -$4,240 operating cash (-15.0%)
```

### Scenario Comparison Table

| Scenario | Q1 Revenue | Gross Margin | Op Margin | Net Income | Cash from Ops |
|----------|-----------|--------------|-----------|------------|---|
| **Downside** (4% growth) | 455,000 | 55.8% | 12.1% | 37,800 | 22,500 |
| **Base Case** (7% growth) | 481,000 | 57.5% | 13.5% | 42,150 | 28,360 |
| **Upside** (10% growth) | 505,000 | 58.9% | 14.2% | 46,900 | 33,900 |

---

## IMPLEMENTATION GUIDE

### Step 1: Set Up in Excel

1. Create worksheets: "P&L", "Cash Flow", "Metrics", "Assumptions"
2. Build tables using structure above
3. Create formulas for all calculations
4. Format currency ($) and percentage (%) columns
5. Apply conditional formatting (red for negatives, green for positives)

### Step 2: Configure Assumptions

```
Worksheet: "Assumptions"

Revenue Growth Rate:          7% monthly
Average Selling Price:        $X per unit
Unit Volume Growth:           7% monthly
COGS as % of Revenue:         42.5%
Gross Margin Target:          57.5%
Operating Expense as % Rev:   41.5%
Tax Rate:                     25%
Accounts Receivable Days:     30 days
Inventory Turnover:           45 days
Accounts Payable Days:        30 days
```

### Step 3: Link Assumptions to Formulas

All formulas should reference the Assumptions worksheet:
```
Example: Revenue = Units × $[Price from Assumptions]
         COGS = Revenue × [COGS % from Assumptions]
```

### Step 4: Update Monthly

1. Enter actual revenue and volume numbers
2. Actual expenses
3. Working capital changes
4. Compare actual vs. forecast
5. Adjust forward forecast based on actuals

### Step 5: Review & Analyze

**Monthly:**
- Compare actual vs. plan
- Identify significant variances (>5%)
- Note trends (increasing, decreasing, stable)

**Quarterly:**
- Full P&L, cash flow, and margin analysis
- Scenario review (upside/downside cases)
- Update assumptions for next quarter

---

## COMMON ADJUSTMENTS

### If Revenue Misses Plan by -15%
- Adjust growth assumptions downward
- Forecast lower cash generation
- Plan expense reductions if needed
- Update cash runway forecast

### If COGS Higher Than Expected
- Analyze unit cost increases
- Check for production inefficiencies
- Validate pricing vs. costs
- Assess impact on margins and cash

### If Cash Balance Declining
- Review working capital (AR, inventory, AP)
- Check capital expenditure timing
- Assess debt repayment schedule
- Plan for financing if needed

---

## FILES & DISTRIBUTION

**File Format:** Excel (.xlsx)  
**Update Frequency:** Monthly (actuals), Rolling forecast updated quarterly  
**Distribution:** CFO, Executive team, Board (if applicable)  
**Retention:** Keep 3 years of monthly actuals + current year forecast

