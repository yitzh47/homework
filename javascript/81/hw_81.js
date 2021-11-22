(function () {
    'use strict';

    const theCanvas = document.getElementById('canvas');
    const createAnt = document.getElementById('createAnt');
    const numberOfAnts = document.getElementById('numberOfAnts');
    const context = theCanvas.getContext('2d');
    const ants = [];

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const ANT_WIDTH = 2;
    const ANT_HEIGHT = 2;

    class Ant {

        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.oldTimeStamp;
        }

        drawAnt(timeStamp) {
            if (!this.oldTimeStamp) {
                this.oldTimeStamp = timeStamp;
            }
            const deltaTime = timeStamp - this.oldTimeStamp;
            this.oldTimeStamp = timeStamp;

            let dx = (Math.random() * 2) - 1;
            let dy = (Math.random() * 2) - 1;

            let checkXInScreen = this.x + dx * (deltaTime * 1);
            let checkYInScreen = this.y + dy * (deltaTime * 1);

            if (checkYInScreen >= window.innerHeight || checkYInScreen <= 0) {
                dy = -dy;
            }
            if (checkXInScreen >= window.innerWidth || checkXInScreen <= 0) {
                dx = -dx;
            }

            this.x += dx * (deltaTime * 0.5);
            this.y += dy * (deltaTime * 0.5);
            console.log(dx, this.y);

            context.beginPath();
            context.fillRect(this.x, this.y, ANT_WIDTH, ANT_HEIGHT);
        }
    }

    function createThousandAnts() {
        for (let i = 0; i < 1000; i++) {
            ants.push(new Ant(theCanvas.width / 2, theCanvas.height / 2));
        }
    }
    createThousandAnts();


    function drawAnts(timeStamp) {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ants.forEach(ant => {
            ant.drawAnt.bind(ant)(timeStamp);
        });
        requestAnimationFrame(drawAnts);
    }

    createAnt.addEventListener('click', (e) => {
        e.preventDefault();
        let numOf = numberOfAnts.value;
        for (let i = 0; i < numOf; i++) {
            ants.push(new Ant((Math.random() * window.innerWidth) - 1, (Math.random() * window.innerHeight) - 1));
        }
    });

    requestAnimationFrame(drawAnts);


}());