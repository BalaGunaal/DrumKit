alert("welcome");
var num = document.querySelectorAll(".drum").length;


// detecting with buttons

for (var i = 0; i < num; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
      var hey1 = this.innerHTML;
      sound(hey1);
      animation(hey1);
  });

}

// detecting with key

document.addEventListener("keypress",function(event){
var key = event.key;
  sound(event.key);
  animation(event.key);

})

// func

function sound(hey1) {



  switch (hey1) {
    case "w":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default: console.log(buttonInnerHTML);

  }


}


// animation

function animation(currentkey) {
  var activeButton= document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
