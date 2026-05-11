const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 10) {
        message.innerHTML = "Please enter a number between 1 and 10.";
        message.style.color = "orange";
    } else if (userGuess > secretNumber) {
        message.innerHTML = "OOPS! Wrong!! try smaller number.";
        message.style.color = "red";
    } else if (userGuess < secretNumber) {
        message.innerHTML = "OOPS! wrong!!! try bigger number.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Congratulations! You got the number";
        message.style.color = "green";
    }
}