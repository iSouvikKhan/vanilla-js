# Image To Do List

A small front-end practice project written in plain HTML, CSS and JavaScript (no frameworks or build tools). It lets you upload images, attach a text description to each one, and keeps the list in the browser's `localStorage` so it survives page reloads. The upload panel sits on top of a full-screen background carousel that slides between two images.

## Features

- Upload images by drag and drop or by clicking the drop zone to open a file picker.
- Validation: each file must be 1 MB or smaller, and at most 5 entries can be in the list.
- Each uploaded image is shown as a thumbnail with a description text area.
- Save button (checkmark): saves the description and locks it from further editing. Empty descriptions are rejected.
- Delete button (cross): removes the entry.
- Entries (image data, description and locked state) are stored in `localStorage` and restored on page load.
- CSS-only animated background carousel using `carousel1.jpg` and `carousel2.jpg`.

## Tech Stack

- HTML5
- CSS3 (keyframe animation for the carousel)
- Vanilla JavaScript (FileReader API, drag and drop events, `localStorage`)

## Project Structure

```
.
├── index.html      # Page markup: carousel and upload panel
├── styles.css      # Layout, carousel animation and list styling
├── script.js       # Upload, validation, description saving and localStorage logic
├── carousel1.jpg   # Background carousel image 1
└── carousel2.jpg   # Background carousel image 2
```

## How to Run

No installation is required. Clone the repository and open `index.html` in a web browser:

```bash
git clone https://github.com/iSouvikKhan/vanilla-js.git
cd vanilla-js
```

Then open `index.html` directly (double-click it), or serve the folder with any static file server if you prefer.

## Notes

- Images are stored as base64 data URLs in `localStorage`, which has a limited size (typically around 5 MB per site), so storage is browser-specific and is cleared if you clear site data.
- `script.js` contains an older, commented-out version of the same logic at the top; only the uncommented code below it runs.
