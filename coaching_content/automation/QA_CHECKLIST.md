# Quality Assurance Checklist for Executive Forge PDFs

**Project:** Executive Forge Premium Modules  
**Purpose:** Verify all PDFs meet publication standards before uploading to Gumroad  
**Last Updated:** February 4, 2026  

---

## 🎯 Pre-Conversion QA (HTML Files)

### ✓ File Generation
- [ ] All 22 markdown files found in `/paid/` directory
- [ ] HTML files generated in `/gumroad-pdfs/html-temp/`
- [ ] `manifest.json` created with metadata
- [ ] File count matches markdown source files
- [ ] No error messages during conversion

### ✓ HTML File Integrity
- [ ] All HTML files open in web browser
- [ ] File sizes are reasonable (15-50KB per module)
- [ ] No corrupted or truncated files
- [ ] All files use UTF-8 encoding
- [ ] CSS is embedded in HTML (no external stylesheets)

**Check:**
```bash
ls -lh /data/workspace/gumroad-pdfs/html-temp/ | wc -l
file /data/workspace/gumroad-pdfs/html-temp/*.html
```

---

## 📄 Post-Conversion QA (PDF Files)

### ✓ PDF Generation
- [ ] All PDFs successfully created
- [ ] PDF files are in `/gumroad-pdfs/` directory
- [ ] File names match HTML source names
- [ ] File sizes are < 5MB each
- [ ] No zero-byte files

**Test:**
```bash
ls -lh /data/workspace/gumroad-pdfs/*.pdf
wc -c /data/workspace/gumroad-pdfs/*.pdf
```

### ✓ PDF Validity
- [ ] PDFs open in Adobe Reader
- [ ] PDFs open in Preview (Mac)
- [ ] PDFs open in Chrome browser
- [ ] PDFs open in Firefox browser
- [ ] No error messages on open
- [ ] Page count is reasonable (> 5 pages)

**Test:** Open each PDF in multiple viewers

---

## 🎨 Visual/Branding QA

### ✓ Header & Footer
- [ ] "EXECUTIVE FORGE" header appears on each page
- [ ] Page numbers display at bottom center
- [ ] Copyright "© Executive Forge" appears in footer
- [ ] Header/footer text is readable size
- [ ] Header/footer styling matches brand colors

