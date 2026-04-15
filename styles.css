/* ============================================
   MR PORTONES â€” styles.css
   Dark professional style with navy/black/white
   ============================================ */

/* ---- RESET & BASE ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy: #0B2545;
  --navy-dark: #081d38;
  --navy-mid: #0e2f59;
  --black: #0a0a0a;
  --white: #ffffff;
  --off-white: #f5f5f5;
  --gray: #888;
  --gray-light: #ccc;
  --whatsapp: #25D366;
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'Barlow', sans-serif;
  --radius: 4px;
  --transition: 0.3s ease;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  background: var(--black);
  color: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---- SECTION BACKGROUNDS ---- */
.section-navy { background: var(--navy); }
.section-black { background: var(--black); }
.section-white { background: var(--white); color: var(--black); }

/* ---- TYPOGRAPHY ---- */
.section-tag {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin-bottom: 12px;
}
.section-tag.light { opacity: 0.6; color: var(--white); }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--white);
}
.section-title.dark { color: var(--black); }

.section-subtitle {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-top: 8px;
}
.section-subtitle.dark { color: var(--black); }

.section-header {
  margin-bottom: 56px;
}

/* ---- BUTTONS ---- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
  border-radius: var(--radius);
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.btn:active { transform: translateY(0); }

.btn-white { background: var(--white); color: var(--black); }
.btn-white:hover { background: var(--off-white); }

.btn-black { background: var(--black); color: var(--white); }
.btn-black {
  font-size: 20px;
  padding: 30px 60px;
  border-radius: 8px;
}
.btn-black:hover { background: #222; }

/* ---- NAVBAR ---- */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 0;
  transition: background var(--transition), box-shadow var(--transition);
  background: transparent;
}
.navbar.scrolled {
  background: rgba(8, 29, 56, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.4);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 68px;
}

.logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 2px;
}
.logo-mr { color: var(--white); }
.logo-portones { color: rgba(255,255,255,0.5); font-weight: 300; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
  padding: 8px 14px;
  border-radius: 2px;
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover { color: var(--white); background: rgba(255,255,255,0.08); }
.nav-link-cta {
  background: var(--white);
  color: var(--black);
  padding: 8px 18px;
  margin-left: 8px;
}
.nav-link-cta:hover { background: var(--off-white); color: var(--black); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ---- HERO ---- */
.hero {
  position: relative;
  min-height: 100vh;
  background: var(--navy-dark);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 100px 24px 60px;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 50%, rgba(11,37,69,0.4) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero-slogan {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin-bottom: 48px;
}

/* COUNTERS */
.counters-row {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 48px;
  flex-wrap: wrap;
}
.counter-item {
  flex: 1;
  min-width: 160px;
  padding: 0 32px 0 0;
}
.counter-item:first-child { padding-left: 0; }

.counter-number {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 900;
  line-height: 1;
  color: var(--white);
  display: flex;
  align-items: flex-start;
  gap: 2px;
}
.counter-number sup {
  font-size: 0.4em;
  font-weight: 700;
  margin-top: 0.4em;
  color: rgba(255,255,255,0.6);
}
.counter-label {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-top: 6px;
  font-weight: 500;
}
.counter-divider {
  width: 1px;
  height: 60px;
  background: rgba(255,255,255,0.12);
  margin-right: 32px;
  flex-shrink: 0;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 24px;
  max-width: 700px;
}
.hero-title strong { font-weight: 900; }

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.65);
  max-width: 560px;
  margin-bottom: 40px;
}

.hero-btn { font-size: 15px; padding: 18px 36px; }

.hero-visual {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-width: 500px;
  opacity: 0.08;
  pointer-events: none;
}
.hero-gate-icon svg { width: 100%; height: auto; }

/* Gate animation */
.gate-panel-left { animation: gateSlideLeft 3s ease-in-out infinite alternate; }
.gate-panel-right { animation: gateSlideRight 3s ease-in-out infinite alternate; }
@keyframes gateSlideLeft { from { transform: translateX(0); } to { transform: translateX(-8px); } }
@keyframes gateSlideRight { from { transform: translateX(0); } to { transform: translateX(8px); } }

/* ---- GALLERY ---- */
.gallery-section { padding: 100px 0; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 260px 260px;
  gap: 12px;
  margin-bottom: 48px;
}
.gallery-item--large {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  height: 600px;
}
.gallery-item { overflow: hidden; border-radius: var(--radius); }
.gallery-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #e8e8e8;
  transition: transform 0.4s ease;
}
.gallery-placeholder svg { width: 100%; height: 100%; object-fit: cover; }
.gallery-item:hover .gallery-placeholder { transform: scale(1.03); }

.gallery-placeholder::after {
  content: attr(data-label);
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
  background: rgba(0,0,0,0.5);
  padding: 4px 10px;
  border-radius: 2px;
}

