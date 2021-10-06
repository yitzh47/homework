window.messageBox = (function (objArr) {
    'use strict';
  
    const messagePopUpButton = get('messagePopUpButton');
    const textInputButton = get('textInputButton');
    const close = get('close');
    const messagePopUp = get('messagePopUp');
    const text = get('text');
    const textInput = get('textInput');
    const buttons = get('buttons');


  
    function get(id) {
      return document.getElementById(id);
    }

    function textChange(txt){
      text.innerText = txt;
      textInput.value = '';
      return "text changed to " + txt;
    }

    const arrInput = document.createElement('input');
    arrInput.placeholder = 'Button Array';
    const arrButton = document.createElement('button');
    const arrCallback = document.createElement('input');
    arrCallback.placeholder = 'Callback Array';


    arrButton.innerText = 'Submit Array & Callbacks';

    arrButton.addEventListener('click', () => {

     const arrOfInputButton = arrInput.value.split(",");
     const arrOfCallbackInput = arrCallback.value.split(",");
     console.log(typeof(arrOfInputButton));
     console.log(typeof(arrOfCallbackInput));

     for(let i = 0; i < arrOfInputButton.length; i++){
        let btn = arrOfInputButton[i];
        let cllbck = new Function("return "+arrOfCallbackInput[i])();
        const new1 = document.createElement('button');
        new1.innerText = btn;
        new1.id = btn;
        new1.addEventListener('click', () => {
          cllbck();
        });

        buttons.appendChild(new1);
      }
    });


    buttons.style.position = 'absolute';
    buttons.style.bottom = '5px';
    buttons.style.left = '69px';

    buttons.appendChild(arrInput);
    buttons.appendChild(arrButton);
    buttons.appendChild(arrCallback);
    messagePopUp.appendChild(buttons);
    document.body.appendChild(messagePopUp);
  
    messagePopUpButton.addEventListener('click', () => {
      messagePopUp.style.display = 'block';
    });
  
    textInputButton.addEventListener('click', () => {
      textChange(textInput.value);
    });

    textInput.addEventListener('keyup', (event) => {
      console.log(event);
      if (event.key === "Enter") {
        console.log('h');
        textInputButton.click();
    }
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