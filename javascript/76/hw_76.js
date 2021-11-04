/*global google*/
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
    // let geo = navigator.geolocation;
    // console.log(geo.getCurrentPosition((x)=>console.log(x)));

    const liveMap = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.556110, lng: -73.041389 },
        zoom: 15,
    });

    searchIcon.click(async function () {
        try {
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.val()}&maxRows=10&username=yitzhertz47&type=json`);
            if (!r.ok) { throw new Error(r.status, r.statusText); }
            const j = await r.json();
            deleteMarkersAndItems();
            j.geonames.forEach(function (itm) {
                createMarker(itm);
            });
            liveMap.fitBounds(bounds);
        }
        catch (e) { console.error(e.message); }
    });

    searchCancel.click(function () {
        deleteMarkersAndItems();
    });

    function createMarker(itm) {
        const location = { lat: itm.lat, lng: itm.lng };
        const mrkrInSidebar = $(`<div class='item'>${itm.title}</div>`).appendTo(items);
        const marker = new google.maps.Marker({
            position: location,
            map: liveMap,
            title: itm.title,
            icon: itm.thumbnailImg,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', () => clickListen(marker, mrkrInSidebar, itm.summary, itm.wiki));
        mrkrInSidebar.click(() => clickListen(marker, mrkrInSidebar, itm.summary, itm.wiki));
        bounds.extend(location);
        markers.push(marker);
    }


    function clickListen(mrkr, sidebarRepresent, summary, wiki) {
        $('.viewing').removeClass('viewing');
        sidebarRepresent.addClass('viewing');
        liveMap.panTo(mrkr.position);
        infoWindow.setContent(`<h3>${mrkr.title}</h3><br>${summary}<br><a target="_blank" href="https://${wiki}">more info..</a>`);
        infoWindow.open(liveMap, mrkr);
    }

    function deleteMarkersAndItems() {
        search.css('border-radius', '8px');
        for (let i = 0; i < markers.length; i++) { markers[i].setMap(null); }
        items.css('border', 'none');
        items.empty();
        markers = [];
    }

    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });
    drawingManager.setMap(liveMap);

    let drawings = JSON.parse(localStorage.getItem('drawings')) || [];
 
    function updateLocalDrawings(){
        localStorage.setItem('drawings', JSON.stringify(drawings));
    }
    // google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
    //     console.log(e.type);
    // });

    google.maps.event.addListener(drawingManager, 'markercomplete', mark => {
        drawings.push({type: 'marker', position: mark.getPosition()});
        updateLocalDrawings();
    });
    google.maps.event.addListener(drawingManager, 'circlecomplete', circ => {
        drawings.push({type: 'circle', center: circ.getCenter(),radius: circ.getRadius()});
        updateLocalDrawings();
    });
    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        drawings.push({ type: 'polygon', path: polygon.getPath().getArray()});
        console.log(polygon.getPath().getArray());
        updateLocalDrawings();
    });
    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        drawings.push({ type: 'polyline', path: polyline.getPath().getArray()});
        updateLocalDrawings();
    });
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        drawings.push({ type: 'rectangle', bounds: rectangle.getBounds()});
        updateLocalDrawings();
    });

    if (drawings) {
        drawings.forEach(drawing => {
            switch (drawing.type) {
                case 'marker':
                    new google.maps.Marker({
                        position: drawing.position,
                        map: liveMap,
                    });
                    break;
                case 'circle':
                    new google.maps.Circle({
                        center: drawing.center,
                        radius: drawing.radius,
                        map: liveMap,
                    });
                    break;
                case 'polygon':
                    new google.maps.Polygon({
                        path: drawing.path,
                        map: liveMap,
                    });
                    break;
                case 'polyline':
                    new google.maps.Polyline({
                        path: drawing.path,
                        map: liveMap,
                    });
                    break;
                case 'rectangle':
                    new google.maps.Rectangle({
                        bounds: drawing.bounds,
                        map: liveMap,
                    });
                    break;
            }
        });
    }
}());