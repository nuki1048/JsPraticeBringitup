/* eslint-disable no-undef */
/* eslint-disable quote-props */
export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  createPlayer(url) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      playerVars: { 'autoplay': 1, 'controls': 0 },
    });

    this.overlay.style.display = 'flex';
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-url');

        this.createPlayer(path);
      });
    });
  }

  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      document.querySelector('iframe').remove();
    });
  }

  init() {
    this.bindTriggers();
    this.bindClose();
  }
}
