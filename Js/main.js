let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
let taps = document.querySelectorAll(".nav-bar h3");
let icons = document.querySelectorAll("svg:not(.arr)");
let over = document.querySelector(".over");
let remin = document.querySelector(".reminder");
let quesBoxes = document.querySelectorAll(".ques-box");
console.log(quesBoxes);
let riArr = document.querySelectorAll(".right-arrow");
console.log(riArr);
let inp = document.querySelector(".tem-num");
let anses = document.querySelector(".anses");
let smell = document.querySelector(".smell-box");
console.log(anses);
// let nav = document.querySelector('.nav-bar')
// let nav = document.querySelector('.nav-bar')
// create arrow button in nav-bar
arrow.onclick = () => {
  nav.classList.toggle("active");
  // taps.forEach((ele) => {
  //   if (nav.classList.contains("active") === true) {
  //     ele.style.display = "none";
  //     icons.forEach((ico) => {
  //       ico.style.marginBottom = "20px";
  //     });
  //   } else {
  //     ele.style.display = "block";
  //   }
  // });
};

let rem = setTimeout(function () {
  over.style.display = "block";
  remin.style.display = "flex";
  over.onclick = function () {
    over.style.display = "none";
    remin.style.display = "none";
  };
}, 8000);

// riArr.forEach(aro => {
//   aro.onclick = function(){
//     console.log("clicked")
//     for(let i = 0 ;i <quesBoxes.length; i++){
//       quesBoxes[i].style.display ="none"
//       quesBoxes[i += 1].style.display ="flex"
//     }
//   }
// function showGrid(){
//   anses.style.display ="grid";
// }
// })
for (let i = 0; i < riArr.length; i++) {
  riArr[i].onclick = function () {
    quesBoxes[i].style.display = "none";
    if (quesBoxes[i].classList.contains("smell-box") === true) {
      anses.style.display = "grid";
    }
    console.log(quesBoxes[i]);
    quesBoxes[i + 1].style.display = "flex";
    // if(riArr.slice(-1).pop() === riArr[i]){

    // }
  };
}

// let aft = window.getComputedStyle(document.querySelector(".ques-box"), ":after");
// aft.onclick =function(){
//   console.log("clicked")
// }
