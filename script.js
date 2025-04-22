const imageFolder = "images";
const imageCount = 1; // 修改为你实际的图片数量

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}/${i}.png`;
  img.className = "photo";

  // 设置初始位置 & 漂浮速度
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  const speedX = (Math.random() - 0.5) * 0.3; // -0.15 ~ +0.15
  const speedY = (Math.random() - 0.5) * 0.3;

  // 初始位置
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  document.body.appendChild(img);

  // 动画循环（不再旋转）
  function animate() {
    x += speedX;
    y += speedY;

    // 屏幕边缘循环
    if (x > window.innerWidth) x = 0;
    if (x < -200) x = window.innerWidth;
    if (y > window.innerHeight) y = 0;
    if (y < -200) y = window.innerHeight;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    requestAnimationFrame(animate);
  }

  animate();
}
