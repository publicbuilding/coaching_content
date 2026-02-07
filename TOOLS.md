# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Module 05 Template Testing Workflow (WORD FORMAT)

**Automatic PDF Generation Rule:**
When PB asks for revisions to Module 05 template in `gumroad_content/gumroad_launch/template_testing/`:

1. Update the Word file: `05-systems-thinking-EXPANDED-FINAL.docx` (python-docx library)
2. **Always generate a PDF preview** using this command:
   ```bash
   soffice --headless --norestore --convert-to pdf:writer_pdf_Export --outdir /data/workspace/coaching_content/gumroad_content/gumroad_launch/template_testing/ \
   /data/workspace/coaching_content/gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL.docx
   ```
3. Commit both DOCX and PDF to GitHub
4. Send preview link in Discord

**Current Files:**
- Word source: `gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL.docx`
- PDF preview: `gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL.pdf`
- Template specs:
  - Margins: 0.75in all sides
  - Footer left: "Executive Forge" (gold, bold)
  - Footer right: "Page X of Y" (navy)
  - Title page: Navy/gold branding
  - Professional typography
  - 73+ pages total

---

Add whatever helps you do your job. This is your cheat sheet.
