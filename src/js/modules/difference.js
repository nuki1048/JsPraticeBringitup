export default class Difference {
  constructor(officer, items) {
    try {
      this.officer = document.querySelector(officer);
      this.officerCards = this.officer.querySelectorAll(items);
      this.items = items;
      this.counter = 0;
    } catch (error) { /* empty */ }
  }

  bindTriggers() {
    this.officer.querySelector('.plus').addEventListener('click', () => {
      if (this.counter !== this.officerCards.length - 2) {
        this.officerCards[this.counter].classList.add('animated', 'fadeInDown');
        this.officerCards[this.counter].style.display = 'flex';
        // eslint-disable-next-line no-plusplus
        this.counter++;
      } else {
        this.officerCards[this.counter].style.display = 'flex';
        this.officerCards[this.counter].classList.add('animated', 'fadeInDown');
        this.officerCards[this.officerCards.length - 1].style.display = 'none';
      }
    });
  }

  hideItems() {
    this.officerCards.forEach((item, i, arr) => {
      if (i === arr.length - 1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  init() {
    try {
      this.hideItems();
      this.bindTriggers();
    } catch (error) { /* empty */ }
  }
}
