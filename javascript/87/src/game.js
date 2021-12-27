
import { canvas, context, THING_SIZE, gameIsOver, returnHighScore} from './game_brains.js';
import Snake from './snake.js';
import Apple from './apple.js';

import crash from './media/crash.mp3';
import crunch from './media/crunch.mp3';
const crashSound = new Audio(crash);
const crunchSound = new Audio(crunch);


export default class Game {
    constructor(staticSpeed) {  
        this.THING_SIZE = THING_SIZE;
        this.score = 0;
        this.speed = staticSpeed;
        this.gameOver = false;
        this.snake = new Snake(this);
        this.apple = new Apple(this, [{ x: 0, y: 0 }]);
    }

    gameLoop() {

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = 'bold 30px Arial';
        context.fillText(`Score: ${this.score}`, canvas.width - 250, 40);
        context.fillText(`High Score: ${returnHighScore(this.score)}`, canvas.width - 250, 80);

        this.apple.draw();
        this.snake.move();
        if (this.gameOver){
            gameOverActions();
        }else{
            this.playGame();
        }
    }

    playGame(){
        setTimeout(() => {
            this.gameLoop();
        }, this.speed);
    }

    appleCrunchQuery(oldSnakeHead){
        if (oldSnakeHead.x === this.apple.x && oldSnakeHead.y === this.apple.y) {
            this.apple.move(this.snake.xy);
            this.score++;
            this.speed = this.speed * 0.9;
            crunchSound.currentTime = 0;
            crunchSound.volume = 0.4;
            crunchSound.play();
            return true;
        }
        return false;
    }
}

function gameOverActions() {
    context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
    crashSound.currentTime = 0; // in case it was playing
    crashSound.volume = 0.1;
    crashSound.play();
    gameIsOver();
}
