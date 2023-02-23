let container = document.querySelector("#container");
let Perso = document.querySelector("#Perso");
let mummy = document.querySelector("#mummy");
let comete = document.querySelector("#comete");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let gameWon = document.querySelector("#gameWon");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        playerScore = 0;
        mummy.classList.add("mummyActive");
        comete.classList.add("cometeActive");
        //score
        interval = setInterval(scoreCounter, 200);
    }
});

//jump Your Character
window.addEventListener("keydown", (e) => {

    if (e.key == "ArrowUp")
        if (Perso.classList != "persoJump") {
            Perso.classList.add("persoJump");
            //   remove class after 0.5 seconds
            setTimeout(() => {
                Perso.classList.remove("persoJump");
            }, 700);
        }
});
//crounch Your Character
window.addEventListener("keydown", (e) => {

    if (e.key == "ArrowDown")
        if (Perso.classList != "persoCrouched") {
            Perso.classList.add("persoCrouched");
            
            //   remove class after 0.5 seconds
            setTimeout(() => {
                Perso.classList.remove("persoCrouched");
            }, 700);
        }
});
// Stop blocks animations once jumped over by the player
function AnimationEnd(elementId) {
    document.querySelector(elementId).addEventListener("Animationend", function() {
        document.querySelector(elementId).style.visibility = "hidden";
    });
    AnimationEnd("#mummy");
    AnimationEnd("#comete");
}
// End of the game
let colisionMummy = setInterval(() => {
    let PersoBottom = parseInt(getComputedStyle(Perso).getPropertyValue("bottom"));
    

    let mummyLeft = parseInt(getComputedStyle(mummy).getPropertyValue("left"));
    

    if (PersoBottom <= 90 && mummyLeft >= 20 && mummyLeft <= 145) {
        

        gameOver.style.display = "block";
        mummy.classList.remove("mummyActive");
        comete.classList.remove("cometeActive");
        scoreCounter.remove
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);


let colisionComete = setInterval(() => {
    let PersoBottom = parseInt(getComputedStyle(Perso).getPropertyValue("bottom"));
    let cometeBottom = parseInt(getComputedStyle(comete).getPropertyValue("bottom"));
    let cometeLeft = parseInt(getComputedStyle(comete).getPropertyValue("left"));

    if (PersoBottom + 160 >= cometeBottom && PersoBottom <= cometeBottom + 80 && cometeLeft >= 50 && cometeLeft <= 200) {
        gameOver.style.display = "block";
        mummy.classList.remove("mummyActive");
        comete.classList.remove("cometeActive");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);

let resultWon = setInterval(() => {
    if (playerScore == 100) {
        gameWon.style.display = "block";
        mummy.classList.remove("mummyActive");
        comete.classList.remove("cometeActive");
        clearInterval(interval);
        playerScore = 100;
        }    
}, 10);
