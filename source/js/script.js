var modalOpen = document.querySelectorAll(".js-modal-open"), i;
var mainModal = document.querySelector(".main-modal");

for (i = 0; i < modalOpen.length; ++i) {
  modalOpen[i].addEventListener("click", function (e) {
    e.preventDefault(e);
    mainModal.classList.add("js-modal-show");
  })
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
  if (mainModal.classList.contains("js-modal-show")) {
    mainModal.classList.remove("js-modal-show");
    }
  }
});
