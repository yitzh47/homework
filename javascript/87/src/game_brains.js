//snake can crash into itself
import './stylesheet.css';
import Game from './game.js';
import snakeImg from './images/snakehead.png';
import redAppleImg from './images/redapple.png';

export const canvas = document.getElementById('theCanvas');
export const context = canvas.getContext('2d');
export const staticSpeed = 500;
export const THING_SIZE = 64;

function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', () => {
    startGame();
});

function startGame() {
    restartBtn.style.display = 'none';
    let gameInstance = new Game(staticSpeed);
    gameInstance.playGame();
}

export function gameIsOver() {
    restartBtn.style.display = 'block';
    restartBtn.style.top = `${canvas.height / 2 + 50}px`;
    restartBtn.style.left = `${canvas.width / 2 - 50}px`;
}

export function returnHighScore(score) {  
    let highestScore = localStorage.getItem("highScore") || 0;
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highScore", highestScore);
    }
    return highestScore;
}

export const snakeHead = new Image();
export const appleImg = new Image();

snakeHead.src = snakeImg;
appleImg.src = redAppleImg;

snakeHead.onload = () => {
    appleImg.onload = () => {
        startGame();
    };
};










