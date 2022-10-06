const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const button = document.querySelector("body button");

const div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100vh";

const paintColor = () => {
  // 랜덤으로 색 두개 만들기
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  div.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
  div.appendChild(button);
  document.body.prepend(div);

  console.log(div);
};

button.addEventListener("click", paintColor);
