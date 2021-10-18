(function() {
    'use strict';

    const fileInput = $('#fileInput');
    const fileInputButton = $('#fileInputButton');
    const fileShow = $('<div id="fileShow"></div>');
    const buffer = $('<img src="https://c.tenor.com/K2UGDd4acJUAAAAM/load-loading.gif">');
    
    
    $('body').append(fileShow)
        .append(buffer);

    buffer.hide();

    fileInputButton.click(function(){
        buffer.show();

        setTimeout(function(){
            buffer.hide();
            fetch(fileInput.val())
            .then(r => {
                if (!r.ok) {
                    pcs.messageBox.show(`${r.status} ${r.statusText}`);
                    //window.err = `${r.status} ${r.statusText}`;
                }
                else{
                    return r.text();
                }
             })
            .then(t =>fileShow.append(t))
            .catch(err => console.log('OOPS', err));
        }, 1500);
        
        
    });

}());