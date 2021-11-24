(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const restartBtn = document.getElementById('restart');
    const context = canvas.getContext('2d');

    const THING_SIZE = 64;

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
        canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const crashSound = document.getElementById('crash');
    const crunchSound = document.getElementById('crunch');

    let gameOver = false;
    let score = 0;

    let speed = 500;

    class Snake {
        constructor() {
            this.xy = [];
            this.direction = 'ArrowRight';
            this.xy.push({ x: 0, y: 0 });

            document.addEventListener('keydown', event => {
                switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = event.key;
                }
            });
            this.draw();
        }

        draw() {
            this.xy.forEach(position => {
                context.drawImage(snakeHead, position.x, position.y, THING_SIZE, THING_SIZE);
            });
        }

        move() {
            let xy = this.xy;
            let oldSnakeHead = { x: xy[xy.length - 1].x, y: xy[xy.length - 1].y };

            switch (this.direction) {
                case 'ArrowRight':
                    xy.push({ x: oldSnakeHead.x += THING_SIZE, y: oldSnakeHead.y });
                    xy.shift();
                    break;
                case 'ArrowLeft':
                    xy.push({ x: (oldSnakeHead.x -= THING_SIZE), y: oldSnakeHead.y });
                    xy.shift();
                    break;
                case 'ArrowUp':
                    xy.push({ x: oldSnakeHead.x, y: (oldSnakeHead.y -= THING_SIZE) });
                    xy.shift();
                    break;
                case 'ArrowDown':
                    xy.push({ x: oldSnakeHead.x, y: (oldSnakeHead.y += THING_SIZE) });
                    xy.shift();
                    break;
            }

            if (oldSnakeHead.x < 0 || oldSnakeHead.x > canvas.width - THING_SIZE || oldSnakeHead.y < 0 || oldSnakeHead.y > canvas.height - THING_SIZE) {
                gameOver = true;
            } else {
                this.xy = xy;
            }

            // Check if snake hit itself
            for (let i = 0; i < this.xy.length - 1; i++) {
                if (this.xy[i].x === oldSnakeHead.x && this.xy[i].y === oldSnakeHead.y) {
                    gameOver = true;
                }
            }

            if (oldSnakeHead.x === apple.x && oldSnakeHead.y === apple.y) {
                score++;
                this.xy.unshift(oldSnakeHead);
                speed = speed * 0.9;
                crunchSound.currentTime = 0;
                crunchSound.play();
                apple.move();
            }
            this.draw();
        }
    }

    class Apple {
        constructor() {
            this.move();
        }

        draw() {
            context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
        }

        move() {
            this.x = this.getRandomNumber(0, canvas.width - 1);
            this.y = this.getRandomNumber(0, canvas.height - 1);
            for (let i = 0; i < snake.xy.length; i++) {
                if (this.x === snake.xy[i].x && this.y === snake.xy[i].y) {
                    this.move();
                }
            }
            this.draw();
        }

        getRandomNumber(min, max) {
            let r = Math.floor(Math.random() * (max - min + 1)) + min;
            r = r - r % THING_SIZE;
            return r;
        }
    }

    let snake;
    let apple;

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);


        context.font = 'bold 30px Arial';
        let highestScore = localStorage.getItem("highScore") || 0;
        if (score > highestScore) {
            highestScore = score;
            localStorage.setItem("highScore", highestScore);
        }

        context.fillText(`High Score: ${highestScore}`, canvas.width - 250, 80);
        context.fillText(`Score: ${score}`, canvas.width - 250, 40);

        snake.move();
        apple.draw();

        if (!gameOver) {
            setTimeout(gameLoop, speed);
        } else {
            context.font = 'bold 30px Arial';
            context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
            crashSound.currentTime = 0; // in case it was playing
            crashSound.play();
            restartBtn.style.display = 'block';
            restartBtn.style.top = `${canvas.height / 2 + 50}px`;
            restartBtn.style.left = `${canvas.width / 2 - 50}px`;
        }
    }

    const snakeHead = new Image();
    snakeHead.src = 'images/snakehead.png';
    snakeHead.onload = () => {
        snake = new Snake();
        setTimeout(gameLoop, speed);
    };

    const appleImg = new Image();
    appleImg.src = 'images/redapple.png';
    appleImg.onload = () => {
        apple = new Apple();
    };

    restartBtn.addEventListener('click', () => {
        reStartGame();
    }
    );

    function reStartGame() {
        restartBtn.style.display = 'none';
        gameOver = false;
        snake = new Snake();
        setTimeout(gameLoop, speed);
    }
}());
