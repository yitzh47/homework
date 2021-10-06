window.autoClock = (function () {
    'use strict';

    const clockBox = document.createElement('div');

    const height = 200;
    const width = 300;
    const offsetTop = window.innerHeight / 2 - height / 2;
    const offsetWidth = window.innerWidth / 2 - width / 2;

    clockBox.style.position = 'fixed';
    clockBox.style.height = `${height}px`;
    clockBox.style.width = `${width}px`;
    clockBox.style.top = `${offsetTop}px`;
    clockBox.style.left = `${offsetWidth}px`;
    clockBox.style.backgroundColor = 'blue';
    clockBox.style.display = 'flex';
    clockBox.style.justifyContent = 'center';
    clockBox.style.alignItems = 'center';
    clockBox.style.fontSize = '30px';
    clockBox.style.border = '3px solid black';

    let fakeHours = 12;
    let fakeMinutes = 0;
    let fakeSeconds = 0;
    setInterval(function () {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        fakeSeconds++;
        if (fakeSeconds === 60) {
            fakeSeconds = 0;
            fakeMinutes++;
            if (fakeMinutes === 60) {
                fakeMinutes = 0;
                fakeHours++;
                if (fakeHours === 13) {
                    fakeHours = 1;
                }
            }
        }

        console.log(hours + ':' + minutes + ':' + seconds);
        clockBox.innerText = `Real Time- ${hours}:${minutes}:${seconds} \nFake Time- ${fakeHours}:${fakeMinutes}:${fakeSeconds}`;
    }, 1000);

    document.body.appendChild(clockBox);
}());


let clocksRequested = 0;

window.requestClock = function () {
    'use strict';

     return (function () {
        const clockBox = document.createElement('div');

        const height = 200;
        const width = 300;
        clocksRequested += 10;
        const offsetTop = window.innerHeight / 2 - height / 2 + clocksRequested;
        const offsetWidth = window.innerWidth / 2 - width / 2 + clocksRequested;

        clockBox.style.position = 'fixed';
        clockBox.style.height = `${height}px`;
        clockBox.style.width = `${width}px`;
        clockBox.style.top = `${offsetTop}px`;
        clockBox.style.left = `${offsetWidth}px`;
        clockBox.style.backgroundColor = 'blue';
        clockBox.style.display = 'flex';
        clockBox.style.justifyContent = 'center';
        clockBox.style.alignItems = 'center';
        clockBox.style.fontSize = '30px';
        clockBox.style.border = '3px solid black';

        let fakeHours = 12;
        let fakeMinutes = 0;
        let fakeSeconds = 0;
        setInterval(function () {
            let d = new Date();
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();

            fakeSeconds++;
            if (fakeSeconds === 60) {
                fakeSeconds = 0;
                fakeMinutes++;
                if (fakeMinutes === 60) {
                    fakeMinutes = 0;
                    fakeHours++;
                    if (fakeHours === 13) {
                        fakeHours = 1;
                    }
                }
            }

            console.log(hours + ':' + minutes + ':' + seconds);
            clockBox.innerText = `Real Time- ${hours}:${minutes}:${seconds} \nFake Time- ${fakeHours}:${fakeMinutes}:${fakeSeconds}`;
        }, 1000);

        document.body.appendChild(clockBox);
    }());


};



