
import { canvas, context, snakeHead} from './game_brains.js';

export default class Snake {
    constructor(game) {
        this.game = game;
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
            context.drawImage(snakeHead, position.x, position.y, this.game.THING_SIZE, this.game.THING_SIZE);
        });
    }

    move() {
        let xy = this.xy;
        let oldSnakeHead = { x: xy[xy.length - 1].x, y: xy[xy.length - 1].y };

        switch (this.direction) {
            case 'ArrowRight':
                xy.push({ x: oldSnakeHead.x += this.game.THING_SIZE, y: oldSnakeHead.y });
                xy.shift();
                break;
            case 'ArrowLeft':
                xy.push({ x: (oldSnakeHead.x -= this.game.THING_SIZE), y: oldSnakeHead.y });
                xy.shift();
                break;
            case 'ArrowUp':
                xy.push({ x: oldSnakeHead.x, y: (oldSnakeHead.y -= this.game.THING_SIZE) });
                xy.shift();
                break;
            case 'ArrowDown':
                xy.push({ x: oldSnakeHead.x, y: (oldSnakeHead.y += this.game.THING_SIZE) });
                xy.shift();
                break;
        }

        if (oldSnakeHead.x < 0 || oldSnakeHead.x > canvas.width - this.game.THING_SIZE || oldSnakeHead.y < 0 || oldSnakeHead.y > canvas.height - this.game.THING_SIZE) {
            this.game.gameOver = true;
        } 
        else {
            this.xy = xy;
        }

        // Check if snake hit itself
        for (let i = 0; i < this.xy.length - 1; i++) {
            if (this.xy[i].x === oldSnakeHead.x && this.xy[i].y === oldSnakeHead.y) {
                this.game.gameOver = true;
            }
        }
        
        if (this.game.appleCrunchQuery(oldSnakeHead)) {
            this.xy.unshift(oldSnakeHead);            
        }
        this.draw();     
    }
}