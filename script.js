var audioElements = document.getElementsByTagName('audio');
var currentSound = null;

function playSound(keyCode) {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }

  for (var i = 0; i < audioElements.length; i++) {
    var audio = audioElements[i];
    if (audio.dataset.key === keyCode) {
      audio.play();
      currentSound = audio;
      break;
    }
  }
}

function stopSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
  }
}



