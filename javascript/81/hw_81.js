(function () {
    'use strict';

    const theCanvas = document.getElementById('canvas');
    const createAnt = document.getElementById('createAnt');
    const numberOfAnts = document.getElementById('numberOfAnts');


    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const context = theCanvas.getContext('2d');

    class Ant {

        static ANT_WIDTH = 4;
        static ANT_HEIGHT = 2;

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        nextRandPixel(){
            return Math.ceil((Math.random() * 3) - 2);
        }

        drawAnt(timeStamp) {
            if (!this.oldTimeStamp) {
                this.oldTimeStamp = timeStamp;
            }
            const deltaTime = timeStamp - this.oldTimeStamp;
            this.oldTimeStamp = timeStamp;
            let timeOffset = deltaTime * 0.5;

            let dx = this.nextRandPixel();
            let dy = this.nextRandPixel();

            let checkXInScreen = this.x + dx * timeOffset;
            let checkYInScreen = this.y + dy * timeOffset;

            if (checkYInScreen >= window.innerHeight) {
                this.y = window.innerHeight - Ant.ANT_HEIGHT;
            }
            else if (checkYInScreen <= 0){
                this.y = Ant.ANT_HEIGHT;
            }

            if (checkXInScreen >= window.innerWidth) {
                this.x = window.innerWidth - Ant.ANT_WIDTH;
            }
            else if (checkXInScreen <= 0) {
                this.x = Ant.ANT_WIDTH;
            }

            this.x += dx * timeOffset;
            this.y += dy * timeOffset;

            context.beginPath();
            context.fillRect(this.x, this.y, Ant.ANT_WIDTH, Ant.ANT_HEIGHT);
        }
    }

    const ants = [];

    function createThousandAnts() {
        for (let i = 0; i < 1000; i++) {
            ants.push(new Ant(theCanvas.width / 2, theCanvas.height / 2));
        }
    }

    createAnt.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < Number(numberOfAnts.value); i++) {
            ants.push(new Ant(...randAntPosition()));
        }
    });

    function randAntPosition() {
        let x = Math.ceil((Math.random() * window.innerWidth) - 1);
        let y = Math.ceil((Math.random() * window.innerHeight) - 1);
        return  [x, y];
    }

    function drawAnts(timeStamp) {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ants.forEach(ant => {
            ant.drawAnt(timeStamp);
        });
        requestAnimationFrame(drawAnts);
    }

    createThousandAnts();
    drawAnts(0);
}());