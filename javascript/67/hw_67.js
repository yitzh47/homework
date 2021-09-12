(function () {
    'use strict';
  
    const messageBoxButton = get('messageBoxButton');
    const newTextBut = get('newTextBut');
    const close = get('close');
    const messageBox = get('messageBox');
    const text = get('text');
    const newText = get('newText');
  
    function get(id) {
      return document.getElementById(id);
    }
  
    messageBoxButton.addEventListener('click', () => {
        messageBox.style.display = 'block';
    });
  
    newTextBut.addEventListener('click', () => {

      text.innerText = newText.value;
      newText.value = '';
      
     
    });
  
    close.addEventListener('click', () => {
        messageBox.style.display = 'none';
        messageBox.setInnerText('');

    });
  
 
  }());