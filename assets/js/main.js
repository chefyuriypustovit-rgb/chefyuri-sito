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

  /* --- Galleria: colonna immagine pinnata, crossfade guidato dalla didascalia attiva
       (solo desktop ≥1024px; su mobile questi elementi restano in "hidden" e non intersecano mai) --- */
  const pinCaps = document.querySelectorAll('[data-pin-cap]');
  const pinImgs = document.querySelectorAll('[data-pin-img]');
  if (pinCaps.length && pinImgs.length) {
    const setActivePin = (index) => {
      pinImgs.forEach(img => img.classList.toggle('active', img.dataset.pinImg === index));
      pinCaps.forEach(cap => cap.classList.toggle('active', cap.dataset.pinCap === index));
    };
    const pinObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePin(entry.target.dataset.pinCap);
        }
      });
    }, { rootMargin: '-25% 0px -25% 0px', threshold: 0 });
    pinCaps.forEach(cap => pinObserver.observe(cap));
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