.gallery-cta { text-align: center; }
.gallery-cta-text {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 20px;
}

/* ---- NOSOTROS ---- */
.nosotros-section { padding: 100px 0; }

.nosotros-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.nosotros-col--full { grid-column: 1 / -1; }

.nosotros-block {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 36px;
  height: 100%;
}
.block-icon {
  font-size: 1.5rem;
  margin-bottom: 16px;
  opacity: 0.4;
}
.nosotros-block h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--white);
}
.nosotros-block p {
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  font-size: 0.95rem;
}

.valores-list { margin-top: 8px; }
.valores-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.75);
  font-size: 0.92rem;
}
.valor-check {
  color: var(--white);
  font-weight: 700;
  font-size: 0.85rem;
  opacity: 0.6;
}

.why-us-block {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 36px;
}
.why-us-block h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.why-us-block p {
  color: rgba(255,255,255,0.65);
  margin-bottom: 32px;
  line-height: 1.7;
}
.why-stats {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}
.why-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.why-stat strong {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 1;
}
.why-stat span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
}

/* ---- PRODUCT CARDS ---- */
.portones-section, .automatizacion-section, .accesorios-section { padding: 100px 0; }

.cards-grid {
  display: grid;
  gap: 20px;
}
.cards-grid--3 { grid-template-columns: repeat(3, 1fr); }
.cards-grid--4 { grid-template-columns: repeat(4, 1fr); }

.product-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.4);
  border-color: rgba(255,255,255,0.2);
}

.product-card--light {
  background: var(--white);
  border: 1px solid #e0e0e0;
}
.product-card--light:hover {
  border-color: #bbb;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
}

.card-visual { height: 160px; overflow: hidden; }
.card-visual svg { width: 100%; height: 100%; }

.card-icon-large {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--black);
  opacity: 0.2;
  font-weight: 300;
}

.card-body { padding: 24px; }
.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--white);
}
.card-title.dark { color: var(--black); }
.card-desc { font-size: 0.88rem; line-height: 1.65; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
.card-desc.dark { color: #555; }
.card-link {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  transition: color var(--transition);
}
.card-link:hover { color: var(--white); }
.card-link.dark { color: #888; }
.card-link.dark:hover { color: var(--black); }


/* ---- ACCESSORIES ---- */
.accessory-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;
}
.accessory-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.08); }

.acc-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
}
.acc-icon svg { width: 100%; height: 100%; }

.accessory-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--white);
}
.accessory-card p { font-size: 0.85rem; line-height: 1.65; color: rgba(255,255,255,0.55); }

/* ---- SERVICIOS ---- */
.servicios-section { padding: 100px 0; }
.servicios-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
.servicio-item {
  display: flex;
  gap: 24px;
  padding: 36px 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  border-right: 1px solid rgba(255,255,255,0.06);
  transition: background 0.3s ease;
}
.servicio-item:hover { background: rgba(255,255,255,0.03); }
.servicio-item:nth-child(even) { border-right: none; }

.servicio-num {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(255,255,255,0.07);
  flex-shrink: 0;
  width: 60px;
}
.servicio-content h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--white);
}
.servicio-content p { font-size: 0.88rem; line-height: 1.7; color: rgba(255,255,255,0.55); }

/* ---- CONTACT ---- */
.contacto-section { padding: 100px 0; }

.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 64px;
  align-items: start;
}

.contacto-slogan {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 40px;
}

.contact-items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.contact-item { display: flex; align-items: center; gap: 16px; }
.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--navy);
  flex-shrink: 0;
}
.contact-icon.whatsapp-icon { background: var(--whatsapp); color: white; }

.contact-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 2px; }
.contact-value { font-family: var(--font-display); font-size: 1.05rem; font-weight: 600; color: var(--black); transition: color var(--transition); }
.contact-value:hover { color: var(--navy); }

.area-badge {
  display: inline-block;
  background: var(--black);
  color: var(--white);
  font-size: 0.8rem;
  padding: 8px 16px;
  border-radius: 100px;
  letter-spacing: 0.06em;
}

/* FORM */
.contacto-form-wrap {
  background: var(--navy);
  border-radius: var(--radius);
  padding: 48px;
}
.form-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: var(--white);
  margin-bottom: 32px;
  line-height: 1.2;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }

.form-group label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.5);
}
.optional { text-transform: none; opacity: 0.6; font-weight: 400; }

.form-group input, .form-group textarea {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  padding: 14px 16px;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.95rem;
  outline: none;
  transition: border-color var(--transition), background var(--transition);
  resize: vertical;
}
.form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,0.3); }
.form-group input:focus, .form-group textarea:focus {
  border-color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.09);
}

