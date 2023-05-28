console.log("hello");

let hamburger = false;

function hamburgerOpen() {
  let hamburgerNav = document.getElementById("burger");

  if (hamburger == false) {
    console.log(hamburger);
    hamburgerNav.style.display = "grid";
    hamburger = true;
  } else {
    console.log(hamburger);
    hamburgerNav.style.display = "none";
    hamburger = false;
  }
}

// let time = new Date();
// console.log(time);

// let njajal = document.getElementById("cobaaja");
// njajal.innerHTML = "njajal kenek po ra...";

// let naruto = 18;

// if (naruto <= 19) {
//   console.log("bener");
// } else {
//   console.log("masuk");
// }
