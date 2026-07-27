// Chef Yuri — Private Chef — comportamento condiviso (nav, menu mobile, reveal, form)

document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav: stato trasparente-su-hero (solo home, body[data-nav="transparent"]) --- */
  const nav = document.getElementById('site-nav');
  const navLogo = document.getElementById('nav-logo');
  const navLinksAnchors = nav ? nav.querySelectorAll('#nav-links a:not(#nav-cta)') : [];
  const transparentNav = document.body.dataset.nav === 'transparent';

  function setNavState(scrolled) {
    if (!nav) return;
    if (!transparentNav || scrolled) {
      nav.classList.add('bg-cream/95', 'backdrop-blur', 'border-b', 'border-line');
      navLogo && navLogo.classList.remove('invert');
      navLinksAnchors.forEach(a => a.classList.remove('text-white'));
    } else {
      nav.classList.remove('bg-cream/95', 'backdrop-blur', 'border-b', 'border-line');
      navLogo && navLogo.classList.add('invert');
      navLinksAnchors.forEach(a => a.classList.add('text-white'));
    }
  }

  if (nav) {
    setNavState(false);
    if (transparentNav) {
      window.addEventListener('scroll', () => setNavState(window.scrollY > 40), { passive: true });
    }
  }

  /* --- Menu mobile --- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      iconOpen && iconOpen.classList.toggle('hidden');
      iconClose && iconClose.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen && iconOpen.classList.remove('hidden');
      iconClose && iconClose.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* --- Reveal on scroll --- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('in-view'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  /* --- Galleria: carosello 3D ad anello ---
       Stessa interazione su desktop e mobile, nessuno scroll-jacking: l'anello ruota
       SOLO trascinando orizzontalmente sopra .ring-stage (pointerdown/move/up), lo
       scroll verticale della pagina non viene mai intercettato (touch-action: pan-y).
       Segue il puntatore in tempo reale durante il drag, poi scatta ("snap") sul
       pannello più vicino al rilascio. Frecce e pallini funzionano sempre, anche
       con prefers-reduced-motion (in quel caso la transizione è già azzerata a
       livello globale, vedi regola @media in cima al file). --- */
  const ringStage = document.querySelector('.ring-stage');
  const ringEl = document.getElementById('gallery-ring');
  if (ringStage && ringEl) {
    const totalPanels = ringEl.querySelectorAll('.panel').length;
    const stepDeg = 360 / totalPanels;
    const dots = document.querySelectorAll('[data-ring-dot]');
    const prevBtn = document.getElementById('ring-prev');
    const nextBtn = document.getElementById('ring-next');

    let currentIndex = 0;
    let currentAngle = 0; // gradi, valore continuo (non ri-wrappato durante il drag)

    function setRadius() {
      const panelWidth = ringEl.offsetWidth;
      const radius = panelWidth / (2 * Math.tan(Math.PI / totalPanels));
      ringEl.style.setProperty('--ring-radius', `${radius}px`);
    }
    setRadius();
    window.addEventListener('resize', setRadius);

    function applyAngle(angle) {
      ringEl.style.transform = `rotateY(${angle}deg)`;
    }

    function snapTo(index) {
      currentIndex = ((index % totalPanels) + totalPanels) % totalPanels;
      currentAngle = -currentIndex * stepDeg;
      applyAngle(currentAngle);
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    prevBtn && prevBtn.addEventListener('click', () => snapTo(currentIndex - 1));
    nextBtn && nextBtn.addEventListener('click', () => snapTo(currentIndex + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => snapTo(i)));
    snapTo(0);

    let dragging = false;
    let startX = 0;
    let startAngle = 0;

    ringStage.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.ring-arrow')) return; // lascia il click nativo del pulsante, non avviare il drag
      dragging = true;
      startX = e.clientX;
      startAngle = currentAngle;
      ringEl.classList.add('dragging');
      ringStage.setPointerCapture(e.pointerId);
    });

    ringStage.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const deltaX = e.clientX - startX;
      const panelWidth = ringEl.offsetWidth || 1;
      const degreesPerPixel = stepDeg / panelWidth;
      currentAngle = startAngle + deltaX * degreesPerPixel;
      applyAngle(currentAngle);
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      ringEl.classList.remove('dragging');
      snapTo(Math.round(-currentAngle / stepDeg));
    }
    ringStage.addEventListener('pointerup', endDrag);
    ringStage.addEventListener('pointercancel', endDrag);
  }

  /* --- Form di prenotazione: toggle "richiedi una call" --- */
  const callToggle = document.getElementById('call-toggle');
  const callPhoneField = document.getElementById('call-phone-field');
  if (callToggle && callPhoneField) {
    callToggle.addEventListener('change', () => {
      callPhoneField.classList.toggle('hidden', !callToggle.checked);
      const phoneInput = document.getElementById('telefono');
      if (phoneInput) phoneInput.required = callToggle.checked;
    });
  }

  /* --- Pulsanti flottanti: mostra "torna su" dopo un po' di scroll --- */
  const fabTop = document.getElementById('fab-top');
  if (fabTop) {
    const toggleFabTop = () => fabTop.classList.toggle('is-visible', window.scrollY > 500);
    toggleFabTop();
    window.addEventListener('scroll', toggleFabTop, { passive: true });
    fabTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* --- Form di prenotazione: submit (nessun backend collegato ancora) --- */
  const form = document.getElementById('booking-form');
  const success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      success.classList.remove('hidden');
      success.focus({ preventScroll: true });
    });
  }
});
