# Executive Forge PDF Converter Guide

**Version:** 1.0  
**Last Updated:** February 4, 2026  
**Purpose:** Convert 30 premium modules from Markdown to publication-ready PDFs for Gumroad  

---

## 🚀 Quick Start

### Step 1: Generate HTML Files
```bash
cd /data/workspace
python3 automation/pdf-converter.py
```

**Output:** 22 professional HTML files in `/gumroad-pdfs/html-temp/`  
**Time:** < 1 second  

### Step 2: Convert HTML to PDF

Choose one method below:

#### A. Browser Print-to-PDF (Simplest)
1. Open `01-financial-modeling....html` in Chrome/Firefox
2. Press `Ctrl+P` (or `Cmd+P`)
3. Click "Save as PDF"
4. Repeat for all 22 files

#### B. Automated Conversion (Best)
```bash
# Install wkhtmltopdf first
sudo apt-get install -y wkhtmltopdf

# Then convert all files
python3 automation/html-to-pdf-helper.py --wkhtmltopdf
```

#### C. Manual Helper Script
```bash
python3 automation/html-to-pdf-helper.py
# Shows detailed instructions for all methods
```

### Step 3: Upload to Gumroad
1. Log in to gumroad.com
2. Create product for each module
3. Upload PDF file
4. Set pricing
5. Add to bundle

---

## 📁 Directory Structure

```
/data/workspace/
├── paid/                          # Source markdown files
│   ├── 01-financial-modeling.md
│   ├── 02-high-performance-teams.md
│   └── ... (22 files total)
│
├── automation/
│   ├── pdf-converter.py           # Main converter script
│   ├── html-to-pdf-helper.py      # PDF conversion helper
│   ├── PDF_CONVERTER_GUIDE.md     # This file
│   └── QA_CHECKLIST.md            # Quality assurance checklist
│
└── gumroad-pdfs/
    ├── html-temp/                 # Intermediate HTML files
    │   ├── 01-financial-modeling-....html
    │   ├── 02-managerial-accounting-....html
    │   └── ... (22 files)
    │
    ├── manifest.json              # Conversion metadata
    └── [PDFs go here after conversion]
        ├── 01-financial-modeling.pdf
        ├── 02-managerial-accounting.pdf
        └── ... (after HTML→PDF conversion)
```

---

## ⚙️ Configuration & Customization

### Edit Brand Colors

Open `automation/pdf-converter.py` and find the `CONFIG` section:

```python
'colors': {
    'primary': '#1B3A6B',      # Executive Blue (headers)
    'accent': '#D4A574',        # Gold (highlights)
    'text': '#2C3E50',          # Charcoal (body text)
    'light_bg': '#F8F9FA',      # Light gray (code blocks)
    'border': '#E0E6ED',        # Border gray
}
```

**To change colors:**
1. Find the color code you want to change
2. Replace with hex color (e.g., `#FF5733`)
3. Run converter again: `python3 automation/pdf-converter.py`

