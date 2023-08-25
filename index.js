var hint = document.querySelector("#hint");
var stopgame = document.querySelector("a");
var timer = document.getElementById("time");
var bubble = document.getElementById("bottom")
var startButton = document.getElementById("startButton");
var rc = document.getElementById('RC')
var wc = document.getElementById('WC')

var gameStarted = false;

function startGame() {
    randombub();
    score = 0;
    document.querySelector("#score").innerText = score;
    startCountdown(60);
    rhint();
}

var rb = 0;
function rightbubble() {
    rb++
}

var wb = 0;
function worngbubble() {
    wb++
}



function gameover() {
    if (x.matches) { // If media query matches
        bubble.innerHTML = "Game Over" + "<br> " + "Your Score:- " + score + "<br> " + "<br> " + "<br> " + "Click Restart to Play Game " + "<br> " + "<br> "+"Right Click Bubble :- " + rb + "<br> "+"Wrong Click Bubble :- " + wb;
        bubble.style.justifyContent = "center"
        bubble.style.textAlign = "center"
        bubble.style.display = "flex"
        bubble.style.fontSize = "21px"
      } else {
        bubble.innerHTML = "Game Over" + "<br> " + "Your Score:- " + score + "<br> " + "<br> " + "<br> " + "Click Restart to Play Game " + "<br> " + "<br> "+"Right Click Bubble :- " + rb + "<br> "+"Wrong Click Bubble :- " + wb;
        bubble.style.justifyContent = "center"
        bubble.style.textAlign = "center"
        bubble.style.display = "flex"
        bubble.style.fontSize = "36px"
      }
    }
    
    var x = window.matchMedia("(max-width: 425px)")
    var y = window.matchMedia('(min-width:427px) and (max-width: 769px)') 

// Call listener function at run time
// Attach listener function on state
  

// function gameover() {
//     bubble.innerHTML = "Game Over" + "<br> " + "Your Score:- " + score + "<br> " + "<br> " + "<br> " + "Click Restart to Play Game " + "<br> " + "<br> "+"Right Click Bubble :- " + rb + "<br> "+"Wrong Click Bubble :- " + wb;
//     bubble.style.justifyContent = "center"
//     bubble.style.textAlign = "center"
//     bubble.style.display = "flex"
//     bubble.style.fontSize = "36px"
// }


function randombub() { if (x.matches) { // If media query matches
    var all = "";
    for (var i = 1; i <= 54; i++) {
        var random = Math.floor(Math.random() * 10);
        all += `<div class="bubble">${random}</div>`;
    }
    var allnum = document.querySelector("#bottom");
    allnum.innerHTML = all;
  }else if (y.matches) { // If media query matches
    var all = "";
    for (var i = 1; i <= 98; i++) {
        var random = Math.floor(Math.random() * 10);
        all += `<div class="bubble">${random}</div>`;
    }
    var allnum = document.querySelector("#bottom");
    allnum.innerHTML = all;
  } 
  else {
    var all = "";
    for (var i = 1; i <= 133; i++) {
        var random = Math.floor(Math.random() * 10);
        all += `<div class="bubble">${random}</div>`;
    }
    var allnum = document.querySelector("#bottom");
    allnum.innerHTML = all;
  }
}
// function randombub() { if (x.matches) { // If media query matches
//     var all = "";
//     for (var i = 1; i <= 54; i++) {
//         var random = Math.floor(Math.random() * 10);
//         all += `<div class="bubble">${random}</div>`;
//     }
//     var allnum = document.querySelector("#bottom");
//     allnum.innerHTML = all;
//   }else if (y.matches) { // If media query matches
//     var all = "";
//     for (var i = 1; i <= 98; i++) {
//         var random = Math.floor(Math.random() * 10);
//         all += `<div class="bubble">${random}</div>`;
//     }
//     var allnum = document.querySelector("#bottom");
//     allnum.innerHTML = all;
//   } 
//   else {
//     var all = "";
//     for (var i = 1; i <= 176; i++) {
//         var random = Math.floor(Math.random() * 10);
//         all += `<div class="bubble">${random}</div>`;
//     }
//     var allnum = document.querySelector("#bottom");
//     allnum.innerHTML = all;
//   }
// }
    
// function randombub() {
//     var all = "";
//     for (var i = 1; i <= 176; i++) {
//         var random = Math.floor(Math.random() * 10);
//         all += `<div class="bubble">${random}</div>`;
//     }
//     var allnum = document.querySelector("#bottom");
//     allnum.innerHTML = all;
// }

var score = 0;
function scoreadd() {
    score += 10;
    document.querySelector("#score").innerText = score;
}

function scorededuct() {
    score -= 5;
    document.querySelector("#score").innerText = score;
}

var counter;
function startCountdown(seconds) {
    counter = seconds;
    const interval = setInterval(() => {
        timer.innerHTML = counter;
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            timer.innerHTML = "0";
            gameover(x)
        }
    }, 1000);
}

var randomHint;
function rhint() {
    randomHint = Math.floor(Math.random() * 10);
    hint.innerHTML = randomHint;
}
rhint()

startButton.addEventListener("click", function () {
    startGame();
    gameStarted = true; 
});

bubble.addEventListener("click", function (dets) {
    if (gameStarted && counter > 0) {
        details = dets.target.innerText
        if (details == randomHint) { 
            scoreadd()
            rhint()
            randombub()
            RC()
            rightbubble()
        }
        else {
            randombub()
            worngbubble()
            WC()
            scorededuct()
        }
    }
})

function RC() {
    rc.play()
}

function WC() {
    wc.play()
}











