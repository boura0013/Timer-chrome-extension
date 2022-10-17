// Declare variables
var timerRunning = false;
var dontAddFirstSemicolon = false;
var dontAddSecondSemicolon = false;
function checkForValidInput(hInput, mInput, sInput,){
    if(hInput == "" && mInput == "" && sInput == ""){
    return false;
}
// Check if minutes or seconds value is 60+
    if(mInput > 59){
    return false;
}
    if(sInput > 59){
    return false;
}
// Check if the hours input is 10 or more
if(hInput > 9){
    return false;
}
// Check if any of the input values are negative
if(mInput < 0){
    return false;
}
if(sInput < 0){
    return false;
}
if(hInput < 0){
    return false;
}

}
function delay() {
    function delay(d) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, d);
        });
    }
}

function getLengthFormatted(h, m, s) {
    // Set variables
    var valueToReturn = "";
    // If minutes has no first digit add one
    if(m < 10) {
        if(m != ""){ 
        m = '0' + m;
    }
    // If seconds has no first digit add one
    }
    if(s < 10){
        if(s != ""){
       s = '0'+ s;
}
    }
    // If the values are empty then add zeroes to represent them
    if(m == "" && h != ""){
    m = '00';
}
    if(s == ""){
    s = '00';
}
// If there are no hours then dont add the first semicolon or the number
    if(h == ""){
    dontAddFirstSemicolon = true;
}
// If there are no minutes then don't add second semicolon
    if(m == "" && h == ""){
     dontAddSecondSemicolon = true;
}
if(m != "" && s == ""){
    dontAddSecondSemicolon = false;
}
// Set the return value of the function based on our parameters
if(dontAddFirstSemicolon == false && dontAddSecondSemicolon == false){
       valueToReturn = h + ':' + m + ':' + s;
        console.log("False false outcome triggered");

}
if(dontAddFirstSemicolon == true && dontAddSecondSemicolon == true){
    valueToReturn = s;
}
if(dontAddFirstSemicolon == true && dontAddSecondSemicolon == false){
    valueToReturn = m + ':' + s;
}
if(dontAddFirstSemicolon == false && dontAddSecondSemicolon == true){
    valueToReturn = h + ':' + m + ':' + s;
}
    // Return our answer
    var timerRemainingGUI = document.getElementById("timerLengthRemainingGUI");
    timerRemainingGUI.innerHTML = valueToReturn;
    // Reset variables to start after we print value
    dontAddFirstSemicolon = false;
    dontAddSecondSemicolon = false;
}
// Set our variables
var printTimerLengthRemaining = true;
var startTimerButton = document.getElementById("startTimer");
/// Code to execute when we click the button to start the timer
startTimerButton.onclick = function(){
    console.log("Start timer button pressed");
    // Get the inputted values for hours, minutes and seconds
    // TODO: send TotalSeconds so that setTimeout in bg js becomes adaptable
timerRunning = true;
var hours = document.getElementById("timerLengthHoursInput").value;
var minutes = document.getElementById("timerLengthMinutesInput").value;
var seconds = document.getElementById("timerLengthSecondsInput").value;
//hoursInSeconds + minutesInSeconds + parseInt(seconds);
// Run them through our function and if it is incorrect set the rest of the code to not execute and display an error message
if(checkForValidInput(hours, minutes, seconds) == false){
    document.getElementById("timerLengthRemainingGUI").innerHTML = "Invalid Input!";
    document.getElementById("timerLengthRemainingGUI").style.color = "red";
}
// If the input was invalid then set the variable to true so the user can try again
delay(1000);
printTimerLengthRemaining = true;
// Exception check
if(hours == ""){
    hours = 0;
}
if(minutes == ""){
    minutes = 0;
}
if(seconds == ""){
    seconds = 0;
}
var totalSeconds = parseInt(hours) * 60 * 60 + parseInt(minutes) * 60 + parseInt(seconds);
console.log("total seconds in popupjs is equal to " + totalSeconds);
chrome.runtime.sendMessage({message: "start BG timer " + totalSeconds},);
getLengthFormatted(hours, minutes, seconds);
var i = 0;
var notificationOptions = {
    type: 'basic',
    title: 'Timer up!',
    message: 'The timer ended',
    priority: 1,
    iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAkZQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////G4xlMwAAAMB0Uk5TABl7l5ZtDoD7WXL99k8QYXh2dMO+c1gKMnU8AQMULKujLhYEFcrlTgs+gq/X7e/ZsYdEE8fkUFW38vS9XBJM7uMCRfj+8dvA2vpJDYxB6+eiZTkbCejquYodpemSMAWU/KRT1rU2OOGtj/eug/UHFwh5hgZA0ovCp3Fs4jM3y8xG3iMk35udEfns3R8gL028d2ecz6Zr0WloSGKy8NPV1J+EzlccWluF2Ilwag9RUgwns7sourTJoW6IoMgtJT1gCld9OwAAAAFiS0dEwWRm724AAAAJcEhZcwAAOpkAADqZAVVg+iYAAAMLSURBVEjHvZX7P1NxGMePS1lokcvCSLsIkSS3iRwmLZWwQqKTkuSyKDW3mFUokW7KJXJJSSVUuuDzp/U1nJ2dbSc/9Or5aZ/P87z3fb7n+Z7voaj/Hw6OTs7r4bRl6yYAF5hDtG0TgKubGXDfvglAvMPDc6cX4O3j6eErMVm7/PwDhBBpYNBuIHiPTL6mFUqE7LVbHRoWvi8iUkT63x91IPrg6q5jDgGxcXb6iU9I5GwaqqTDyRSVcgRItbUGnZaUTqrUGUe9MjO9jmWoidB4Hc86oSE/Qk5a/334KZLIPp2Tmxeq1Ybm5eYEnyHG2Xx3iDKAAn594TnSedH5YrnZKim+ULTaGXOxVHkpjVefd5kkEsrklq78Sj6ZS3kxpXCgLTPJV8mcomOsNxZYcQ2otErIq9xQ7VmzIQN0OnZU12vd4VbHW5kqzQATfYOVN+vr/VlRc4tBIm8OituAnnM0K4AGzuOrBDIVFkAjg6ZmjnYG/DiyJRVMI7c+5g5QS9kHKEegNZCj21QwtAsBxrtQtXE0afkeLQTQ94EKs+xQIt3yVeEDVFwnlB2sKu7Cg4fCQLcBXY9Y1aNBr5YPPKakUinbpzYJmh423Qc8ofjA02d6vT44ZcMhm+hj088BZytgLV7IzE6/eWxWwEv3dcC7wxbQDzhZApJX/aYYMG44TlwgnsFgCSUYJYNg4llVNoRhmTAgG8ZQGat0r5EYJgyEJWJExyp6FKgSBt4Ao5zD46vBmEKoXjYGzThHT0Shc1IIeNuJqAmuMQUoC+3XFyqBKQvH+A4Il9qrl74HIoyW3jSDIbtNTQ5B9IHnzejJDZ1iuz4lltwQM3zX2Epu6I82upJ+SiUvdLt1onkEiHQR822xSyQ5s82UjfAna4h6Sz9zvazxXnJDt7bY7nX2C/kOVM8NzM+YZkrPzA8skGOu+Tpr72mIXZtW7/bsb9+jFxd//PyVzRDZ1CCm7AYdVGBQcz9ZakPBb5oSCnppeqFcZYLUqvK5hiXhclNIupdXfOrqXFeWuyV/r/738Qd24EEt+q6HwwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0yN1QwODoxMzozNSswMTowMAAOgNAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMjdUMDg6MTM6MzUrMDE6MDBxUzhsAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTktMDItMDEgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnQXviyAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NTYzNDkyMTV0W/K8AAAAE3RFWHRUaHVtYjo6U2l6ZQAxMy42S0JCMZLnywAAADx0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2L3NTVEVMVFYvMTkwNC90aW1lcl8xMjEyNDMucG5nUZ4drwAAAABJRU5ErkJggg=='

};
function checkIfTimerDone(){
    if(i == totalSeconds){
        clearInterval(timerTickInterval);
        console.log("Interval cleared");
        return true; 
    }
    else{
        return false;
    }
}
var currentHours = parseInt(hours);
var currentMinutes = parseInt(minutes);
var currentSeconds = parseInt(seconds);
function timerTick(){
    // Code to execute every 1000 ms
    if(checkIfTimerDone() == false && timerRunning == true){
        if(currentSeconds == 0){
            if(currentMinutes == 0){
                currentHours = currentHours - 1;
                currentMinutes = currentMinutes + 60
            }
            currentMinutes = currentMinutes - 1;
            currentSeconds = currentSeconds + 60;

        }
        currentSeconds = currentSeconds - 1;
        getLengthFormatted(currentHours, currentMinutes, currentSeconds);
        i++;
    }
}
const timerTickInterval = setInterval(timerTick, 1000);
}
var stopTimerButton = document.getElementById("stopTimer");
stopTimerButton.onclick = function(){
    if(timerRunning == true){
        chrome.runtime.sendMessage({message: "stop BG timer"},);
        timerRunning = false;
        timerRemainingGUI.innerHTML = "0:00:00";
    }
    else{
        timerRemainingGUI.innerHTML = "No timer running";
    }
}

