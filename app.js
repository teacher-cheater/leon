const popupBg = document.querySelector('.popup__body');
const popup = document.querySelector('.popup'); //окно
const closePopupButton = document.querySelector('.close-popup'); //Кнопка closed.
const styleWheel = document.querySelectorAll(".wheel-like")
const btnCircleActive = document.querySelector('.block-circle__btn')

btnCircleActive.addEventListener('click', () => {
  styleWheel.forEach((elem) => elem.classList.add('active'))
  setTimeout(() => {
    styleWheel.forEach((elem) => elem.classList.remove('active'))
    showPopup()
  }, 2900)
})


function showPopup() {
  popupBg.classList.add('open');
  popup.classList.add('open');
};

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('open');
  popup.classList.remove('open');

});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('open');
    popup.classList.remove('open');

  }
});

//библиотека, движение за мышью
window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 5.00,
    scaleMobile: 1.00,
    birdSize: 0.50,
    wingSpan: 25.00,
    separation: 100.00,
    alignment: 100.00,
    cohesion: 100.00,
    quantity: 3.50,
    backgroundAlpha: 0.00
  })
})