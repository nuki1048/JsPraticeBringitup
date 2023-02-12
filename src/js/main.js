import MainSlider from './modules/slider/slider-main';
import ShowBlock from './modules/showBlock';
import VideoPlayer from './modules/playVideo';
// import Accordion from './modules/accordion';
import MiniSlider from './modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
  new MainSlider({ btns: '.next', container: '.page' }).render();

  //  new Slider('.moduleapp', '.next').render();
  new ShowBlock('.hanson', '.modules').render();
  new VideoPlayer('.showup .play', '.overlay').init();
  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    animate: true,
    activeClass: 'card-active',

  });
  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoPlay: true,

  });
  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',

  });
  showUpSlider.init();
  modulesSlider.init();
  feedSlider.init();
//   new Accordion('.module__info_show','.module__info-book').in
});
