import MainSlider from './modules/slider/slider-main';
import ShowBlock from './modules/showBlock';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  new MainSlider({ btns: '.next', container: '.page' }).render();

  const mainForm = new Forms('.form', 'input');
  new ShowBlock('.hanson', '.modules').render();
  new VideoPlayer('.showup .play', '.overlay').init();
  const oldDifferenceBlock = new Difference('.officerold', '.officer__card-item');
  const newDifferenceBlock = new Difference('.officernew', '.officer__card-item');
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
  oldDifferenceBlock.init();
  newDifferenceBlock.init();
  mainForm.init();
//   new Accordion('.module__info_show','.module__info-book').in
});
