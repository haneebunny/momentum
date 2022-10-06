const moodUl = document.querySelector(".mood-ul");
const moodImg = document.querySelector("#mood-img");

const todayMoods = ["뒹굴뒹굴", "스트레스", "라라라라"];

todayMoods.map((mood) => {
  const todayMood = document.createElement("div");
  todayMood.className = "mood";
  todayMood.innerText = mood;
  moodUl.appendChild(todayMood);
});

const moods = document.querySelectorAll(".mood");

const onClickMood = (event) => {
  todayMoods.map((image) => {
    switch (event.target.innerText) {
      case image:
        moodImg.src = `img/${image}.gif`;
        return;

      default:
        return;
    }
  });
};

moods.forEach((mood) => mood.addEventListener("click", onClickMood));
