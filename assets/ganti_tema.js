let fontFam = document.getElementById("fontFamily");
let fontAdd = document.getElementById("fontAdress");
let backNav = document.getElementsByTagName("nav");
let backArt = document.getElementsByTagName("article");
let head = document.getElementsByTagName("header");
let foot = document.getElementsByTagName("footer");

function gantiFont() {
    fontAdd.setAttribute("href", "https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
    fontFam.style.fontFamily = "'Oswald', sans-serif";
}

function gantiBackground() {
    backNav[0].setAttribute("style", "background: #1a75ff;");
    for (const art of backArt){
        art.setAttribute("style", "background: #1a75ff;");
    }

    head[1].setAttribute("style", "background: #1a75ff;");
    foot[0].setAttribute("style", "background: #1a75ff;");
}

let btn = document.getElementById("btn");
let klik = 0;
btn.addEventListener("click", function(event){
    gantiFont();
    gantiBackground();
    ++klik;
    if (klik==2) {
        fontAdd.setAttribute("href", "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
        fontFam.removeAttribute("style");
        backNav[0].removeAttribute("style");
        for (const art of backArt) {
            art.removeAttribute("style");
        }

        head[1].removeAttribute("style");
        foot[0].removeAttribute("style");
    } else {
        klik = 1;
    }
});