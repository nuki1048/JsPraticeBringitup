import Slider from '../slider';

export default class MiniSlider extends Slider {
  // eslint-disable-next-line no-useless-constructor
  constructor(container, next, prev, activeClass, animate, autoPlay, element) {
    super(container, next, prev, activeClass, animate, autoPlay, element);
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
    this.moveButtons();
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
      this.moveButtons();
    });
  }

  moveButtons() {
    Array.from(this.slides).forEach((item, i) => {
      if (item.tagName === 'BUTTON') {
        this.container.appendChild(this.slides[i]);
      }
    });
    //  This is not my decision, I don't know how to do it differently
  }

  animationSlides() {
    let anim = setInterval(() => {
      this.nextSlide();
    }, 5000);
    this.container.addEventListener('mouseenter', () => {
      clearInterval(anim);
    });
    this.container.addEventListener('mouseleave', () => {
      anim = setInterval(() => {
        this.nextSlide();
      }, 5000);
    });
  }

  decorizeSlides() {
    Array.from(this.slides).forEach((item) => {
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

    if (this.autoPlay) {
      this.animationSlides();
    }
  }
}
