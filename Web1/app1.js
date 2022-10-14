const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

function onLoginClick() {
  const username = loginInput.value
  console.log(username);
/*
  if (username === "") {
    alert("Please write your name");
  }
  else if (username.length >= 15) {
    alert("Your name is too long")
  }
*/
}

function onLoginSubmit() {
  const username = loginInput.value
  console.log(username);
}
//loginButton.addEventListener("click", onLoginClick);
loginForm.addEventListener("submit", onLoginSubmit);
