/* ==========================================================================
   TCOMIX by Yuva Enterprises — main.js
   Navigation + scroll reveal + dynamic content population
   (structure mirrors Shivratna Events' main.js exactly; FAQ accordion reuses
   the same chevron-rotate interaction Shivratna uses for its mobile nav)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initFaqAccordion();
  initScrollReveal();
  populateFromData();
});

/* ── Mobile navigation — off-canvas drawer ──────────────────────────────── */
function initMobileNav() {
  var toggle   = document.querySelector(".nav-mobile-toggle");
  var panel    = document.querySelector(".nav-mobile-panel");
  var backdrop = document.querySelector(".nav-mobile-backdrop");
  if (!toggle || !panel || !backdrop) return;

  var lastFocused = null;
  var lockedScrollY = 0;
  var isOpen = false;

  function focusableEls() {
    return Array.prototype.slice.call(
      panel.querySelectorAll('a[href], button:not([disabled])')
    );
  }

  function lockScroll() {
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + lockedScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.classList.add("nav-open-lock");
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.classList.remove("nav-open-lock");
    window.scrollTo(0, lockedScrollY);
  }

  function openDrawer() {
    if (isOpen) return;
    isOpen = true;
    lastFocused = document.activeElement;

    lockScroll();

    panel.classList.add("open");
    backdrop.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    panel.removeAttribute("inert");

    document.addEventListener("keydown", onKeydown);

    var firstLink = focusableEls()[0];
    if (firstLink) firstLink.focus();
  }

  function closeDrawer() {
    if (!isOpen) return;
    isOpen = false;

    panel.classList.remove("open");
    backdrop.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
    panel.setAttribute("inert", "");

    unlockScroll();

    document.removeEventListener("keydown", onKeydown);

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    } else {
      toggle.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeDrawer();
      return;
    }
    if (e.key === "Tab") {
      var items = focusableEls();
      if (!items.length) return;
      var first = items[0];
      var last  = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  toggle.addEventListener("click", function () {
    if (isOpen) { closeDrawer(); } else { openDrawer(); }
  });

  backdrop.addEventListener("click", closeDrawer);

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  /* Resize handling: if the viewport grows past the mobile breakpoint
     while the drawer is open, force it closed so desktop nav (which
     doesn't use the drawer) is never left in an inconsistent state. */
  var desktopQuery = window.matchMedia("(min-width: 769px)");
  function handleBreakpointChange(e) {
    if (e.matches && isOpen) closeDrawer();
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleBreakpointChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleBreakpointChange);
  }
}

/* ── FAQ accordion (reuses Shivratna's existing chevron-rotate pattern) ── */
function initFaqAccordion() {
  var items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}

/* ── Scroll reveal (identical Meridian-style fade + lift as Shivratna) ──── */
function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var revealSelectors = [
    ".reveal",
    ".stat-card",
    ".testimonial-card",
    ".stats-block",
    ".venue-card",
    ".service-card",
    ".testimonial-block",
    ".contact-card",
    ".why-card",
    ".team-card",
    ".journey-item",
    ".capability-item",
    ".faq-item",
    ".trust-pill",
    ".cert-pill",
    ".section-header",
    ".venue-detail-content",
    ".venue-detail-image",
    ".final-cta-section",
    ".page-hero-title",
    ".page-hero-desc",
    ".form-panel"
  ].join(",");

  var elements = document.querySelectorAll(revealSelectors);

  elements.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    var parent = el.parentElement;
    if (parent && (parent.classList.contains("stats-grid") ||
                   parent.classList.contains("venue-grid") ||
                   parent.classList.contains("services-grid") ||
                   parent.classList.contains("testimonials-grid") ||
                   parent.classList.contains("contact-grid") ||
                   parent.classList.contains("why-cards-grid") ||
                   parent.classList.contains("team-grid") ||
                   parent.classList.contains("capabilities-grid") ||
                   parent.classList.contains("journey-list") ||
                   parent.classList.contains("faq-list") ||
                   parent.classList.contains("pill-row"))) {
      var siblings = Array.from(parent.children);
      var idx = siblings.indexOf(el);
      el.style.transitionDelay = (idx * 0.07) + "s";
    }
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -80px 0px", threshold: 0.08 });

  elements.forEach(function (el) { observer.observe(el); });

  var heroStagger = document.querySelectorAll(
    ".status-badge, .hero-headline, .hero-subtext, .hero-actions, .hero-cards > *"
  );

  heroStagger.forEach(function (el, i) {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transitionDelay = (0.05 + i * 0.1) + "s";
  });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      heroStagger.forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  });
}

/* ── Populate content from data.js ──────────────────────────────────────── */
function populateFromData() {
  if (typeof TX === "undefined") return;

  document.querySelectorAll("[data-stat]").forEach(function (el) {
    var key = el.getAttribute("data-stat");
    if (TX.stats[key]) el.textContent = TX.stats[key];
  });

  var heroStatValue = document.querySelector("[data-hero-stat-value]");
  if (heroStatValue) heroStatValue.textContent = TX.hero.statValue;

  var heroStatLabel = document.querySelector("[data-hero-stat-label]");
  if (heroStatLabel) heroStatLabel.textContent = TX.hero.statLabel;

  var heroStatDesc = document.querySelector("[data-hero-stat-desc]");
  if (heroStatDesc) heroStatDesc.textContent = TX.hero.statDesc;

  var heroT = TX.testimonials.find(function (t) { return t.hero; });
  if (heroT) {
    var hq = document.querySelector("[data-hero-quote]");
    var ha = document.querySelector("[data-hero-attribution]");
    if (hq) hq.textContent = "\u201c" + heroT.quote + "\u201d";
    if (ha) ha.textContent = "\u2014 " + heroT.name + ", " + heroT.role;
  }

  var testimonialBlocks = document.querySelectorAll(".testimonials-grid .testimonial-block");
  var sectionTs = TX.testimonials.filter(function (t) { return !t.hero; }).slice(0, testimonialBlocks.length);
  testimonialBlocks.forEach(function (block, i) {
    var t = sectionTs[i];
    if (!t) return;
    var quoteEl = block.querySelector(".quote");
    var nameEl = block.querySelector(".attribution-name");
    var metaEl = block.querySelector(".attribution-meta");
    var avatarEl = block.querySelector(".avatar");
    if (quoteEl) quoteEl.textContent = "\u201c" + t.quote + "\u201d";
    if (nameEl) nameEl.textContent = t.name;
    if (metaEl) metaEl.textContent = t.role;
    if (avatarEl) {
      var initials = t.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
      avatarEl.textContent = initials;
    }
  });

  document.querySelectorAll("[data-contact-phone]").forEach(function (el) {
    el.textContent = TX.contact.phoneDisplay;
  });
  document.querySelectorAll("[data-contact-address]").forEach(function (el) {
    el.textContent = TX.contact.address;
  });
  document.querySelectorAll("[data-contact-email]").forEach(function (el) {
    el.textContent = TX.contact.email;
  });
  document.querySelectorAll("[data-contact-hours]").forEach(function (el) {
    el.textContent = TX.contact.hours;
  });
}

/* ── Contact form handling (no backend wired yet — placeholder submit) ──── */
document.addEventListener("submit", function (e) {
  var form = e.target.closest("#enquiry-form");
  if (!form) return;
  e.preventDefault();
  var status = form.querySelector(".form-status");
  if (status) {
    status.textContent = "Thanks — this form isn't yet connected to a live inbox. Please use WhatsApp or call for now.";
    status.classList.add("success");
  }
});