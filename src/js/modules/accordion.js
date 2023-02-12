export default class Accordion {
  constructor(triggger, element) {
    this.btn = document.querySelector(triggger);
    this.element = document.querySelector(element);
  }

  init() {
    this.btn.addEventListener('click', () => {
      this.element.classList.toggle('book__active');
    });
  }
}
