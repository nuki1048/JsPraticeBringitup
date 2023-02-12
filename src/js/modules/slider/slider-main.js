import Slider from '../slider';

export default class MainSlider extends Slider {
  // eslint-disable-next-line no-useless-constructor
  constructor(btns) {
    super(btns);
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

  render() {
    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        this.pluseSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}
