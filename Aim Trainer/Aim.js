let score = 0;
let miss = 0;
const refreshBtn = document.getElementById("btnRefresh");
let x = Math.random() * 700;
let y = Math.random() * 500;
let highscore = localStorage.getItem('highscore');
let time = 30;
let timer = setInterval(function () {
    time--;
    document.getElementById('timer').innerHTML = 'Zeit: ' + time;
}, 1000);

function handleClick() {
  window.location.reload();
}

target.style.left = x + "px";
target.style.top = y + "px";

if (highscore === null) {
    highscore = 0;
}



document.getElementById('highscore').innerHTML =
    'highscore: ' + (localStorage.getItem('highscore') || '-');

function treffer() {

    if(time <= 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = 'Zeit: ' + 'Abgelaufen!'
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        return;
    }

    score++;
    document.getElementById('score').innerHTML = ('Treffer: ' + score);

    if(score > highscore) {


    highscore = score;

    localStorage.setItem("highscore", score );

    document.getElementById("highscore").innerHTML =
        "Highscore: " + score;


}
    

    x = Math.random() * 700;
    y = Math.random() * 500;
    target.style.left = x + "px";
    target.style.top = y + "px";


}



refreshBtn.addEventListener("click", handleClick);