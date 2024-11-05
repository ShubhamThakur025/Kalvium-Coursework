// Iteration 5: Store the player score and display it on the game over screen
let scoreBoard = document.getElementById('score-box')
let replay = document.getElementById('play-again-button')
let score = localStorage.getItem("score")

scoreBoard.innerHTML += score;
replay.onclick = () => {
    location.href = './game.html'
}