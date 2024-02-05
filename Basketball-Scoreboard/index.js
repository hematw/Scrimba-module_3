const homeBtns = document.querySelectorAll(".home button"),
    guestBtns = document.querySelectorAll(".guest button"),
    homePointsElement = document.querySelector(".home .team-points"),
    guestPointsElement = document.querySelector(".guest .team-points"),
    resetBtn = document.querySelector(".reset-btn");

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
    })
})

guestBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let clickedBtn = e.target;
        const pointsToAdd = parseInt(clickedBtn.getAttribute("data-points"));
        guestPoints += pointsToAdd;
        console.log(guestPoints);
        guestPointsElement.textContent = guestPoints;
    })
})

resetBtn.onclick = function() {
    homePoints = guestPoints = 0;
    homePointsElement.textContent = guestPointsElement.textContent = 0;
}