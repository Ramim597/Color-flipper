let btn = document.getElementById("change-color-btn");
let bgColorName = document.querySelector('#bg-colors-name');

btn.addEventListener("click", () => {
  let colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#1ABC9C",
    "#E74C3C",
    "#2ECC71",
    "#3498DB",
    "#E67E22",
    "#34495E",
    "#16A085",
    "#8E44AD",
    "#C0392B",
    "#27AE60",
    "#2980B9",
    "#D35400",
    "#7F8C8D",
    "#2C3E50",
    "#F39C12",
  ];
  let random = Math.random() * colors.length;
  let randomColors = Math.floor(random);
  let selectedColor = colors[randomColors];
  document.body.style.background = selectedColor;
  bgColorName.textContent = selectedColor;
});
