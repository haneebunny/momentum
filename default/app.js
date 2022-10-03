const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
console.log(loginButton);
function onClickLoginBtn(event) {
  event.preventDefault();
  console.dir(loginInput.value); // 자세히 뜯어보자~ 안에 value 있어
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function handleLinkClick(event) {
  alert("clicked");

  console.log(dddd);
  // console.log(event);
}

link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onClickLoginBtn);
} else {
  paintGreetings(savedUsername);
}