.form-submit { width: 100%; justify-content: center; margin-top: 8px; font-size: 13px; letter-spacing: 0.12em; }

.form-msg {
  margin-top: 14px;
  font-size: 0.88rem;
  text-align: center;
  min-height: 20px;
}
.form-msg.success { color: #4ade80; }
.form-msg.error { color: #f87171; }

/* ---- FOOTER ---- */
.footer {
  background: var(--navy-dark);
  padding: 72px 0 32px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}
.footer-logo { margin-bottom: 12px; font-size: 1.4rem; }
.footer-slogan {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  margin-bottom: 16px;
}
.footer-desc { font-size: 0.85rem; color: rgba(255,255,255,0.4); line-height: 1.7; }
.footer-links-col h4 {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-bottom: 16px;
}
.footer-links-col a {
  display: block;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 10px;
  transition: color var(--transition);
}
.footer-links-col a:hover { color: var(--white); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-bottom p { font-size: 0.8rem; color: rgba(255,255,255,0.3); }
.footer-bottom a { color: rgba(255,255,255,0.5); }
.footer-bottom a:hover { color: var(--white); }

/* ---- FLOATING WHATSAPP ---- */
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--whatsapp);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 32px rgba(37, 211, 102, 0.6);
}
.whatsapp-float::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.3);
  animation: waPulse 2s ease-in-out infinite;
}
@keyframes waPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0; }
}

/* ---- ANIMATIONS ---- */
.fade-in {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---- RESPONSIVE ---- */
@media (max-width: 1024px) {
  .cards-grid--4 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .contacto-grid { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 68px; left: 0; right: 0;
    background: var(--navy-dark);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .nav-links.open {
    max-height: 500px;
    padding: 16px 0;
  }
  .nav-link { padding: 14px 24px; border-radius: 0; text-align: left; }
  .nav-link-cta { margin: 8px 24px; border-radius: var(--radius); text-align: center; }
  .hamburger { display: flex; }

  .hero { padding: 90px 24px 60px; }
  .hero-visual { display: none; }
  .counters-row { gap: 0; }
  .counter-item { min-width: 120px; padding: 0 20px 0 0; }
  .counter-divider { margin-right: 20px; }

  .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .gallery-item--large { 
  grid-column: 1 / -1; 
  grid-row: auto; 
  height: 320px !important;
}

  .nosotros-grid { grid-template-columns: 1fr; }
  .cards-grid--3 { grid-template-columns: 1fr; }
  .cards-grid--4 { grid-template-columns: 1fr 1fr; }
  .servicios-grid { grid-template-columns: 1fr; }
  .servicio-item { border-right: none; }
  .form-row { grid-template-columns: 1fr; }
  .contacto-form-wrap { padding: 32px 24px; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 4px; }
  .why-stats { gap: 24px; }
}

@media (max-width: 480px) {
  .cards-grid--4 { grid-template-columns: 1fr; }
}

.logo img {
  height: 190px;
  width: auto;
  margin-top: 9px;
}

.gallery-item--large img {
  transform: translateY(25px);
}


/* ================================================================
   MOBILE OPTIMIZATIONS â€” MR PORTONES
   ALL RULES SCOPED TO MOBILE BREAKPOINTS ONLY.
   DESKTOP (> 768px) IS 100% UNCHANGED.
   ================================================================ */

/* ----------------------------------------------------------------
   TASK 3 â€” SECTION ORDER (mobile only)
   Move #servicios to end, #contacto directly above it.
   Uses flex order on <main>; desktop has no flex on main â†’ unchanged.
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
  }
  /* Assign explicit order so contacto precedes servicios at the bottom */
  #inicio       { order: 1; }
  #galeria      { order: 2; }
  #nosotros     { order: 3; }
  #portones     { order: 4; }
  #automatizacion { order: 5; }
  #accesorios   { order: 6; }
  #contacto     { order: 7; }   /* â† moved before servicios */
  #servicios    { order: 8; }   /* â† now last */
}


/* ----------------------------------------------------------------
   TASK 1 â€” STATS ROW: stay horizontal on ALL mobile sizes
   Override the 480px rule that was making them stack vertically.
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .counters-row {
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 28px;
  }
  .counter-item {
    flex: 1;
    min-width: 0;          /* allow shrinking below 120px */
    padding: 0 14px 0 0;
  }
  .counter-item:last-child { padding-right: 0; }
  .counter-divider {
    height: 44px;
    margin-right: 14px;
    flex-shrink: 0;
  }
  .counter-number {
    font-size: clamp(1.8rem, 6.5vw, 3rem);
  }
  .counter-label {
    font-size: 0.62rem;
    letter-spacing: 0.04em;
    margin-top: 5px;
  }
}

