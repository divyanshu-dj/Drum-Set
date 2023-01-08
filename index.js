for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    new Audio(audio[i]).play();
    buttonFlash(i);
  });
}

let audio = [
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
  "sounds/crash.mp3",
  "sounds/snare.mp3",
  "sounds/kick-bass.mp3",
];

document.addEventListener("keypress",function(event){

  buttonFlash(event.key);
  
  switch (event.key) {
    case 'w':
      new Audio(audio[0]).play();
      break;
    case 'a':
      new Audio(audio[1]).play();
      break;
    case 's':
      new Audio(audio[2]).play();
      break;
    case 'd':
      new Audio(audio[3]).play();
      break;
    case 'j':
      new Audio(audio[4]).play();
      break;
    case 'k':
      new Audio(audio[5]).play();
      break;
    case 'l':
      new Audio(audio[6]).play();
      break;
    
    default:
      
      break;
  }
});


function buttonFlash(currentKey){
  let activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function(){activeButton.classList.remove("pressed");},100);
}

