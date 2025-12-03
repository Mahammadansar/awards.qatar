# AwardsQatar E-Commerce Website

A modern, professional e-commerce Progressive Web App (PWA) built with HTML, CSS, and JavaScript for AwardsQatar - your trusted destination for premium printing services, awards, and promotional products in Qatar.

## ✨ Features

- 🛍️ **Complete E-Commerce Functionality**
  - Product listing with filters and search
  - Product detail pages
  - Shopping cart with quantity management
  - Checkout process with form validation
  - User login and registration (demo)
  - Responsive design for all devices

- 🎨 **Modern UI/UX**
  - Professional design with elegant typography
  - Smooth animations and transitions
  - Light theme with gold accents
  - Interactive product cards
  - Modern navigation with search
  - Beautiful hero section with background images

- 📱 **Progressive Web App (PWA)**
  - **Installable** - Can be installed on mobile and desktop
  - **Offline Support** - Works without internet connection
  - **Fast Loading** - Cached assets for instant access
  - **App-like Experience** - Full-screen standalone mode
  - **Push Notifications Ready** - Framework for notifications
  - **Background Sync** - Syncs data when online

- 📱 **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimized
  - Touch-friendly interface
  - Safe area support for notched devices

## File Structure

```
awardsqatar/
├── index.html          # Homepage
├── products.html       # Product listing page
├── product-detail.html # Individual product page
├── cart.html          # Shopping cart
├── checkout.html       # Checkout page
├── login.html         # User login page
├── register.html      # User registration page
├── manifest.json      # PWA manifest file
├── sw.js             # Service worker for PWA
├── browserconfig.xml  # Windows tile configuration
├── generate-icons.html # Icon generator tool
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   ├── main.js        # Main functionality
│   ├── products.js    # Product management
│   ├── cart.js        # Cart functionality
│   ├── login.js       # Login/registration logic
│   └── pwa.js         # PWA functionality
├── icons/             # App icons (generate using generate-icons.html)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── images/            # Product and gallery images
│   ├── products/
│   ├── gallery/
│   └── services/
├── PWA-SETUP.md       # PWA setup guide
└── README.md          # This file
```

## Getting Started

### Basic Setup

1. **Generate App Icons:**
   - Open `generate-icons.html` in a browser
   - Upload your logo (512x512px recommended)
   - Download and extract the icons zip
   - Place the `icons` folder in the project root

2. **Serve with HTTPS:**
   - PWAs require HTTPS (except localhost)
   - Use a local server: `python -m http.server` or `npx serve`
   - For production, deploy to a hosting service with HTTPS

3. **Open the Website:**
   - Open `index.html` in your web browser
   - Navigate through the website to explore all features
   - Add products to cart and test the checkout process

### PWA Installation

**Mobile (Android/Chrome):**
- Visit the website
- Tap menu (3 dots) → "Add to Home Screen" or "Install App"
- Or use the install button

**Mobile (iOS/Safari):**
- Visit the website
- Tap Share → "Add to Home Screen"

**Desktop (Chrome/Edge):**
- Visit the website
- Click install icon in address bar
- Or use the install button

See `PWA-SETUP.md` for detailed PWA setup instructions.

## Customization

### Colors

To match your brand colors from the Awards Profile PDF, update the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Main brand color */
    --secondary-color: #ff006e;    /* Accent color */
    --accent-color: #8338ec;       /* Secondary accent */
    --bg-dark: #0a0e27;            /* Background color */
    /* ... more variables */
}
```

### Content

- Update product data in `js/products.js`
- Modify text content in HTML files
- Add your logo and images

### Branding

Once you provide the colors and styling preferences from the Awards Profile PDF, I can update:
- Color scheme
- Typography
- Spacing and padding
- Logo placement
- Brand messaging

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## PWA Features

### Offline Support
- All static assets are cached
- Website works offline after first visit
- Cart data persists offline
- Automatic sync when connection is restored

### Installation
- Install prompt appears automatically
- Can be installed on home screen
- Runs in standalone mode (no browser UI)
- App-like experience

### Performance
- Fast loading with cached assets
- Optimized for mobile networks
- Background updates
- Efficient caching strategy

## Notes

- Cart data is stored in browser localStorage
- Product images use placeholder URLs - replace with actual images
- Contact information is configured in footer
- Login/Registration is demo-only (no backend)
- Service worker caches assets for offline access

## Browser Support

- ✅ Chrome/Edge (Full PWA support)
- ✅ Firefox (Full PWA support)
- ✅ Safari iOS 11.3+ (Full PWA support)
- ✅ Samsung Internet (Full PWA support)
- ⚠️ Safari Desktop (Limited PWA support)

## Development

### Testing PWA Features

1. **Offline Mode:**
   - DevTools → Network → Check "Offline"
   - Refresh page - should still work

2. **Service Worker:**
   - DevTools → Application → Service Workers
   - Verify registration and activation

3. **Manifest:**
   - DevTools → Application → Manifest
   - Check all properties

4. **Lighthouse Audit:**
   - DevTools → Lighthouse → Run PWA audit
   - Should score 90+ for PWA

## Customization

### Colors
Update CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #D4AF37;      /* Gold */
    --secondary-color: #1E3A5F;    /* Navy Blue */
    --accent-color: #C9A961;        /* Light Gold */
    /* ... more variables */
}
```

### Content
- Update product data in `js/products.js`
- Modify text content in HTML files
- Add your logo and images to respective folders

## Documentation

- **PWA-SETUP.md** - Complete PWA setup and configuration guide
- **generate-icons.html** - Tool to generate app icons from your logo

## Support

For PWA-specific questions, refer to `PWA-SETUP.md` for detailed troubleshooting and configuration options.

