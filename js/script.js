"use strict";

const modal1 = document.querySelector(".modal-1");
const overlay1 = document.querySelector(".overlay-1");
const btnCloseModal1 = document.querySelector(".btn--close-modal-1");
const btnsOpenModal1 = document.querySelectorAll(".btn--show-modal-1");
const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
const btnCloseModal2 = document.querySelector(".btn--close-modal2");
const btnsOpenModal2 = document.querySelectorAll(".btn--show-modal2");
const modal4 = document.querySelector(".modal4");
const overlay4 = document.querySelector(".overlay4");
const btnCloseModal4 = document.querySelector(".btn--close-modal4");
const btnsOpenModal4 = document.querySelectorAll(".btn--show-modal4");

const openModal1 = function (e) {
  e.preventDefault();
  modal1.classList.remove("hidden");
  overlay1.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay1.classList.add("hidden");
};

btnsOpenModal1.forEach((btn) => btn.addEventListener("click", openModal1));

btnCloseModal1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});

const openModal2 = function (e) {
  e.preventDefault();
  modal2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};

btnsOpenModal2.forEach((btn) => btn.addEventListener("click", openModal2));

btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

const openModal4 = function (e) {
  e.preventDefault();
  modal4.classList.remove("hidden");
  overlay4.classList.remove("hidden");
};

const closeModal4 = function () {
  modal4.classList.add("hidden");
  overlay4.classList.add("hidden");
};

btnsOpenModal4.forEach((btn) => btn.addEventListener("click", openModal4));

btnCloseModal4.addEventListener("click", closeModal4);
overlay4.addEventListener("click", closeModal4);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal4();
  }
});
