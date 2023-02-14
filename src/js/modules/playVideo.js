/* eslint-disable no-undef */
/* eslint-disable quote-props */
export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
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
      playerVars: { 'autoplay': 1, 'controls': 1 },
      events: {
        'onStateChange': this.onPlayerStateChange,
      },
    });

    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.style.cssText = `
          opacity: 1;
          filter: none;
          `;
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (error) { /* empty */ }
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 === 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (error) { /* empty */ }
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }

  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
      this.player.destroy();
    });
  }

  init() {
    this.bindTriggers();
    this.bindClose();
  }
}
