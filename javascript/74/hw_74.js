(function () {
    'use strict';

    const searchBox = $('#search-box');
    const showImage = $('#showImage');
    const buffer = $('#buffer');

    buffer.hide();

        

    searchBox.change(function (){

        showImage.empty();
        buffer.show();

        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchBox.val()}&format=json&jsoncallback=?`, {
            format: "json"
        })
            .done(function (data) {
                console.log(data);
                $.each(data.items, function (i, item) {
                    console.log(item);
                    $(`<div><img src=${item.media.m}> ${item.title}</div>`).appendTo("#showImage");
                    if (i >= 12) {
                        buffer.hide();

                        return false;

                    }
                });
            });
    });
}());