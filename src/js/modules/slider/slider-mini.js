import Slider from '../slider';

export default class MiniSlider extends Slider {
  // eslint-disable-next-line no-useless-constructor
  constructor(container, next, prev, activeClass, animate, autoPlay) {
    super(container, next, prev, activeClass, animate, autoPlay);
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    });
    this.prev.addEventListener('click', () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
    });
  }

  decorizeSlides() {
    const newArr = Array.from(this.slides).filter((element) => element.getElementsByTagName('div'));
    console.log(newArr);
    newArr.forEach((item) => {
      item.classList.remove(this.activeClass);

      if (this.animate) {
        item.querySelector('.card__title').style.opacity = '0.4';
        item.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  init() {
    this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
   `;
    this.bindTriggers();
    this.decorizeSlides();
  }
}