**Recommended brand colors:**
- Primary/Headers: Navy blues, deep purples
- Accent/Highlights: Gold, copper, bright orange
- Text: Dark grays, charcoal, black
- Light BG: Off-white, light gray (#F5F5F5 or #FAFAFA)

### Edit Brand Fonts

```python
'fonts': {
    'headings': 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    'body': 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    'code': '"IBM Plex Mono", "Courier New", monospace',
}
```

**To change fonts:**
- Headings: Inter, Montserrat, Poppins, Roboto
- Body: Inter, Open Sans, Lato, Roboto
- Code: IBM Plex Mono, Source Code Pro, Courier New

Note: These are CSS font families. Web-safe fonts display in all systems.

### Edit Company Name & Branding

In the `CONFIG['brand']` section:
```python
'name': 'Executive Forge',  # Change here
```

This appears in:
- PDF header ("EXECUTIVE FORGE")
- Footer copyright notice
- HTML metadata

---

## 📊 Conversion Pipeline Details

### What the Converter Does

1. **Reads Markdown Files**
   - Scans `/paid/` directory
   - Finds all `.md` files
   - Extracts metadata (titles, content)

2. **Parses Markdown**
   - Converts `# Heading` → HTML `<h1>`
   - Converts `**bold**` → `<strong>`
   - Converts `*italic*` → `<em>`
   - Converts ````code```` → `<pre><code>`
   - Converts `[link](url)` → `<a href>`
   - Converts `- list items` → `<ul><li>`

3. **Applies Professional Styling**
   - CSS Grid for responsive layout
   - Brand colors for visual hierarchy
   - Print-optimized spacing
   - Page break rules for proper pagination
   - Custom headers/footers

4. **Generates HTML Output**
   - Complete, self-contained HTML files
   - All CSS embedded (no external files needed)
   - Ready for PDF conversion

5. **Creates Metadata**
   - `manifest.json`: Lists all modules with details
   - Timestamps conversion for audit trail
   - Tracks all conversions in single file

### HTML to PDF Conversion Options

| Method | Speed | Quality | Setup |
|--------|-------|---------|-------|
| Browser Print | Slow (manual) | ⭐⭐⭐⭐⭐ | None |
| wkhtmltopdf | Fast | ⭐⭐⭐⭐⭐ | 1 command |
| Pandoc | Medium | ⭐⭐⭐⭐ | 2-3 commands |
| Online tools | Fast | ⭐⭐⭐⭐ | Browser |
| Puppeteer | Very Fast | ⭐⭐⭐⭐⭐ | Node install |

**Recommended:** wkhtmltopdf for server automation, Browser for quick testing

---

## 🔍 Troubleshooting

### Problem: Script fails to find markdown files

**Solution:**
```bash
ls /data/workspace/paid/
```
Verify files exist. Check they have `.md` extension.

### Problem: HTML files aren't styled correctly

**Solution:**
1. Check browser compatibility (use Chrome or Firefox)
2. Verify CSS in HTML file is intact
3. Check for special characters in filenames
4. Inspect CSS color values for typos

### Problem: PDF conversion fails with wkhtmltopdf

**Common errors:**
```
Error: Failed loading page (sometimes it will work just to ignore this error)
```
This is usually harmless. Check the PDF output anyway.

**Solution:**
```bash
# Reinstall wkhtmltopdf
sudo apt-get remove wkhtmltopdf
sudo apt-get install -y wkhtmltopdf

# Or try with --enable-local-file-access flag
wkhtmltopdf --enable-local-file-access input.html output.pdf
```

### Problem: Special characters not displaying

**Solution:**
1. Ensure markdown files are UTF-8 encoded
2. Check for smart quotes (`"` instead of `"`)
3. Verify file opened with `encoding='utf-8'`

### Problem: File size is too large

**Solution:**
- Remove embedded images/media
- Reduce number of fonts in fallback list
- Remove unused CSS rules
- Compress PDF after generation

---

## 📋 Gumroad Integration Checklist

- [ ] All 22 PDFs successfully generated
- [ ] Each PDF passes QA checklist (see QA_CHECKLIST.md)
- [ ] File names match product names
- [ ] PDF files are < 5MB each (for fast downloads)
- [ ] Created Gumroad account and products
- [ ] Set pricing for each product
- [ ] Create bundle product linking all modules
- [ ] Add preview images/screenshots to listings
- [ ] Write compelling product descriptions
- [ ] Test download on Gumroad
- [ ] Share bundle link with audience

---

## 🛠️ Advanced: Customizing the Script

### Add Custom CSS

Modify the `<style>` section in the HTML template within `pdf-converter.py`:

```python
# Find this section:
<style>
    /* Your CSS here */
</style>

# Add custom rules:
.custom-class {
    background-color: #your-color;
    padding: 20px;
    border-radius: 5px;
}
```

### Modify Markdown Parsing

In the `MarkdownToHTML.parse_markdown()` method, add new regex patterns:

```python
# Example: Support for tables
html = re.sub(r'\| (.+?) \|', r'<td>\1</td>', html)
```

### Add Table of Contents

Insert after parsing headings:

```python
# Extract all h2/h3 headings
toc = re.findall(r'<h[23]>(.+?)</h[23]>', html)

# Generate TOC HTML
toc_html = '<h1>Table of Contents</h1><ul>'
for item in toc:
    toc_html += f'<li>{item}</li>'
toc_html += '</ul>'

# Insert at beginning
html = toc_html + html
```

---

## 📊 Manifest File Reference

The converter generates `manifest.json` with:

```json
{
  "project": "Executive Forge",
  "generated": "2026-02-04T11:32:00",
  "total_modules": 22,
  "modules": [
    {
      "source": "01-financial-modeling.md",
      "title": "Financial Modeling for Projections",
      "html_file": "01-financial-modeling-....html",
      "pdf_file": "01-financial-modeling.pdf",
      "status": "converted"
    }
  ],
  "output_directory": "/data/workspace/gumroad-pdfs",
  "brand_colors": { ... },
  "brand_fonts": { ... }
}
```

Use this to:
- Track which files were converted
- Document generation timestamp
- Verify all files processed
- Automate Gumroad uploads

---

## 💡 Best Practices

### For Best PDF Quality

1. **Use wkhtmltopdf** for consistent results
2. **Test with first module** before batch converting
3. **Review PDF on multiple devices** (desktop, tablet, phone)
4. **Check print preview** before uploading to Gumroad
5. **Verify links are clickable** in final PDF

### For Fastest Workflow

1. Generate all HTMLs at once: `python3 pdf-converter.py`
2. Convert in background: `nohup python3 html-to-pdf-helper.py &`
3. While converting, write product descriptions
4. Upload to Gumroad as PDFs complete

### For Consistent Branding

1. Use same colors across all modules
2. Test font rendering in Chrome first
3. Ensure header/footer matches style guide
4. Use consistent spacing and layout
5. Create brand PDF template as reference

---

## 🚀 One-Shot Complete Pipeline

Run this to do everything at once:

```bash
#!/bin/bash
cd /data/workspace

# Step 1: Generate HTMLs
python3 automation/pdf-converter.py

# Step 2: Convert HTMLs to PDFs (if wkhtmltopdf available)
python3 automation/html-to-pdf-helper.py --wkhtmltopdf

# Step 3: Show QA checklist
cat automation/QA_CHECKLIST.md

echo "✓ Pipeline complete! PDFs ready for Gumroad"
ls -lh gumroad-pdfs/*.pdf | wc -l
```

---

## 📞 Support & Updates

**Current Version:** 1.0 (February 2026)

**Recent Changes:**
- Initial release
- 22 modules supported
- Professional HTML styling
- Manifest tracking
- Multiple PDF conversion options

**Future Enhancements:**
- [ ] Direct PDF generation (no HTML intermediate)
- [ ] Table of contents generation
- [ ] Batch Gumroad upload automation
- [ ] Image embedding support
- [ ] Multiple language support

---

**Ready to convert?** Run: `python3 automation/pdf-converter.py`
