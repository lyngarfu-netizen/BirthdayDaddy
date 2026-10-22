function createFirework() {
    const container = document.getElementById('fireworksContainer');
    if (!container) return;

    // Titik letupan rambang di seluruh skrin
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.8);

    const colors = ['#ff4d4d', '#fffa65', '#ffffff', '#ff9f43', '#ff6b81', '#00d2d3', '#ff69b4', '#dda0dd'];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 180 + 50; 
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

// Letupan bertalu-talu supaya nampak sangat meriah
setInterval(() => {
    createFirework();
    setTimeout(createFirework, 300);
}, 700);