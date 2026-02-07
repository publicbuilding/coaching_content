#!/usr/bin/env python3
"""
PDF Design Audit Script
Analyzes 22 Executive Forge course PDFs for design & layout issues
"""

import os
import re
import struct
from pathlib import Path

class PDFAnalyzer:
    def __init__(self, filepath):
        self.filepath = filepath
        self.filename = os.path.basename(filepath)
        self.title = self._extract_title()
        self.data = self._read_pdf_data()
        self.issues = []
        self.recommendations = []
        self.data_viz_ops = []
        
    def _read_pdf_data(self):
        """Read raw PDF data for analysis"""
        try:
            with open(self.filepath, 'rb') as f:
                return f.read()
        except Exception as e:
            return b''
    
    def _extract_title(self):
        """Extract title from filename"""
        # Remove number prefix and file extension, capitalize nicely
        name = self.filename.replace('.pdf', '')
        # Remove leading number and dash
        name = re.sub(r'^\d+-', '', name)
        # Replace dashes with spaces and title case
        name = name.replace('-', ' ').title()
        return name
    
    def _get_text_content(self):
        """Extract readable text from PDF"""
        try:
            # Use strings-like extraction from binary
            text = []
            current = b''
            for byte in self.data:
                if 32 <= byte <= 126:  # Printable ASCII
                    current += bytes([byte])
                else:
                    if len(current) > 3:
                        text.append(current.decode('ascii', errors='ignore'))
                    current = b''
            return ' '.join(text)
        except:
            return ''
    
    def analyze(self):
        """Run full analysis"""
        self._check_cover_page()
        self._check_table_of_contents()
        self._check_hashtags()
        self._check_margins_and_spacing()
        self._check_typography()
        self._check_structure()
        self._check_data_visualization_needs()
        self._assess_overall_professionalism()
    
    def _check_cover_page(self):
        """Check for proper title page"""
        text = self._get_text_content()
        
        # Look for typical cover page indicators
        has_title = bool(re.search(r'(Title|Chapter|Module|Introduction|Executive)', text[:500], re.I))
        has_author = bool(re.search(r'(Author|By|Created|Written)', text[:1000], re.I))
        
        if len(text) < 500:
            self.issues.append({
                'title': 'Minimal Content',
                'severity': 'MEDIUM',
                'detail': 'PDF appears very short or light on content'
            })
        
        if not has_title:
            self.issues.append({
                'title': 'Missing Clear Cover Page',
                'severity': 'HIGH',
                'detail': 'No obvious title page or header detected'
            })
            self.recommendations.append('Add professional cover page with course title, module number, and branding')
        else:
            self.recommendations.append('Ensure cover page includes author/company name and date')
    
    def _check_table_of_contents(self):
        """Check for TOC"""
        text = self._get_text_content()
        has_toc = bool(re.search(r'(Table of Contents|Contents|TOC|Outline)', text, re.I))
        
        if not has_toc and len(text) > 2000:  # Longer documents should have TOC
            self.issues.append({
                'title': 'Missing Table of Contents',
                'severity': 'HIGH',
                'detail': 'Document appears substantial but lacks TOC'
            })
            self.recommendations.append('Add numbered Table of Contents with page references')
        elif has_toc:
            self.recommendations.append('Verify TOC page numbers are accurate and properly formatted')
    
    def _check_hashtags(self):
        """Check for excessive or unprofessional hashtags"""
        text = self._get_text_content()
        hashtags = re.findall(r'#\w+', text)
        
        if len(hashtags) > 5:
            self.issues.append({
                'title': 'Excessive Hashtags',
                'severity': 'MEDIUM',
                'detail': f'Found {len(hashtags)} hashtags - appears informal and unprofessional'
            })
            self.recommendations.append('Remove or minimize hashtags (limit to 1-2 max, if necessary)')
        elif hashtags:
            self.issues.append({
                'title': 'Inappropriate Hashtags',
                'severity': 'HIGH',
                'detail': f'Hashtags detected in professional PDF: {hashtags[:3]}'
            })
            self.recommendations.append('Remove all hashtags - inappropriate for premium executive course material')
    
    def _check_margins_and_spacing(self):
        """Analyze margins and spacing"""
        filesize = os.path.getsize(self.filepath) / 1024
        
        # Use file size as proxy for content density
        if filesize < 40:
            self.issues.append({
                'title': 'Sparse Content/Poor Spacing',
                'severity': 'MEDIUM',
                'detail': 'Document is quite small - may indicate excessive margins or loose spacing'
            })
            self.recommendations.append('Reduce top/bottom margins to 0.75-1 inch, improve content density')
        
        if filesize > 150:
            self.issues.append({
                'title': 'Dense Content Layout',
                'severity': 'LOW',
                'detail': 'Document is large - may have tight spacing'
            })
            self.recommendations.append('Increase paragraph breaks and whitespace for readability')
        
        self.recommendations.append('Verify margins are consistent: 1" top/bottom, 0.75" sides (standard)')
    
    def _check_typography(self):
        """Analyze typography quality"""
        text = self._get_text_content()
        
        # Check for formatting clues
        all_caps_sections = len(re.findall(r'\b[A-Z]{3,}\b', text))
        
        if all_caps_sections > 10:
            self.issues.append({
                'title': 'Over-use of ALL CAPS',
                'severity': 'MEDIUM',
                'detail': 'Multiple all-caps sections can reduce readability and look unprofessional'
            })
            self.recommendations.append('Use title case or sentence case instead of ALL CAPS for headers')
        
        self.recommendations.append('Ensure hierarchy: Headers (16-18pt), Subheaders (12-14pt), Body (11pt)')
        self.recommendations.append('Use max 2 font families (sans-serif for headers, serif for body)')
    
    def _check_structure(self):
        """Check document structure"""
        text = self._get_text_content()
        lines = text.split()
        word_count = len(lines)
        
        # Check for section markers
        sections = len(re.findall(r'(Section|Chapter|Module|Part|Lesson)\s*\d+', text, re.I))
        
        if sections < 1 and word_count > 1000:
            self.issues.append({
                'title': 'No Clear Section Structure',
                'severity': 'MEDIUM',
                'detail': 'Content lacks numbered sections or clear breaks'
            })
            self.recommendations.append('Add numbered sections/chapters with clear visual separators')
        
        self.recommendations.append('Ensure page breaks between major sections')
    
    def _check_data_visualization_needs(self):
        """Identify opportunities for charts/graphs"""
        text = self._get_text_content()
        
        # Look for content that should have visuals
        viz_keywords = [
            (r'growth|increase|decrease|trend', 'Line or area chart'),
            (r'percentage|portion|share|split', 'Pie or donut chart'),
            (r'comparison|versus|vs|different', 'Bar chart'),
            (r'process|steps|workflow|flow', 'Flowchart or process diagram'),
            (r'timeline|phase|stage|progression', 'Timeline or Gantt chart'),
            (r'relationship|connection|network', 'Mind map or network diagram'),
        ]
        
        for pattern, viz_type in viz_keywords:
            if re.search(pattern, text, re.I):
                self.data_viz_ops.append(viz_type)
        
        if len(self.data_viz_ops) == 0 and len(text) > 2000:
            self.data_viz_ops.append('Consider adding 2-3 relevant diagrams to break up text-heavy sections')
    
    def _assess_overall_professionalism(self):
        """Overall professional assessment"""
        critical_issues = sum(1 for i in self.issues if i['severity'] == 'CRITICAL')
        high_issues = sum(1 for i in self.issues if i['severity'] == 'HIGH')
        
        if critical_issues > 0:
            self.issues.append({
                'title': 'OVERALL: Premium Quality Concern',
                'severity': 'CRITICAL',
                'detail': f'{critical_issues} critical issues detected - not suitable for $29.99+ premium product'
            })
        elif high_issues > 2:
            self.issues.append({
                'title': 'OVERALL: Professionalism Needs Improvement',
                'severity': 'HIGH',
                'detail': f'{high_issues} high-priority issues - would not meet premium standards'
            })
        else:
            self.recommendations.append('POSITIVE: Core structure is acceptable; focus on refinement')
    
    def get_report(self):
        """Generate audit report"""
        report = f"\n{'='*70}\n"
        report += f"Module: {self.title}\n"
        report += f"File: {self.filename} ({os.path.getsize(self.filepath)/1024:.1f} KB)\n"
        report += f"{'='*70}\n\n"
        
        # Issues
        report += "Issues Found:\n"
        if self.issues:
            for issue in self.issues:
                severity = f"[{issue['severity']}]".ljust(10)
                report += f"• {severity} {issue['title']}: {issue['detail']}\n"
        else:
            report += "• No critical issues detected\n"
        
        # Recommendations
        report += "\nRecommendations:\n"
        if self.recommendations:
            for i, rec in enumerate(self.recommendations, 1):
                report += f"{i}. {rec}\n"
        
        # Data Viz
        report += "\nData Visualization Opportunities:\n"
        if self.data_viz_ops:
            for viz in set(self.data_viz_ops):  # Remove duplicates
                report += f"• {viz}\n"
        else:
            report += "• Consider adding visual elements to improve engagement\n"
        
        return report


