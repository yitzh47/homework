(function() {
    'use strict';

    
    let clickCount = 0;
    $(document).ready(function() {
        $('#btn').click(() =>     
            $('#result').text(`Button clicked ${++clickCount} times`)
        );
    });

}());