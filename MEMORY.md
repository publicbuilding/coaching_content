# MEMORY.md - Long-Term Memory

*Last updated: 2026-02-21*

---

## About PB

- **Name:** PB (publicbuilding)
- **Email:** publicbuilding@proton.me
- **Philosophy:** Ethical businesses only — no scams, no exploitation. Building for reputation and long-term value.
- **Working style:** Pragmatic, time-constrained. Wants independent business lines that can run without constant oversight.

---

## Active Projects

### 1. Executive Forge (Coaching Content)
**Status:** Module 05 complete, 21 modules remaining for Word conversion

**What it is:** Premium coaching modules for operators/executives. Sold on Gumroad at $29.99+ per module.

**Repository:** `coaching_content` on GitHub (publicbuilding/coaching_content)

**Key files:**
- Word templates: `/coaching_content/gumroad_content/gumroad_launch/template_testing/`
- HTML sources: `/coaching_content/gumroad_content/gumroad_ready/` (22 modules)
- Logo: `logo-executive-forge-correct.png`
- Putnam Square image: `putnam-square.png`

**Design specs (LOCKED):**
- Colors: Navy #1B3A6B, Gold #D4A574, Dark text #2C3E50
- Margins: 0.75in all sides (Word format)
- Tables: Navy header row (white text), light blue first column, row spacing
- Page numbers: Footer with "Executive Forge" left, "Page X of Y" right
- No "---" separators
- Putnam Square: Use the IMAGE, not a Word table

**Module 05 fixes completed (Feb 2026):**
- Removed gold byline from cover page
- Deleted gold byline from page 2
- Placed Putnam Square image on page 16 (not page 2)
- Converted 11+ bullet lists to formatted tables
- All tables have navy headers, row spacing, spacers after

**Next:** Apply Module 05 template to remaining 21 modules

---

### 2. BookTuber Video Scripts
**Status:** 19/25 complete (76%)

**What it is:** Analytical, appreciative book review scripts for fantasy/sci-fi YouTube channel. 8-15 minute videos (~1,200-1,300 words per script).

**Location:** `/youtube-content/book-reviews/scripts/001-025/`

**Completed:**
- Scripts 001-008: Flagship (ASOIAF, WoT, Harry Potter, The Expanse, Mistborn, Foundation, Dune, Hyperion)
- Scripts 009-016: Rising Stars (Six of Crows, Name of the Wind, Poppy War, Three-Body Problem, Ember in Ashes, Project Hail Mary, Calculating Stars, Murderbot)
- Scripts 017-019: Thematic (Uprooted, Piranesi, The Dispossessed)

**Remaining:** Scripts 020-025 (6 more needed)

---

### 3. Literary Essays Blog
**Status:** Initialized with 3 posts

**Repository:** `literary-essays` on GitHub (publicbuilding/literary-essays)

**Strategy:**
- 2-3 posts per week (Mon/Wed/Fri)
- Content pillars: Trends (40%), Interviews (30%), Historical spotlights (20%), New releases (10%)
- Post length: 2,000-5,000 words

**Posts completed:**
1. Grimdark dominance analysis
2. Tanya Huff forgotten pioneer
3. Asian-inspired fantasy growth

---

## Key Decisions & Preferences

### Document Formatting
- **Word over HTML:** Switched from HTML/wkhtmltopdf to Word (.docx) for better control
- **PDF generation:** `soffice --headless --convert-to pdf:writer_pdf_Export`
- **Tables over bullets:** Convert structured bullet lists to tables whenever possible
- **Images for complex visuals:** Use actual images (like Putnam Square) rather than trying to recreate with Word tables

### Content Strategy
- **No financial advice:** Focus on operational/strategic content (hiring, scaling, OKRs, decision frameworks)
- **Premium pricing:** $29.99+ per module — content must justify the price
- **Separate repositories:** Each content stream gets its own git repo

### Technical
- **Model preference:** Use Opus for complex document work when asked
- **Always commit + push:** Don't just save locally — push to GitHub so PB can access
- **Verify changes:** Don't trust script output — verify files actually changed

---

## Lessons Learned

1. **Always regenerate AND commit the PDF** — PB downloads from GitHub, not local filesystem
2. **Putnam Square = the 2x2 impact/effort matrix IMAGE** — not a Word table
3. **Check paragraph indices carefully** — document structure shifts when elements are removed
4. **Tables need:** Navy headers on ALL columns, row spacing, spacer paragraph after
5. **Don't assume Opus is active** — verify with session_status

---

## Quick Reference

### Git workflow
```bash
cd /data/workspace/coaching_content
git add -A
git commit -m "description"
git push origin master
```

### PDF generation
```bash
soffice --headless --norestore --convert-to pdf:writer_pdf_Export --outdir . file.docx
```

### Check model
```
session_status tool (no params)
```

### Switch to Opus
```
session_status with model="anthropic/claude-opus-4-5-20251101"
```

---

## Session Log

### Feb 7-9, 2026
- Extensive Module 05 formatting work
- Fixed Putnam Square placement (moved from page 2 to page 16)
- Converted 11 bullet sections to tables
- Applied consistent table styling (navy headers, spacing)
- Declined LinkedIn automation requests (account safety)

### Feb 1-5, 2026
- Repository reorganization completed
- BookTuber scripts batch production (19/25)
- Literary essays blog initialized
- Module expansion planning

---

*This file is my long-term memory. Update it with significant decisions, lessons, and project milestones.*
