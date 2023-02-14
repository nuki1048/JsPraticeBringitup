export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoPlay,
    nextBtnModule = null,
    prevBtnModule = null,
  } = {}) {
    this.container = document.querySelector(container);
    try { this.slides = this.container.children; } catch (error) { /* empty */ }
    try {
      this.nextModule = document.querySelectorAll(nextBtnModule);
      this.prevModule = document.querySelectorAll(prevBtnModule);
    } catch (e) { /* empty */ }
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoPlay = autoPlay;
  }
}
