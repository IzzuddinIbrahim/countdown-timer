const secondsInput = document.querySelector("#seconds-input");  //find second input
const startButton = document.querySelector("#start-btn");       //find start button
const resetButton = document.querySelector("#reset-btn");       //find reset button
const timerDisplay = document.querySelector("#timer-display")   //find timer display
const messageText = document.querySelector("#message");         //find message text

let countdown;      //stores the running timer
let timeLeft = 0;   //stores how many seconds are left

startButton.addEventListener("click", function() {
    timeLeft = Number(secondsInput.value);

    if (secondsInput.value === "" || timeLeft <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    timerDisplay.textContent = timeLeft;
    messageText.textContent = "Counting down...";

    countdown = setInterval(function() {        //every 1 second
        timeLeft--;                             //reduce timeLeft by 1

        timerDisplay.textContent = timeLeft;    //show the new timeLeft

        if (timeLeft === 0) {                   //if timeLeft is 0
            clearInterval(countdown);           //stop the countdown
            messageText.textContent = "Done!"   //show Done!
        }
    }, 1000);
});

resetButton.addEventListener("click", function() {      //when reset button is click
    clearInterval(countdown);                           //stop the countdown

    secondsInput.value = "";                            //clear the input
    timeLeft = 0;                                       //set timeLeft back to 0

    timerDisplay.textContent = "0"                      //show 0 on screen
    messageText.textContent = "Ready";                  //change message to "Ready"
})