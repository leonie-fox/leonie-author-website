# Website – Author Leonie Wittkamp

This repository contains the official author website for **Leonie Wittkamp**.

The site presents her debut novel _“Solange wir uns hatten”_, upcoming and past events, an author bio, and contact options.

Live site: **https://autorin.leonie-wittkamp.de**

---

## Tech Stack

- **Jekyll** (GitHub Pages) with Liquid layouts  
- **Static HTML, CSS, and JS** output  
- **Bootstrap 5** (via CDN)  
- Hosted on **GitHub Pages** with a custom domain

---

## Project Structure

```text
.
├── assets
│   ├── css
│   │   └── style.css        # Custom theme ("Orient Express Author")
│   ├── js
│   │   └── nav-prefetch.js  # Prefetch fallback for nav links
│   ├── img
│   │   ├── logo.png
│   │   ├── leonie.jpg
│   │   ├── leonie2.png
│   │   ├── book-cover.jpg
│   │   ├── letter.png
│   │   ├── instagram.png           # Instagram icon (Kontakt page and footer)
│   └── audio
│       └── interview.mp3    # Radio interview audio
├── _layouts
│   └── default.html         # Shared layout (head, nav, footer)
├── index.html               # Home (permalink: /)
├── about.html               # About the author (permalink: /ueber-mich)
├── romane.html              # Novel overview/details (permalink: /romane)
├── termine.html             # Events / readings (permalink: /termine)
├── kontakt.html             # Contact form (permalink: /kontakt)
├── impressum.html           # Legal imprint (permalink: /impressum)
├── datenschutz.html         # Privacy policy (permalink: /datenschutz)
├── CNAME                    # Custom domain: autorin.leonie-wittkamp.de
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
└── site.webmanifest
```

---

## Local Development

This site uses Jekyll for layouts and permalinks, so serve it locally instead of opening files directly.

1. Clone the repository:

   ```bash
   git clone git@github.com:leonie-fox/leonie-author-website.git
   cd leonie-author-website
   ```

2. Install dependencies and run Jekyll:

   ```bash
   bundle install
   bundle exec jekyll serve
   ```

3. Open:

   ```text
   http://localhost:4000
   ```

---

## Deployment (GitHub Pages)

- Branch: **main**  
- GitHub Pages source: **Deploy from branch → main / root**  
- Custom domain: `autorin.leonie-wittkamp.de`  
- `CNAME` file in the project root must contain:

  ```text
  autorin.leonie-wittkamp.de
  ```

### DNS Setup

In the domain provider (e.g. Strato):

- Create a **CNAME** entry for `autorin` → `leonie-fox.github.io`

Then in GitHub:

- Go to **Repository → Settings → Pages**
- Set the custom domain: `autorin.leonie-wittkamp.de`
- Enable **“Enforce HTTPS”**

---

## Contact Form

The contact form on `kontakt.html` uses **Formspree**:

```html
<form class="contact-form" action="https://formspree.io/f/myzokjyw" method="POST">
    <input type="text" name="_gotcha" style="display:none">
    <input type="hidden" name="source" value="Autorin-Website">
    ...
</form>
```

- The hidden field `source` is used to distinguish messages from this author site from other sites (e.g. the coaching website).

---

## Design Notes

- Overall theme: dark, cozy **“Orient Express”** vibe:
  - Background: deep navy
  - Accents and links: warm gold `#B69555`
- Custom components:
  - `.card-dark` – glassy, dark content cards with subtle blur and shadow
  - `.btn-gold` – primary gold button used for Amazon links and call-to-actions
- Home page layout:
  - Column 1: author portrait + radio interview audio player
  - Column 2: welcome text + decorative letter image
  - Column 3: book cover + Amazon button
- `romane.html`:
  - Left: text card describing the novel
  - Right: book cover sized and aligned with the text card on desktop (`.book-cover-main`)
- Instagram links:
  - Large gold Instagram icon at the top of `kontakt.html`
  - Smaller Instagram icon integrated into the footer on all pages

---

## Favicons

Favicons are generated and stored in the project root.  
They are wired in the shared layout `<head>`:

```html
<link rel="apple-touch-icon" sizes="180x180" href="{{ '/apple-touch-icon.png' | relative_url }}">
<link rel="icon" href="{{ '/favicon.ico' | relative_url }}" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="{{ '/favicon-32x32.png' | relative_url }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ '/favicon-16x16.png' | relative_url }}">
<link rel="manifest" href="{{ '/site.webmanifest' | relative_url }}">
```

---

## License / Content

Code for the site layout and styling may be reused/adapted with permission.

All **texts, images, audio, and other media content** are the intellectual property of **Leonie Wittkamp** and **must not** be reused, copied, or redistributed without explicit permission.
