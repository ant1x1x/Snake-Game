const playBoard = document.querySelector('.play-board')
const scoreElement = document.querySelector('.score');
const highestScoreElement = document.querySelector('.high-score')
let divisionX , divisionY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let gameOver = false;
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem('high-score') || 0; 
highestScoreElement.innerText = `High score ${highScore}`
const changeFoodDirection = ()=>{
divisionX = Math.floor(Math.random() * 30) + 1;
divisionY = Math.floor(Math.random() * 30) + 1;                                   
}
 const changeDirection = (e)=> {
    if(e.key === "w" && velocityY != 1){
        velocityX = 0 
        velocityY = -1;
    } else if(e.key === "s"  && velocityY != -1){
        velocityX = 0        
        velocityY = 1;          
    }else if(e.key === "a"  && velocityX != 1){
        velocityX = -1         
        velocityY = 0;           
    }else if(e.key === "d"  && velocityX != -1){
        velocityX = 1            
        velocityY = 0;        
    }
    initGame();
 }   

const handleGameOver = ()=> {
    clearInterval (setIntervalId);
    alert('Game over! press OK to replay');
    location.reload()
}
const initGame = ()=>{
    if(gameOver) return handleGameOver();
    let htmlMarkup   = `<div class="division" style="grid-area:${divisionY} / ${divisionX}"></div>`
    for(i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];
    if(snakeX === divisionX && snakeY  === divisionY){
        changeFoodDirection();
        snakeBody.push([divisionX, divisionY ]);
        score++;
        highScore = score >= highScore ? score : highScore; 
        localStorage.setItem('high-score', highScore);
        scoreElement.innerText = `Score ${score}`
        highScore.innerText = `High score  ${highScore}`
    }
    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="hea" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    playBoard.innerHTML = htmlMarkup;
    snakeX  += velocityX; 
    snakeY += velocityY;
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeX > 30){
    gameOver = true;
    }
    htmlMarkup += `<div class="hea" style="grid-area:${snakeY} / ${snakeX}"></div>`
    playBoard.innerHTML = htmlMarkup;
    
}

changeFoodDirection();

setIntervalId = setInterval(initGame, 125); 
document.addEventListener('keydown', changeDirection);