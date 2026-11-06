# Namamkulangara Devi Temple — Homepage

A responsive temple website homepage built with **HTML, CSS and vanilla JavaScript**.

## Run locally
1. Extract the ZIP file.
2. Open the `namamkulangara-temple-website` folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.

No npm install or build step is required.

## Files
- `index.html` — page structure and content
- `style.css` — responsive styling and visual design
- `script.js` — mobile navigation, booking enquiry modal, reveal effects and active navigation
- `assets/temple-photo.png` — the temple photo supplied in the conversation
- `assets/design-reference.png` — generated visual design reference

## Before publishing
- Confirm the temple's official address, timings, phone number, pooja list and festival dates.
- Replace the demo enquiry form behavior with a real backend or an approved contact method.
- Add official social links and any temple-approved photographs.
- The form currently does **not** send a booking; it only displays an on-page demo message.


## New additions
- Contact section includes a replaceable example number: `+91 XXXXX XXXXX`.
- Book Pooja opens a Malayalam temple-contact message and the same example number.
- A fixed E-Kanikka shortcut stays at the bottom-right while scrolling.
- E-Kanikka opens a centered desktop overlay and a mobile-friendly stacked overlay.
- The QR area currently uses `assets/e-kanikka-qr-placeholder.svg`.

## Replace before launch
1. Replace the example phone number in `index.html` in both the contact section and Book Pooja overlay. Update the `tel:` link too.
2. Replace `assets/e-kanikka-qr-placeholder.svg` with the temple's official QR image, or update the `<img src>` in `index.html` to your QR filename.
3. Update the bank name, account number, IFSC, branch and UPI ID in the E-Kanikka overlay in `index.html`.
4. The displayed bank and UPI values are placeholders only. Do not accept payments until verified official details and the correct QR are added.


## Decorative PNG assets
- `assets/kerala-temple-illustration.png` — supplied gold Kerala temple and coconut tree artwork, placed at the lower-left of the hero.
- `assets/traditional-deepam.png` — supplied glowing deepam artwork, placed at the bottom-left of the hero.
Both images are transparent PNGs and are positioned responsively to match the supplied reference.


## Contact section additions
- Official Facebook and Instagram links open in a new tab.
- Responsive Google Maps embed points to Namamkulangara Devi Temple.
- Social links and map are included in the existing Contact section.
