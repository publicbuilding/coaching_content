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

## Module 05 Template Testing Workflow

**Automatic PDF Generation Rule:**
When PB asks for revisions to Module 05 template in `gumroad_content/gumroad_launch/template_testing/`:

1. Update the HTML file: `05-systems-thinking-EXPANDED-FINAL.html`
2. **Always generate a PDF preview** using this command:
   ```bash
   wkhtmltopdf --enable-local-file-access --dpi 300 --page-size A4 --margin-top 0.75in --margin-bottom 0.75in --margin-left 1.25in --margin-right 1.25in \
   /data/workspace/coaching_content/gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL.html \
   /data/workspace/coaching_content/gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL-WITH-LOGO.pdf
   ```
3. Commit both HTML and PDF to GitHub
4. Send preview link in Discord

**Current Files:**
- HTML source: `gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL.html`
- PDF preview: `gumroad_content/gumroad_launch/template_testing/05-systems-thinking-EXPANDED-FINAL-WITH-LOGO.pdf`
- Template includes: Logo (80×80px embedded via file path), navy/gold colors, 0.75in/1.25in margins (top-bottom/left-right), 73+ pages
- Logo file: `gumroad_content/gumroad_launch/logo-executive-forge.svg`

---

Add whatever helps you do your job. This is your cheat sheet.
