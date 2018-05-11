var mainModal = document.querySelector(".main-modal");
var bestItemOrder = document.querySelector(".best-item__order");
var goodsItemOrder = document.querySelector(".goods-item__order-item");
var orderModalButton = document.querySelector(".order-modal__button");


bestItemOrder.addEventListener("click", function(e) {
  e.preventDefault();
  mainModal.classList.add("js-modal-show");
});

goodsItemOrder.addEventListener("click", function(e) {
  e.preventDefault();
  mainModal.classList.add("js-modal-show");
});

orderModalButton.addEventListener("click", function(e) {
  e.preventDefault();
  mainModal.classList.remove("js-modal-show");
});
