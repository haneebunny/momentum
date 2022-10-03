const maxNumber = document.querySelector("#maxNumber");
const guessNumber = document.querySelector("#guessNumber");
const form = document.querySelector("#form");
const phrases = document.querySelector("#phrases");
const winOrLose = document.querySelector("#winOrLose");

console.dir(guessNumber);
function onClickPlayBtn(event) {
  event.preventDefault();
  const guessNum = guessNumber.value;
  const machineNum = Math.ceil((Math.random() * 100) % maxNumber.value);
  phrases.innerHTML = `You chose: ${guessNum}, the machine chose ${machineNum}`;

  console.log(guessNum, machineNum);
  console.log(Number(guessNum) === Number(machineNum));
  if (Number(guessNum) === Number(machineNum)) {
    winOrLose.innerHTML = `WIN!`;
  } else {
    winOrLose.innerHTML = `LOSE!`;
  }
}

form.addEventListener("submit", onClickPlayBtn);
console.log(maxNumber);
