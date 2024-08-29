const canvas = document.getElementById('ripple-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ripples = [];
let animationFrameId;
let intervalId;
let isAnimating = false;

function drawRipple(x, y) {
  ripples.push({ x: x, y: y, radius: 0, opacity: 1 });
}

function animate() {
  if (!isAnimating) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ripples.forEach((ripple, index) => {
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = `rgba(44, 68, 84, ${ripple.opacity})`; // 44, 44, 71 used before
    ctx.stroke();

    ripple.radius += 2;
    ripple.opacity -= 0.005;

    if (ripple.opacity <= 0) {
      ripples.splice(index, 1);
    }
  });

  animationFrameId = requestAnimationFrame(animate);
}

// Function to generate ripples at the position of each element
function generateRipples() {
  const elements = document.querySelectorAll('.ripple-element');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;
    drawRipple(x, y);
  });
}

document.addEventListener('mousemove', (event) => {
  drawRipple(event.clientX, event.clientY);
});

document.addEventListener('click', (event) => {
  drawRipple(event.clientX, event.clientY);
});

function startAnimation() {
  if (!isAnimating) {
    isAnimating = true;
    intervalId = setInterval(generateRipples, 1500);
    animate();
  }
}

function stopAnimation() {
  isAnimating = false;
  clearInterval(intervalId);
  cancelAnimationFrame(animationFrameId);
  ripples = [];
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopAnimation();
  } else {
    startAnimation();
  }
});

startAnimation();