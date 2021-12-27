
import { canvas, context, appleImg} from './game_brains.js';

export default class Apple {
    constructor(game, whereSnakeIs) {
        this.game = game;
        this.move(whereSnakeIs);
    }

    draw() {
        context.drawImage(appleImg, this.x, this.y, this.game.THING_SIZE, this.game.THING_SIZE);
    }

    move(whereSnakeIs) {
        this.x = this.getRandomNumber(0, canvas.width - 1);
        this.y = this.getRandomNumber(0, canvas.height - 1);
        for (let i = 0; i < whereSnakeIs.length; i++) {
            if (this.x === whereSnakeIs[i].x && this.y === whereSnakeIs[i].y) {
                this.move();
            }
        }
        this.draw();
    }

    getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        r = r - r % this.game.THING_SIZE;
        return r;
    }
}