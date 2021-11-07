(function () {
    'use strict';

    const potato_body = document.getElementById('potato_body');
    const mustach_mouth = document.getElementById('mustach_mouth');
    const droopy_eyes = document.getElementById('droopy_eyes');
    const potatoRoom = document.getElementById('potatoRoom');
    let dragging;
    let zIndexIncrement = 0;

    function startDrag(e) {
        let elem = document.getElementById(e.path[0].attributes[0].nodeValue);
        dragging = { x: e.offsetX, y: e.offsetY };
        potatoRoom.addEventListener('mousemove', drag);
        elem.addEventListener('mouseup', () => {
            endMouseMove();
        });
    }

    function drag(event) {
        event.preventDefault();
        if (dragging) {
            let id = event.path[0].attributes[0].nodeValue;
            let elem = document.getElementById(id);
            elem.style.left = `${event.clientX - dragging.x}px`;
            elem.style.top = `${event.clientY - dragging.y}px`;
            elem.style.zIndex = ++zIndexIncrement;
            let position = JSON.stringify({ x: elem.style.left, y: elem.style.top, z: zIndexIncrement});
            localStorage.setItem(id, position);
        }
    }

    document.body.addEventListener('mouseleave', () => {
        endMouseMove();
    });

    function endMouseMove() {
        dragging = false;
        potatoRoom.removeEventListener('mousemove', drag);
    }

    function positionFromStorage(element) {
        if (localStorage.getItem(element)) {
            let elemFromStorage = JSON.parse(localStorage.getItem(element));
            let elem = document.getElementById(element);
            elem.style.left = elemFromStorage.x;
            elem.style.top = elemFromStorage.y;
            elem.style.zIndex = elemFromStorage.z;

        }
    }

    potato_body.addEventListener('mousedown', (e) => startDrag(e));
    mustach_mouth.addEventListener('mousedown', (e) => startDrag(e));
    droopy_eyes.addEventListener('mousedown', (e) => startDrag(e));
    positionFromStorage('potato_body');
    positionFromStorage('mustach_mouth');
    positionFromStorage('droopy_eyes');
}());