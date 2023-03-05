// STEPS

const stepOne = document.querySelector(".step1");
const stepTwo = document.querySelector(".step2");
const stepThree = document.querySelector(".step3");
const stepFour = document.querySelector(".step4");

//INPUT FIELDS

const userName = document.querySelector(".inputName");
const userEmail = document.querySelector(".inputEmail");
const userPhone = document.querySelector(".inputPhone");

//BUTTONS

const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");

stepOne.addEventListener("click", () => {
  console.log(`One`);
});

stepTwo.addEventListener("click", () => {
  console.log(`Two`);
});
stepThree.addEventListener("click", () => {
  console.log(`Three`);
});
stepFour.addEventListener("click", () => {
  console.log(`Four`);
});
