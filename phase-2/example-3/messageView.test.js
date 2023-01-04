/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays that message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = 'This is a test message';

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message');

  });

   it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // shows then hides the message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Makes sure message element is not on the page
    expect(document.querySelector('#message')).toBeNull();
  });
});