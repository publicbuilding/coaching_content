# Template Improvements v2 - Fix Issues

## Issues to Fix

1. **Spacer divs rendering as text** – Remove these, use CSS margins instead
2. **Washed-out colors** – Enhance contrast, use richer colors
3. **Cramped layout** – Better margins and padding throughout
4. **Missing visualizations** – Add color blocks and visual hierarchy
5. **Separator lines** – Style the `---` dividers properly

## Strategy

Instead of adding HTML elements, enhance the CSS to:
- Remove spacer divs from template
- Use `:not()` and other CSS selectors to style existing content
- Add color to existing elements (h2 backgrounds, blockquotes, tables)
- Improve margins on base elements
- Style `<p>` containing just dashes as visual separators

## Key Changes

### 1. Color Enhancement
```css
/* Make colors much richer */
h1 { background-color: rgba(27, 58, 107, 0.08); padding: 0.25in; }
h2 { background-color: rgba(212, 165, 116, 0.08); padding: 0.15in 0 0.15in 0.25in; }
h3 { color: #1B3A6B; font-weight: 700; }
```

### 2. Visual Separators
```css
p:has-text("---") {
    border-top: 3px solid #D4A574;
    border-bottom: 3px solid #D4A574;
    margin: 0.5in 0;
    padding: 0.5in 0;
    text-align: center;
    color: transparent;
    font-size: 0;
}
```

### 3. Better Base Spacing
```css
p { margin-bottom: 0.4in; }
li { margin-bottom: 0.2in; }
h2 { margin-top: 1.2in; margin-bottom: 0.5in; }
h3 { margin-top: 0.75in; }
```

### 4. Color Blocks
```css
blockquote {
    background-color: #FFF9F0;
    border-left: 5px solid #D4A574;
    border-right: none;
    padding: 0.4in;
    margin: 0.5in 0;
}

strong { color: #1B3A6B; }
em { color: #D4A574; }
```

## Result

- Colors are vibrant and professional
- Margins feel spacious, not cramped
- Visual hierarchy is clear
- Content flows beautifully
- No broken spacer divs
