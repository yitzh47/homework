(function () {
    'use strict';

    const potatoRoom = document.getElementById('potatoRoom');
    const backgrounds = document.getElementById('backgrounds');
    let dragging;
    let zIndexIncrement = 0;
    let dragElem;

    function startDrag(e) {
        dragElem = document.getElementById(e.target.id);
        if (e.target.id !== 'backgrounds') {
            dragging = { x: e.offsetX, y: e.offsetY };
            potatoRoom.addEventListener('mousemove', drag);
            dragElem.addEventListener('mouseup', endMouseMove);
        }
        else if (e.target.id === 'backgrounds') {
            let choosing = getComputedStyle(backgrounds).backgroundImage;
            let chosen = getComputedStyle(potatoRoom).backgroundImage;
            potatoRoom.style.backgroundImage = choosing;
            backgrounds.style.backgroundImage = chosen;
            localStorage.setItem('background', JSON.stringify({ current: choosing, old: chosen }));
        }
    }

    function drag(event) {
        event.preventDefault();
        if (dragging) {
            dragElem.style.left = `${event.clientX - dragging.x}px`;
            dragElem.style.top = `${event.clientY - dragging.y}px`;
            dragElem.style.zIndex = ++zIndexIncrement;
            let position = JSON.stringify({ x: dragElem.style.left, y: dragElem.style.top, z: zIndexIncrement });
            localStorage.setItem(`${dragElem.id}`, position);
        }
    }

    document.body.addEventListener('mouseleave', endMouseMove);

    function endMouseMove() {
        dragging = false;
        potatoRoom.removeEventListener('mousemove', drag);
    }

    function positionFromStorage(element) {
        if (localStorage.getItem(element)) {
            let elemFromStorage = JSON.parse(localStorage.getItem(element));
            let elem = document.getElementById(element);
            if (element !== 'background') {
                elem.style.left = elemFromStorage.x;
                elem.style.top = elemFromStorage.y;
                elem.style.zIndex = elemFromStorage.z;
                zIndexIncrement = elemFromStorage.z > zIndexIncrement ? elemFromStorage.z : zIndexIncrement;
            } else if (element === 'background') {
                backgrounds.style.backgroundImage = elemFromStorage.old;
                potatoRoom.style.backgroundImage = elemFromStorage.current;
            }
        }
    }

    document.body.addEventListener('mousedown', (e) => startDrag(e));
    positionFromStorage('potato_body');
    positionFromStorage('mustach_mouth');
    positionFromStorage('droopy_eyes');
    positionFromStorage('regular_nose');
    positionFromStorage('center_eyes');
    positionFromStorage('down_eyes');
    positionFromStorage('mustache_face');
    positionFromStorage('purple_eyes');
    positionFromStorage('red_eyes');
    positionFromStorage('red_lips');
    positionFromStorage('red_nose');
    positionFromStorage('teeth');
    positionFromStorage('background');
}());