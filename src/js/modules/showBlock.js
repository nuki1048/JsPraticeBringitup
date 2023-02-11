export default class ShowBlock {
  constructor(block, page) {
    this.block = document.querySelector(block);
    this.page = document.querySelector(page);
  }

  render() {
    this.block.classList.add('animated');
    if (this.page.style.display) {
      this.block.classList.remove('fadeOutDown');
      setTimeout(() => {
        this.block.classList.add('fadeInUp');
      }, 3000);
    } else {
      this.block.classList.remove('fadeInUp');
      this.block.classList.add('fadeOutDown');
    }
  }
}
