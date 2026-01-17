# Halaweh Event Landing Page

This repository contains the source code for the Halaweh Event landing page, a responsive web page designed to promote a warm winter experience at Halaweh Restaurant. It features event details, buffet information, kids' activities, customer reviews, a booking form, and multi-language support.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Sections](#sections)
- [Color Modes](#color-modes)
- [Technical Notes](#technical-notes)
- [Folder Structure](#folder-structure)

## Project Overview

The Halaweh Event landing page is a modern, responsive single-page application built with HTML, CSS, and JavaScript. It aims to provide a delightful user experience with interactive elements, multi-language support (Arabic and English), and multiple color themes (Light, Dark, and a Nature-inspired mode).

## Features

-   **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
-   **Multi-language Support**: Toggle between Arabic (RTL) and English (LTR) with dynamic content updates.
-   **Theme Switching**: Three distinct color modes (Light, Dark, and Nature-inspired) with persistent user preference.
-   **Hero Section**: Engaging main headline and subheadline with a subtle stroke effect.
-   **Benefits Section**: Visually appealing infographic highlighting key event benefits.
-   **Buffets Section**: Detailed information on lunch and dinner buffets presented in a notebook-style card layout.
-   **Kids Activities Accordion**: Interactive section revealing activities for children.
-   **Event Details**: Clear presentation of event pricing, dates, times, and duration.
-   **Customer Reviews**: Expandable review cards to showcase guest testimonials.
-   **Booking Form**: Interactive form for event reservations with client-side validation and a thank-you popup.
-   **Social Media Sharing**: Modal for sharing the event on WhatsApp, Instagram, and YouTube.
-   **Custom Fonts**: Uses 'Tajawal' font for a consistent and appealing Arabic typography.

## Sections

### Header
-   **Brand Logo**: Halaweh logo.
-   **Theme Toggle**: Button to switch between Light, Dark, and Nature-inspired modes.
-   **Language Switcher**: Dropdown to toggle between Arabic and English content.

### Hero Section
-   Main promotional area with a background image and an overlay.
-   Catchy headline and subheadline with a stroke effect.
-   Call-to-action button linking to the booking form.

### Benefits Section
-   Introduces the event's unique offerings.
-   Circular infographic highlighting various benefits with icons and labels.

### Buffets Section
-   Two distinct cards for lunch and dinner buffets.
-   Notebook-style design with spiral elements.
-   Lists various food and drink offerings for each buffet.

### Kids Activities
-   Accordion-style section that expands to reveal a list of children's activities.

### Event Details
-   Presents all practical information about the event: price, days, period, times, and limited seating.

### Reviews Section
-   Accordion-style cards displaying customer testimonials.
-   Each review includes a question, customer name, and detailed answer.

### Booking Section
-   A form for users to book their spot at the event.
-   Includes fields for name, number of people, meal type, booking date, and additional notes.
-   Client-side validation for required fields and date restrictions.
-   "Thank You" popup on successful submission.

### Footer
-   Contains policies (cancellation, return), WhatsApp support link, and a share event button.
-   Copyright information and location details.

## Color Modes

The landing page supports three distinct color modes, which can be toggled via the button in the header:

1.  **Light Mode (☀️)**: The default theme, featuring warm cream backgrounds, dark brown text, and burnt orange accents.
    -   `--bg-color: #f5f1ea;`
    -   `--primary-cta: #c45a2e;`
    -   `--secondary-accent: #6b7b4a;`
    -   `--text-color: #3a2e2a;`

2.  **Dark Mode (🌙)**: A sleek, dark theme with charcoal/dark brown backgrounds and off-white text.
    -   `--bg-color: #1F1B18;`
    -   `--primary-cta: #C45A2E;`
    -   `--secondary-accent: #6b7b4a;`
    -   `--text-color: #F2EFEA;`
    -   Content cards and popups feature lighter brown backgrounds (`#4a3a32`) for visual depth.

3.  **Nature-Inspired Mode (🌓)**: A warm, earthy theme with deep olive green backgrounds and sandy beige cards.
    -   `--bg-color: #2C3A2B;`
    -   `--primary-cta: #D4653A;` (Terracotta/Burnt Orange)
    -   `--secondary-accent: #8B7355;` (Earthy Brown)
    -   `--text-color: #FAF8F3;` (Ivory White/Soft Cream)
    -   `--card-bg: #E8D5B7;` (Sandy Beige/Creamy Biscuit)
    -   `--card-text: #3E2723;` (Deep Coffee Brown)

## Technical Notes

-   **HTML Structure**: `Index.html` provides the semantic structure of the page, leveraging ARIA attributes for accessibility.
-   **CSS Styling**: `Styles.css` handles all visual presentation, including responsive design, theme variables, and animations. It utilizes CSS variables for easy theme management.
-   **JavaScript Functionality**: `Script.js` manages interactive elements:
    -   Language switching logic (stores preference in `localStorage`).
    -   Theme toggling (cycles through themes, stores preference in `localStorage`).
    -   Form validation and submission handling for the booking form.
    -   Accordion functionality for Kids Activities and Reviews sections.
    -   Social media sharing logic.
-   **Assets**: Images are stored in the `./Assets/` directory.

## Folder Structure

```
.
├── Assets/
│   ├── Halaweh (1).png
│   ├── Hero image.jpg
│   └── benefits image.jpg
├── Index.html
├── Styles.css
├── Script.js
└── README.md
```
