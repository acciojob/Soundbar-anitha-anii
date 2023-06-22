
let audioElement;

function playSound(filename) {
  if (audioElement) {
    audioElement.pause();
  }

  audioElement = new Audio('sounds/' + filename);
  audioElement.play();
}

function stopSound() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
}




