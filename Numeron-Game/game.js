// Iteration 2: Generate 2 random number and display it on the screen
let num1Tile = document.getElementById('number1')
let num2Tile = document.getElementById('number2')
let num1 = Math.round(Math.random() * 100)
let num2 = Math.round(Math.random() * 100)

num1Tile.innerHTML = num1
num2Tile.innerHTML = num2

// Iteration 3: Make the options button functional
let greaterThan = document.getElementById('greater-than')
let lessThan = document.getElementById('lesser-than')
let equalTo = document.getElementById('equal-to')
let score = 0

greaterThan.onclick = () => {
    if (num1 > num2) {
        score++
        reset(timerId)
        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)
        num1Tile.innerHTML = num1
        num2Tile.innerHTML = num2
    }
    else {
        location.href = './gameover.html'
    }
}
lessThan.onclick = () => {
    if (num1 < num2) {
        score++
        reset(timerId)
        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)
        num1Tile.innerHTML = num1
        num2Tile.innerHTML = num2
    }
    else {
        location.href = './gameover.html'
    }
}
equalTo.onclick = () => {
    if (num1 === num2) {
        score++
        reset(timerId)
        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)
        num1Tile.innerHTML = num1
        num2Tile.innerHTML = num2
    }
    else {
        location.href = './gameover.html'
    }
}
// Iteration 4: Build a timer for the game
let timerBoard = document.getElementById('timer')
let time
var timerId = 0


function timer() {
    time = 5
    timerBoard.innerHTML = time
    timerId = setInterval(function () {
        time--
        if (time == 0) {
            location.href = './gameover.html'
        }
        timerBoard.innerHTML = time
    }, 1000)
    localStorage.setItem("score", score)
}
function reset(timerId) {
    clearInterval(timerId)
    timer()
}
timer()
