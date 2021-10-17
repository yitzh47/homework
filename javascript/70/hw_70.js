(function () {
    'use strict';

    const formBox = $('<div id="form"></div>');      
    formBox.css('width', '250px');
    formBox.css('height', '300px');
    formBox.css('margin', 'auto');
    formBox.css('backgroundColor', 'red');
    formBox.append('<label for="name">Name: </label><input id="name">');
    formBox.append('<label for="address">Address: </label><input id="address">');
    formBox.append('<input id="checkLicense" type="checkbox">');
    formBox.append('<button id="subButton" disabled>submit</button>');

    formBox.appendTo('body'); 

    const subButton = $("#subButton");
    const checkLicense = $("#checkLicense");

    checkLicense.change(function() {
        subButton.prop('disabled', false);
        }
    );
}());