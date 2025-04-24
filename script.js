const imageFolder = "images";
const imageCount = 16; // 改为你图片数量
const photos = [];

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}/${i}.jpg`;
  img.className = "photo";

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  const speedX = (Math.random() - 0.5) * 0.3;
  const speedY = (Math.random() - 0.5) * 0.3;

  document.body.appendChild(img);
  photos.push({ img, x, y, speedX, speedY });
}

function animateAll() {
  for (const p of photos) {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > window.innerWidth) p.x = -200;
    if (p.x < -200) p.x = window.innerWidth;
    if (p.y > window.innerHeight) p.y = -200;
    if (p.y < -200) p.y = window.innerHeight;

    // 使用 transform 替代 left/top
    p.img.style.transform = `translate(${p.x}px, ${p.y}px)`;
  }

  requestAnimationFrame(animateAll);
}

animateAll();
