let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
let taps = document.querySelectorAll(".nav-bar h3");
let icons = document.querySelectorAll("svg:not(.arr)");
let over = document.querySelector(".over");
let remin = document.querySelector(".reminder");
let quesBoxes = document.querySelectorAll(".ques-box");

let smell = document.querySelector(".smell-box");
let lastUpdate = document.querySelector(".statistics > p span");
let covid = document.querySelectorAll(".statistics article h2 ");
let articles = document.querySelectorAll(".statistics article");
let colors = [
  "#4bcb64",
  "#2196f3",
  "#d92626",
  "#4bcb64",
  "#2196f3",
  "#d92626",
  "#4bcb64",
  "#2196f3",
  "#d92626",
];
articles.forEach((ele, i) => {
  ele.style.backgroundColor = colors[i];
});
// create arrow button in nav-bar
arrow.onclick = () => {
  nav.classList.toggle("active");
};
//============================================\\
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
//============================================\\
let riArr = document.querySelectorAll(".right-arrow");

let anses = document.querySelector(".anses");
let temp = document.querySelector(".tem-num");
let tempAlert = document.querySelector(".tem-num + div");
for (let i = 0; i < riArr.length; i++) {
  riArr[i].onclick = function () {
    if (temp.value.trim() == "") {
      tempAlert.style.display = "block";
    } else {
      tempAlert.style.display = "none";
      quesBoxes[i].style.display = "none";
      if (quesBoxes[i].classList.contains("smell-box") === true) {
        anses.style.display = "grid";
      }
      console.log(quesBoxes[i]);
      quesBoxes[i + 1].style.display = "flex";
    }
  };
}

// let aft = window.getComputedStyle(document.querySelector(".ques-box"), ":after");
// aft.onclick =function(){
//   console.log("clicked")
// }
//============================================\\
fetch("https://disease.sh/v3/covid-19/all")
  .then((res) => res.json())
  .then((data) => {
    covid[0].innerHTML = data.cases;
    covid[1].innerHTML = data.recovered;
    covid[2].innerHTML = data.deaths;
    covid[3].innerHTML = data.todayCases;
    covid[4].innerHTML = data.todayRecovered;
    covid[5].innerHTML = data.todayDeaths;
    covid[6].innerHTML = (data.casesPerOneMillion / 10000).toFixed(3) + "%";
    covid[7].innerHTML = (data.recoveredPerOneMillion / 10000).toFixed(3) + "%";
    covid[8].innerHTML = (data.deathsPerOneMillion / 10000).toFixed(3) + "%";
    lastUpdate.innerHTML = Date(data.updated);
    console.log(data);
  });
