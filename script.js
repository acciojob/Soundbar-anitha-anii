var audioElements = [];

function playSound(soundFile) {
  var audio = new Audio('sounds/' + soundFile);
  audio.play();
  audioElements.push(audio);
}

function stopAllSounds() {
  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
  }
}


