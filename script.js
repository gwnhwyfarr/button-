const burger = document.querySelector('[data-burger]');

let isToggleOpen = false;
let delayTime;

burger.addEventListener('click', () => {
  clearTimeout(delayTime);
  if (isToggleOpen) {
    burger.classList.remove('rotate');
    delayTime = setTimeout(() => {
      burger.classList.remove('open');
    }, 10);

    isToggleOpen = false;
  } else {
    burger.classList.add('open');
    delayTime = setTimeout(() => {
      burger.classList.add('rotate');
    }, 100);

    isToggleOpen = true;
  }
});
