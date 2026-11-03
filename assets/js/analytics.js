/**
 * Khushi Tours & Travels — Google Analytics 4 (GA4) Integration & Event Tracking
 * Website: https://gagangowdap.github.io/KhushiTravels/
 * 
 * Compliant with Google Analytics 4 standards, privacy regulations, and GitHub Pages hosting.
 * Note: A real GA4 Measurement ID (G-XXXXXXXXXX) must be supplied by the property owner.
 */

(function () {
  'use strict';

  // 1. CONFIGURATION: Real GA4 Measurement ID
  // Replace with your real Google Analytics 4 Measurement ID (e.g. 'G-XXXXXXXXXX')
  window.GA4_MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || '';

  // 2. Initialize dataLayer and gtag queue
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // 3. Load official Google tag (gtag.js) only when a valid GA4 Measurement ID is present
  const gaId = window.GA4_MEASUREMENT_ID;
  if (gaId && /^G-[A-Z0-9]+$/i.test(gaId) && gaId !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', gaId, {
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  // 4. Safe event tracking helper with strict PII (Personal Data) Shield
  function trackEvent(eventName, eventParams) {
    var sanitizedParams = {};
    if (eventParams && typeof eventParams === 'object') {
      for (var key in eventParams) {
        if (Object.prototype.hasOwnProperty.call(eventParams, key)) {
          // Strict Privacy Shield: Exclude any fields that could carry user personal information
          if (!/name|phone|email|msg|message|text|comment|author|address/i.test(key)) {
            var val = eventParams[key];
            if (typeof val === 'string') {
              sanitizedParams[key] = val.slice(0, 100);
            } else if (typeof val === 'number' || typeof val === 'boolean') {
              sanitizedParams[key] = val;
            }
          }
        }
      }
    }

    if (gaId && /^G-[A-Z0-9]+$/i.test(gaId) && gaId !== 'G-XXXXXXXXXX') {
      gtag('event', eventName, sanitizedParams);
    } else {
      // In pre-configured state or DebugView testing, log into dataLayer
      window.dataLayer.push({
        event: eventName,
        event_parameters: sanitizedParams,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Expose trackEvent globally for custom triggers if needed
  window.trackKhushiEvent = trackEvent;

  // 5. Automated Interaction Tracking
  document.addEventListener('DOMContentLoaded', function () {

    // A. Phone Call Click Tracking
    document.addEventListener('click', function (e) {
      var phoneLink = e.target.closest('a[href^="tel:"]');
      if (phoneLink) {
        trackEvent('phone_click', {
          destination_phone: '+919901333113',
          button_location: (phoneLink.textContent || '').trim().slice(0, 40),
          page_location: window.location.pathname
        });
      }
    });

    // B. WhatsApp Click Tracking
    document.addEventListener('click', function (e) {
      var waLink = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
      if (waLink) {
        trackEvent('whatsapp_click', {
          channel: 'whatsapp',
          button_text: (waLink.textContent || '').trim().slice(0, 40),
          page_location: window.location.pathname
        });
      }
    });

    // C. Email Click Tracking
    document.addEventListener('click', function (e) {
      var emailLink = e.target.closest('a[href^="mailto:"]');
      if (emailLink) {
        trackEvent('email_click', {
          channel: 'email',
          page_location: window.location.pathname
        });
      }
    });

    // D. Package Details Click Tracking
    document.addEventListener('click', function (e) {
      var pkgLink = e.target.closest('a[href*="tour-packages"], a[href*="spiritual-pilgrimage"], a[href*="pilgrimage-packages"]');
      if (pkgLink && !pkgLink.closest('header') && !pkgLink.closest('footer') && !pkgLink.closest('nav')) {
        trackEvent('package_details_click', {
          package_slug: pkgLink.getAttribute('href'),
          button_text: (pkgLink.textContent || '').trim().slice(0, 50),
          page_location: window.location.pathname
        });
      }
    });

    // E. Form Tracking: Form Start & Form Submit
    var allForms = document.querySelectorAll('form');
    allForms.forEach(function (form) {
      var formStarted = false;
      var formId = form.id || form.getAttribute('name') || 'enquiry_form';

      // Track 'enquiry_form_start' once upon first user input
      form.addEventListener('input', function () {
        if (!formStarted) {
          formStarted = true;
          trackEvent('enquiry_form_start', {
            form_id: formId,
            page_location: window.location.pathname
          });
        }
      }, { once: true });

      // Track 'enquiry_form_submit' ONLY when validation succeeds
      form.addEventListener('submit', function (e) {
        if (form.checkValidity && !form.checkValidity()) {
          return; // Invalid form submission is not counted
        }

        // Determine general category/vehicle selection (strictly non-personal)
        var vehElement = form.querySelector('select, #wa-veh, #packageSelect');
        var selectedItem = vehElement ? (vehElement.value || 'unspecified') : 'general_enquiry';

        trackEvent('enquiry_form_submit', {
          form_id: formId,
          service_selected: selectedItem.slice(0, 50),
          page_location: window.location.pathname
        });
      });
    });

  });
})();