/* Enforce horizontal even at 480px (overrides removed column rule) */
@media (max-width: 480px) {
  .counters-row {
    flex-direction: row !important;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0;
  }
  .counter-item {
    flex: 1;
    min-width: 0;
    padding: 0 8px 0 0;
  }
  .counter-item:last-child { padding-right: 0; }
  .counter-divider {
    width: 1px;
    height: 36px;
    margin: 0 8px 0 0;
    flex-shrink: 0;
  }
  .counter-number {
    font-size: clamp(1.35rem, 5.5vw, 1.9rem);
  }
  .counter-label {
    font-size: 0.52rem;
    letter-spacing: 0.025em;
    margin-top: 4px;
  }
}


/* ----------------------------------------------------------------
   TASK 4 â€” GALLERY: 1 large top + 2 equal side-by-side below
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 155px;  /* row 1 = large, row 2 = twins */
    gap: 10px;
    margin-bottom: 28px;
  }

  /* Large image â€” full width, row 1 */
  .gallery-item--large {
    grid-column: 1 / -1;
    grid-row: 1;
    height: 220px !important;   /* override the desktop !important */
  }

  /* Smaller images â€” row 2, equal size by sharing 1fr 1fr grid */
  .gallery-item:not(.gallery-item--large) {
    grid-row: 2;
    height: 155px;
  }

  /* Border-radius on every gallery tile */
  .gallery-item,
  .gallery-item--large {
    border-radius: 10px;
    overflow: hidden;
  }

  /* Images fill their containers cleanly */
  .gallery-item img,
  .gallery-item--large img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  /* Remove the desktop translateY offset */
  .gallery-item--large img {
    transform: none !important;
  }
}

/* Slightly smaller tiles at very narrow screens */
@media (max-width: 480px) {
  .gallery-grid {
    grid-template-rows: 195px 135px;
    gap: 8px;
  }
  .gallery-item--large {
    height: 195px !important;
  }
  .gallery-item:not(.gallery-item--large) {
    height: 135px;
  }
}


/* ----------------------------------------------------------------
   TASK 2 â€” GLOBAL MOBILE SCALING
   Reduce sizes, tighten spacing, improve vertical rhythm.
   ---------------------------------------------------------------- */
@media (max-width: 768px) {

  /* Base container padding */
  .container { padding: 0 16px; }

  /* Section headers */
  .section-header { margin-bottom: 28px; }
  .section-title  { font-size: clamp(1.55rem, 7vw, 2.4rem); }

  /* Hero */
  .hero {
    padding: 80px 16px 44px;
    min-height: 88vh;
  }
  .hero-slogan   { font-size: 10px; margin-bottom: 22px; letter-spacing: 0.3em; }
  .hero-title    { font-size: clamp(1.6rem, 6vw, 2rem); margin-bottom: 14px; }
  .hero-desc     { font-size: 0.87rem; margin-bottom: 22px; }
  .hero-btn      { font-size: 13px; padding: 14px 22px; }

  /* Section vertical padding */
  .gallery-section,
  .nosotros-section,
  .portones-section,
  .automatizacion-section,
  .accesorios-section,
  .servicios-section,
  .contacto-section { padding: 52px 0; }

  /* Nosotros / Why-us */
  .nosotros-block,
  .why-us-block   { padding: 22px 18px; }
  .nosotros-block h3,
  .why-us-block h3 { font-size: 1.15rem; }
  .nosotros-block p,
  .why-us-block p  { font-size: 0.85rem; }
  .why-stats       { gap: 20px; }
  .why-stat strong { font-size: 1.6rem; }
  .why-stat span   { font-size: 0.7rem; }

  /* Product cards */
  .card-body    { padding: 18px; }
  .card-title   { font-size: 1.1rem; }
  .card-desc    { font-size: 0.84rem; }

  /* Accessory cards */
  .accessory-card { padding: 24px 18px; }

  /* Servicios list */
  .servicio-item {
    padding: 20px 14px;
    gap: 14px;
  }
  .servicio-num          { font-size: 2rem; width: 40px; }
  .servicio-content h3   { font-size: 0.98rem; margin-bottom: 6px; }
  .servicio-content p    { font-size: 0.82rem; line-height: 1.6; }

  /* Buttons */
  .btn-black {
    font-size: 14px;
    padding: 16px 24px;
    border-radius: 6px;
  }

  /* Gallery CTA */
  .gallery-cta-text { font-size: 0.92rem; margin-bottom: 16px; }

  /* Contact form */
  .contacto-form-wrap { padding: 26px 18px; }
  .form-title { font-size: 1.05rem; margin-bottom: 20px; }

  /* Footer */
  .footer            { padding: 40px 0 20px; }
  .footer-desc       { font-size: 0.8rem; }
  .footer-links-col a { font-size: 0.8rem; }
}


