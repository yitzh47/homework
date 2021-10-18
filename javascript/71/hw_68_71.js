window.pcs = window.pcs || {};
window.pcs.messageBox = (function () {
    'use strict';

    const offsetIncrement = 30;
    let leftOffset = -150;
    let topOffset = -80;
    const width = 300;
    const height = 160;
    let nextZIndex = 1;

    const modalDiv = document.createElement('div');
    modalDiv.style.position = 'fixed';
    modalDiv.style.top = '0';
    modalDiv.style.left = '0';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.backgroundColor = 'lightgray';
    modalDiv.style.opacity = '.5';
    modalDiv.style.display = 'none';
    document.body.appendChild(modalDiv);

    function showMessageBox(msg, modal = false, buttons = ['ok'], callback = null) {
        const messageBoxDiv = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageBoxDiv.appendChild(span);


        const buttonsDiv = document.createElement('div');

        for (let i = 0; i < buttons.length; i++) {
            const iButton = document.createElement('button');
            iButton.innerText = buttons[i];
            setCallback(i, iButton);
            buttonsDiv.appendChild(iButton);
            messageBoxDiv.appendChild(buttonsDiv);
        }

        function setCallback(spotInArray, buttonForCallback){

            buttonForCallback.addEventListener('click', () =>{
                if (!callback){
                    console.log('pressed ' + buttons[spotInArray]);
                }
                else if (typeof callback === 'function'){
                    callback(buttonForCallback.innerText);
                }
                else if (typeof callback === 'object'){
                    callback[spotInArray](buttonForCallback);
                }
                messageBoxDiv.remove();
                modalDiv.style.display = 'none'; 
            });         
        }

        document.body.appendChild(messageBoxDiv);

        messageBoxDiv.style.backgroundColor = 'lightblue';
        messageBoxDiv.style.padding = '1em';
        messageBoxDiv.style.paddingBottom = '36px';
        messageBoxDiv.style.boxSizing = 'border-box';
        messageBoxDiv.style.width = `${width}px`;
        messageBoxDiv.style.height = `${height}px`;
        messageBoxDiv.style.position = 'absolute';
        messageBoxDiv.style.top = '50%';
        messageBoxDiv.style.left = '50%';
        messageBoxDiv.style.marginTop = `${topOffset}px`;
        messageBoxDiv.style.marginLeft = `${leftOffset}px`;
        messageBoxDiv.style.border = '1px solid black';

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttonsDiv.style.position = 'absolute';
        buttonsDiv.style.bottom = '8px';
        buttonsDiv.style.left = 0;
        buttonsDiv.style.textAlign = 'center';
        buttonsDiv.style.width = '100%';

        messageBoxDiv.className = 'messageBox';

        if (modal) {
            modalDiv.style.display = 'block';
            modalDiv.style.zIndex = nextZIndex++;
        }
        messageBoxDiv.style.zIndex = nextZIndex++;

        // okButton.addEventListener('click', () => {
        //     //messageBoxDiv.style.display = 'none';
        //     messageBoxDiv.remove();

        //     modalDiv.style.display = 'none';
        // });

        messageBoxDiv.addEventListener('click', () => {
            messageBoxDiv.style.zIndex = nextZIndex++;
        });

        topOffset += offsetIncrement;
        leftOffset += offsetIncrement;
        

        if (parseFloat(getComputedStyle(messageBoxDiv).top) + topOffset + height > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }

        if (parseFloat(getComputedStyle(messageBoxDiv).left) + leftOffset + width > window.innerWidth) {
            leftOffset -= window.innerWidth - width;
        }
    }

    return {
        show: showMessageBox
    };
}());
