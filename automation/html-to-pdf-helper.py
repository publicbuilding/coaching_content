#!/usr/bin/env python3
"""
HTML to PDF Conversion Helper
Converts generated HTML files to PDF using available tools.

Supports multiple backends:
  - wkhtmltopdf (recommended)
  - Pandoc
  - Browser-based printing
  - Online conversion services
"""

import os
import subprocess
import sys
from pathlib import Path

HTML_DIR = Path('/data/workspace/gumroad-pdfs/html-temp')
OUTPUT_DIR = Path('/data/workspace/gumroad-pdfs')

def convert_with_wkhtmltopdf():
    """Convert HTML to PDF using wkhtmltopdf (fastest, best results)."""
    print("Attempting wkhtmltopdf conversion...")
    
    result = subprocess.run(['which', 'wkhtmltopdf'], capture_output=True)
    if result.returncode != 0:
        print("  ✗ wkhtmltopdf not found. Install with: apt-get install wkhtmltopdf")
        return False
    
    html_files = sorted(HTML_DIR.glob('*.html'))
    for html_file in html_files:
        pdf_file = OUTPUT_DIR / html_file.stem.replace('html-temp', 'pdf') + '.pdf'
        # Actually just name it correctly
        pdf_file = OUTPUT_DIR / (html_file.stem + '.pdf')
        
        cmd = [
            'wkhtmltopdf',
            '--enable-local-file-access',
            '--margin-top', '20mm',
            '--margin-bottom', '20mm',
            '--margin-left', '20mm',
            '--margin-right', '20mm',
            '--header-spacing', '5',
            '--footer-spacing', '5',
            '--footer-line',
            '--footer-center', 'Page [page] of [topage]',
            '--footer-right', '© Executive Forge',
            str(html_file),
            str(pdf_file)
        ]
        
        result = subprocess.run(cmd, capture_output=True)
        if result.returncode == 0:
            print(f"  ✓ {pdf_file.name}")
        else:
            print(f"  ✗ Failed: {html_file.name}")
            if result.stderr:
                print(f"    Error: {result.stderr.decode()}")

def convert_with_pandoc():
    """Convert HTML to PDF using Pandoc."""
    print("Attempting Pandoc conversion...")
    
    result = subprocess.run(['which', 'pandoc'], capture_output=True)
    if result.returncode != 0:
        print("  ✗ Pandoc not found. Install with: apt-get install pandoc")
        return False
    
    html_files = sorted(HTML_DIR.glob('*.html'))
    for html_file in html_files:
        pdf_file = OUTPUT_DIR / (html_file.stem + '.pdf')
        
        cmd = [
            'pandoc',
            str(html_file),
            '-o', str(pdf_file),
            '--pdf-engine', 'xelatex',
            '-V', 'margin-top=20mm',
            '-V', 'margin-bottom=20mm',
            '-V', 'margin-left=20mm',
            '-V', 'margin-right=20mm',
        ]
        
        result = subprocess.run(cmd, capture_output=True)
        if result.returncode == 0:
            print(f"  ✓ {pdf_file.name}")
        else:
            print(f"  ✗ Failed: {html_file.name}")

def print_manual_instructions():
    """Print instructions for manual PDF conversion."""
    print("""
╔════════════════════════════════════════════════════════════════════╗
║          MANUAL PDF CONVERSION INSTRUCTIONS                        ║
╚════════════════════════════════════════════════════════════════════╝

Your HTML files are ready for conversion to PDF:
  Location: /data/workspace/gumroad-pdfs/html-temp/

Option 1: Browser Print-to-PDF (SIMPLEST)
─────────────────────────────────────────
1. Open an HTML file in Chrome, Firefox, or Safari
2. Press Ctrl+P (or Cmd+P on Mac)
3. Select "Save as PDF"
4. Choose location: /data/workspace/gumroad-pdfs/
5. Repeat for all 22 files

✓ Pro: Professional output, preserves all styling
✗ Con: Manual process for each file


Option 2: Install wkhtmltopdf (RECOMMENDED FOR AUTOMATION)
──────────────────────────────────────────────────────────
sudo apt-get update
sudo apt-get install -y wkhtmltopdf

Then run this script again:
  python3 html-to-pdf-helper.py --wkhtmltopdf

✓ Pro: Fast, automated, perfect output
✗ Con: Requires installation


Option 3: Online Conversion Services
────────────────────────────────────
Services like CloudConvert, Zamzar, or Online-Convert can
batch convert your HTML files:
  - Upload all 22 HTML files
  - Select PDF as output format
  - Download converted files

✓ Pro: No installation needed
✗ Con: May have file size limits, privacy considerations


Option 4: Install Pandoc
───────────────────────
sudo apt-get update
sudo apt-get install -y pandoc texlive-latex-base texlive-latex-extra

Then run:
  python3 html-to-pdf-helper.py --pandoc

✓ Pro: Great for complex documents
✗ Con: Slower, requires LaTeX


RECOMMENDED WORKFLOW FOR GUMROAD:
═════════════════════════════════
1. If you have control of a local machine:
   → Use browser print-to-PDF or wkhtmltopdf
   
2. If automating on server:
   → Install wkhtmltopdf and run helper script
   
3. For quick testing:
   → Use one HTML file, convert manually, verify quality
   
4. Upload to Gumroad:
   → Product type: PDF File
   → Upload each converted PDF
   → Set pricing tier
   → Add to bundle (optional)


QUALITY CHECKLIST AFTER CONVERSION:
═══════════════════════════════════
□ PDF opens in all viewers (Adobe, Preview, etc.)
□ Headers/footers display correctly
□ Page numbers appear at bottom
□ © Executive Forge copyright shows
□ Font styling preserved (bold, italics)
□ Code blocks render correctly
□ Links are clickable
□ Images (if any) display properly
□ Page breaks look natural
□ No text overflow or cut-off
□ File size is reasonable (<5MB per document)
""")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        arg = sys.argv[1].lower()
        if arg in ['--wkhtmltopdf']:
            convert_with_wkhtmltopdf()
        elif arg in ['--pandoc']:
            convert_with_pandoc()
        elif arg in ['--help', '-h']:
            print_manual_instructions()
        else:
            print(f"Unknown option: {arg}")
            print_manual_instructions()
    else:
        print_manual_instructions()
