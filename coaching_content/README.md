# Executive Coaching Content Repository

A professional, comprehensive course content repository organized for easy navigation and team collaboration.

## 📚 Structure Overview

### `/modules/` - Core Course Modules (22 modules)
Each module is independently organized with:
- **content.pdf** - Final, production-ready PDF
- **content.md** - Markdown source (for editing/updates)
- **content.html** - HTML version (for web delivery)
- **README.md** - Module overview and learning objectives
- **assets/** - Supporting images, diagrams, templates (if applicable)

**Complete Module List:**
1. 01-financial-modeling - Building 5-year financial forecasts
2. 02-managerial-accounting - Strategic decision-making through accounting
3. 03-cost-accounting - Activity-based costing for profitability
4. 04-high-performance-teams - Hiring, firing, and culture architecture
5. 05-systems-thinking - Scaling without breaking
6. 06-team-dynamics - Conflict resolution and culture
7. 07-customer-acquisition - Channels, CAC, and growth
8. 08-hiring-excellence - Bench strength and succession planning
9. 09-process-automation - Scaling without people
10. 10-supply-chain-strategy - Sourcing, negotiation, risk management
11. 11-pricing-psychology - Data and psychology to maximize revenue
12. 12-brand-strategy - Building defensible market positioning
13. 13-content-marketing - Building authority and audience at scale
14. 14-customer-retention - Reducing churn and maximizing LTV
15. 15-organizational-behavior - Motivation, incentives, culture design
16. 16-capital-allocation - ROI frameworks and investment decisions
17. 17-market-entry-strategy - Competitive analysis and go-to-market planning
18. 18-executive-communication - Storytelling, presentations, persuasion
19. 19-change-management - Leading transformation without losing people
20. 20-product-strategy - From concept to market leadership
21. 21-executive-financial-analysis - Comprehensive financial analysis
22. 22-crafting-strategy - Building unassailable strategy

### `/templates/` - Master Templates & Styles
- **css/** - Shared stylesheets for PDF generation
- **systems-thinking-template.html** - Master HTML template (reference)
- PowerPoint, Word, Excel templates for course expansion

### `/automation/` - Scripts & Automation Tools
- **email-sequences.md** - Email marketing sequences
- **pdf-converter.py** - HTML to PDF conversion script
- **html-to-pdf-helper.py** - Utility for PDF generation
- **social-scheduler-*.csv** - Pre-scheduled content for social platforms
- **README.md** - Automation workflow documentation

### `/resources/` - Shared Resources & Assets
```
resources/
├── branding/          # Logos, brand guidelines, color schemes
├── templates/         # Downloadable PowerPoint, Word, Excel templates
└── [other shared assets]
```

### `/research/` - Market & Strategy Research
- **DIVERSIFICATION_PLAN.md** - Revenue diversification strategy
- **REVENUE_PROJECTIONS.md** - Financial projections
- **platforms-analysis.md** - Platform comparison and selection
- **partnership-strategy.md** - Partnership opportunities
- **affiliate-opportunities.md** - Affiliate program details
- **README.md** - Research index and methodology

### `/launch/` - Launch Materials & Checklists
- **GUMROAD_GO_LIVE.md** - Gumroad platform launch guide
- **SUBSTACK_GO_LIVE.md** - Substack publication launch
- **EMAIL_LANDING_PAGE.md** - Email campaign landing page copy
- **LINKEDIN_LAUNCH_POSTS.md** - LinkedIn announcement posts
- **TWITTER_LAUNCH_POSTS.md** - Twitter launch campaign
- **WEEK1_LAUNCH_CHECKLIST.md** - Week 1 execution checklist
- **EXECUTIVE_SUMMARY.md** - Launch strategy overview
- **REVENUE_TRACKER.md** - Performance monitoring dashboard

### `/archived/` - Previous Versions & Development Artifacts
- Old PDF versions (V1, V2, V3, etc.)
- Previous development iterations
- Draft content and experiments
**Note:** These are historical and should not be used for current distribution

## 🚀 Quick Start

1. **For Module Updates:**
   - Navigate to `/modules/XX-module-name/`
   - Edit `content.md` for markdown changes
   - Run conversion scripts in `/automation/` to regenerate PDF/HTML

2. **For Launch Activities:**
   - Follow checklists in `/launch/`
   - Use email sequences from `/automation/email-sequences.md`
   - Reference materials in `/research/`

3. **For Marketing & Distribution:**
   - Use social media schedules in `/automation/social-scheduler-*.csv`
   - Leverage resources from `/resources/branding/`
   - Deploy templates from `/resources/templates/`

## 📋 Key Features

✅ **Professional Organization** - Clear, hierarchical structure  
✅ **Easy Collaboration** - Clearly labeled content types  
✅ **Version Control** - Archive preserves all previous versions  
✅ **Automation Ready** - Scripts for PDF conversion and distribution  
✅ **Research-Backed** - Complete market analysis and strategy docs  
✅ **Launch-Ready** - Pre-built checklists and materials  

## 🔄 Workflow Best Practices

### Publishing a Module Update
1. Update content in `modules/XX-*/content.md`
2. Run `automation/pdf-converter.py` to generate PDF/HTML
3. Test output in `content.html` and `content.pdf`
4. Commit changes to git with descriptive message
5. Update module version in `README.md` if applicable

### Adding New Content
1. Create new module directory: `modules/XX-new-module/`
2. Add `README.md` explaining module content
3. Create `content.md` with full module text
4. Generate `content.html` and `content.pdf` via automation scripts
5. Update root README.md with new module listing

### Archiving Old Versions
- Move outdated content to `archived/` with date prefix
- Keep clear naming convention: `YYYYMMDD-old-filename.pdf`
- Update git history with archival commit

## 📊 Repository Statistics

- **Total Modules:** 22
- **Archive Items:** 7+ old versions
- **Automation Scripts:** 5+
- **Launch Docs:** 8+
- **Research Files:** 6+

## 🔐 Git Workflow

This repository uses semantic commit messages:
- `feat:` New module or major feature
- `fix:` Bug fixes or content corrections
- `docs:` Documentation updates
- `refactor:` Code reorganization
- `archive:` Archiving old versions

Example:
```bash
git commit -m "feat: add module 23 - advanced pricing strategies"
git commit -m "fix: correct financial calculations in module 01"
git commit -m "archive: move V1-V4 systems-thinking PDFs to archived/"
```

## 📞 Support & Maintenance

- **PDF Generation Issues:** Check `/automation/README.md`
- **Content Questions:** Refer to module-specific `/modules/XX-*/README.md`
- **Launch Support:** See `/launch/EXECUTIVE_SUMMARY.md`
- **Research Data:** Check `/research/README.md`

---

**Last Updated:** February 2026  
**Repository Status:** Production Ready ✅  
**Version:** 2.0 (Reorganized & Professionalized)
