/* =========================================================
   ORGANIC NAILS – Scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const header    = document.getElementById('header');
  const toggle    = document.getElementById('mobileToggle');
  const navLinks  = document.getElementById('navLinks');
  const allLinks  = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');
  const form      = document.getElementById('bookingForm');
  const modal     = document.getElementById('successModal');
  const closeBtn  = document.getElementById('closeModal');

  /* ---------- Sticky header on scroll ---------- */
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    backToTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  /* ---------- Close mobile menu on link click ---------- */
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Active nav highlight on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const setActive = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });

  /* ---------- Form submission ---------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('show');
    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  /* ---------- Scroll-reveal animation ---------- */
  const revealElements = document.querySelectorAll(
    '.service-card, .gallery-item, .about-text, .about-image, .contact-item, .info-card, .booking-form'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity .6s ease ${i % 6 * .08}s, transform .6s ease ${i % 6 * .08}s`;
    revealObserver.observe(el);
  });

  /* ---------- Set min date for booking ---------- */
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});
