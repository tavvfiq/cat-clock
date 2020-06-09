var wakeuptime = 5;
var afternoon = 11;
var lunchtime = 12;
var naptime = 13;
var evening = 15;
var night = 19;
var partytime;

//show clock
function showClock() {
    var clock = document.getElementById('clock');

    var date = new Date();

    var hours = String(date.getHours());
    var minutes = String(date.getMinutes());
    var seconds = String(date.getSeconds());

    var clocktime = hours + ":" + minutes + ":" + seconds + " !";

    clock.innerText = clocktime;
}

//update clock
function updateClock(){
    var time = new Date().getHours();
    
    var messageText;
    var image = "img/normalcat.jpg";

    var timeEvent = document.getElementById('timeEvent');
    var catImage = document.getElementById('catImage');
    console.log(time);
    if(time == partytime){
        image = "img/partycat.jpg";
        messageText = "Let's Party!!!";
    } else if(time == wakeuptime){
        image = "img/wakeupcat.webp";
        messageText = "Wakeup!";
    } else if(time == lunchtime){
        image = "img/lunchtimecat.png";
        messageText = "It's lunch time!";
    } else if(time < afternoon){
        image = "img/morningcat.jpg";
        messageText = "Good morning!";
    }   else if(time >= evening && time <= night){
        image = "img/eveningcat.png";
        messageText = "Good evening!";
    } else if(time >= night){
        image = "img/nightcat.jpg";
        messageText = "Good night!";
    } else {
        image = "img/normalcat.jpg";
        messageText = "Good afternoon!";
    }

    timeEvent.innerText = messageText;
    catImage.src = image;

    showClock();
}

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var party_status = 0;
var partyButton = document.getElementById('partyButton');

//party button event
function partyEvent(){
    party_status = ~party_status;
    if(party_status){
        partyButton.innerText = "Party Over!";
        partytime = new Date().getHours();
        // partyButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyButton.innerText = "Let's Party!";
        partytime = -1;
        // partyButton.style.backgroundColor = "#222";
    }
}

partyButton.addEventListener('click', partyEvent);

var feedButton = document.getElementById('feedButton');

//feed button event
function feedEvent(){
    var time = new Date().getHours();
    var event = document.getElementById('timeEvent');

    if(time == wakeuptime){
        event.innerText = "Nyamnyamnyam";
    } else if(time == lunchtime){
        event.innerText = "Nyamnyamnyam";
    } else if(time == evening){
        event.innerText = "Nyamnyamnyam";
    } else if(time == partytime){
        event.innerText = "Nyamnyamnyam";
    } else {
        event.innerText = "Not the time yet!";
    }
}

feedButton.addEventListener('click', feedEvent);