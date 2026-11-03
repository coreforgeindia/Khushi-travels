# Khushi Travels — Agent Handoff

## Project Type
Single-file homepage (`index.html`, 1300 lines) + planned inner pages (fleet, pricing, packages, contact, blog, etc.)

## ⛔ CRITICAL — DO NOT CHANGE THESE

### Header (FINALIZED)
- Avtonova-style pill nav: **Home | Fleet | Packages | Pricing | Contact**
- Amber sliding backdrop (`pill-backdrop`) calculated via JS `getBoundingClientRect()`
- Header is `position: absolute` over hero, switches to `position: fixed` on scroll
- On scroll: transparent with `backdrop-filter: blur(20px)` — NO solid background ever
- Nav link text on scroll: black (`#111`), bold (`font-weight: 700`)
- Hamburger/social icons on scroll: black with `rgba(0,0,0,0.05)` background
- Single toggle button with hamburger + close icon — `.active` class swaps them (CSS: `.ham-icon` / `.close-icon` display toggle)
- Close icon color when active: `#1a365d` (navy)
- Mobile overlay: white fullscreen, close via same toggle button (no separate close button)
- Logo left, pill nav center, social icons + phone CTA + hamburger right

### Fleet Section
- RESTORED to original row layout: Tempo, Urbania, Buses, Cars — do not change
- Each row: image grid left, text content right (alternating layout)

### Footer
- EXACT old khushitravel.in style — do not change
- 12-column grid: logo+social, Company/Links nav, contact with WhatsApp/Call buttons
- Bottom bar with terms/privacy, decorative blurred blobs

### Testimonials Section
- DELETED — do not re-add

## Design Language (MUST FOLLOW on ALL new pages)
- Clean, premium, human-crafted without being busy
- No organic dots, no stamp badges, no large quote marks, no rotating icons
- Subtle shadows, rounded corners, consistent spacing
- Container: `container-custom` class (1280px max-width). For SEO text blocks use `max-width:90%` via inline style.

### Colors (exact values)
- Navy: `#1a365d` (brand background, headings)
- Amber: `#f59e0b` (accents, CTAs, hover states)
- Emerald accent: `#10b981` (secondary accents, checkmarks)
- Gradients: `.gradient-amber` = `linear-gradient(135deg, #f59e0b, #f97316)`
- Text on scroll: black `#111`
- Backgrounds: white `#fff`, gray-50 `#f9fafb` for alternating sections

