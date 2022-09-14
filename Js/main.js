let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
// let nav = document.querySelector('.nav-bar')
// let nav = document.querySelector('.nav-bar')

arrow.onclick = () => {
  nav.classList.toggle("active");
};
