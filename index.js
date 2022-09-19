//Try = 5
//Kick = 3
//Penalty = 3

let addHomeTotal = 0;
let addGuestTotal = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

//Do Home Score
function addHomeTry(){
    addHomeTotal += 5;
    homeScore.innerHTML = addHomeTotal;
}

function addHomeKick(){
    addHomeTotal += 3;
    homeScore.innerHTML = addHomeTotal;
}

function addHomePenalty(){
    addHomeTotal += 3;
    homeScore.innerHTML = addHomeTotal;
}

//Do Guest Score
function addGuestTry(){
    addGuestTotal += 5;
    guestScore.innerHTML = addGuestTotal;
}

function addGuestKick(){
    addGuestTotal += 3;
    guestScore.innerHTML = addGuestTotal;
}

function addGuestPenalty(){
    addGuestTotal += 3;
    guestScore.innerHTML = addGuestTotal;
}

//End the game
function endGame(){
    if (addHomeTotal > addGuestTotal)
    {
        alert("Home Team Won the Game " + addHomeTotal + " - " + addGuestTotal);
    }
    else if (addGuestTotal > addHomeTotal)
    {
        alert("The Guests Won the Game  " + addGuestTotal + " - " + addHomeTotal);
    }
    else
    {
        alert("The Game Ended in a Tie  " + addGuestTotal + " - " + addHomeTotal);
    }
    
    addHomeTotal = 0;
    addGuestTotal = 0;

    homeScore.innerHTML = "00";
    guestScore.innerHTML = "00";
}
