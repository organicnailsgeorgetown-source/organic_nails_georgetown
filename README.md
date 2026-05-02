# Organic Nails – Website

A modern, professional nail salon website for **Organic Nails** in Georgetown, TX.

## Files

```
organic-nails-website/
├── index.html      ← Main page
├── styles.css      ← All styles
├── script.js       ← Interactivity
├── images/         ← Put your photos here
└── README.md
```

## Deploying to GoDaddy

### Option A: GoDaddy Website Builder (File Manager)
1. Log in to your GoDaddy account → **My Products** → **Hosting**.
2. Open **cPanel** → **File Manager**.
3. Navigate to `public_html`.
4. Upload all files (`index.html`, `styles.css`, `script.js`) into `public_html`.
5. Upload your gallery images to `public_html/images/`.
6. Your site is now live at your domain!

### Option B: FTP Upload
1. Use an FTP client (e.g., FileZilla).
2. Connect using credentials from GoDaddy cPanel → **FTP Accounts**.
3. Upload all files to the `public_html` directory.

## Customization

### Replace Gallery Placeholders
1. Add your nail photos to the `images/` folder.
2. In `index.html`, replace `<div class="gallery-placeholder">` blocks with:
   ```html
   <img src="images/your-photo.jpg" alt="Description" loading="lazy" />
   ```

### Update Service Prices
Edit the `<ul class="service-list">` sections in `index.html`.

### Add Real Google Maps Embed
Replace the `<iframe src="...">` in the Contact section with your actual Google Maps embed URL from [Google Maps](https://www.google.com/maps).

### Connect Booking Form to Email
To receive form submissions, integrate with a service like:
- [Formspree](https://formspree.io) – Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` tag.
- [Getform](https://getform.io)
- GoDaddy's built-in email forwarding.

### Social Media Links
Update the `href="#"` values in the footer social links with your actual profiles.
