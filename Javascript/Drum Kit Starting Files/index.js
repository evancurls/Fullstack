
let drumButtons = document.querySelectorAll(".drum");
let numButtons = drumButtons.length
for(let i = 0; i < numButtons; i++){
    drumButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
    const buttonHTML = this.innerHTML;
    console.log("Clicked");
    console.log(this);
    handleKeys(buttonHTML);
    buttonAnimation(buttonHTML);
    //const soundByte = new Audio();
    //soundByte.play();
}

function handleKeys(buttonKey){
    switch (buttonKey) {
        case "w":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    handleKeys(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(key){
    console.log("button animation called");
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    const TIMEOUT = 100;
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, TIMEOUT);
}