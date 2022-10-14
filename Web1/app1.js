const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector('#greeting');

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

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  //below two are same
  greeting.innerText = "Hello " + username;
  greeting.innerText = 'Hello ${username}'';
  greeting.classList.remove("hidden");
}

function handleLinkClick(info) {
  console.log(info);
  event.preventDefault();
  alert("click!!!");
}

//loginButton.addEventListener("click", onLoginClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
