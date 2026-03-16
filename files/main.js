// ─── FocusPath · main.js ───────────────────────────────
// Shared utilities loaded on every page

// 1. Highlight the active nav link based on current page
(function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page) {
      link.style.color = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-main') || '#e8d5b0';
    }
  });
})();

// 2. Animate elements into view on scroll
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe cards on home page after DOM settles
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.goal-card, .phase-card, .intern-card, .platform-card').forEach(el => {
      observer.observe(el);
    });
  });
})();

// 3. Utility: show a toast notification
function showToast(message, type = 'info') {
  const existing = document.querySelector('.fp-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'fp-toast';
  toast.textContent = message;

  const colors = { info: '#60a5fa', success: '#4ade80', warning: '#f97316' };
  toast.style.cssText = `
    position: fixed; bottom: 2rem; right: 2rem; z-index: 9999;
    background: var(--surface2); border: 1px solid ${colors[type] || colors.info};
    color: var(--text); padding: 0.8rem 1.4rem; border-radius: 10px;
    font-family: var(--font-body); font-size: 0.88rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    animation: fadeSlideUp 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// 4. Expose to window for use in other scripts
window.FocusPath = { showToast };

console.log('FocusPath ✦ loaded');