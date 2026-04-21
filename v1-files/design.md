# Design Documentation - Angela Gao Portfolio

This document outlines the design choices, visual language, and UI components used in the portfolio website.

## 🎨 Color Palette

### Primary Colors
- **Accent Color**: `#3f0070` (Purple) - Defined as `--accent` in `css/overrides.css`.
- **Accent Hover**: `#5a00a6` (Lighter Purple).
- **Secondary Color**: `#474559` (Dark Grey/Slate) - Used for buttons, footers, and background elements.

### Text Colors
- **Main Headings (Light Mode)**: `#212121` (Black).
- **Subheadings (Light Mode)**: `#353535` and `#484848` (Dark Greys).
- **Body Text**: `#5b5b5b` (Grey).
- **Text on Dark Backgrounds**: `#ffffff` or `rgba(255, 255, 255, 0.8)`.

### Dark Mode
- **Background**: `#0c0c0d` (Near Black).
- **Card Background**: Needs implementation (currently defaults to white).
- **Navbar (Scrolled)**: `#0c0c0d`.
- **Text**: White for headings and body.

## Typography

- **Primary Font**: `Merriweather`, serif (Google Fonts).
- **Secondary Font**: `Maven Pro`, sans-serif (Base template font, partially replaced).
- **Headings**: Bold, letter-spacing: `-1px`.
- **Body**: 18px size, 300 weight, 1.5 line-height.

## UI Components

### Navigation Bar
- **Sticky/Fixed**: Always accessible at the top.
- **Dynamic Active State**: Automatically highlights the current page.
- **Scroll Behavior**: Uses `Headroom.js` to hide on scroll down and show on scroll up.

### Logo Configuration
- **Centralized**: Configured in `js/logo-config.js`.
- **Title**: "Angela".
- **Icon**: `uil uil-user` (Unicons).
- **Behavior**: Automatically applied to all `.navbar-brand` elements.

### Project Cards
- **Structure**: Image top, followed by title, description, and tags.
- **Interactions**: Hover effect (lift up and increased shadow).
- **Styling**: 15px border-radius, subtle shadow (`rgba(0,0,0,0.1)`).
- **Tags**: Rounded pills with light accent background (`rgba(63, 0, 112, 0.1)`) and accent text.

### Buttons
- **Style**: Rounded (50px border-radius), bold text.
- **Primary Action**: Accent background (`#3f0070`), white text.
- **Hover**: Transition to `#5a00a6`.

### Project Carousel (Homepage)
- **Library**: `Owl Carousel 2`.
- **Behavior**: Infinite loop, responsive (3 items desktop, 2 tablet, 1 mobile).

## Layout & Responsiveness

- **Framework**: Bootstrap 4.
- **Approach**: Mobile-first.
- **Breakpoints**:
  - Tablet: 768px.
  - Desktop: 992px.
- **Section Spacing**: `padding: 8rem 0` for full-screen sections.

## Assets & Imagery

- **Project Covers**: Aiming for 2:3 ratio (Planned update).
- **Icons**: `Unicons` font library.
- **Illustrations**: `unDraw` SVG assets.

## 🛠️ Design To-Do List (from README.md)

- [ ] Change project cover images to 2:3 ratio.
- [ ] Implement/Fix Website icon (favicon).
- [ ] Fix Dark Mode (specifically for project cards and detailed pages).
- [ ] Attach photos to experience section.
