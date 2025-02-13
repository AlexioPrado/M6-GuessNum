let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = Number(prompt('Enter a number between 1 and 10: '));
// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess !== randomNumber){
    // Loop should count the number of guesses.
    attempts++
    // Loop should exit if user enters 999 and not display "Too high!"
    if (userGuess === 999){
        break;
    }
    if (userGuess < 1 || userGuess > 10){
        // If anything else is entered, the user should be prompted that their input is invalid and to guess again.
        window.alert('WRONG. Input a number between 1 and 10.');
    } else if (userGuess < randomNumber){
        // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
        window.alert('Too low!');
    } else if (userGuess > randomNumber){
        // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
        window.alert('Too high!');
    } else{
        window.alert('WRONG. Input a number between 1 and 10.');
    }
    userGuess = Number(prompt('Enter a number from 1-10 or 999 to exit: '));
}
if (userGuess === 999){
    window.alert(`You left the game at ${attempts} attempts.`);
} else {
    // If the guess is correct, the user should be alerted of their win and 
    // be told the number of guesses they made.
    window.alert(`Congratulation!!! You guessed the number in ${attempts} tries!`);
}





