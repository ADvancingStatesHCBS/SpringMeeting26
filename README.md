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

```
SpringMeeting26/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # Project documentation
```

## Features

### Countdown Timer
Live countdown to the event start date (April 27, 2026 at 9:00 AM).

### Sponsor Banner
- Auto-scrolling sponsor logos
- Pause on hover
- Click to open sponsor modal with details and social links

### Interactive FAQ
- Category-based filtering (General, Registration, Health & Safety, Travel)
- Snap-scroll navigation on desktop
- Responsive card layout on mobile

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
