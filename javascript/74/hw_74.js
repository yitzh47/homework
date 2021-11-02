(function () {
    'use strict';

    const searchBox = $('#search-box');
    const showImage = $('#showImage');
    const buffer = $('#buffer')
        .hide();

    searchBox.change(function () {
        showImage.empty();
        buffer.show();

        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchBox.val()}&format=json&jsoncallback=?`)
            .done(function (data) {
                console.log(data);
                $.each(data.items, function (i, item) {
                    $(`<figure><img src=${item.media.m}><figcaption>${item.title}</figcaption></figure>`).
                        appendTo("#showImage");
                    if (i >= 19) {
                        buffer.hide();
                        return false;
                    }
                });
            });
    });
}());