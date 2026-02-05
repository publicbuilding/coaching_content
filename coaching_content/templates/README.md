# Templates & Styling

Master templates and shared CSS resources for the Executive Coaching course content.

## 📋 Contents

### HTML Templates
- **systems-thinking-template.html** - Master HTML template (reference implementation)
- Used as basis for all module HTML generation
- Contains complete styling and structure patterns

### CSS Styling
- **css/** - Shared stylesheets
- Global styles for all modules
- Responsive design for web and print

### Resource Templates
- PowerPoint templates (../resources/templates/)
- Excel templates (../resources/templates/)
- Word document templates (../resources/templates/)

## 🎨 Template Usage

### For PDF Generation
The master template (`systems-thinking-template.html`) serves as the reference for:
1. HTML structure and semantic markup
2. CSS styling and responsive design
3. Print-friendly formatting
4. PDF generation best practices

When generating PDFs from new modules:
```bash
# Use master template as reference
cp systems-thinking-template.html ../modules/XX-new-module/content.html
# Modify content while keeping structure
# Run PDF converter
```

### For Web Publishing
All module HTML files follow the master template pattern:
- Semantic HTML5 structure
- Mobile-responsive design
- Accessible color contrasts
- Print-friendly media queries

### For Downloads
Template files in `resources/templates/` are for:
- PowerPoint: Slide deck creation for presentations
- Excel: Financial models and calculations
- Word: Document templates for reports

## 🎯 Design Principles

1. **Consistency** - All modules use the same design system
2. **Readability** - Large, clear fonts for PDFs
3. **Accessibility** - WCAG 2.1 AA compliance
4. **Responsiveness** - Works on desktop, tablet, mobile
5. **Professional** - Corporate/executive styling

## 🔧 Customization

### Changing Global Styles
1. Edit files in `css/` directory
2. Test changes in `systems-thinking-template.html`
3. Regenerate all module PDFs
4. Verify output looks correct
5. Commit changes to git

### Updating Master Template
1. Modify `systems-thinking-template.html`
2. Document changes in this README.md
3. Use as basis for next PDF generation
4. Update version number in git

### Adding Custom Branding
1. Place logos in `../resources/branding/`
2. Reference in CSS or HTML template
3. Update template with brand colors/fonts
4. Regenerate all modules

## 📐 Responsive Breakpoints

```css
/* Mobile (320px and up) */
@media (max-width: 640px) { }

/* Tablet (641px and up) */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Desktop (1025px and up) */
@media (min-width: 1025px) { }

/* Print */
@media print { }
```

## 🎨 Color Scheme

The master template uses:
- **Primary:** Professional blue (#1a472a)
- **Secondary:** Corporate gray (#333333)
- **Accent:** Executive gold (#d4af37)
- **Text:** Dark gray (#2c3e50)
- **Background:** White (#ffffff)

Modify in `css/` files to customize.

## 📝 Typography

- **Headings:** System font stack (Segoe UI, Roboto, etc.)
- **Body:** Serif font for readability (Georgia, etc.)
- **Code/Technical:** Monospace font (Monaco, Courier New)
- **Font Sizes:** 16px base, scaled for readability

## 🔗 Integration

These templates are used by:
1. **PDF Converter** - `../automation/pdf-converter.py`
2. **Module Generation** - Each module references master template
3. **Web Publishing** - HTML files distributed to learners
4. **Print Materials** - PDFs optimized for printing

## 📊 File Structure

```
templates/
├── README.md (this file)
├── systems-thinking-template.html (master template)
└── css/
    ├── global.css (shared styles)
    ├── responsive.css (mobile/responsive)
    └── print.css (print media styles)

resources/
├── templates/
│   ├── powerpoint-template.md (slides)
│   ├── excel-templates/ (spreadsheets)
│   └── word-templates/ (documents)
└── branding/
    └── [logos, colors, guidelines]
```

## 🚀 Getting Started

### Use Master Template for New Module
1. Copy `systems-thinking-template.html` to new module folder
2. Replace content placeholder with module text
3. Keep HTML structure and CSS classes intact
4. Run PDF converter
5. Verify output quality

### Create New Template Variant
1. Copy `systems-thinking-template.html` to new filename
2. Modify design as needed
3. Test thoroughly in browsers and PDF
4. Document in this README.md
5. Use as basis for similar modules

### Update CSS for All Modules
1. Edit files in `css/` directory
2. Test changes in `systems-thinking-template.html`
3. Regenerate all module PDFs
4. Do bulk find-replace to update links if needed
5. Test at least 3 random modules

## 📞 Support

- **PDF Generation Issues:** See `../automation/PDF_CONVERTER_GUIDE.md`
- **CSS Help:** Check comments in `css/` files
- **Design Questions:** Refer to design principles above
- **Customization:** Update template, test, then regenerate all

## 🏷️ Versioning

- **Template Version:** 1.0
- **CSS Version:** 1.0
- **Last Updated:** February 2026
- **Status:** Production Ready ✅

---

All module PDFs are generated from these master templates. Keep them maintained and current!