### Fonts
- Headings: `Plus Jakarta Sans` (use `font-heading` class)
- Body: `Inter` (default body font)
- Font sizes use CSS clamp custom properties: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-sm`
- Line heights, letter spacing, font weights included in the Tailwind config

## SEO/AEO/GEO 2026 — ALREADY IMPLEMENTED (index.html)
- **JSON-LD `LocalBusiness`** with aggregateRating (4.9★, 63 reviews), address, phone, sameAs (Instagram, Facebook, YouTube, GMB), geo (13.0624, 77.5742), 24/7 opening hours, foundingDate (2018-08-15)
- **JSON-LD `FAQPage`** — 6 FAQ Q&A pairs in schema
- **Open Graph / Twitter Card** meta tags
- **Canonical tag** — set
- **Meta title/description** — keyword-optimized
- **Heading hierarchy** — H1 → H2 → H3, verified correct
- All 33 images localized (no external URLs)

## KEYWORDS (USE CONSISTENTLY)
- **Primary:** luxury tempo traveller Bangalore
- **Secondary:** 9 seater, 12 seater, 14 seater, 16 seater, Urbania, Maharaja seats, Force Urbania
- **Location:** Marathahalli, Whitefield, Koramangala, HSR Layout, BTM Layout, Electronic City, JP Nagar, Jayanagar, Banashankari, Indiranagar, MG Road, Hebbal, Yelahanka, Rajajinagar, Yeshwanthpur
- **Routes:** Mysore, Coorg, Ooty, Tirupati, Wayanad, Chennai, Hyderabad, Pondicherry, Goa, Chikmagalur, Kodaikanal, Mangalore, Shirdi
- **Brand:** Khushi Travels, Khushi Tours And Travels

## RANKING GOALS (for new pages)
1. **Local pack ranking** — rank in Google's local 3-pack for "tempo traveller Bangalore" and related
2. **Rich snippets** — FAQ schema already on homepage; get pricing/fleet rich snippets on new pages
3. **AI Overview citation** — structure content so Google AI cites Khushi Travels for group travel queries
4. **Long-tail capture** — rank for "9 seater tempo traveller in Marathahalli", "Force Urbania rental Whitefield", etc.
5. **Topical authority** — build 8-12 pages covering fleet, pricing, routes, services to establish domain expertise

## WHAT TO BUILD (new pages)
All referenced in nav + footer but DON'T exist yet. Create with same Tailwind CDN setup, same header, same footer.

| Page | URL slug | Priority |
|------|----------|----------|
| Fleet (all vehicles detail) | `12-14-seater-tempo-traveller-bangalore.html` | HIGH |
| Pricing | `tempo-traveller-rent-price-bangalore.html` | HIGH |
| Contact | `hire-tempo-traveller-bangalore.html` | HIGH |
| Packages | `domestic-packages.html` | MEDIUM |
| Our Story | `best-tempo-traveller-rental-bangalore.html` | MEDIUM |
| Blog | `luxury-tempo-traveller-blog.html` | LOW |
| Holiday Packages | `tempo-traveller-rent-bangalore-outstation.html` | LOW |
| Terms | `terms.html` | LOW |
| Privacy | `privacy.html` | LOW |

### Page Creation Rules
1. **Copy the EXACT header** (all HTML + JS), footer, styles, Tailwind config from `index.html` — no changes
2. **Copy the EXACT JSON-LD** blocks into every page's `<head>`
3. **Copy the EXACT OG/Twitter meta** tags into every page's `<head>`
4. **Update the `og:url`** and canonical to match the page URL
5. **Update `<title>` and `<meta name="description">`** per page topic
6. **Keep the same stylesheet** — Tailwind CDN + embedded `<style>` block. Do not add new CSS files.
7. **Can use any subset of sections** from homepage — pick what fits the page purpose
8. **Add relevant content** — never lorem ipsum. Use the keywords above naturally.
9. **Add relevant JSON-LD** — e.g., `Product` schema for fleet vehicles, `BreadcrumbList` for navigation

## Section Reference (from index.html)
Sections available for reuse. You can pick any subset per new page.

| Section | Best for |
|---------|----------|
| HEADER | All pages (required) |
| HERO | Landing pages (customize per page) |
| ABOUT | Our Story page, About page |
| FLEET (row layout) | Fleet page (expand with more detail per vehicle) |
| HOW IT WORKS | Any service/business page |
| CTA (amber gradient) | Any page — use as mid-page conversion |
| SERVICES | Fleet, Pricing, Packages pages |
| WHY CHOOSE US | Fleet, Pricing, Contact pages |
| DESTINATIONS | Outstation Packages, Holiday Packages pages |
| FAQ | Pricing, Fleet, Contact pages |
| LOCALITIES & SERVICES | Fleet, Pricing pages |
| FOOTER | All pages (required) |

## STILL NEEDED (not just pages)
- **Google Business Profile URL** — user needs to provide it for schema `sameAs`
- **Sitemap.xml** — once 5+ pages exist
- **`Service` schema** per fleet vehicle type (add to fleet page)
- **Services section redesign** — blocked, user wants "different" but no reference given

## File Structure
```
/ (root)
├── index.html              ← homepage (1300 lines, single file)
├── AGENTS.md               ← this file
├── images/
│   ├── hero-bg.webp
│   ├── khushi-tours-and-travels-logo.webp
│   ├── fleet/              ← 16 vehicle images (all .webp)
│   └── destinations/       ← 15 destination images (all .webp)
└── (new pages go here)
```

All images are local webp. Use `<img src="images/..." loading="lazy">` with keyword-rich alt text. Hero image uses CSS `background-image: url('images/hero-bg.webp')`.

## Contact Info (use everywhere)
- Phone: +91 99013 33113
- WhatsApp: wa.me/919901333113
- Email: info@khushitravel.in
- Address: Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidryanyapura, Virupakshapura, Bengaluru - 560097
