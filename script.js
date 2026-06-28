const modalContainer = document.getElementById("modalContainer");
const readMorebtn = document.getElementById("readMorebtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const mobNavLinkContainer = document.getElementById("mobNavLinkContainer");
const menuIcon = document.getElementById("menuIcon");
const closeNavBtn = document.getElementById("closeNavBtn");

readMorebtn.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

menuIcon.addEventListener("click", () => {
  mobNavLinkContainer.classList.remove("hidden");
  mobNavLinkContainer.classList.add("flex");
  document.body.classList.add("overflow-hidden");
});

closeNavBtn.addEventListener("click", () => {
  mobNavLinkContainer.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
