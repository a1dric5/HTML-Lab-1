let heading = document.querySelector("h1");
let hideButton = document.getElementById("hide-button");
let showButton = document.getElementById("show-button");

hideButton.addEventListener("click", () => {
  heading.style.display = "none";
});

showButton.addEventListener("click", () => {
  heading.style.display = "block";
});
