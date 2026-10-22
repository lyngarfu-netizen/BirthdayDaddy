const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Kelas untuk Zarah Bintang Turun ke Bawah
class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height; // Rawak di seluruh skrin pada mula
    this.size = Math.random() * 3 + 1;     // Saiz berbeza: dari kecil (1px) hingga besar (4px)
    this.speed = Math.random() * 0.8 + 0.2; // Kelajuan turun perlahan-lahan
    this.opacity = Math.random() * 0.7 + 0.3; // Kecerahan berbeza-beza
    this.twinkleSpeed = Math.random() * 0.02 + 0.005; // Kelajuan kelipan bintang
  }

  update() {
    // Gerakkan bintang ke bawah
    this.y += this.speed;

    // Kesan kelipan (cahaya malap dan terang bersilih ganti)
    this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
    if (this.opacity < 0.1) this.opacity = 0.1;
    if (this.opacity > 1) this.opacity = 1;

    // Jika bintang sampai ke bawah skrin, hantar semula ke atas
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = this.size * 3; // Kesan cahaya bersinar (glow) di sekeliling bintang
    ctx.shadowColor = 'white';
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Cipta 70 biji bintang dengan pelbagai saiz
const stars = Array.from({ length: 70 }, () => new Star());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();