def main():
    pdf_dir = "/data/workspace/gumroad-ready"
    pdfs = sorted([f for f in os.listdir(pdf_dir) if f.endswith('.pdf')])
    
    print(f"\n{'='*70}")
    print(f"EXECUTIVE FORGE PDF DESIGN AUDIT")
    print(f"Analyzing {len(pdfs)} course modules")
    print(f"{'='*70}\n")
    
    analyzers = []
    for pdf_file in pdfs:
        pdf_path = os.path.join(pdf_dir, pdf_file)
        analyzer = PDFAnalyzer(pdf_path)
        analyzer.analyze()
        analyzers.append(analyzer)
        print(analyzer.get_report())
    
    # Summary Report
    print(f"\n\n{'='*70}")
    print("SUMMARY AUDIT REPORT")
    print(f"{'='*70}\n")
    
    all_issues = []
    for a in analyzers:
        for issue in a.issues:
            all_issues.append((a.title, issue))
    
    # Top 5 Critical/High Issues
    print("TOP CRITICAL & HIGH-PRIORITY ISSUES ACROSS ALL MODULES:\n")
    critical_high = [i for i in all_issues if i[1]['severity'] in ['CRITICAL', 'HIGH']]
    critical_high = sorted(critical_high, key=lambda x: {'CRITICAL': 0, 'HIGH': 1}.get(x[1]['severity'], 2))
    
    for i, (module, issue) in enumerate(critical_high[:5], 1):
        print(f"{i}. [{issue['severity']}] {module}")
        print(f"   Problem: {issue['title']}")
        print(f"   Detail: {issue['detail']}\n")
    
    # Common Design Patterns Needing Fixes
    print("\nCOMMON DESIGN PATTERNS NEEDING ATTENTION:\n")
    issue_types = {}
    for module, issue in all_issues:
        key = issue['title']
        if key not in issue_types:
            issue_types[key] = []
        issue_types[key].append(module)
    
    for issue_type in sorted(issue_types.keys(), key=lambda x: len(issue_types[x]), reverse=True)[:5]:
        count = len(issue_types[issue_type])
        modules = issue_types[issue_type]
        print(f"• {issue_type}")
        print(f"  Affects {count} modules: {', '.join(modules[:3])}")
        print()
    
    print("\nRECOMMENDED HTML/CSS CHANGES:\n")
    print("""
1. **Margin/Padding Standards**
   CSS: body { margin: 1in 0.75in; }
        h1 { margin-top: 1.5em; margin-bottom: 0.75em; }
        p { margin-bottom: 0.75em; line-height: 1.5; }

2. **Typography Hierarchy**
   CSS: h1 { font-size: 18pt; font-weight: bold; }
        h2 { font-size: 14pt; font-weight: bold; }
        p { font-size: 11pt; }
        
3. **Remove Hashtags**
   Find/Replace: #\w+ → (remove entirely)

4. **Add Cover Page Template**
   HTML: <div class="cover-page">
           <h1>[Course Title]</h1>
           <h2>[Module Name]</h2>
           <p>[Author/Company]</p>
         </div>

5. **Add TOC if Missing**
   Generate automated TOC with page numbers for documents >2000 words

6. **Section Breaks**
   CSS: .section-break { page-break-before: always; margin: 2em 0; }
        section { border-top: 2pt solid #333; padding-top: 1em; }

7. **Improve Readability**
   CSS: max-width: 7in; (for body text)
        line-height: 1.6;
        letter-spacing: 0.02em;
    """)
    
    print(f"\n{'='*70}")
    print(f"Audit Complete: {len(analyzers)} modules analyzed")
    print(f"Critical Issues: {sum(1 for _, i in all_issues if i['severity']=='CRITICAL')}")
    print(f"High Issues: {sum(1 for _, i in all_issues if i['severity']=='HIGH')}")
    print(f"{'='*70}\n")


if __name__ == '__main__':
    main()
