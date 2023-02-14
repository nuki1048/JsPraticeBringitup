export default class Forms {
  constructor(formsSelector, inputs) {
    this.formsSelector = document.querySelectorAll(formsSelector);
    this.inputs = document.querySelectorAll(inputs);
    this.message = {
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
      loading: 'Loading...',
      sucsess: 'Thanks you, we will contact you soon!',
      failure: 'Oops, something went wrong',

    };
  }

  clearInputs() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkMailInput() {
    const textInputs = document.querySelectorAll('[name="email"]');
    textInputs.forEach((input) => {
      input.addEventListener('keypress', (e) => {
        if (e.key.match(/[а-яё]/)) {
          e.preventDefault();
        }
        input.addEventListener('input', () => {
          input.value = input.value.replace(/[а-яё]/, '');
        });
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this, consistent-return
  async postData(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: data,
      });
      return await res.text();
    } catch (error) { /* empty */ }
  }

  init() {
    this.checkMailInput();
    this.formsSelector.forEach((item) => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.parentNode.appendChild(statusMessage);
        item.classList.add('animated', 'fadeOut');
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);

        const statusImg = document.createElement('img');
        statusImg.setAttribute('src', this.message.ok);
        statusImg.classList.add('animated', 'fadeInUp');
        statusMessage.appendChild(statusImg);

        const textMessage = document.createElement('div');
        textMessage.textContent = this.message.loading;
        statusMessage.appendChild(textMessage);

        const formData = new FormData(item);
        this.postData('assets/question.php', formData)
          .then(() => {
            statusImg.setAttribute('src', this.message.ok);
            textMessage.textContent = this.message.sucsess;
          })
          .catch(() => {
            statusImg.setAttribute('src', this.message.fail);
            textMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
              item.style.display = 'block';
              item.classList.remove('fadeOut');
              item.classList.add('fadeInUp');
            }, 5000);
          });
      });
    });
  }
}
