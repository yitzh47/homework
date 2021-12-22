/* global pcs */

(function () {
    'use strict';

    const fileInput = $('#fileInput');
    const fileInputButton = $('#fileInputButton');
    const fileShow = $('<pre id="fileShow"></pre>');
    const buffer = $('<img src="https://c.tenor.com/K2UGDd4acJUAAAAM/load-loading.gif">');


    $('body').append(fileShow)
        .append(buffer);

    buffer.hide();

    fileInputButton.click(function () {
        buffer.show();

        setTimeout(function () {

            fetch(fileInput.val())
                .then(r => {
                    if (!r.ok) {
                        pcs.messageBox.show(`${r.status} ${r.statusText}`);
                        //window.err = `${r.status} ${r.statusText}`;
                    }
                    else {
                        return r.text();
                    }
                })
                .then(t => {
                    buffer.hide();
                    fileShow.text(t);
                })
                .catch(err => {
                    buffer.hide();
                    pcs.messageBox.show(`${err.status} ${err.statusText}`);
                });
        }, 1500);


    });

}());