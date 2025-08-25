---
layout: page
title: Contact
icon: fas fa-paper-plane
order: 4
permalink: /contact/
---

<div class="card card-contact">
  <div class="card-body">

    <form id="contact" class="contact-form" action="https://formspree.io/f/myzdgnaj" method="POST">
      <!-- Static email subject helps avoid header injection -->
      <input type="hidden" name="_subject" value="New message from liquidflame.github.io">

      <label class="form-label" for="name">Name</label>
      <input id="name" name="name" type="text" required class="form-control" autocomplete="name">

      <label class="form-label" for="email">Email</label>
      <input id="email" name="email" type="email" required class="form-control" autocomplete="email" inputmode="email" spellcheck="false">

      <label class="form-label" for="message">Message</label>
      <textarea id="message" name="message" rows="6" required class="form-control"></textarea>

      <!-- Honeypot (Formspree recognizes `_gotcha`) -->
      <label class="hp" aria-hidden="true">Company
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off">
      </label>

      <button type="submit" class="btn btn-outline-primary">Send</button>
      <p id="status" class="form-status mt-2 text-muted" aria-live="polite"></p>
    </form>

  </div>
</div>

<!-- Page-scoped styles just to hide the honeypot without touching global CSS -->
<style>
  .card-contact .hp {
    position: absolute !important;
    left: -5000px !important;
    height: 0 !important;
    overflow: hidden !important;
  }
</style>

<script>
  (function () {
    const form = document.getElementById('contact');
    const status = document.getElementById('status');
    const btn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Drop obvious bots filling the honeypot
      if (form['_gotcha'] && form['_gotcha'].value) return;

      status.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          status.textContent = "Thanks! I'll get back to you.";
          form.reset();
          btn.disabled = false;
        } else {
          const err = await res.json().catch(() => ({}));
          status.textContent =
            (err.errors && err.errors.map(e => e.message).join(', ')) ||
            'Something went wrong. Please try again.';
          btn.disabled = false;
        }
      } catch {
        status.textContent = 'Network error. Please try again.';
        btn.disabled = false;
      }
    });
  })();
</script>
