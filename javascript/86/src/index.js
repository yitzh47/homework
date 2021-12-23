import $ from 'jquery';
import './style.css';
import awkward from './awkward.png';


'use strict';

let clickCount = 0;
$(document).ready(function () {
    $('#btn').click(() =>
        $('#result').text(`Button clicked ${++clickCount} times`)
    );
});

const funny = new Image();
funny.src = awkward;
document.body.appendChild(funny);


