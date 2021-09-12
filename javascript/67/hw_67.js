window.messageBox = (function (objArr) {
    'use strict';
  
    const messagePopUpButton = get('messagePopUpButton');
    const textInputButton = get('textInputButton');
    const close = get('close');
    const messagePopUp = get('messagePopUp');
    const text = get('text');
    const textInput = get('textInput');
  
    function get(id) {
      return document.getElementById(id);
    }

    function textChange(txt){
      text.innerText = txt;
      textInput.value = '';
      return "text changed to " + txt;
    }
  
    messagePopUpButton.addEventListener('click', () => {
      messagePopUp.style.display = 'block';
    });
  
    textInputButton.addEventListener('click', () => {
      textChange(textInput.value);
    });
  
    close.addEventListener('click', () => {
      messagePopUp.style.display = 'none';
      textChange('');

    });

    objArr.show = function show(txt){
      textChange(txt);
    };

    return objArr;
  
 
  }(window.messageBox || {}));