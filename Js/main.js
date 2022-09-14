let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
let taps = document.querySelectorAll(".nav-bar h3")
let icons = document.querySelectorAll("svg:not(.arr)")
// let nav = document.querySelector('.nav-bar')
// let nav = document.querySelector('.nav-bar')
// create arrow button in nav-bar
arrow.onclick = () => {
  nav.classList.toggle("active");
  taps.forEach(ele => {
    if(nav.classList.contains("active")=== true  ){
      ele.style.display ="none";
       icons.forEach((ico) => {
        ico.style.marginBottom = "20px"
       });
    }else {
      ele.style.display ="block"
    }
  });
 
  
};


