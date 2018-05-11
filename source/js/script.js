// Оставлю комментарии - что неясно пиши
// Создай класс и добавь всем кнопкам на которых ты хочешь чтобы показывалось модальное окно в пиши в строку 24
// Переменные переименнуй как нравиться)
var modalOpen = document.querySelectorAll(".js-modal-open"), i; // Выбираем класс который надо добавить ВСЕМ кнопкам - i создали счетчик
var mainModal = document.querySelector(".main-modal"); // Выбираем Модально окно которое будет всплывать

// Проходим через цикл(document.querySelectorAll выберет все элементы и создаст массив) по всем кнопкам
for (i = 0; i < modalOpen.length; ++i) {
modalOpen[i].addEventListener("click", function (e) {
e.preventDefault(e);
mainModal.classList.add("js-modal-show"); // добавь свой класс который добавляет display: block - модальному окну
})
}

// Закрытие окна по кнопке ESC
window.addEventListener("keydown", function (e) {
if (e.keyCode == 27) { // цифра 27 - это на кливиатуре кнопка ESC
if (mainModal.classList.contains("js-modal-show")) { // Проверяет есть ли класс у блока.
mainModal.classList.remove("js-modal-show"); // Удаляет класс если такой есть.
}
}
});
