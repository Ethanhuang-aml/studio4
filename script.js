const imageFolder = "images";
const imageCount = 1; // 修改为你实际的图片数量

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}/${i}.png`;
  img.className = "photo";

  // 设置初始位置
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  // 每张图片独立的移动速度
  const speedX = (Math.random() - 0.5) * 0.5;
  const speedY = (Math.random() - 0.5) * 0.5;

  img.style.position = "absolute"; // 确保 position 设置了
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  document.body.appendChild(img);

  function animate() {
    x += speedX;
    y += speedY;

    // 屏幕边界检测（从另一边回来）
    if (x > window.innerWidth) x = -200;
    if (x < -200) x = window.innerWidth;
    if (y > window.innerHeight) y = -200;
    if (y < -200) y = window.innerHeight;

    // 实时更新位置
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    requestAnimationFrame(animate);
  }

  animate();
}