### ✓ Typography & Fonts
- [ ] Title (H1) displays in Executive Blue (#1B3A6B)
- [ ] Headings (H2, H3) use blue color consistently
- [ ] Body text is dark charcoal (#2C3E50)
- [ ] All text is readable (not too small)
- [ ] Bold text appears darker/heavier
- [ ] Italic text is properly slanted
- [ ] No missing or garbled characters

### ✓ Color Consistency
- [ ] Primary color (blue) used for headers
- [ ] Accent color (gold) used for highlights/borders
- [ ] Text color is consistent throughout
- [ ] Code blocks have light gray background (#F8F9FA)
- [ ] Links are styled consistently

**Expected Colors:**
| Element | Color | Hex |
|---------|-------|-----|
| Headers | Executive Blue | #1B3A6B |
| Accents | Gold | #D4A574 |
| Body Text | Charcoal | #2C3E50 |
| Code BG | Light Gray | #F8F9FA |

### ✓ Spacing & Layout
- [ ] Margins are consistent (1-inch on all sides)
- [ ] Line spacing is comfortable (1.5-1.6x)
- [ ] Paragraph spacing is even
- [ ] No text touching page edges
- [ ] No awkward page breaks mid-paragraph
- [ ] Headings don't appear alone at bottom of page

---

## 📝 Content QA

### ✓ Text Content
- [ ] No markdown syntax appears in final PDF (`##`, `**`, etc.)
- [ ] All headings are properly formatted
- [ ] All paragraph text is present
- [ ] All lists are properly formatted as bullets
- [ ] Numbered lists (if any) display correctly
- [ ] No placeholder text or incomplete sections

### ✓ Code Blocks
- [ ] Code blocks have distinct styling
- [ ] Code text is monospace font
- [ ] Code blocks have light background
- [ ] Code is readable and not cut off
- [ ] Line numbers (if applicable) display correctly
- [ ] Indentation is preserved

### ✓ Links & References
- [ ] All links are properly formatted
- [ ] Links display in blue with underline
- [ ] Links are clickable (test with Ctrl+Click in PDF viewer)
- [ ] Link targets are correct (not broken)
- [ ] External links open in new window
- [ ] Email links work (if any)

### ✓ Images & Media
- [ ] All images display correctly
- [ ] Images are not stretched or distorted
- [ ] Image quality is acceptable
- [ ] Image captions appear (if any)
- [ ] Images don't overlap text
- [ ] Media files are embedded (not linked)

---

## 📏 Page Layout QA

### ✓ Pagination
- [ ] Page breaks occur naturally between sections
- [ ] No orphan lines (single line at top/bottom)
- [ ] No widows (partial words at line end)
- [ ] Page numbers are sequential
- [ ] Last page is complete (not blank)
- [ ] Document starts on page 1

### ✓ Table of Contents (if applicable)
- [ ] TOC is present and complete
- [ ] TOC page numbers match document
- [ ] TOC entries are clickable (if PDF supports)
- [ ] TOC formatting is consistent

### ✓ Section Organization
- [ ] Title page is clear and prominent
- [ ] Main sections are clearly separated
- [ ] Subsections are properly indented
- [ ] Section order is logical
- [ ] No content is out of order

---

## 🔐 File & Security QA

### ✓ File Properties
- [ ] PDF metadata is correct (title, author, etc.)
- [ ] Creation date is correct
- [ ] File size is optimized (not bloated)
- [ ] File permissions are readable

**Check in PDF Properties:**
```bash
pdfinfo /path/to/file.pdf
# or right-click > Properties in file manager
```

### ✓ Compatibility
- [ ] PDF is compatible with PDF 1.4+ (standard)
- [ ] No encrypted/password-protected files
- [ ] No copy/print restrictions
- [ ] Accessible to screen readers (basic compliance)

### ✓ Security
- [ ] No personally identifiable information (PII)
- [ ] No internal company secrets
- [ ] No passwords embedded in metadata
- [ ] Safe to distribute publicly on Gumroad

---

## 🔗 Gumroad Readiness QA

### ✓ Naming Convention
- [ ] Files follow naming pattern: `NN-title-slug.pdf`
- [ ] File names are lowercase with hyphens
- [ ] No spaces in file names
- [ ] File names are unique (no duplicates)
- [ ] File names match product titles

**Examples:**
```
01-financial-modeling.pdf
02-high-performance-teams.pdf
03-cost-accounting.pdf
```

### ✓ File Size Optimization
- [ ] Each PDF is < 5MB (Gumroad recommendation)
- [ ] No embedded videos or huge images
- [ ] Compression is applied where possible
- [ ] File size is proportional to content

**Ideal Ranges:**
| Content | Min | Max |
|---------|-----|-----|
| Text-only | 0.5MB | 2MB |
| With diagrams | 1MB | 3MB |
| Text + graphics | 2MB | 5MB |

### ✓ Preview & Thumbnail
- [ ] First page is readable at small size
- [ ] Title is visible on cover
- [ ] No awkward crop in thumbnail
- [ ] Professional appearance in preview

---

## ✅ Pre-Upload Verification

### ✓ Sample Testing
- [ ] Test download 2-3 random PDFs
- [ ] Verify download speed is acceptable
- [ ] Verify file integrity after download
- [ ] Open downloaded files on different device
- [ ] Confirm no corruption during transfer

### ✓ Final Review
- [ ] All 22 PDFs are ready
- [ ] All PDFs pass above checklist items
- [ ] Organized in correct output folder
- [ ] Manifest.json confirms all conversions
- [ ] Backup copy created (optional but recommended)

```bash
# Create backup
tar -czf gumroad-pdfs-backup-$(date +%Y%m%d).tar.gz /data/workspace/gumroad-pdfs/

# Verify all PDFs
find /data/workspace/gumroad-pdfs -name "*.pdf" -type f | wc -l
```

---

## 📋 Module-Specific Checklist

Create a copy of this table and mark each module as tested:

| # | Module | HTML ✓ | PDF ✓ | Visual ✓ | Content ✓ | Gumroad ✓ | Notes |
|----|--------|--------|-------|---------|-----------|-----------|-------|
| 01 | Financial Modeling | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 02 | Managerial Accounting | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 03 | Cost Accounting | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 04 | High-Performance Teams | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 05 | Systems Thinking | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 06 | Team Dynamics | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 07 | Customer Acquisition | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 08 | Hiring Excellence | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 09 | Process Automation | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 10 | Supply Chain Strategy | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 11 | Pricing Psychology | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 12 | Brand Strategy | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 13 | Content Marketing | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 14 | Customer Retention | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 15 | Organizational Behavior | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 16 | Capital Allocation | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 17 | Market Entry Strategy | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 18 | Executive Communication | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 19 | Change Management | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 20 | Product Strategy | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 21 | Executive Financial Analysis | ✓ | ✓ | ✓ | ✓ | ✓ | |
| 22 | Crafting Strategy | ✓ | ✓ | ✓ | ✓ | ✓ | |

---

## 🐛 Issue Reporting Template

If you find a QA issue, document it here:

```
ISSUE #[number]
Date Found: [YYYY-MM-DD]
Module: [Module Name]
Category: [Visual | Content | File | Layout | Other]
Severity: [Critical | High | Medium | Low]

DESCRIPTION:
[What's the problem?]

STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED BEHAVIOR:
[What should happen]

ACTUAL BEHAVIOR:
[What actually happens]

SCREENSHOT/DETAILS:
[Attach screenshot or details]

RESOLUTION:
[How to fix or workaround]
```

---

## ✨ Sign-Off

**QA Tester:** ___________________  
**Date:** ___________________  
**Status:** ☐ Approved  ☐ Approved with notes  ☐ Needs revision  

**Notes:**
```
[Add any final comments, observations, or recommendations]
```

---

## 🎓 Quick Reference

### Most Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| "Text is cut off at edges" | Margin too small | Increase page margins |
| "Headers/footers don't show" | Not in print view | Export with --print-to-pdf flag |
| "Colors look wrong" | Hex codes reversed | Check COLOR config, use #RRGGBB format |
| "PDF is too large" | Embedded images | Compress images before conversion |
| "Font looks wrong" | Font not installed | Use web-safe fonts (Inter, Arial) |
| "Pages break oddly" | No page-break rules | Add `page-break-after: avoid;` to CSS |

### Tools & Commands

```bash
# Count total files
ls /data/workspace/gumroad-pdfs/html-temp/*.html | wc -l

# Check file sizes
du -sh /data/workspace/gumroad-pdfs/*

# Verify PDF integrity
file /data/workspace/gumroad-pdfs/*.pdf

# Extract PDF metadata
pdfinfo /path/to/file.pdf

# Check for errors in conversion
grep -i "error" manifest.json
```

---

**Remember:** A single PDF that's checked and ready is better than 22 PDFs with issues.  
**Test early, test often, test thoroughly.** 🎯
