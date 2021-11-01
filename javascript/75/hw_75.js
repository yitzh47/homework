/*global google*/
(function () {
    'use strict';
    const search = $('#search');
    const searchInput = $('#searchInput');
    const items = $('#items');
    const bounds = new google.maps.LatLngBounds();
    const searchIcon = $('#searchIcon');


    searchIcon.click(async function () {
        
        const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.val()}&maxRows=10&username=yitzhertz47&type=json`);
        const j = await r.json();
        search.css('border-radius', '8px 8px 0 0');
        items.empty();
        for (let i = 0; i < j.geonames.length; i++) {
            const title = j.geonames[i].title;
            const location = { lat: j.geonames[i].lat, lng: j.geonames[i].lng };
            const thumbnailImg = j.geonames[i].thumbnailImg;
            const summary = j.geonames[i].summary;
            const wikipediaUrl = j.geonames[i].wikipediaUrl;
            createMarker(title, location, thumbnailImg, summary, wikipediaUrl);

            if (i === j.geonames.length - 1) {
                liveMap.fitBounds(bounds);
            }

        }
    });

    const liveMap = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.556110, lng: -73.041389 },
        zoom: 15,
    });

    const infoWindow = new google.maps.InfoWindow();

    function createMarker(itmTitle, location, thumbnail, summary, wiki) {
        const marker = new google.maps.Marker({
            position: location,
            map: liveMap,
            title: itmTitle,
            icon: thumbnail,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', () => {
            infoWindow.setContent(`${summary}<br> <a target="_blank" href="https://${wiki}">more info..</a>`);
            infoWindow.open(liveMap, marker);
        });
        $(`<div class='item'>${itmTitle}</div>`).appendTo(items)
            .click(function () {
                $('.viewing').removeClass('viewing');
                $(this).addClass('viewing');
                liveMap.setCenter(location);
                infoWindow.setContent(`${summary}<br> <a target="_blank" href="https://${wiki}">more info..</a>`);
                infoWindow.open(liveMap, marker);
            });
        bounds.extend(location);
        return marker;
    }





    // countryCode: "BQ"
    // elevation: 536
    // feature: "isle"
    // geoNameId: 3513314
    // lang: "en"
    // lat: 17.6297
    // lng: -63.2356
    // rank: 100
    // summary: "Saba is a Caribbean island and the smallest special municipality (officially public body) of the Netherlands. It consists largely of the potentially active volcano Mount Scenery, at 887 metres (2,910 ft) the highest point of the entire Netherlands. Saba has a land area of  (...)"
    // thumbnailImg: "http://www.geonames.org/img/wikipedia/104000/thumb-103706-100.jpg"
    // title: "Saba"
    // wikipediaUrl: "en.wikipedia.org/wiki/Saba"


}());