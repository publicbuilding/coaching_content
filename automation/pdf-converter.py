#!/usr/bin/env python3
"""
Executive Forge PDF Converter Pipeline
Converts markdown modules to publication-ready PDFs with professional branding.

Usage:
    python3 pdf-converter.py                 # Convert all files
    python3 pdf-converter.py --help          # Show help
    python3 pdf-converter.py --color         # Use alternative colors
"""

import os
import sys
import re
import json
from pathlib import Path
from datetime import datetime
from urllib.parse import quote

# Configuration
CONFIG = {
    'brand': {
        'name': 'Executive Forge',
        'colors': {
            'primary': '#1B3A6B',      # Executive Blue
            'accent': '#D4A574',        # Gold
            'text': '#2C3E50',          # Charcoal
            'light_bg': '#F8F9FA',      # Light gray
            'border': '#E0E6ED',        # Border gray
        },
        'fonts': {
            'headings': 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            'body': 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            'code': '"IBM Plex Mono", "Courier New", monospace',
        }
    },
    'paths': {
        'input': '/data/workspace/paid',
        'output': '/data/workspace/gumroad-pdfs',
        'html_temp': '/data/workspace/gumroad-pdfs/html-temp',
    }
}


class MarkdownToHTML:
    """Convert markdown to professional HTML with branding."""
    
    def __init__(self, title, content, module_num=None):
        self.title = title
        self.content = content
        self.module_num = module_num
        
    def parse_markdown(self):
        """Convert markdown content to HTML."""
        html = self.content
        
        # Protect code blocks
        code_blocks = []
        def save_code(match):
            code_blocks.append(match.group(1))
            return f"{{{{CODE_BLOCK_{len(code_blocks)-1}}}}}"
        
        html = re.sub(r'```(.*?)```', save_code, html, flags=re.DOTALL)
        
        # Process headings
        html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
        html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
        html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
        
        # Process bold and italic
        html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
        html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
        html = re.sub(r'__(.+?)__', r'<strong>\1</strong>', html)
        html = re.sub(r'_(.+?)_', r'<em>\1</em>', html)
        
        # Process lists
        html = re.sub(r'^\- (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
        html = re.sub(r'((?:<li>.*?</li>\n)+)', r'<ul>\1</ul>', html, flags=re.MULTILINE)
        
        # Process links
        html = re.sub(r'\[(.+?)\]\((.+?)\)', r'<a href="\2" target="_blank">\1</a>', html)
        
        # Restore code blocks
        for i, code in enumerate(code_blocks):
            html = html.replace(f"{{{{CODE_BLOCK_{i}}}}}", 
                              f'<pre><code>{self.escape_html(code)}</code></pre>')
        
        # Process paragraphs
        lines = html.split('\n')
        result = []
        in_block = False
        for line in lines:
            if line.startswith('<') or line.startswith('</') or not line.strip():
                result.append(line)
                in_block = False
            elif not in_block and line.strip():
                result.append(f'<p>{line}</p>')
                in_block = True
            elif in_block:
                result[-1] += f' {line}'
        
        html = '\n'.join(result)
        return html
    
    @staticmethod
    def escape_html(text):
        """Escape HTML special characters."""
        return (text
                .replace('&', '&amp;')
                .replace('<', '&lt;')
                .replace('>', '&gt;')
                .replace('"', '&quot;')
                .replace("'", '&#39;'))
    
    def generate_html(self):
        """Generate complete HTML document with styling."""
        html_content = self.parse_markdown()
        
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{self.escape_html(self.title)} - Executive Forge</title>
    <style>
        @page {{
            size: A4;
            margin: 1in;
            @top-center {{
                content: "{self.escape_html(self.title)}";
                font-family: {CONFIG['brand']['fonts']['headings']};
                font-size: 11pt;
                color: {CONFIG['brand']['colors']['text']};
            }}
            @bottom-center {{
                content: "Page " counter(page) " of " counter(pages);
                font-family: {CONFIG['brand']['fonts']['body']};
                font-size: 10pt;
                color: {CONFIG['brand']['colors']['text']};
            }}
            @bottom-right {{
                content: "© Executive Forge";
                font-family: {CONFIG['brand']['fonts']['body']};
                font-size: 9pt;
                color: {CONFIG['brand']['colors']['text']};
            }}
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        html, body {{
            font-family: {CONFIG['brand']['fonts']['body']};
            line-height: 1.6;
            color: {CONFIG['brand']['colors']['text']};
            background: white;
        }}

        body {{
            padding: 40px 30px;
            max-width: 900px;
            margin: 0 auto;
        }}

        /* Branding Header */
        .document-header {{
            border-bottom: 3px solid {CONFIG['brand']['colors']['primary']};
            padding-bottom: 20px;
            margin-bottom: 30px;
            position: relative;
        }}

        .document-header::before {{
            content: "🏆";
            font-size: 24px;
            margin-right: 10px;
        }}

        .brand-mark {{
            display: inline-block;
            font-weight: 700;
            color: {CONFIG['brand']['colors']['primary']};
            font-size: 14px;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }}

        h1 {{
            color: {CONFIG['brand']['colors']['primary']};
            font-size: 32pt;
            font-weight: 700;
            margin-bottom: 10px;
            font-family: {CONFIG['brand']['fonts']['headings']};
            page-break-after: avoid;
        }}

        h2 {{
            color: {CONFIG['brand']['colors']['primary']};
            font-size: 18pt;
            font-weight: 600;
            margin-top: 25px;
            margin-bottom: 15px;
            font-family: {CONFIG['brand']['fonts']['headings']};
            border-left: 4px solid {CONFIG['brand']['colors']['accent']};
            padding-left: 12px;
            page-break-after: avoid;
        }}

        h3 {{
            color: {CONFIG['brand']['colors']['primary']};
            font-size: 14pt;
            font-weight: 600;
            margin-top: 18px;
            margin-bottom: 12px;
            font-family: {CONFIG['brand']['fonts']['headings']};
            page-break-after: avoid;
        }}

        p {{
            margin-bottom: 12px;
            text-align: justify;
            font-size: 11pt;
            line-height: 1.65;
        }}

        ul {{
            margin: 15px 0 15px 30px;
            list-style-type: disc;
        }}

        li {{
            margin-bottom: 8px;
            font-size: 11pt;
            line-height: 1.6;
        }}

        a {{
            color: {CONFIG['brand']['colors']['primary']};
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid {CONFIG['brand']['colors']['accent']};
        }}

        a:hover {{
            background-color: {CONFIG['brand']['colors']['light_bg']};
        }}

        code {{
            font-family: {CONFIG['brand']['fonts']['code']};
            background-color: {CONFIG['brand']['colors']['light_bg']};
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 10pt;
            color: #D32F2F;
        }}

        pre {{
            background-color: {CONFIG['brand']['colors']['light_bg']};
            border: 1px solid {CONFIG['brand']['colors']['border']};
            border-left: 4px solid {CONFIG['brand']['colors']['accent']};
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 15px 0;
            page-break-inside: avoid;
        }}

        pre code {{
            background: none;
            padding: 0;
            color: {CONFIG['brand']['colors']['text']};
            font-size: 9pt;
        }}

        strong {{
            font-weight: 600;
            color: {CONFIG['brand']['colors']['primary']};
        }}

        em {{
            font-style: italic;
            color: {CONFIG['brand']['colors']['text']};
        }}

        .highlight {{
            background-color: #FFF3CD;
            padding: 2px 4px;
            border-radius: 2px;
        }}

        /* Print styles */
        @media print {{
            body {{
                padding: 0;
            }}
            
            a {{
                text-decoration: underline;
            }}
            
            h1, h2, h3 {{
                page-break-after: avoid;
            }}
            
            ul, ol {{
                page-break-inside: avoid;
            }}
            
            p {{
                orphans: 2;
                widows: 2;
            }}
        }}
    </style>
</head>
<body>
    <div class="document-header">
        <div class="brand-mark">EXECUTIVE FORGE</div>
        <h1>{self.escape_html(self.title)}</h1>
        <p style="color: {CONFIG['brand']['colors']['accent']}; font-size: 11pt; margin-top: 5px;">
            Premium Module • Generated {datetime.now().strftime('%B %d, %Y')}
        </p>
    </div>

    <div class="content">
        {html_content}
    </div>
</body>
</html>"""
        return html


class PDFConverter:
    """Main converter pipeline."""
    
    def __init__(self):
        self.input_dir = Path(CONFIG['paths']['input'])
        self.output_dir = Path(CONFIG['paths']['output'])
        self.html_dir = Path(CONFIG['paths']['html_temp'])
        
    def setup(self):
        """Create output directories."""
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.html_dir.mkdir(parents=True, exist_ok=True)
        print(f"✓ Output directories ready: {self.output_dir}")
        
    def find_markdown_files(self):
        """Find all markdown files to convert."""
        md_files = sorted(self.input_dir.glob('*.md'))
        # Filter out INDEX.md and duplicates
        md_files = [f for f in md_files if f.name != 'INDEX.md']
        return md_files
    
    def sanitize_filename(self, title):
        """Convert title to safe filename."""
        name = re.sub(r'[^\w\s-]', '', title.lower())
        name = re.sub(r'[-\s]+', '-', name)
        return name.strip('-')
    
    def convert_file(self, filepath, module_num):
        """Convert a single markdown file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract title from filename or content
            title = filepath.stem.replace('-', ' ').title()
            
            # Try to get title from H1
            h1_match = re.search(r'^# (.+)$', content, re.MULTILINE)
            if h1_match:
                title = h1_match.group(1)
            
            # Convert to HTML
            converter = MarkdownToHTML(title, content, module_num)
            html_content = converter.generate_html()
            
            # Save HTML (intermediate format)
            html_filename = f"{module_num:02d}-{self.sanitize_filename(title)}.html"
            html_path = self.html_dir / html_filename
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            # For now, also save as-is PDF via name (placeholder)
            pdf_filename = f"{module_num:02d}-{self.sanitize_filename(title)}.pdf"
            
            print(f"  ✓ {module_num:02d}. {title}")
            return {
                'source': filepath.name,
                'title': title,
                'html_file': html_filename,
                'pdf_file': pdf_filename,
                'status': 'converted'
            }
        except Exception as e:
            print(f"  ✗ Error converting {filepath.name}: {e}")
            return None
    
    def run(self):
        """Run the complete conversion pipeline."""
        print("\n" + "="*70)
        print("EXECUTIVE FORGE PDF CONVERTER")
        print("="*70 + "\n")
        
        self.setup()
        
        md_files = self.find_markdown_files()
        print(f"Found {len(md_files)} markdown files to convert\n")
        print("Converting files:")
        
        results = []
        for i, filepath in enumerate(md_files, 1):
            result = self.convert_file(filepath, i)
            if result:
                results.append(result)
        
        # Create manifest
        manifest = {
            'project': 'Executive Forge',
            'generated': datetime.now().isoformat(),
            'total_modules': len(results),
            'modules': results,
            'output_directory': str(self.output_dir),
            'html_temp_directory': str(self.html_dir),
            'brand_colors': CONFIG['brand']['colors'],
            'brand_fonts': CONFIG['brand']['fonts'],
        }
        
        manifest_path = self.output_dir / 'manifest.json'
        with open(manifest_path, 'w') as f:
            json.dump(manifest, f, indent=2)
        
        print(f"\n✓ Manifest created: {manifest_path}")
        print(f"\n{'='*70}")
        print(f"CONVERSION COMPLETE: {len(results)} modules processed")
        print(f"{'='*70}")
        print(f"\nHTML files (ready for PDF conversion):")
        print(f"  → {self.html_dir}")
        print(f"\nNext step: Convert HTML files to PDF")
        print(f"  → Use wkhtmltopdf, Pandoc, or browser print-to-PDF")
        print(f"  → Or run: python3 pdf-converter.py --convert-to-pdf\n")
        
        return manifest


def print_help():
    """Print help message."""
    print("""
Executive Forge PDF Converter
=============================

Usage:
    python3 pdf-converter.py                 # Convert markdown to HTML
    python3 pdf-converter.py --html-only     # Same as above
    python3 pdf-converter.py --convert-pdf   # Convert HTML to PDF (requires external tools)
    python3 pdf-converter.py --help          # Show this help
    python3 pdf-converter.py --about         # Show configuration

Features:
    ✓ Converts markdown to professional HTML with branding
    ✓ Applies Executive Forge colors and typography
    ✓ Generates publication-ready styling
    ✓ Creates manifest.json for tracking
    ✓ Ready for external PDF conversion tools

Output:
    /gumroad-pdfs/              - Main output directory
    /gumroad-pdfs/html-temp/    - HTML intermediate files
    /gumroad-pdfs/manifest.json - Conversion manifest

PDF Conversion:
    The converter generates publication-ready HTML that can be converted
    to PDF using:
    
    - wkhtmltopdf (recommended)
    - Pandoc with appropriate engine
    - Browser print-to-PDF (save as PDF)
    - Online converters
    """)


if __name__ == '__main__':
    if len(sys.argv) > 1:
        arg = sys.argv[1].lower()
        if arg in ['--help', '-h', 'help']:
            print_help()
            sys.exit(0)
        elif arg in ['--about']:
            print(json.dumps(CONFIG, indent=2))
            sys.exit(0)
    
    converter = PDFConverter()
    converter.run()
