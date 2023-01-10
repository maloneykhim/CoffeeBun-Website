let myVariable = "Secret Page Name";
let myPicture = "network.jpg";
let myOtherPicture = "illustration1.png";

let pictureOffset = 0;

const soundFile = new Audio("sound.wav");

document.addEventListener("keydown", keyboardEvent);

setInterval(movePicture, 20);

function onLoad() {
    document.getElementsByClassName("specialparagraph");

    for (let i = 0; i < array.length; i++) {
        console.log(i);
        array[i].innerHTML = "hello this is the first array entry";
    }
}

function mouseDown() {
    dragging = true;
}

function mouseMove(event) {
    if (dragging) {
        console.log("mousemove");
        horizontalOffset = event.pageX;
        horizontalOffset = event.pageY;
    }
}

function clickButton() {

    soundFile.play();

    document.getElementById("variableTitle").innerHTML = myVariable;

    document.getElementById("mainpicture").src = "network.jpg";

    document.getElementById("variableParagraph").style.textAlign = "center";

    document.getElementById("variableParagraph").style.fontSize = "3em";


    //This is a comment

    myVariable = "New Even More Secret Page Name";

    let tempVariable = myPicture;
    myPicture = myOtherPicture;
    myOtherPicture = tempVariable;

    console.log("hello");

}

function movePicture() {

    if (horizontalOffset >= 400) {
        clearInterval(movePicture);
    }
    else {
        pictureOffset = pictureOffset + 1;
    }


    document.getElementById("mainpicture").style.marginLeft = horizontalOffset + "px";
    document.getElementById("mainpicture").style.marginTop = verticalOffset + "px";


}

function keyboardEvent() {
    if (event.keyCode == 32) {
        window.alert("hello world!");
    }
    else if (event.key == "w") {
        verticalOffset = verticalOffset + 30;

    }
    else if (event.key == "a" && horizontalOffset > -200) {
        horizontalOffset = horizontalOffset - 30;
    }
    else if (event.key == "s") {
        verticalOffset = verticalOffset - 30;
    }
    else if (event.key == "d" && horizontalOffset < -200) {
        horizontalOffset = horizontalOffset + 30;
    }
}

function youWin() {
    window.alert("Congrats you made it!");
}