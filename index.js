var keyCount = document.querySelectorAll(".key").length;
for (var i = 0; i < keyCount; i++) {
  // creating 'EventListener' to make the sound while clicking with mouse
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    console.log("Button clicked: " + buttonInnerHTML); // Debug
    makeSound(buttonInnerHTML);
  });
}

// creating 'EventListener' to make the sound while clicking with Keyboard
document.addEventListener("keypress", function(event) {
  console.log("Key pressed: " + event.key); // Debug
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("Sounds/Key_1.mp3");
      break;
    case "s":
      var audio = new Audio("Sounds/Key_2.mp3");
      break;
    case "d":
      var audio = new Audio("Sounds/Key_3.mp3");
      break;
    case "f":
      var audio = new Audio("Sounds/Key_4.mp3");
      break;
    case "g":
      var audio = new Audio("Sounds/Key_5.mp3");
      break;
    case "h":
      var audio = new Audio("Sounds/Key_6.mp3");
      break;
    case "j":
      var audio = new Audio("Sounds/Key_7.mp3");
      break;
    case "k":
      var audio = new Audio("Sounds/Key_8.mp3");
      break;
    case "l":
      var audio = new Audio("Sounds/Key_9.mp3");
      break;
    case ";":
    case "semicolon": // Handle different event.key values for semicolon
      var audio = new Audio("Sounds/Key_10.mp3");
      break;
    default:
      console.log("Unhandled key: " + key); // Debug
      return; // Exit the function if the key is unhandled
  }

  audio.play(); // Play the audio for handled keys
}


document.getElementById("alertLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  alert("These keyboard sounds are intended for recreational use and serve as a demonstration of programming proficiency, rather than for professional application.!");
});
