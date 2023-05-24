const button = document.querySelector(".btn");
const videoBox = document.querySelector("#video-container");
const body = document.querySelector("body");
const close = document.querySelector(".close-icon");

console.log(button);

button.addEventListener("click", () => {
  videoBox.classList.remove("active");
});
close.addEventListener("click", () => {
  videoBox.classList.add("active");
});
