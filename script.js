let num = Math.floor(Math.random() * 28);
let score = 100;

document.getElementById('score').textContent = "Your score is " + score;

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    
    if (guess === num) {
        message.textContent = "Congratulations! You guessed it right.";
    } else {
        message.textContent = "Wrong guess. Try again.";
        
        if (guess < num) {
            message.textContent += " Hint: Your number is greater.";
        } else {
            message.textContent += " Hint: Your number is smaller.";
        }
        
        score -= 10;
        document.getElementById('score').textContent = "Your score is now: " + score;
    }
}
