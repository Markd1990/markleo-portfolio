const modalContainer = document.getElementById("modalContainer");
const readMorebtn = document.getElementById("readMorebtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

readMorebtn.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
