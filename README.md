# Angela Gao Portfolio Website

Hi! Thanks for visiting my portfolio website. For this project I used Cursor, ChatGPT, Claude, and Figma make to make my vision come true. Last updated 12/2025.

## 📁 Website Structure

```
portfolio/
├── index.html              # Homepage with featured projects carousel
├── projects.html            # All projects page (grid layout)
├── projects/                # Individual project detail pages
│   ├── project-ecommerce.html
│   ├── project-mobile.html
│   └── project-portfolio.html
│
├── includes/                # Reusable HTML components
│   ├── navbar.html          # Navigation bar (shared across all pages)
│   ├── footer.html          # Footer (shared across all pages)
│   └── project-cards.html  # All project cards (single source of truth)
│
├── css/
│   ├── bootstrap.min.css           # Bootstrap 4 framework
│   ├── tooplate-style.css          # Base template styles
│   ├── overrides.css               # Custom overrides (see below)
│   ├── projects.css                # Project-specific styles
│   ├── unicons.css                 # Icon font
│   ├── owl.carousel.min.css        # Carousel library styles
│   └── owl.theme.default.min.css   # Carousel theme
│
├── js/
│   ├── jquery-3.3.1.min.js         # jQuery library
│   ├── bootstrap.min.js             # Bootstrap JS
│   ├── owl.carousel.min.js          # Carousel library
│   ├── includes.js                  # Loads navbar & footer
│   ├── project-cards.js             # Loads & filters project cards
│   ├── custom.js                    # Custom functionality
│   ├── Headroom.js                  # Header scroll behavior
│   ├── smoothscroll.js              # Smooth scrolling
│   └── logo-config.js               # Logo configuration
│
├── images/
│   ├── project/                     # Project images
│   └── undraw/                      # Illustration assets
│
└── font/                            # Icon fonts (Unicons)
```

## 🎨 CSS Overrides (`css/overrides.css`)

The `overrides.css` file contains customizations that override the base template styles:

### Key Customizations:

1. **Typography**
   - Font: Merriweather (Google Fonts)
   - Applied globally to `body`

2. **Color Scheme**
   - Accent color: `#3f0070` (purple)
   - Defined as CSS variable: `--accent`
   - Used for links, buttons, tags, and highlights

3. **Component Styling**
   - **Links**: Accent color on hover
   - **Buttons**: Accent background with hover effect (`#5a00a6`)
   - **Project Tags**: Light accent background with accent text
   - **Page Headers**: Accent background

4. **Responsive Image Sizing**
   - `.about-image`: Ensures images scale properly
   - Images set to 100% width with auto height

5. **Text Centering**
   - `.about-text`: Centered on mobile, left-aligned on desktop (≥992px)

## 🔧 Include System

The website uses a modular include system to avoid code duplication:

### 1. Navigation Bar (`includes/navbar.html`)
- **Loaded by**: `js/includes.js`
- **Container**: `<div id="navbar-container"></div>`
- **Features**:
  - Automatically sets active state based on current page
  - Shared across `index.html` and `projects.html`
  - **To edit**: Modify `includes/navbar.html`

### 2. Footer (`includes/footer.html`)
- **Loaded by**: `js/includes.js`
- **Container**: `<div id="footer-container"></div>`
- **Features**:
  - Shared footer across all pages
  - **To edit**: Modify `includes/footer.html`

### 3. Project Cards (`includes/project-cards.html`)
- **Loaded by**: `js/project-cards.js`
- **Features**:
  - Single source of truth for all project cards
  - Cards marked with `data-featured="true"` appear on homepage
  - All cards appear on `projects.html`
  - Only featured cards appear on `index.html` carousel

## 📝 How to Edit Content

### Adding/Editing Project Cards

1. **Edit** `includes/project-cards.html`
2. **Add a new card**:
   ```html
   <div class="project-card-item" data-featured="true">
       <a href="projects/your-project.html" class="project-card-link">
           <div class="project-card">
               <img src="images/project/your-image.png" class="card-img-top" alt="Project Name">
               <div class="card-body">
                   <h5 class="card-title">Project Title</h5>
                   <p class="card-text">Project description...</p>
                   <div class="project-tags">
                       <span class="project-tag">Tag 1</span>
                       <span class="project-tag">Tag 2</span>
                   </div>
               </div>
           </div>
       </a>
   </div>
   ```
3. **Feature on homepage**: Set `data-featured="true"`
4. **Hide from homepage**: Set `data-featured="false"` or remove attribute

### Editing Navigation

- **File**: `includes/navbar.html`
- Changes automatically apply to all pages
- Active state is set automatically based on current page

### Editing Footer

- **File**: `includes/footer.html`
- Changes automatically apply to all pages

### Changing Colors

- **File**: `css/overrides.css`
- **Accent color**: Change `--accent` variable (line 11)
- **Hover colors**: Modify button hover styles (lines 30-36)

## 🚀 JavaScript Functionality

### `js/includes.js`
- Loads navbar and footer from include files
- Sets active navigation state automatically
- Uses XMLHttpRequest for synchronous loading

### `js/project-cards.js`
- Loads all project cards from `includes/project-cards.html`
- Filters cards based on `data-featured` attribute
- **index.html**: Displays featured cards in carousel
- **projects.html**: Displays all cards in grid
- Initializes Owl Carousel for featured projects

### `js/custom.js`
- Color mode toggle (dark/light)
- Header scroll behavior (Headroom.js)
- Smooth scrolling for anchor links
- Tooltip initialization

## 🎯 Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 768px (tablet), 992px (desktop)

2. **Project Carousel** (Homepage)
   - 3 cards on desktop
   - 2 cards on tablet
   - 1 card on mobile
   - Navigation arrows and dots
   - Infinite loop

3. **Dynamic Content Loading**
   - Navbar, footer, and project cards loaded via JavaScript
   - Single source of truth for shared components

4. **Active Navigation State**
   - Automatically highlights current page
   - No manual updates needed

## 📦 Dependencies

- **Bootstrap 4**: UI framework
- **jQuery 3.3.1**: DOM manipulation
- **Owl Carousel 2**: Carousel functionality
- **Headroom.js**: Header scroll behavior
- **Unicons**: Icon font library
- **Merriweather**: Google Font

## 🔍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- Graceful degradation for older browsers

## 📄 License

Based on Tooplate 2115 Marvel template.

## 🛠️ Development Notes

### File Loading Order
1. jQuery loads first
2. `includes.js` loads navbar and footer
3. `project-cards.js` loads project cards
4. Other scripts initialize after DOM is ready

### CSS Specificity
- `overrides.css` loads after base styles
- Uses `!important` sparingly (only where necessary)
- CSS variables used for easy theming

### Performance
- Images should be optimized before adding
- Minified CSS/JS files for production
- Lazy loading can be added for images if needed

## 📧 Contact

For questions or issues, please contact: angela_gao@berkeley.edu
