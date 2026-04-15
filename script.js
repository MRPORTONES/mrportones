/* ============================================
   MR PORTONES â€” script.js
   ============================================ */

(function () {
  'use strict';

  /* ---- NAVBAR: scroll effect ---- */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- HAMBURGER MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    }
  });

  /* ---- SMOOTH SCROLL for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 68; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---- INTERSECTION OBSERVER: fade-in & counters ---- */
  const countersTriggered = { done: false };

  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(function () {
        el.classList.add('visible');
      }, delay);

      fadeObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ---- ANIMATED COUNTERS ---- */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('es-AR');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || countersTriggered.done) return;
      countersTriggered.done = true;
      document.querySelectorAll('.count').forEach(function (el) {
        setTimeout(function () { animateCounter(el); }, 400);
      });
      counterObserver.disconnect();
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById('inicio');
  if (heroSection) counterObserver.observe(heroSection);

  /* ---- ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(function (link) {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ---- CONTACT FORM (Formspree) ---- */
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit');
      submitBtn.textContent = 'ENVIANDOâ€¦';
      submitBtn.disabled = true;
      formMsg.className = 'form-msg';
      formMsg.textContent = '';

      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          formMsg.className = 'form-msg success';
          formMsg.textContent = 'âœ“ Â¡Mensaje enviado! Te contactamos a la brevedad.';
          form.reset();
        } else {
          const json = await res.json();
          if (json.errors) {
            formMsg.className = 'form-msg error';
            formMsg.textContent = 'âœ— ' + json.errors.map(function (e) { return e.message; }).join(', ');
          } else {
            throw new Error('Error en el envÃ­o');
          }
        }
      } catch (err) {
        formMsg.className = 'form-msg error';
        formMsg.textContent = 'âœ— Hubo un error. Por favor contactanos por WhatsApp.';
      }

      submitBtn.textContent = 'SOLICITÃ TU PRESUPUESTO';
      submitBtn.disabled = false;
    });
  }

  /* ---- SMOOTH SCROLL CLASS helper ---- */
  document.querySelectorAll('.smooth-scroll').forEach(function (el) {
    el.addEventListener('click', function (e) {
      const href = el.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();

/* ---- NAV: usar páginas en móvil, anclas en escritorio ---- */
(function () {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  function updateNavLinks() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    navLinks.forEach(link => {
      const text = link.textContent.trim();

      if (isMobile) {
        // En móvil: usar PÁGINAS
        switch (text) {
          case 'Inicio':
            link.setAttribute('href', 'index.html');
            break;
          case 'Portones':
            link.setAttribute('href', 'portones.html');
            break;
          case 'Automatización':
            link.setAttribute('href', 'automatizacion.html');
            break;
          case 'Accesorios':
            link.setAttribute('href', 'accesorios.html');
            break;
          case 'Servicios':
            link.setAttribute('href', 'servicios.html');
            break;
          case 'Sobre Nosotros':
            link.setAttribute('href', 'nosotros.html');
            break;
          case 'Contacto':
            link.setAttribute('href', 'contacto.html');
            break;
        }
      } else {
        // En escritorio: anclas dentro de la landing
        switch (text) {
          case 'Inicio':
            link.setAttribute('href', '#inicio');
            break;
          case 'Portones':
            link.setAttribute('href', '#portones');
            break;
          case 'Automatización':
            link.setAttribute('href', '#automatizacion');
            break;
          case 'Accesorios':
            link.setAttribute('href', '#accesorios');
            break;
          case 'Servicios':
            link.setAttribute('href', '#servicios');
            break;
          case 'Sobre Nosotros':
            link.setAttribute('href', '#nosotros');
            break;
          case 'Contacto':
            link.setAttribute('href', '#contacto');
            break;
        }
      }
    });
  }

  updateNavLinks();
  window.addEventListener('resize', updateNavLinks);
})();
