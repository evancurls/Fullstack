

function getRand(){
    return Math.floor(Math.random() * 6) + 1;
}

let randomNum1 = getRand();
let randomNum2 = getRand();
console.log(randomNum1);
console.log(randomNum2);
let src_string1 = "./images/dice" + randomNum1.toString() + ".png" 
let src_string2 = "./images/dice" + randomNum2.toString() + ".png" 

document.querySelector(".img1").setAttribute("src", src_string1);
document.querySelector(".img2").setAttribute("src", src_string2);


if(randomNum1 === randomNum2){
    document.querySelector("h1").textContent = "Draw";
}
else if (randomNum1 > randomNum2){
    document.querySelector("h1").textContent = "Player 1 Wins!!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!!";
}