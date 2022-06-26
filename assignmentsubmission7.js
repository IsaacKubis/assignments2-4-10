// JavaScript source code
var noon = 12;
var night = 18;
var morning = 0;

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < noon == Time > morning) {
        Reply = "It is morning time!";
    } else if (Time > noon == Time < night) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    console.log(Time);
    console.log(Reply);
}