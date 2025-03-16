let particles = [];
let particleCount = 15; // Ändere die Anzahl der Partikel hier
let canvas, ctx, animationFrameId;

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    // this.color = 'rgb(255,255,255)';
    this.color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    this.velocityX = (Math.random() * 0.5) - 0.25;
    this.velocityY = (Math.random() * 0.5) - 0.25;
}

Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
};

Particle.prototype.update = function() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    if (this.x < 0 || this.x > canvas.width) {
        this.velocityX = -this.velocityX;
    }
    if (this.y < 0 || this.y > canvas.height) {
        this.velocityY = -this.velocityY;
    }
};

function createParticles() {
    particles = [];
    for (var i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
    }
    animationFrameId = requestAnimationFrame(draw);
}

function startParticles() {
    canvas = document.getElementById('neonCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
    draw();
}

function stopParticles() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
