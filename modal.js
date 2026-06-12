/* ── Get Started modal ── */
(function () {
  var html =
    '<div class="gs-overlay" id="gsOverlay">' +
      '<div class="gs-modal">' +
        '<button class="gs-close" type="button" aria-label="Close" onclick="closeGetStarted()">&times;</button>' +
        '<div class="gs-form-view" id="gsFormView">' +
          '<h2>Get Started</h2>' +
          '<div class="gs-sub">Share a few details and our team will get back to you.</div>' +
          '<form id="gsForm">' +
            '<div class="gs-field"><label>Full Name</label><input type="text" required placeholder="Your name" /></div>' +
            '<div class="gs-field"><label>Email Address</label><input type="email" required placeholder="you@organisation.org" /></div>' +
            '<div class="gs-field"><label>Contact Number</label><input type="tel" required placeholder="+91 90000 00000" /></div>' +
            '<div class="gs-field"><label>Message</label><textarea required placeholder="How can we help you?"></textarea></div>' +
            '<button type="submit" class="gs-submit">Submit Request</button>' +
          '</form>' +
        '</div>' +
        '<div class="gs-success-view" id="gsSuccessView">' +
          '<div class="gs-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
          '<h2>Request submitted!</h2>' +
          '<p>Your request has been successfully submitted. Our team will get back to you shortly.</p>' +
          '<button type="button" class="gs-done" onclick="closeGetStarted()">Done</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  function init() {
    if (document.getElementById('gsOverlay')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    document.body.appendChild(wrap.firstChild);

    var overlay = document.getElementById('gsOverlay');
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeGetStarted();
    });
    document.getElementById('gsForm').addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('gsFormView').classList.add('hide');
      document.getElementById('gsSuccessView').classList.add('show');
    });
  }

  window.openGetStarted = function () {
    if (!document.getElementById('gsOverlay')) init();
    document.getElementById('gsFormView').classList.remove('hide');
    document.getElementById('gsSuccessView').classList.remove('show');
    document.getElementById('gsForm').reset();
    document.getElementById('gsOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeGetStarted = function () {
    var o = document.getElementById('gsOverlay');
    if (o) o.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeGetStarted();
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
