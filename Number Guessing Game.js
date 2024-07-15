function numberGuessingGame() {
    const lowerBound = parseInt(prompt("Enter the lower bound of the range:"));
    const upperBound = parseInt(prompt("Enter the upper bound of the range:"));
    const randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    const minGuesses = Math.ceil(Math.log2(upperBound - lowerBound + 1));
    let guessCount = 0;
    
    while (true) {
        const userGuess = parseInt(prompt("Enter your guess:"));
        guessCount++;
        
        if (userGuess > randomNumber) {
            alert("Try Again! You guessed too high.");
        } else if (userGuess < randomNumber) {
            alert("Try Again! You guessed too small.");
        } else {
            alert(`Congratulations! You've guessed the number in ${guessCount} guesses.`);
            break;
        }
        
        if (guessCount > minGuesses) {
            alert("Better Luck Next Time!");
            break;
        }
    }
}


