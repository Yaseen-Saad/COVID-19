let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
let taps = document.querySelectorAll(".nav-bar h3")
// let nav = document.querySelector('.nav-bar')
// let nav = document.querySelector('.nav-bar')

arrow.onclick = () => {
  nav.classList.toggle("active");
  
};

// how to loop by forEach ?
