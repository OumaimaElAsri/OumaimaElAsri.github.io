// ── REVEAL ON SCROLL ──
const ro = new IntersectionObserver(
  es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: .08 }
);
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── MOBILE MENU ──
window.toggleMenu = function(){ document.getElementById('mob-menu').classList.toggle('open'); };
window.closeMenu  = function(){ document.getElementById('mob-menu').classList.remove('open'); };

// ── CURSOR GLOW ──
const glow = document.getElementById('cursor-glow');
if (glow && window.innerWidth > 900) {
  document.addEventListener('mousemove', e => {
    if(!glow.classList.contains('active')) glow.classList.add('active');
    glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
  });
}

// ── 3D TILT EFFECT ──
if (window.innerWidth > 900) {
  const tiltElements = document.querySelectorAll('.bc, .story-stats, .skill-block, .val-card, .traj-card, .pcard');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3; 
      const rotateY = ((x - centerX) / centerX) * 3;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      el.style.transition = 'transform 0.1s ease';
      el.style.zIndex = '20';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s ease';
      el.style.zIndex = '1';
    });
  });
}

// ── NUMBERS ANIMATION ──
const numObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-val'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const isReverse = el.getAttribute('data-reverse') === 'true';
      const start = parseInt(el.getAttribute('data-start') || '0');
      
      let current = start;
      const duration = 2000;
      const steps = 60;
      const stepTime = Math.abs(Math.floor(duration / steps));
      const totalDiff = isReverse ? start - target : target - start;
      const increment = totalDiff / steps;

      const timer = setInterval(() => {
        if (isReverse) {
          current -= increment;
          if (current <= target) { current = target; clearInterval(timer); }
        } else {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
        }
        el.innerHTML = prefix + Math.floor(current) + suffix;
      }, stepTime);
      
      obs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.num-anim').forEach(el => numObserver.observe(el));
