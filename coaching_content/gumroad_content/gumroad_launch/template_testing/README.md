# Template Testing — Module 05 (Systems Thinking for Operators)

This folder contains all iterations and test versions of the Module 05 template design. Use these files as reference for:

1. **Design evolution** — See how the template evolved from V1 to final production
2. **CSS testing** — Learn which CSS approaches worked and which didn't
3. **Template baseline** — Use the EXPANDED-FINAL versions as the gold standard for other modules

## Files

### HTML Templates (Source)
- **`05-systems-thinking-V4.html`** — Version 4 (basic template)
- **`05-systems-thinking-V2-IMPROVED.html`** — Version 2 with improvements
- **`05-systems-thinking-IMPROVED.html`** — Further refined version
- **`05-systems-thinking-FINAL.html`** — Template finalized before expansion (38 KB)
- **`05-systems-thinking-EXPANDED-FINAL.html`** — **GOLD STANDARD** — Final template with 73+ pages of expanded content (125 KB)

### PDFs (Test Output)
- **`05-systems-thinking-EXPANDED-FINAL.pdf`** — **GOLD STANDARD PDF** — Production-ready output (73 pages, 258 KB, 300 DPI)

## How to Use These Files

### For Testing New CSS Changes:
1. Copy the EXPANDED-FINAL.html as your base
2. Make CSS changes
3. Convert to PDF: `wkhtmltopdf --dpi 300 --page-size A4 --margin-top 4in --margin-bottom 4in --margin-left 2in --margin-right 2in --print-media-type input.html output.pdf`
4. Compare output PDF visually
5. Once satisfied, apply the CSS changes to all modules in `gumroad_ready/`

### For Referencing Style Standards:
- Open `05-systems-thinking-EXPANDED-FINAL.html` in a text editor
- View the `<style>` section to see:
  - H1/H2/H3 formatting rules
  - Margins and padding standards
  - Color codes (#1B3A6B navy, #D4A574 gold)
  - Box model and spacing

### For Comparing Iterations:
- Open multiple HTML files in your browser to see design progression
- Compare file sizes to understand optimization
- Check FINAL vs IMPROVED vs EXPANDED-FINAL to see impact of content expansion

## Key Design Standards (Locked)

These are the CSS rules that worked and should be applied to all modules:

```css
/* Page Margins */
@page { margin: 4in 2in 4in 2in; }

/* H1 - Cover/Title */
h1 { 
  font-size: 28pt; 
  border-bottom: 3px solid #D4A574;
  padding-bottom: 0.15in;
}

/* H2 - Section Headers */
h2 { 
  font-size: 18pt; 
  background-color: #1B3A6B;
  color: white;
  border-left: 5px solid #D4A574;
  padding: 0.15in 0.15in 0.15in 0.25in;
  page-break-before: always;
}

/* H3 - Subsections */
h3 { 
  font-size: 14pt; 
  background-color: #F5E6C8;
  border-left: 3px solid #D4A574;
  padding: 0.1in 0.15in;
}

/* Paragraph Spacing */
p { margin-bottom: 0.15in; }

/* List Spacing */
li { margin-bottom: 0.08in; }
```

## Next Steps

When expanding to all 22 modules:
1. Copy the EXPANDED-FINAL.html structure
2. Replace the content section with each module's content
3. Update metadata (title, module number, tagline)
4. Convert to PDF
5. Test visual quality before uploading to Gumroad

---

**Last Updated:** February 7, 2026  
**Status:** Template Finalized & Locked  
**Gold Standard:** 05-systems-thinking-EXPANDED-FINAL (HTML + PDF)
