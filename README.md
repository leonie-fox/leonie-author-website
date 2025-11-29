# Website – Author Leonie Wittkamp

This repository contains the official author website for **Leonie Wittkamp**.

The site presents her debut novel _“Solange wir uns hatten”_, upcoming and past events, an author bio, and contact options.

Live site: **https://autorin.leonie-wittkamp.de**

---

## Tech Stack

- **Static HTML & CSS**  
- **Bootstrap 5** (via CDN)  
- No build step, no Jekyll, no framework  
- Hosted on **GitHub Pages** with a custom domain

---

## Project Structure

```text
.
├── assets
│   ├── css
│   │   └── style.css        # Custom theme ("Orient Express Author")
│   ├── img
│   │   ├── logo.png
│   │   ├── leonie.jpg
│   │   ├── leonie2.jpeg
│   │   ├── book-cover.jpg
│   │   ├── letter.jpg
│   │   ├── instagram.png           # Large Instagram icon (Kontakt page)
│   │   └── instagram-footer.png    # Smaller Instagram icon (footer)
│   └── audio
│       └── interview.mp3    # Radio interview audio
├── index.html               # Home
├── about.html               # About the author
├── romane.html              # Novel overview/details
├── termine.html             # Events / readings
├── kontakt.html             # Contact form (Formspree)
├── impressum.html           # Legal imprint
├── datenschutz.html         # Privacy policy
├── CNAME                    # Custom domain: autorin.leonie-wittkamp.de
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
└── site.webmanifest
```

---

## Local Development

This is a pure static site. No build tools are required.

### Option A – Open directly in the browser

1. Clone the repository:

   ```bash
   git clone git@github.com:leonie-fox/leonie-author-website.git
   cd leonie-author-website
   ```

2. Open `index.html` directly in your browser.

> Note: Some browsers handle relative paths more reliably when served via a local web server (Option B).

### Option B – Run a tiny local web server (recommended)

Using Python 3:

```bash
cd leonie-author-website
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
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
They are wired in each page’s `<head>`:

```html
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="site.webmanifest">
```

---

## License / Content

Code for the site layout and styling may be reused/adapted with permission.

All **texts, images, audio, and other media content** are the intellectual property of **Leonie Wittkamp** and **must not** be reused, copied, or redistributed without explicit permission.