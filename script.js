const imageFolder = "images"; // 图片文件夹路径
const imageCount = 1;        // 修改为你的照片数量

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}/${i}.png`; // 图片命名规则：1.jpg, 2.jpg ...
  img.className = "photo";
  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = Math.random() * window.innerHeight + "px";
  img.style.animationDuration = (10 + Math.random() * 20) + "s";
  document.body.appendChild(img);
}
