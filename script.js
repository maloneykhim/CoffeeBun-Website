// Play-Pause music code 

var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else {
        track.pause();
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
    controlBtn.className = "play";
});

// Food options code

var state = {
    s: 0,
    d: 0
};

function nextsnack() {
    console.log("inside function nextsnack");
    console.log(state.s);
    var dessert = document.getElementById("snack");
    if (state.s === 0) {
        dessert.setAttribute("class", "dessert1");
        state.s++;
        console.log(state.i);
    }
    else if (state.s === 1) {
        dessert.setAttribute("class", "dessert2");
        state.s++;
        console.log(state.s);
    }
    else if (state.s === 2) {
        dessert.setAttribute("class", "dessert3");
        state.s++;
        console.log(state.s);
    }
    else if (state.s === 3) {
        dessert.setAttribute("class", "dessert4");
        state.s = 0;
    }
}

window.onload = init;

function init() {
    console.log("window has loaded");
    state.s = 0;
}

function nextdrink() {
    console.log("inside function nextdrink");
    console.log(state.d);
    var dessert = document.getElementById("beverage");
    if (state.d === 0) {
        dessert.setAttribute("class", "beverage1");
        state.d++;
        console.log(state.d);
    }
    else if (state.d === 1) {
        dessert.setAttribute("class", "beverage2");
        state.d++;
        console.log(state.d);
    }
    else if (state.d === 2) {
        dessert.setAttribute("class", "beverage3");
        state.d++;
        console.log(state.d);
    }
    else if (state.d === 3) {
        dessert.setAttribute("class", "beverage4");
        state.d = 0;
    }
}

window.onload = init;

function init() {
    console.log("window has loaded");
    state.d = 0;
}

// Pet the rabbit code 

function swapLatte() {
    if (document.getElementById("bunnypetlatte").src.endsWith("assets/lattenormal.gif") == true) {
        document.getElementById("bunnypetlatte").src = "assets/lattehappy.gif";

    }
    else if (document.getElementById("bunnypetlatte").src.endsWith("assets/lattehappy.gif") == true) {
        document.getElementById("bunnypetlatte").src = "assets/lattenormal.gif";

    }
}

function swapLatte2() {
    if (document.getElementById("bunnypetlatte").src.endsWith("assets/lattehappy.gif") == true) {
        document.getElementById("bunnypetlatte").src = "assets/lattenormal.gif";

    }
    else if (document.getElementById("bunnypetlatte").src.endsWith("assets/lattenormal.gif") == true) {
        document.getElementById("bunnypetlatte").src = "assets/lattehappy.gif";

    }
}

function swapBean() {
    if (document.getElementById("bunnypetbean").src.endsWith("assets/beannormal.gif") == true)  //Comparison
    {
        document.getElementById("bunnypetbean").src = "assets/beanhappy.gif"; //assignment

    }
    else if (document.getElementById("bunnypetbean").src.endsWith("assets/beanhappy.gif") == true) {
        document.getElementById("bunnypetbean").src = "assets/beannormal.gif";

    }
}

function swapBean2() {
    if (document.getElementById("bunnypetbean").src.endsWith("assets/beanhappy.gif") == true)  //Comparison
    {
        document.getElementById("bunnypetbean").src = "assets/beannormal.gif"; //assignment

    }
    else if (document.getElementById("bunnypetbean").src.endsWith("assets/beanhappy.gif") == true) {
        document.getElementById("bunnypetbean").src = "assets/beannormal.gif";

    }
}


function swapCocoa() {
    if (document.getElementById("bunnypetcocoa").src.endsWith("assets/cocoanormal.gif") == true) {
        document.getElementById("bunnypetcocoa").src = "assets/cocoahappy.gif";

    }
    else if (document.getElementById("bunnypetcocoa").src.endsWith("assets/cocoahappy.gif") == true) {
        document.getElementById("bunnypetcocoa").src = "assets/cocoanormal.gif";

    }
}

function swapCocoa2() {
    if (document.getElementById("bunnypetcocoa").src.endsWith("assets/cocoahappy.gif") == true) {
        document.getElementById("bunnypetcocoa").src = "assets/cocoanormal.gif";

    }
    else if (document.getElementById("bunnypetcocoa").src.endsWith("assets/cocoahappy.gif") == true) {
        document.getElementById("bunnypetcocoa").src = "assets/cocoanormal.gif";

    }
}


function swapMocha() {
    if (document.getElementById("bunnypetmocha").src.endsWith("assets/mochanormal.gif") == true) {
        document.getElementById("bunnypetmocha").src = "assets/mochahappy.gif";

    }
    else if (document.getElementById("bunnypetmocha").src.endsWith("assets/mochahappy.gif") == true) {
        document.getElementById("bunnypetmocha").src = "assets/mochahappy.gif";

    }
}

function swapMocha2() {
    if (document.getElementById("bunnypetmocha").src.endsWith("assets/mochahappy.gif") == true) {
        document.getElementById("bunnypetmocha").src = "assets/mochanormal.gif";

    }
    else if (document.getElementById("bunnypetmocha").src.endsWith("assets/mochahappy.gif") == true) {
        document.getElementById("bunnypetmocha").src = "assets/mochanormal.gif";

    }
}






