# Mohamed Essaid Kandoul – Creative Developer Portfolio

Modern, creative, responsive, and professional personal developer portfolio website for **Mohamed Essaid Kandoul**, Junior Web Developer based in Marrakech, Morocco.

---

## 🚀 Live Local URL (XAMPP)

Once Apache is running in your XAMPP Control Panel:
👉 [http://localhost/mohamed-portfolio/](http://localhost/mohamed-portfolio/)

---

## 📁 Project Structure

```text
mohamed-portfolio/
│
├── index.html        # Main semantic HTML5 document
├── style.css         # Creative dark theme, gradient accents & responsive CSS3
├── script.js         # Vanilla JavaScript animations, navigation & validation
├── README.md         # Documentation & guide
│
├── images/
│   ├── profile.jpg       # Developer avatar / photo (Placeholder provided)
│   ├── rent-stade.png    # Rent-Stade application screenshot (Placeholder provided)
│   ├── s4plus.png        # S4Plus multilingual website screenshot (Placeholder provided)
│   └── alfabisness.png   # Alfa Business e-commerce screenshot (Placeholder provided)
│
└── assets/
    └── cv.pdf            # Downloadable Curriculum Vitae (Placeholder provided)
```

---

## 🎨 Visual Identity & Technologies

- **Design System:**
  - Background: `#0B0B12` (Obsidian Dark)
  - Cards: `#151521` with subtle border glows
  - Primary Accent: `#8B5CF6` (Vibrant Violet / Purple)
  - Secondary Accent: `#38BDF8` (Sky Blue)
  - Text Primary: `#FFFFFF`
  - Text Secondary: `#A1A1AA`
- **Tech Stack:** Pure **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**
- **Icons & Typography:**
  - Font Awesome 6.5.1
  - Google Fonts: *Outfit*, *Plus Jakarta Sans*, and *JetBrains Mono*

---

## 🛠️ Step-by-Step Instructions

### 1. Running in XAMPP
1. Open the **XAMPP Control Panel**.
2. Click **Start** next to **Apache**.
3. Open your web browser and navigate to:
   ```text
   http://localhost/mohamed-portfolio/
   ```

### 2. Replacing Images and CV
- **Profile Photo:**
  - Save your professional photo as `profile.jpg` (recommended 600×600 px or square ratio) and place it inside `images/profile.jpg`.
- **Project Screenshots:**
  - **Rent-Stade:** Place a screenshot of your stadium reservation interface at `images/rent-stade.png` (recommended 16:9 ratio, 800×450 px or 1920×1080 px).
  - **S4Plus:** Place a screenshot of the multilingual construction platform at `images/s4plus.png`.
  - **Alfa Business:** Place a screenshot of your e-commerce IT catalog at `images/alfabisness.png`.
- **Curriculum Vitae (CV):**
  - Save your finalized PDF resume as `cv.pdf` inside `assets/cv.pdf`. The "Download CV" button in the About section will immediately serve this file.

### 3. Adding Your Real Contact Details
In [index.html](file:///C:/xampp/htdocs/mohamed-portfolio/index.html):
- **Email:** Search for `contact.kandoul@example.com` in `index.html` (inside `#contact`) and replace with your real email address.
- **Phone:** Search for `+212 6XX-XXXXXX` in `index.html` and replace with your active Moroccan phone number.
- **LinkedIn:** Search for the LinkedIn button in `#home`, `#contact`, and the footer to link directly to your profile URL when ready.

### 4. Activating Live Contact Form Submissions
The current contact form implements comprehensive client-side validation (ensuring valid email format, minimum length, and non-empty inputs). To receive actual emails:
- **Option A (PHP Backend via XAMPP):**
  Create a `send_mail.php` handler and set the form attributes:
  `<form action="send_mail.php" method="POST">`
- **Option B (Serverless / Formspree / EmailJS):**
  Sign up for a free endpoint at [formspree.io](https://formspree.io) or [emailjs.com](https://www.emailjs.com) and replace the form action or submit hook.

### 5. Publishing Online with GitHub Pages (Free Hosting)
1. Initialize git and commit your files (already done in your project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   ```
2. Create a new public repository on GitHub (e.g. `mohamed-portfolio` or `<your-username>.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/moh-coder77/mohamed-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages** > Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your portfolio will be live at `https://moh-coder77.github.io/mohamed-portfolio/` in a few moments!

---

© Mohamed Essaid Kandoul. All rights reserved.
