#!/bin/bash
# PDF Converter Script - Convert 5 HTML files to PDF
# Usage: bash convert-to-pdf.sh

echo "Executive Forge PDF Converter"
echo "============================="
echo ""

HTML_DIR="/data/workspace/gumroad-pdfs/html-temp"
PDF_DIR="/data/workspace/gumroad-pdfs"

# Files to convert
declare -a FILES=(
    "04-building-high-performance-teams-hiring-firing-and-culture-architecture.html"
    "07-customer-acquisition-mastery-channels-cac-and-compounding-growth.html"
    "11-pricing-psychology-using-data-psychology-to-maximize-revenue.html"
    "19-change-management-leading-transformation-without-losing-people.html"
    "20-product-strategy-from-concept-to-market-leadership.html"
)

echo "Checking for conversion tools..."
echo ""

# Try different conversion methods
if command -v wkhtmltopdf &> /dev/null; then
    echo "✓ Using wkhtmltopdf"
    for file in "${FILES[@]}"; do
        echo "Converting: $file"
        wkhtmltopdf "$HTML_DIR/$file" "$PDF_DIR/${file%.html}.pdf"
    done
elif command -v pandoc &> /dev/null; then
    echo "✓ Using Pandoc"
    for file in "${FILES[@]}"; do
        echo "Converting: $file"
        pandoc "$HTML_DIR/$file" -o "$PDF_DIR/${file%.html}.pdf"
    done
else
    echo "⚠️ No conversion tools found (wkhtmltopdf or pandoc)"
    echo ""
    echo "Please use one of these alternatives:"
    echo ""
    echo "OPTION 1: Online Converter (Fastest)"
    echo "1. Go to cloudconvert.com"
    echo "2. Upload each HTML file"
    echo "3. Select 'PDF' output"
    echo "4. Download"
    echo ""
    echo "OPTION 2: Browser Print"
    echo "1. Open HTML in Chrome/Firefox"
    echo "2. Ctrl+P → Save as PDF"
    echo ""
    echo "OPTION 3: Install wkhtmltopdf locally"
    echo "  Ubuntu/Debian: sudo apt-get install wkhtmltopdf"
    echo "  Mac: brew install wkhtmltopdf"
    echo "  Then run this script again"
    echo ""
    echo "Files are ready at:"
    echo "  $HTML_DIR/"
    exit 1
fi

echo ""
echo "✓ Conversion complete!"
echo "PDFs saved to: $PDF_DIR/"
ls -lh "$PDF_DIR"/*.pdf 2>/dev/null || echo "No PDFs found"
