//------------10.2 Clone Coding----------------------------
/*
const amIFat = null;
let something;
console.log(something, amIFat);

const daysOfWeek = [1, 2, 3, true, false, undefined, "doyeon"];
//Get Item form Array
console.log(daysOfWeek);
//Add one more to the Array
daysOfWeek.push("1234");
console.log(daysOfWeek);

const player = {
    name: "doyeon",
    points: 100,
    fat: "yes",
}
console.log(player);

player.name = player.name + " is cool";
player.points = player.points + 15;
console.log(player);

const daysOfWeek = [];
function Basic(i, n) {
  while (i < n) {
    daysOfWeek.push(i);
    i += 1;
    console.log(daysOfWeek);
  }
}
Basic(1, 10);
*/

//----------10/3 Clone Coding-------------------------------
/*
const title = document.getElementById("title");
title.innerText = "Got You";
console.console(title);
*/

//---------10.4 Clone Coding-------------------------------
/*
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  console.log("title was clicked");
}
console.dir(title); //element의 내용물을 볼 수 있다.
title.addEventListener("click", handleTitleClick);

const title = document.querySelector("div.hello:first-child h1");
function handleMouseIn() {
  title.innerText = "Welcome";
}
function handleMouseOut() {
  title.innerText = "Bye";
}
function handleWindowResize() {
  document.body.style.background = "tomato";
}
function handleWindowCopy() {
  alert("Copy Paster");
}
function handleWindowOffline() {
  alert("Connect WiFi");
}
console.dir(title);
title.onmouseenter = handleMouseIn;
title.addEventListener("mouseleave", handleMouseOut);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);

//이 부분 CSS를 활용해서 간단하게 표현해보기
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "green";
  } else {
    newColor = "blue";
  }
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);

const title = document.querySelector("div h1"); //h1에 있던 hello 클래스와 충돌이 일어났었다.
function handleTitleClick() {
  const clickedClass = "active";
  /*
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }

title.classList.toggle(clickedClass);
}
title.addEventListener("click", handleTitleClick);
*/
