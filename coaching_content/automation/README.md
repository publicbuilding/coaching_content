# Automation & Scripts

This directory contains all automation scripts and tools for managing the Executive Coaching course content.

## 📋 Contents

### PDF Conversion Tools
- **pdf-converter.py** - Main HTML to PDF conversion script
- **html-to-pdf-helper.py** - Helper utility for PDF generation
- **CONVERSION_INSTRUCTIONS.md** - Detailed conversion guide

### Email Marketing
- **email-sequences.md** - Pre-built email sequences for course delivery
- **MAILCHIMP_IMPORT.md** - Import email sequences to Mailchimp
- **CONVERTKIT_IMPORT.md** - Import email sequences to ConvertKit
- **SUBSTACK_IMPORT.md** - Substack publication guide

### Social Media Marketing
- **social-scheduler-LINKEDIN.csv** - LinkedIn post schedule (30 posts)
- **social-scheduler-TWITTER.csv** - Twitter post schedule
- **social-scheduler-INSTAGRAM.csv** - Instagram post schedule
- **social-scheduler-TIKTOK.csv** - TikTok post schedule
- **SOCIAL_CALENDAR.md** - Content calendar overview

### Dashboard & Analytics
- **DASHBOARD_SETUP_GUIDE.md** - How to set up monitoring dashboard
- **REVENUE_DASHBOARD.md** - Revenue tracking template
- **REVENUE_DASHBOARD.csv** - CSV data for analytics
- **METRICS_GLOSSARY.md** - Key metrics definitions

### Documentation
- **BUFFER_IMPORT_GUIDE.md** - Import social posts to Buffer
- **LATER_IMPORT_GUIDE.md** - Import social posts to Later
- **PDF_CONVERTER_GUIDE.md** - Detailed PDF conversion instructions
- **QA_CHECKLIST.md** - Quality assurance checklist
- **DAILY_LOG_TEMPLATE.md** - Daily activity logging

## 🚀 Quick Start

### Converting Modules to PDF
```bash
python pdf-converter.py --input ../modules/XX-module-name/content.html --output ../modules/XX-module-name/content.pdf
```

### Scheduling Social Media Posts
1. Open `social-scheduler-PLATFORM.csv` in your social media tool
2. Import content to platform (LinkedIn, Twitter, Instagram, TikTok)
3. Adjust timing as needed for your audience

### Setting Up Email Sequences
1. Copy content from `email-sequences.md`
2. Follow platform-specific guides:
   - ConvertKit: `CONVERTKIT_IMPORT.md`
   - Mailchimp: `MAILCHIMP_IMPORT.md`
   - Substack: `SUBSTACK_IMPORT.md`

### Monitoring Performance
1. Set up dashboard per `DASHBOARD_SETUP_GUIDE.md`
2. Track metrics defined in `METRICS_GLOSSARY.md`
3. Update `REVENUE_DASHBOARD.md` regularly

## 📊 Workflow

### For Content Creators
1. Create/edit module in `../modules/XX-*/content.html`
2. Run PDF conversion script
3. Verify output in `../modules/XX-*/content.pdf`
4. Commit changes to git

### For Marketing Team
1. Use email sequences in email platform
2. Schedule social posts using CSV files
3. Track performance in revenue dashboard
4. Adjust strategy based on metrics

### For Analytics
1. Update `REVENUE_DASHBOARD.csv` with daily data
2. Monitor `METRICS_GLOSSARY.md` for KPIs
3. Report weekly/monthly to leadership
4. Identify optimization opportunities

## 🔧 System Requirements

### PDF Conversion
- Python 3.8+
- wkhtmltopdf or similar HTML-to-PDF converter
- See `PDF_CONVERTER_GUIDE.md` for full requirements

### Social Media Tools
- LinkedIn, Twitter, Instagram, TikTok accounts
- Buffer, Later, or native scheduling tools
- CSV import capability

### Email Platforms
- ConvertKit, Mailchimp, or Substack account
- Markdown or HTML email capability
- API access (optional, for automation)

## 🔗 Integration Points

- **Modules** - Source content from `../modules/`
- **Resources** - Access branding from `../resources/branding/`
- **Research** - Reference data from `../research/`
- **Launch** - Follow checklists in `../launch/`

## 📝 Common Tasks

### Update Email Sequence
1. Edit `email-sequences.md`
2. Update platform-specific guides if needed
3. Test in your email platform
4. Commit changes

### Add New Social Posts
1. Add rows to appropriate `social-scheduler-*.csv`
2. Maintain consistent formatting
3. Include proper link and hashtag formatting
4. Test links before scheduling

### Monitor Campaign Performance
1. Check `REVENUE_DASHBOARD.md` daily
2. Update `REVENUE_DASHBOARD.csv` with metrics
3. Compare against projections in `../research/REVENUE_PROJECTIONS.md`
4. Adjust campaigns as needed

## 🐛 Troubleshooting

### PDF Conversion Fails
- Check `PDF_CONVERTER_GUIDE.md` for dependencies
- Verify HTML file is valid
- Check file paths and permissions

### Social Media Posts Not Importing
- Verify CSV formatting matches platform requirements
- Check for special character encoding issues
- Test with small batch before bulk import

### Email Sequence Delivery Issues
- Verify email content doesn't trigger spam filters
- Check sender authentication (SPF, DKIM, DMARC)
- Review `QA_CHECKLIST.md` before sending

## 📞 Support

For issues or questions:
1. Check README.md in relevant subdirectory
2. Review guide documents (PDF_CONVERTER_GUIDE.md, etc.)
3. Consult `QA_CHECKLIST.md` for validation steps
4. Check root coaching_content/README.md for context

---

**Last Updated:** February 2026  
**Status:** Production Ready ✅  
**Maintenance:** Regular updates as campaigns run
