class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = 'This is a message';

    document.querySelector('#main-container').append(messageElement);
  }
}

module.exports = MessageView;