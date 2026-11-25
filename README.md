# Ramindi Losakya — Portfolio Setup Guide

## 1. Folder structure (already created for you)

```
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Profile_img1.jpeg        ✅ included
    ├── bg_picture.jpeg          ✅ included
    ├── project-laundry-placeholder.svg      ✅ included (temporary)
    ├── project-clothing-placeholder.svg     ✅ included (temporary)
    ├── project-supermarket-placeholder.svg  ✅ included (temporary)
    ├── Spin&go.jpeg             ✅ your laundry project photo
    ├── clothing-store.jpeg      ✅ your clothing store project photo
    ├── online-supermarket.jpeg  ✅ your supermarket project photo
    ├── Jlpt n4.pdf              ✅ your JLPT N4 certificate
    └── Coursera 0ZLVERQ2EWCI.pdf  ✅ your Graphic Design certificate
```

## 2. Where to place your files

| Your file | Copy it to |
|---|---|
| `Profile_img1.jpeg` | `assets/Profile_img1.jpeg` (already done) |
| `bg_picture.jpeg` (ocean bg) | `assets/bg_picture.jpeg` (already done) |
| `Spin&go.jpeg` (laundry project) | `assets/Spin&go.jpeg` — exact same spelling, including `&` |
| Clothing-store project photo (any name) | Rename to `assets/clothing-store.jpeg` **or** edit that one `src` line in `index.html` |
| Supermarket project photo (any name) | Rename to `assets/online-supermarket.jpeg` **or** edit that one `src` line in `index.html` |
| `Jlpt n4.pdf` | `assets/Jlpt n4.pdf` (exact spelling with the space) |
| `Coursera 0ZLVERQ2EWCI.pdf` | `assets/Coursera 0ZLVERQ2EWCI.pdf` (exact spelling with the space) |

Until you add a project photo, a built-in ocean-style placeholder image shows automatically — the layout never breaks.

## 3. How to run

**Option A — VS Code Live Server (recommended):** open the `portfolio` folder → right-click `index.html` → *Open with Live Server*.

**Option B — double-click:** just open `index.html` in Chrome/Edge. Everything works except Bootstrap/Icons CDN features need internet.

## 4. Customising your LinkedIn URL

In `index.html`, find this comment:

```html
<!-- TODO: replace href with your personal LinkedIn profile URL -->
```

Replace `https://www.linkedin.com/` with your personal profile URL.

## 5. Notes

- Profile photo appears **only** in the Home/Hero circle (240px, `object-fit: cover`), nowhere else.
- Theme toggle (sun/moon, top-right) remembers your choice in `localStorage`.
- No fake skills percentages, no invented project links, no fake certificates — as requested.
