/**
 * MOHAMED ESSAID KANDOUL – CREATIVE DEVELOPER PORTFOLIO
 * Vanilla JavaScript (ES6+)
 * 
 * Functionalities:
 * 1. Mobile Menu Toggle & Accessible Focus Trap
 * 2. Header Scroll Effect & Active Section Spy
 * 3. Typewriter Animation for Hero Subtitle
 * 4. Project Category Filtering
 * 5. Scroll Reveal Animations (Intersection Observer)
 * 6. Back-to-Top Button Handler
 * 7. Contact Form Real-Time Validation & Toast Notification
 * 8. Dynamic Copyright Year
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==================== 1. DYNAMIC COPYRIGHT YEAR ====================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==================== 2. MOBILE NAVIGATION DRAWER ====================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);

      // Prevent background scrolling on small screens when menu is open
      if (window.innerWidth <= 768) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    };

    navToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        toggleMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  // ==================== 3. HEADER SCROLL & BACK TO TOP ====================
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScrollEffects = () => {
    const scrollPos = window.scrollY;

    // Sticky header shadow / blur state
    if (header) {
      if (scrollPos > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects(); // Trigger initially on page load

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==================== 4. ACTIVE SECTION SCROLL SPY ====================
  const sections = document.querySelectorAll('section[id]');

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => scrollSpyObserver.observe(section));

  // ==================== 5. TYPEWRITER ANIMATION ====================
  const typingElement = document.querySelector('.typing-text');
  const roles = [
    'Junior Web Developer',
    'TSDI Graduate (École Sagim)',
    'PHP & Laravel Enthusiast',
    'Creative Front-End Builder'
  ];

  if (typingElement) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeRole = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 95;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        typingSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeRole, typingSpeed);
    };

    // Initiate typing animation with initial delay
    setTimeout(typeRole, 600);
  }

  // ==================== 6. PROJECT CATEGORY FILTERING ====================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button styling
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedFilter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (selectedFilter === 'all' || category === selectedFilter) {
            card.classList.remove('filter-hide');
            // Re-trigger subtle reveal
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.classList.add('filter-hide');
          }
        });
      });
    });
  }

  // ==================== 7. SCROLL REVEAL ANIMATIONS ====================
  const revealElements = document.querySelectorAll('.reveal-fade');

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, reveal all elements immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==================== 8. CONTACT FORM VALIDATION ====================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submitBtn');
  const formAlertSuccess = document.getElementById('formAlertSuccess');

  // Form Fields
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Error Message Containers
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Helper to show/hide errors
  const setError = (input, errorContainer, message) => {
    input.classList.add('is-invalid');
    errorContainer.textContent = message;
  };

  const clearError = (input, errorContainer) => {
    input.classList.remove('is-invalid');
    errorContainer.textContent = '';
  };

  // Real-time input listener to clear error as user types
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => clearError(fullNameInput, nameError));
  }
  if (emailInput) {
    emailInput.addEventListener('input', () => clearError(emailInput, emailError));
  }
  if (subjectInput) {
    subjectInput.addEventListener('input', () => clearError(subjectInput, subjectError));
  }
  if (messageInput) {
    messageInput.addEventListener('input', () => clearError(messageInput, messageError));
  }

  // Email format regex validation
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    return emailRegex.test(email.trim());
  };

  // Toast Notification Trigger
  const toastNotification = document.getElementById('toastNotification');
  const showToast = (message, type = 'success') => {
    if (!toastNotification) return;

    toastNotification.textContent = message;
    toastNotification.className = `toast-notification toast-${type} show`;

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let isValid = true;

      // 1. Validate Full Name
      const nameVal = fullNameInput.value.trim();
      if (!nameVal) {
        setError(fullNameInput, nameError, 'Please enter your full name.');
        isValid = false;
      } else if (nameVal.length < 2) {
        setError(fullNameInput, nameError, 'Name must contain at least 2 characters.');
        isValid = false;
      } else {
        clearError(fullNameInput, nameError);
      }

      // 2. Validate Email
      const emailVal = emailInput.value.trim();
      if (!emailVal) {
        setError(emailInput, emailError, 'Please enter your email address.');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        setError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }

      // 3. Validate Subject
      const subjectVal = subjectInput.value.trim();
      if (!subjectVal) {
        setError(subjectInput, subjectError, 'Please specify the subject of your message.');
        isValid = false;
      } else if (subjectVal.length < 3) {
        setError(subjectInput, subjectError, 'Subject must be at least 3 characters.');
        isValid = false;
      } else {
        clearError(subjectInput, subjectError);
      }

      // 4. Validate Message
      const messageVal = messageInput.value.trim();
      if (!messageVal) {
        setError(messageInput, messageError, 'Please enter your message.');
        isValid = false;
      } else if (messageVal.length < 10) {
        setError(messageInput, messageError, 'Message must be at least 10 characters long.');
        isValid = false;
      } else {
        clearError(messageInput, messageError);
      }

      if (!isValid) {
        showToast('Please fix the errors in the form before submitting.', 'error');
        return;
      }

      // If valid: simulate submission process
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>Validating Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Display success alert
        if (formAlertSuccess) {
          formAlertSuccess.style.display = 'flex';
          formAlertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Show toast
        showToast('Validation successful! Message is ready for backend dispatch.', 'success');

        // Reset form
        contactForm.reset();

        // Clear alert after 8 seconds
        setTimeout(() => {
          if (formAlertSuccess) {
            formAlertSuccess.style.display = 'none';
          }
        }, 8000);

      }, 1000);
    });
  }

  // Log confirmation in console
  console.log('%c Mohamed Essaid Kandoul – Portfolio loaded successfully.', 'color: #8B5CF6; font-size: 14px; font-weight: bold;');
});
