const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onClickLoginBtn() {
  console.dir(loginInput.value); // 자세히 뜯어보자~ 안에 value 있어
  const username = loginInput.value;
}
loginButton.addEventListener("click", onClickLoginBtn);
