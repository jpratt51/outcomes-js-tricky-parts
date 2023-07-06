function guessingGame(guess) {
    let randomNum = Math.floor(Math.random() * 99 + 1);
    let count = 0;
    let won = false;
    return function numGuess(guess) {
        if (won === true) {
            return "The game is over, you already won!";
        } else {
            count++;
            console.log(guess, randomNum);
            if (guess === randomNum) {
                won = true;
                return `You win! You found ${randomNum} in ${count} guesses.`;
            } else if (guess < randomNum) {
                return `${guess} is too low!`;
            } else {
                return `${guess} is too high!`;
            }
        }
    };
}

module.exports = { guessingGame };
