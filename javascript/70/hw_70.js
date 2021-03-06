(function () {
    'use strict';

    const formBox = $('<div id="form"></div>');
    formBox.css('width', '250px');
    formBox.css('backgroundColor', 'red');
    formBox.append('<label for="name">Name: </label><input id="name">');
    formBox.append('<label for="address">Address: </label><input id="address">');
    formBox.append('<input id="checkLicense" type="checkbox">');
    formBox.append('<button id="subButton" disabled>submit</button>');

    formBox.appendTo('body');
    const name = $("#name");
    const address = $("#address");
    const subButton = $("#subButton");
    const checkLicense = $("#checkLicense");

    subButton.on('click', () => {
        $('body').append(`<div>Name: ${name.val()}<br>Address: ${address.val()} </div>`);
    });

    let trueOrFalse = 1;
    checkLicense.change(function () {
        subButton.prop('disabled', ++trueOrFalse % 2);
    });
}());