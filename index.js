var noOfDrums = document.querySelectorAll(".drum").length;


//for adding eventlistener in all the buttons.
for(var i=0; i<noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


// Detecting buttonpress
function handleClick() {

  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


// Detecting keypress
document.addEventListener("keydown", function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
             var crash = new Audio("crash.mp3"); // for adding audio play .
             crash.play();
             break;
    case "a":
             var tom1 = new Audio("tom-1.mp3"); // for adding audio play .
             tom1.play();
             break;
    case "s":
             var tom2 = new Audio("tom-2.mp3"); // for adding audio play .
             tom2.play();
             break;
    case "d":
             var tom3 = new Audio("tom-3.mp3"); // for adding audio play .
             tom3.play();
             break;
    case "j":
             var tom4 = new Audio("tom-4.mp3"); // for adding audio play .
             tom4.play();
             break;
    case "k":
             var snare = new Audio("snare.mp3"); // for adding audio play .
             snare.play();
             break;
    case "l":
             var kick = new Audio("kick-bass.mp3"); // for adding audio play .
             kick.play();
             break;
    default:
            console.log(buttonInnerHTML);

  }
}

// Adding button Animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." +currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
