let root = document.documentElement;
let button = document.querySelector(".button");

button.addEventListener('click', (event) => {
  event.preventDefault();
  root.classList.toggle('dark-mode');
})