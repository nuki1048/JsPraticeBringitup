import Slider from './modules/slider';
import ShowBlock from './modules/showBlock';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
  new Slider('.page', '.next').render();
  //   new Slider('.moduleapp', '.next').render();
  new ShowBlock('.hanson', '.modules').render();
  new VideoPlayer('.showup .play', '.overlay').init();
});
