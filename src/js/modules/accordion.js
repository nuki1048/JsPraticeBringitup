export default class Accordion {
  constructor(trigger) {
    this.btn = document.querySelectorAll(trigger);
  }

  init() {
    this.btn.forEach((item) => {
      item.addEventListener('click', () => {
        const element = item.closest('.module__info-show').nextElementSibling;
        if (element.style.display !== 'block' || !element.style.display) {
          element.style.display = 'block';
          element.classList.add('animated', 'fadeInDown');
        } else {
          element.style.display = 'none';
          element.classList.remove('animated', 'fadeInDown');
        }
      });
    });
  }
}
