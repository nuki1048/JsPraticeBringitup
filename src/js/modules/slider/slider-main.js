import Slider from './slider';

export default class MainSlider extends Slider {
  // eslint-disable-next-line no-useless-constructor
  constructor(btns, nextModule, prevModule) {
    super(btns, nextModule, prevModule);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    Array.from(this.slides).forEach((slide) => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  pluseSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {
    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        this.pluseSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.path[1].tagName === 'A') {
          this.slideIndex = 1;
          this.showSlides(this.slideIndex);
        }
      });
    });
    try {
      this.prevModule.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.pluseSlides(-1);
        });
      });
      this.nextModule.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.pluseSlides(1);
        });
      });
    } catch (error) { /* empty */ }
  }

  render() {
    if (this.container) {
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}
