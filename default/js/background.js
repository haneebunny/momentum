const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

document.body.style.background = `url('img/background/${chosenImage}') no-repeat`;
document.body.style.backgroundSize = "100vw 100vh";

// console.log(document.body.style);

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
