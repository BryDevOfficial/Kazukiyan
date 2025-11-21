 
(function() {
  const TOTAL = 220; // number of particles
  const container = document.querySelector('.particle-bg');
  const sectionWidth = window.innerWidth;
  const sectionHeight = window.innerHeight;

  for (let i = 0; i < TOTAL; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    // random size between 1px and 4px
    const size = 1 + Math.random() * 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    // random starting position
    const x = Math.random() * sectionWidth;
    const y = Math.random() * sectionHeight;
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    // random delay so particles rise at different times
    p.style.animationDelay = `${Math.random() * 10}s`;

    // random duration for varied speeds
    p.style.animationDuration = `${8 + Math.random() * 4}s`;

    container.appendChild(p);
  }
})();