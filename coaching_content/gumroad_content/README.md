# Gumroad Content Organization

This folder contains all Executive Forge course content in organized stages from raw content to final PDFs.

## Folder Structure

### `gumroad_ready/` — Raw Content (Pre-PDF)
All course modules in HTML format, ready for conversion to PDF.
- **Contents:** 22+ `.html` files (one per module)
- **manifest.json** — Module metadata, titles, descriptions, slugs
- **Purpose:** Source of truth for content; edit here, convert to PDF from here
- **Typical workflow:** Update content.html → convert via `convert-to-pdf.sh` → output lands in `gumroad_pdf/`

### `gumroad_pdf/` — Final PDFs
All production-ready PDF files for upload to Gumroad.
- **Contents:** 22+ `.pdf` files (one per module)
- **Quality:** 300 DPI, A4, print-ready, navy/gold design system
- **Purpose:** Ready to upload directly to Gumroad or distribute
- **Note:** Do not edit PDFs here; edit source HTML in `gumroad_ready/`, regenerate PDF

### `gumroad_launch/` — Conversion Logic & Launch Materials
Core tools, scripts, and materials for converting content to PDF and launching on Gumroad.

#### Subdirectories:
- **`template_testing/`** — Module 05 template iterations (for reference/history)
  - All draft versions of the Systems Thinking template
  - Archive of V1, V2, V4, FINAL, IMPROVED, EXPANDED-FINAL versions
  - Used for testing new design approaches before applying to all modules

#### Files:
- **`convert-to-pdf.sh`** — Bash script to batch-convert HTML → PDF via wkhtmltopdf
- **`analyze_pdfs.py`** — Python tool for analyzing PDF structure, page counts, content validation
- **`logo-executive-forge.svg`** — Brand logo (SVG source, use for web; convert to PNG for print)
- **`README.md`** (in this folder) — Detailed conversion instructions
- **`pricing-strategy.md`** — Revenue model and pricing tier documentation
- **`product-page-templates.md`** — Gumroad product page copy templates
- **`sales-copy.md`** — Marketing copy for modules
- **`bundle-offer.md`** — Bundle pricing strategy
- **`testimonials-request-template.md`** — Email template for gathering testimonials
- **`INDEX.md`** — Navigation guide
- **`DISCLAIMER-REQUIRED.md`** — Legal disclaimers to add to financial modules

## Typical Workflow

### Adding/Updating a Module:
1. **Edit content** in `gumroad_ready/XX-module-name.html`
2. **Run conversion:** `bash gumroad_launch/convert-to-pdf.sh`
3. **Check output** in `gumroad_pdf/XX-module-name.pdf`
4. **Upload to Gumroad** when satisfied

### Testing New Designs:
1. Create test version in `gumroad_launch/template_testing/`
2. Test conversion with one module
3. Iterate CSS/structure until satisfied
4. Apply to all modules in `gumroad_ready/`

## Key Constraints & Standards

- **HTML Source:** All modules in `gumroad_ready/` follow the same CSS template (navy/gold, 4in/2in margins, 300 DPI spec)
- **Naming Convention:** `XX-descriptive-module-name.html` (e.g., `05-systems-thinking-for-operators.html`)
- **PDF Conversion Command:** `wkhtmltopdf --dpi 300 --page-size A4 --margin-top 4in --margin-bottom 4in --margin-left 2in --margin-right 2in --print-media-type input.html output.pdf`
- **Color System:** Navy (#1B3A6B), Gold (#D4A574), White (#FFFFFF), Light Gray (#F8F9FA)

## File Counts & Stats

- **Modules:** 22 (core content) + expansions
- **Total Content:** 25,000+ pages when fully expanded
- **Average Module:** 40-70 pages, 15,000+ words
- **Brand Assets:** Logo (SVG, PNG ready)

## Related Documentation

- `coaching_content/manifest.json` — Master module inventory
- `coaching_content/modules/XX-module-name/` — Individual module source files (if stored separately)
- GitHub repo: https://github.com/publicbuilding/coaching_content

---

**Last Updated:** February 7, 2026
**Owner:** PB (publicbuilding)
**Status:** Production Ready
