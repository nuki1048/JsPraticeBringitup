export default class Download {
  constructor(trigger) {
    this.btns = document.querySelectorAll(trigger);
    this.path = 'assets/img/mainbg.jpg';
  }

  // eslint-disable-next-line class-methods-use-this
  dowloadItem(path) {
    const element = document.createElement('a');
    element.setAttribute('href', path);
    element.setAttribute('download', 'nice_picture');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.dowloadItem(this.path);
      });
    });
  }
}