/* ----------------------------------------------------------------
   TASK 5 â€” GENERAL CLEANUP (480px)
   ---------------------------------------------------------------- */
@media (max-width: 480px) {
  .hero-title   { font-size: 1.5rem; }
  .section-title { font-size: 1.45rem; }
  .hero-desc     { font-size: 0.84rem; }

  /* Prevent oversized logo in tiny navbars */
  .logo img {
    height: 44px;
    margin-top: 0;
  }

  /* Tighter card body */
  .card-body { padding: 14px; }

  /* Accessory card tighter */
  .accessory-card { padding: 20px 14px; }
  .acc-icon       { width: 50px; height: 50px; margin-bottom: 14px; }

  /* Contact form tighter */
  .contacto-form-wrap { padding: 22px 14px; }
  .form-title         { font-size: 0.95rem; }
}




/* ================================================================
   MOBILE SCROLL VISIBILITY â€” MR PORTONES
   Scope: ONLY @media (max-width: 768px).
   Desktop is 100% untouched â€” no rules outside mobile queries.
   ================================================================

   STRATEGY: Sections that must NOT appear in mobile scroll are
   removed from the visual flow using position:absolute / off-screen
   technique. This keeps their IDs in the DOM so anchor links
   (#portones, #servicios, etc.) still work from the hamburger menu.

   SECTIONS HIDDEN FROM SCROLL (mobile only):
     #galeria, #nosotros, #portones, #automatizacion,
     #accesorios, #servicios
   SECTIONS VISIBLE:
     #inicio (hero) â€” always first
     #contacto      â€” always last (before footer)
   ================================================================ */

/* ----------------------------------------------------------------
   1. HIDE MIDDLE SECTIONS FROM MOBILE SCROLL
      Safe method: visually off-screen but still in the DOM.
      Anchor links (#portones etc.) will still work.
   ---------------------------------------------------------------- */
@media (max-width: 768px) {

  /* Reset the flex order experiment from previous pass â€” we now
     control visibility instead of reordering */
  main {
    display: block;
  }
  #inicio, #galeria, #nosotros, #portones,
  #automatizacion, #accesorios, #contacto, #servicios {
    order: unset;
  }

  /* --- Sections hidden from normal scroll flow --- */
  #galeria,
  #nosotros,
  #portones,
  #automatizacion,
  #accesorios,
  #servicios {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    /* Preserve pointer-events:none so nothing is accidentally tappable */
    pointer-events: none;
  }

  /* --- Hero stays in flow, full width --- */
  #inicio {
    position: relative;
    left: auto;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    pointer-events: auto;
    /* Tighten bottom padding so contact follows directly */
    padding-bottom: 40px;
  }

  /* --- Contact stays in flow, full width --- */
  #contacto {
    position: relative;
    left: auto;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    pointer-events: auto;
  }
}


/* ----------------------------------------------------------------
   2. HERO â€” mobile polish
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 88px 16px 48px;
  }

  /* Hero description max-width */
  .hero-desc {
    max-width: 100%;
  }

  /* WhatsApp CTA button â€” full width on mobile */
  .hero-btn {
    width: 100%;
    justify-content: center;
    font-size: 14px;
    padding: 15px 20px;
  }
}


/* ----------------------------------------------------------------
   3. CONTACT SECTION â€” tighten on mobile
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .contacto-section {
    padding: 48px 0 52px;
  }

  .contacto-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  /* Contact info side */
  .contacto-info .section-title {
    font-size: clamp(1.6rem, 7vw, 2.2rem);
  }

  .contacto-slogan {
    font-size: 10px;
    margin-bottom: 24px;
  }

  .contact-items {
    gap: 16px;
    margin-bottom: 24px;
  }

  .contact-icon {
    width: 38px;
    height: 38px;
  }

  .contact-value {
    font-size: 0.95rem;
  }

  /* Form */
  .contacto-form-wrap {
    padding: 24px 16px;
    border-radius: 8px;
  }

  .form-title {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-group input,
  .form-group textarea {
    font-size: 16px; /* prevent iOS zoom on focus */
  }

  .form-submit {
    font-size: 13px;
    padding: 15px 20px;
    letter-spacing: 0.1em;
  }
}


