/*global google*/


//add x out button
(function () {
    'use strict';
    const search = $('#search');
    const searchInput = $('#searchInput');
    const items = $('#items');
    const searchIcon = $('#searchIcon');
    const searchCancel = $('#searchCancel');
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
    let markers = [];

    const liveMap = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.556110, lng: -73.041389 },
        zoom: 15,
    });

    searchIcon.click(async function () {
        try {
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.val()}&maxRows=10&username=yitzhertz47&type=json`);
            if (!r.ok) {
                throw new Error(r.status, r.statusText);
            }
            const j = await r.json();

            deleteMarkersAndItems();

            if (j.geonames.length > 0) {
                
                search.css('border-radius', '8px 8px 0 0');
                items.css('border', '3px solid gray');

                j.geonames.forEach(function (itm) {
                    const location = { lat: itm.lat, lng: itm.lng };
                    createMarker(itm.title, location, itm.thumbnailImg, itm.summary, itm.wikipediaUrl);
                    liveMap.fitBounds(bounds);
                });
            }
            
        }
        catch (e) { console.error(e.message); }

    });

    searchCancel.click(function () {
        deleteMarkersAndItems();
    });

    function createMarker(itmTitle, lctn, thumbnail, summary, wiki) {

        const mrkrInSidebar = $(`<div class='item'>${itmTitle}</div>`).appendTo(items);

        const marker = new google.maps.Marker({
            position: lctn,
            map: liveMap,
            title: itmTitle,
            icon: thumbnail,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', () => clickListen(marker, mrkrInSidebar, summary, wiki));
        mrkrInSidebar.click(() => clickListen(marker, mrkrInSidebar, summary, wiki));

        bounds.extend(lctn);
        markers.push(marker);
    }

    function clickListen(mrkr, sidebarRepresent, summary, wiki) {
        $('.viewing').removeClass('viewing');
        sidebarRepresent.addClass('viewing');
        liveMap.setCenter(mrkr.position);
        infoWindow.setContent(`${summary}<br> <a target="_blank" href="https://${wiki}">more info..</a>`);
        infoWindow.open(liveMap, mrkr);
    }

    function deleteMarkersAndItems() {
        search.css('border-radius', '8px');
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        items.css('border', 'none');
        items.empty();
        markers = [];
    }
}());