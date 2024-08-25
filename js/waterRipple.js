const canvas = document.getElementById('ripple-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ripples = [];

function drawRipple(x, y) {
  ripples.push({ x: x, y: y, radius: 0, opacity: 1 });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ripples.forEach((ripple, index) => {
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = `rgba(44, 44, 71, ${ripple.opacity})`;
    ctx.stroke();

    ripple.radius += 2;
    ripple.opacity -= 0.005;

    if (ripple.opacity <= 0) {
      ripples.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (event) => {
  drawRipple(event.clientX, event.clientY);
});

animate();
