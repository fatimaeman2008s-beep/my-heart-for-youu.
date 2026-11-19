const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const finalScreen = document.getElementById("finalScreen");

const openButton = document.getElementById("openButton");
const moreButton = document.getElementById("moreButton");
const backButton = document.getElementById("backButton");

// OPEN THE LETTER

openButton.addEventListener("click", function() {

    welcome.classList.add("hidden");
    letter.classList.remove("hidden");

    window.scrollTo(0, 0);

});

// OPEN THE FINAL SURPRISE

moreButton.addEventListener("click", function() {

    letter.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    window.scrollTo(0, 0);

});

// START AGAIN

backButton.addEventListener("click", function() {

    finalScreen.classList.add("hidden");
    welcome.classList.remove("hidden");

    window.scrollTo(0, 0);

});

// CREATE RANDOM BACKGROUND STARS

const starField = document.getElementById("starField");

for (let i = 0; i < 65; i++) {

    const star = document.createElement("span");

    star.classList.add("star");
    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (Math.random() * 8 + 4) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starField.appendChild(star);

}