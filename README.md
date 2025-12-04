# Estanislao Claucich - Portfolio

Professional academic and engineering portfolio built with pure HTML, CSS, and JavaScript.

## Structure

- `index.html` - Main HTML structure with semantic sections
- `styles.css` - All styling, animations, and responsive design
- `data.js` - Data layer containing personal info, education, experience, publications
- `app.js` - Application logic for rendering, navigation, and animations

## Features

- **No Build Process Required** - Pure HTML/CSS/JS, no compilation needed
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Smooth Animations** - Intersection Observer API for scroll animations
- **Active Navigation** - Scroll spy for highlighting current section
- **Mobile Menu** - Collapsible navigation for small screens
- **Modular Data** - Easy to update content in `data.js`

## Development

To run locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Deployment

Simply upload all files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

No build step required!

## Adding New Content

### Update Personal Information
Edit the `PERSONAL_INFO` object in `data.js`

### Add Publications
Add new entries to the `PUBLICATIONS` array in `data.js`

### Add Experience
Add entries to `EDUCATION`, `RESEARCH_EXPERIENCE`, `INDUSTRY_EXPERIENCE`, or `TEACHING_EXPERIENCE` arrays in `data.js`

### Styling Changes
Modify `styles.css` - all colors are defined as CSS variables in `:root` for easy theming

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers
