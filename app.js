const popupBg = document.querySelector('.popup__body');
const popup = document.querySelector('.popup'); //окно
const closePopupButton = document.querySelector('.close-popup'); //Кнопка closed.
const styleWheel = document.querySelector(".wheel-like")
const btnCircleActive = document.querySelector('.block-circle__btn')

btnCircleActive.addEventListener('click', () => {
  styleWheel.classList.add('active')
  setTimeout(() => {
    styleWheel.classList.remove('active')
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