/* ----------------------------------------------------------------
   4. FOOTER â€” compact grid layout on mobile
      Logo + slogan on top, then 2-column links grid,
      then zones, then copyright bar.
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .footer {
    padding: 36px 0 20px;
  }

  /* Override the 1-column stack from previous pass â†’ compact 2-col grid */
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    row-gap: 28px;
    margin-bottom: 28px;
  }

  /* Brand block â€” full width top row */
  .footer-brand {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  /* Keep logo compact */
  .footer-logo img,
  .footer-brand .logo img {
    height: 36px !important;
    width: auto;
    margin-top: 0;
  }

  /* Hide the long footer description on mobile â€” keep slogan only */
  .footer-desc {
    display: none;
  }

  .footer-slogan {
    font-size: 9px;
    letter-spacing: 0.3em;
    margin-bottom: 0;
    opacity: 0.4;
  }

  /* Columns 2 & 3: Productos + Empresa â€” 2-col grid */
  .footer-links-col {
    padding: 0 8px;
  }

  .footer-links-col:nth-child(2) { padding-left: 0; }

  .footer-links-col h4 {
    font-size: 10px;
    margin-bottom: 12px;
    letter-spacing: 0.12em;
  }

  .footer-links-col a {
    font-size: 0.78rem;
    margin-bottom: 8px;
    color: rgba(255,255,255,0.55);
  }

  /* Zones column â€” span full width, compact 2-col text */
  .footer-links-col:last-child {
    grid-column: 1 / -1;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: 20px;
  }

  .footer-links-col:last-child p {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    line-height: 1.7;
  }

  .footer-small {
    font-size: 0.72rem !important;
    opacity: 0.7;
  }

  /* Bottom bar */
  .footer-bottom {
    flex-direction: column;
    gap: 4px;
    padding-top: 16px;
    text-align: center;
  }

  .footer-bottom p {
    font-size: 0.73rem;
  }
}


/* ----------------------------------------------------------------
   5. HAMBURGER NAVIGATION â€” smooth scroll + tap targets
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  /* Ensure smooth scrolling on mobile (also set on html globally) */
  html {
    scroll-behavior: smooth;
  }

  /* Slightly larger tap targets for nav links */
  .nav-link {
    padding: 16px 24px;
    font-size: 14px;
  }

  .nav-link-cta {
    margin: 10px 24px 4px;
    text-align: center;
    padding: 13px 18px;
  }

  /* Hamburger icon â€” slightly larger touch area */
  .hamburger {
    padding: 10px;
  }

  /* Nav open state â€” increase max-height to fit all links */
  .nav-links.open {
    max-height: 560px;
  }
}


/* ----------------------------------------------------------------
   6. FLOATING WHATSAPP â€” keep above mobile nav
   ---------------------------------------------------------------- */
@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 20px;
    right: 16px;
    width: 52px;
    height: 52px;
  }
}


/* ----------------------------------------------------------------
   7. VERY SMALL SCREENS (â‰¤ 380px) â€” fine-tune
   ---------------------------------------------------------------- */
