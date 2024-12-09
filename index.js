let homeCounter = 0
let guestCounter = 0
let homeScore = document.getElementById("home-score")
let guestScore =document.getElementById("guest-score")

function addOneHome() {
    homeCounter+=1
    homeScore.textContent = homeCounter
}

function addTwoHome() {
    homeCounter+=2
    homeScore.textContent = homeCounter
}

function addThreeHome() {
    homeCounter+=3
    homeScore.textContent = homeCounter
}

function addOneGuest() {
    guestCounter+=1
    guestScore.textContent = guestCounter
}

function addTwoGuest() {
    guestCounter+=2
    guestScore.textContent = guestCounter
}

function addThreeGuest() {
    guestCounter+=3
    guestScore.textContent = guestCounter
}