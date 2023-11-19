// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClass = this.classList[0];
        if (buttonClass === 'name') {
            speakText('Amera');
        } else {
            makeSound(buttonClass);
        }
        buttonAnimation(buttonClass);
    });
}

// Sound function
function makeSound(key) {
    switch (key) {
        case "a":
            var letterA = new Audio("./sounds/letter-A.mp3");
            letterA.play();
            break;
        case "m":
            var letterM = new Audio("./sounds/letter-M.mp3");
            letterM.play();
            break;
        case "i":
            var letterI = new Audio("./sounds/letter-I.mp3");
            letterI.play();
            break;
        case "r":
            var letterR = new Audio("./sounds/letter-R.mp3");
            letterR.play();
            break;
        case "s":
            var letterSA = new Audio("./sounds/letter-SA.mp3");
            letterSA.play();
            break;
        default:
            break;
    }
}

// Text-to-Speech function
function speakText(text) {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text);
    var voices = synth.getVoices();
    var selectedVoice = voices.find(function (voice) {
        return voice.name.toLowerCase().includes('female') && voice.lang.includes('en');
    });

    utterThis.voice = selectedVoice;
    utterThis.rate = 1; // You can adjust the speaking rate
    synth.speak(utterThis);
}

// Animation function
// Function to create heart element
function createHeartElement() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    return heart;
  }
  
  // Function to handle button animation
  function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
  
    // Add hearts to the button
    for (let i = 0; i < 5; i++) {
      const heart = createHeartElement();
      const randomX = Math.floor(Math.random() * 100); // Random X position
      const randomY = Math.floor(Math.random() * 100); // Random Y position
      heart.style.left = randomX + "%";
      heart.style.top = randomY + "%";
      activeButton.appendChild(heart);
  
      // Remove hearts after animation
      setTimeout(function () {
        heart.remove();
      }, 1000); // Adjust duration to match animation duration
    }
  
    // Remove pressed class after a short delay
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 300);
  }
  
  // Event listener for button click
  const drumButtons = document.querySelectorAll(".drum");
  drumButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var buttonClass = this.classList[0];
      buttonAnimation(buttonClass);
    });
  });
  