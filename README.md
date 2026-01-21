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

Each section is a self-contained HTML file with embedded `<style>` and `<script>` tags for easy editing and Cvent embedding:

```
SpringMeeting26/
├── index.html              # Combined page (for local preview)
│
└── sections/               # Self-contained section files
    ├── hero.html           # Hero with countdown timer
    ├── sponsors.html       # Scrolling sponsor banner + modal
    ├── venue.html          # Venue details and map
    ├── agenda.html         # Conference agenda timeline
    ├── faq.html            # Interactive FAQ cards
    └── footer.html         # Newsletter + footer
```

## Editing Guide

### Each section file contains:
- `<style>` block with all CSS for that section
- HTML content
- `<script>` block with any JavaScript (where needed)

### To edit a section:
1. Open the corresponding file in `sections/`
2. Modify styles, content, or scripts as needed
3. Copy the entire file contents to embed in Cvent or other platforms

### Sponsor Data
Located in `sections/sponsors.html` - the `sponsors` array in the `<script>` block contains all sponsor information.

### FAQ Content
Located in `sections/faq.html` - the `faqData` object in the `<script>` block contains all questions/answers.

### Countdown Timer
Located in `sections/hero.html` - edit the `targetDate` in the `<script>` block.

## Features

### Countdown Timer
Live countdown to the event start (April 27, 2026 at 9:00 AM).

### Sponsor Banner
- Auto-scrolling sponsor logos
- Pause on hover
- Click to open modal with sponsor details

### Interactive FAQ
- Category filtering (General, Registration, Health & Safety, Travel)
- Snap-scroll card navigation on desktop
- Responsive layout on mobile

### Responsive Design
Fully responsive layout for desktop, tablet, and mobile.

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
