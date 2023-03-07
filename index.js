//test
//space
//space

//
// CONSTANTS
//

const sideNumbers = document.querySelectorAll(".sideNumber");
const contentPages = document.querySelectorAll(".contentPage");
const pageOne = document.querySelector(".personalInfo");
const pageTwo = document.querySelector(".planSelect");
const pageThree = document.querySelector(".addOns");
const pageFour = document.querySelector(".finishingUp");

//
// BUTTONS
//

const firstBtn = document.querySelector(".firstBtn");
const secondBtn = document.querySelector(".secondBtn");
const thirdBtn = document.querySelector(".thirdBtn");
const forthBtn = document.querySelector(".forthBtn");

const goBackTwo = document.querySelector(".goBackPage2");
const goBackThree = document.querySelector(".goBackPage3");
const goBackFour = document.querySelector(".goBackPage4");

//
// VARIABLES
//

let currentPage = 0;

//
//SCRIPT
//

sideNumbers.forEach((el) => {
  el.addEventListener("click", function () {
    removeBtnActive();
    sideNumbers.forEach((i) => {
      this.classList.add("numberActive");
      if (this === sideNumbers[0]) {
        currentPage = 0;
        changePage();
      } else if (this === sideNumbers[1]) {
        currentPage = 1;
        changePage();
      } else if (this === sideNumbers[2]) {
        currentPage = 2;
        changePage();
      } else if (this === sideNumbers[3]) {
        currentPage = 3;
        changePage();
      }
    });
  });
});

// removes the active status from all the numbers

const removeBtnActive = function () {
  sideNumbers.forEach((el) => {
    el.classList.remove("numberActive");
  });
};

// adds the HIDE class to all pages and removes it only from the clicked one

const changePage = function () {
  contentPages.forEach((el) => {
    el.classList.add("hide");
    if (currentPage === 0) {
      pageOne.classList.remove("hide");
    } else if (currentPage === 1) {
      pageTwo.classList.remove("hide");
    } else if (currentPage === 2) {
      pageThree.classList.remove("hide");
    } else if (currentPage === 3) {
      pageFour.classList.remove("hide");
    }
  });
};

firstBtn.addEventListener("click", function () {
  currentPage++;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});

secondBtn.addEventListener("click", function () {
  currentPage++;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});

thirdBtn.addEventListener("click", function () {
  currentPage++;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});

// forthBtn.addEventListener("click", function () {
//   currentPage++;
//   removeBtnActive();
//   changePage();
//   sideNumbers[currentPage].classList.add("numberActive");
// });

goBackTwo.addEventListener("click", function () {
  currentPage--;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});

goBackThree.addEventListener("click", function () {
  currentPage--;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});

goBackFour.addEventListener("click", function () {
  currentPage--;
  removeBtnActive();
  changePage();
  sideNumbers[currentPage].classList.add("numberActive");
});
