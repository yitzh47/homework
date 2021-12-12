(function() {
    'use strict';

    
    let clickCount = 0;
    $(document).ready(function() {
        $('#btn').click(function() {   
            $('#result').text(`Button clicked ${++clickCount} times`);
        });
    });

}());