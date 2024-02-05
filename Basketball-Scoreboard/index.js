const homeBtns = document.querySelectorAll(".home button"),
    guestBtns = document.querySelectorAll(".guest button"),
    homePointsElement = document.querySelector(".home .team-points"),
    guestPointsElement = document.querySelector(".guest .team-points"),
    resetBtn = document.querySelector(".reset-btn"),
    head = document.querySelector(".who-is-head");

const btn = document.querySelector("button");

let homePoints, guestPoints;
homePoints = guestPoints = 0;

homeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let clickedBtn = e.target;
        const pointsToAdd = parseInt(clickedBtn.getAttribute("data-points"));
        homePoints += pointsToAdd;
        console.log(homePoints);
        homePointsElement.textContent = homePoints;
        whoIsHead();
    })
})

guestBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let clickedBtn = e.target;
        const pointsToAdd = parseInt(clickedBtn.getAttribute("data-points"));
        guestPoints += pointsToAdd;
        console.log(guestPoints);
        guestPointsElement.textContent = guestPoints;
        whoIsHead();
    })
})

resetBtn.addEventListener("click" , function() {
    homePoints = guestPoints = 0;
    homePointsElement.textContent = guestPointsElement.textContent = 0;
    head.textContent = "Everyone is 0";
    head.style.color = "yellow";
})

function whoIsHead () {
    if(homePoints > guestPoints) {
        head.textContent = "Home is Ahead 😃"
        head.style.color = "green";
    } else if(homePoints < guestPoints) {
        head.textContent = "Guest is Ahead! 😣"
        head.style.color = "red";
    } else {
        head.textContent = "Equlity ⚖"
        head.style.color = "yellow";
    }
} 