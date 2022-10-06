const count = document.querySelector("#count");
const until = document.querySelector("#until");
const untilInput = document.querySelector("#until-input");
const countForm = document.querySelector("#count-form");

const getUntil = () => {
  const localUntil = localStorage.getItem("until");
  return localUntil;
};

until.innerText = getUntil() || "디데이까지";
untilInput.defaultValue = getUntil() || "디데이까지";

const onClickUntil = () => {
  until.classList.add(HIDDEN_CLASS);

  untilInput.classList.remove(HIDDEN_CLASS);
};

until.addEventListener("click", onClickUntil);

const handleUntilSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("until", untilInput.value);
  untilInput.value = "";
  if (getUntil()) {
    until.innerText = `${getUntil()}`;
  }
  untilInput.classList.add(HIDDEN_CLASS);
  until.classList.remove(HIDDEN_CLASS);
};

countForm.addEventListener("submit", handleUntilSubmit);

// count를 가져온 후에 innerText를 변경할 것임
const getCount = () => {
  const christmas = new Date(2022, 11, 31);
  const today = new Date();

  const gap = christmas - today;

  // 1000밀리초(1초)
  const dDay = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const dHours = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const dMinutes = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const dSeconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  count.innerText = `${dDay}일 ${dHours}시 ${dMinutes}분 ${dSeconds}초`;
};

getCount();
setInterval(getCount, 1000);
