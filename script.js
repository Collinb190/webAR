// Start AR Function
function initiateAR() {
    window.location.href = 'ar.html';
  }
  
  // Particle Effect Background
  const particleCanvas = document.getElementById('particle-canvas');
  const canvasContext = particleCanvas.getContext('2d');
  
  function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  let particlesArray = [];
  const particleColors = ['#ff6f61', '#6fffb3', '#61a6ff', '#f4ff61'];
  
  class Particle {
    constructor() {
      this.x = Math.random() * particleCanvas.width;
      this.y = Math.random() * particleCanvas.height;
      this.radius = Math.random() * 3 + 1;
      this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
    }
  
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
    }
  
    draw() {
      canvasContext.globalAlpha = 0.7;
      canvasContext.fillStyle = this.color;
      canvasContext.beginPath();
      canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      canvasContext.closePath();
      canvasContext.fill();
    }
  }
  
  function initParticles(count = 100) {
    particlesArray = [];
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();
  
  function animate() {
    canvasContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particlesArray.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();  
