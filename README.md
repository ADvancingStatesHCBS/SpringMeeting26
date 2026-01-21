# ADvancing States Spring Meeting 2026

Website for the 2026 ADvancing States Spring Membership Meeting, taking place April 27-29, 2026 at the Minneapolis Marriott City Center.

## Overview

This is a single-page conference website featuring:

- **Hero Section** - Main banner with event details, countdown timer, and registration button
- **Sponsor Banner** - Scrolling display of platinum partner logos with interactive modals
- **Venue Details** - Information about the Minneapolis Marriott City Center with amenities
- **Agenda** - Timeline view of the 3-day conference schedule
- **FAQ** - Interactive card-based FAQ with category filtering
- **Footer** - Newsletter signup, quick links, and contact information

## Project Structure

The project is organized into section-based files for easy editing:

```
SpringMeeting26/
├── index.html              # Main HTML page (combines all sections)
│
├── css/
│   ├── main.css            # Entry point - imports all CSS files
│   ├── variables.css       # CSS custom properties (colors, etc.)
│   ├── base.css            # Global resets and common styles
│   ├── hero.css            # Hero section styles
│   ├── sponsors.css        # Sponsor banner and modal styles
│   ├── venue.css           # Venue section styles
│   ├── agenda.css          # Agenda timeline styles
│   ├── faq.css             # FAQ section styles
│   └── footer.css          # Footer and newsletter styles
│
├── js/
│   ├── main.js             # Entry point - initializes all modules
│   ├── countdown.js        # Countdown timer functionality
│   ├── sponsors.js         # Sponsor data and modal logic
│   └── faq.js              # FAQ data and interactive card logic
│
├── sections/               # HTML snippets for reference/editing
│   ├── hero.html
│   ├── sponsors.html
│   ├── venue.html
│   ├── agenda.html
│   ├── faq.html
│   └── footer.html
│
└── README.md
```

## Editing Guide

### To edit a section's appearance:
1. Open the corresponding CSS file in `css/` (e.g., `css/hero.css`)
2. Modify the styles
3. Changes will automatically apply through `main.css`

### To edit section content:
1. Open `index.html` and find the section (marked with HTML comments)
2. Or reference the corresponding file in `sections/` for the HTML structure
3. Make your changes in `index.html`

### To modify sponsor data:
Edit `js/sponsors.js` - the `sponsors` array contains all sponsor information

### To modify FAQ content:
Edit `js/faq.js` - the `faqData` object contains all FAQ questions and answers

### CSS Variables:
All brand colors are defined in `css/variables.css` for easy theming

## Features

### Countdown Timer
Live countdown to the event start date (April 27, 2026 at 9:00 AM). Edit the target date in `js/countdown.js`.

### Sponsor Banner
- Auto-scrolling sponsor logos
- Pause on hover
- Click to open sponsor modal with details and social links
- Sponsor data managed in `js/sponsors.js`

### Interactive FAQ
- Category-based filtering (General, Registration, Health & Safety, Travel)
- Snap-scroll navigation on desktop
- Responsive card layout on mobile
- FAQ content managed in `js/faq.js`

### Responsive Design
Fully responsive layout that works on desktop, tablet, and mobile devices.

## Usage

1. Open `index.html` in a web browser
2. For development, use a local server to avoid CORS issues with images

### Local Development

Using Python:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx serve
```

Then open `http://localhost:8000` in your browser.

## Event Details

- **Event**: 2026 ADvancing States Spring Membership Meeting
- **Dates**: April 27-29, 2026
- **Location**: Minneapolis Marriott City Center, 30 South 7th Street, Minneapolis, MN 55402
- **Registration**: [https://www.advancingstates.org/register](https://www.advancingstates.org/register)

## Contact

- **Email**: info@advancingstates.org
- **Phone**: (202) 898-2578
- **Website**: [https://www.advancingstates.org](https://www.advancingstates.org)

## License

Copyright 2026 ADvancing States. All rights reserved.