@media (max-width: 380px) {
  .hero {
    padding: 80px 14px 40px;
  }

  .hero-title {
    font-size: 1.4rem;
  }

  .hero-btn {
    font-size: 13px;
    padding: 14px 16px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .logo img {
    height: 60px;   /* ajustÃ¡ este valor */
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .logo img {
    height: 120px !important;
  }
}

@media (max-width: 768px) {
  .footer-logo img,
  .footer-brand .logo img {
    height: 120px !important;
  }
}

.nav-container {
  padding-left: 10px;
  padding-right: 24px;
}

/* ===========================
   RESCATE MÓVIL MR PORTONES
   =========================== */

/* Forzar que todas las secciones sean visibles en móvil */
@media (max-width: 768px) {
  #inicio,
  #galeria,
  #nosotros,
  #portones,
  #automatizacion,
  #accesorios,
  #servicios,
  #contacto {
    position: static !important;
    left: auto !important;
    width: auto !important;
    height: auto !important;
    overflow: visible !important;
    clip: auto !important;
    white-space: normal !important;
    pointer-events: auto !important;
    order: 0 !important;
  }

  main {
    display: block !important;
  }

  /* Navbar móvil básica */
  .nav-links {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: var(--navy-dark);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .nav-links.open {
    max-height: 560px;
    padding: 16px 0;
  }

  .nav-link {
    padding: 16px 24px;
    font-size: 14px;
    border-radius: 0;
    text-align: left;
  }

  .nav-link-cta {
    margin: 10px 24px 4px;
    text-align: center;
    padding: 13px 18px;
    border-radius: var(--radius);
  }

  .hamburger {
    display: flex;
    padding: 10px;
  }

  /* Contenedor y secciones: algo más compacto, pero sin romper */
  .container {
    padding: 0 16px;
  }

  .hero {
    min-height: auto;
    padding: 88px 16px 48px;
  }

  .hero-visual {
    display: none;
  }

  .gallery-section,
  .nosotros-section,
  .portones-section,
  .automatizacion-section,
  .accesorios-section,
  .servicios-section,
  .contacto-section {
    padding: 52px 0;
  }

  .section-header {
    margin-bottom: 28px;
  }

  .section-title {
    font-size: clamp(1.55rem, 7vw, 2.2rem);
  }

  /* Grids básicos en una columna cuando haga falta */
  .nosotros-grid,
  .servicios-grid,
  .contacto-grid {
    grid-template-columns: 1fr !important;
  }

  .cards-grid--3 {
    grid-template-columns: 1fr !important;
  }

  .cards-grid--4 {
    grid-template-columns: 1fr 1fr !important;
  }
}

/* Ajuste para móviles muy pequeños */
@media (max-width: 480px) {
  .cards-grid--4 {
    grid-template-columns: 1fr !important;
  }
}

/* ============================================
   MOBILE FIX MR PORTONES
   Sobrescribe reglas rotas para < 768px
   ============================================ */

/* Tablet y móvil */
@media (max-width: 1024px) {
  .cards-grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .contacto-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* Móvil principal */
@media (max-width: 768px) {
  /* Navbar */
  .nav-links {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: var(--navy-dark);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .nav-links.open {
    max-height: 560px;
    padding: 16px 0;
  }

  .nav-link {
    padding: 16px 24px;
    border-radius: 0;
    text-align: left;
    font-size: 14px;
  }

  .nav-link-cta {
    margin: 10px 24px 4px;
    border-radius: var(--radius);
    text-align: center;
    padding: 13px 18px;
  }

  .hamburger {
    display: flex;
    padding: 10px;
  }

  /* Hero */
  .hero {
    min-height: auto;
    padding: 88px 16px 48px;
  }

  .hero-visual {
    display: none;
  }

  .hero-slogan {
    font-size: 10px;
    margin-bottom: 22px;
    letter-spacing: 0.3em;
  }

  .hero-title {
    font-size: clamp(1.6rem, 6vw, 2rem);
    margin-bottom: 14px;
  }

  .hero-desc {
    font-size: 0.87rem;
    margin-bottom: 22px;
    max-width: 100%;
  }

  .hero-btn {
    width: 100%;
    justify-content: center;
    font-size: 14px;
    padding: 15px 20px;
  }

  /* Contadores */
  .counters-row {
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 28px;
    gap: 0;
  }

  .counter-item {
    flex: 1;
    min-width: 0;
    padding: 0 14px 0 0;
  }

  .counter-divider {
    height: 44px;
    margin-right: 14px;
    flex-shrink: 0;
  }

  .counter-number {
    font-size: clamp(1.8rem, 6.5vw, 3rem);
  }

  .counter-label {
    font-size: 0.62rem;
    letter-spacing: 0.04em;
    margin-top: 5px;
  }

  /* Secciones: padding más corto, NO se oculta nada */
  .gallery-section,
  .nosotros-section,
  .portones-section,
  .automatizacion-section,
  .accesorios-section,
  .servicios-section,
  .contacto-section {
    padding: 52px 0;
  }

  .container {
    padding: 0 16px;
  }

  .section-header {
    margin-bottom: 28px;
  }

  .section-title {
    font-size: clamp(1.55rem, 7vw, 2.4rem);
  }

  /* Galería */
  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 155px;
    gap: 10px;
    margin-bottom: 28px;
  }

  .gallery-item--large {
    grid-column: 1 / -1;
    grid-row: 1;
    height: 220px !important;
  }

  .gallery-item:not(.gallery-item--large) {
    grid-row: 2;
    height: 155px;
  }

  .gallery-item,
  .gallery-item--large {
    border-radius: 10px;
    overflow: hidden;
  }

  .gallery-item img,
  .gallery-item--large img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .gallery-cta-text {
    font-size: 0.92rem;
    margin-bottom: 16px;
  }

  /* Nosotros */
  .nosotros-grid {
    grid-template-columns: 1fr;
  }

  .nosotros-block,
  .why-us-block {
    padding: 22px 18px;
  }

  .nosotros-block h3,
  .why-us-block h3 {
    font-size: 1.15rem;
  }

  .nosotros-block p,
  .why-us-block p {
    font-size: 0.85rem;
  }

  .why-stats {
    gap: 20px;
  }

  .why-stat strong {
    font-size: 1.6rem;
  }

  .why-stat span {
    font-size: 0.7rem;
  }

  /* Cards productos/accesorios */
  .cards-grid--3 {
    grid-template-columns: 1fr;
  }

  .cards-grid--4 {
    grid-template-columns: 1fr 1fr;
  }

  .card-body {
    padding: 18px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-desc {
    font-size: 0.84rem;
  }

  .accessory-card {
    padding: 24px 18px;
  }

  /* Servicios */
  .servicios-grid {
    grid-template-columns: 1fr;
  }

  .servicio-item {
    padding: 20px 14px;
    gap: 14px;
    border-right: none;
  }

  .servicio-num {
    font-size: 2rem;
    width: 40px;
  }

  .servicio-content h3 {
    font-size: 0.98rem;
    margin-bottom: 6px;
  }

  .servicio-content p {
    font-size: 0.82rem;
    line-height: 1.6;
  }

  /* Contacto */
  .contacto-section {
    padding: 48px 0 52px;
  }

  .contacto-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contacto-info .section-title {
    font-size: clamp(1.6rem, 7vw, 2.2rem);
  }

  .contacto-slogan {
    font-size: 10px;
    margin-bottom: 24px;
  }

  .contact-items {
    gap: 16px;
    margin-bottom: 24px;
  }

  .contact-icon {
    width: 38px;
    height: 38px;
  }

  .contact-value {
    font-size: 0.95rem;
  }

  .contacto-form-wrap {
    padding: 24px 16px;
    border-radius: 8px;
  }

  .form-title {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-group input,
  .form-group textarea {
    font-size: 16px;
  }

  .form-submit {
    font-size: 13px;
    padding: 15px 20px;
    letter-spacing: 0.1em;
  }

  /* Footer */
  .footer {
    padding: 36px 0 20px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    row-gap: 28px;
    margin-bottom: 28px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .footer-logo img,
  .footer-brand .logo img {
    height: 36px !important;
    width: auto;
    margin-top: 0;
  }

  .footer-desc {
    display: none;
  }

  .footer-slogan {
    font-size: 9px;
    letter-spacing: 0.3em;
    margin-bottom: 0;
    opacity: 0.4;
  }

  .footer-links-col {
    padding: 0 8px;
  }

  .footer-links-col h4 {
    font-size: 10px;
    margin-bottom: 12px;
    letter-spacing: 0.12em;
  }

  .footer-links-col a {
    font-size: 0.78rem;
    margin-bottom: 8px;
    color: rgba(255,255,255,0.55);
  }

  .footer-links-col:last-child {
    grid-column: 1 / -1;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: 20px;
  }

  .footer-links-col:last-child p {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    line-height: 1.7;
  }

  .footer-small {
    font-size: 0.72rem !important;
    opacity: 0.7;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 4px;
    padding-top: 16px;
    text-align: center;
  }

  .footer-bottom p {
    font-size: 0.73rem;
  }

  /* WhatsApp flotante */
  .whatsapp-float {
    bottom: 20px;
    right: 16px;
    width: 52px;
    height: 52px;
  }

  /* Logo en nav */
  .logo img {
    height: 60px;
    margin-top: 0;
    width: auto;
  }
}

/* Móvil muy pequeño */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .hero-desc {
    font-size: 0.84rem;
  }

  .cards-grid--4 {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-rows: 195px 135px;
    gap: 8px;
  }

  .gallery-item--large {
    height: 195px !important;
  }

  .gallery-item:not(.gallery-item--large) {
    height: 135px;
  }

  .card-body {
    padding: 14px;
  }

  .accessory-card {
    padding: 20px 14px;
  }

  .acc-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 14px;
  }

  .contacto-form-wrap {
    padding: 22px 14px;
  }

  .form-title {
    font-size: 0.95rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

/* ============================================
   HOME MOVIL CORTA (SOLO INDEX)
   ============================================ */
@media (max-width: 768px) {
  /* Ocultar secciones intermedias solo en la home */
  body#index-home #galeria,
  body#index-home #nosotros,
  body#index-home #portones,
  body#index-home #automatizacion,
  body#index-home #accesorios,
  body#index-home #servicios {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    pointer-events: none;
  }

  /* Asegurar que inicio y contacto si se ven en la home */
  body#index-home #inicio,
  body#index-home #contacto {
    position: relative;
    left: auto;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    pointer-events: auto;
  }
}

/* ============================================
   HOME MOVIL CORTA (SOLO index.html)
   ============================================ */
@media (max-width: 768px) {
  /* Ocultar secciones intermedias solo en la home */
  body#index-home #galeria,
  body#index-home #nosotros,
  body#index-home #portones,
  body#index-home #automatizacion,
  body#index-home #accesorios,
  body#index-home #servicios {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    pointer-events: none;
  }

  /* Hero y contacto siguen visibles en la home */
  body#index-home #inicio,
  body#index-home #contacto {
    position: relative;
    left: auto;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    pointer-events: auto;
  }
}

/* ============================================
   HOME MÓVIL CORTA (solo index.html)
   ============================================ */
@media (max-width: 768px) {
  /* Ocultar secciones intermedias solo en la home */
  body#index-home #galeria,
  body#index-home #nosotros,
  body#index-home #portones,
  body#index-home #automatizacion,
  body#index-home #accesorios,
  body#index-home #servicios {
    display: none;
  }

  /* Asegurar que inicio y contacto sí se ven en la home */
  body#index-home #inicio,
  body#index-home #contacto {
    display: block;
  }
}
