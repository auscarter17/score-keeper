let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

//home score functions
function homeScoreAdd1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore; 
};

function homeScoreAdd2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore; 
};

function homeScoreAdd3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore; 
};

// guest score functions
function guestScoreAdd1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore; 
};

function guestScoreAdd2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore; 
};

function guestScoreAdd3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore; 
};