function playSound(filename) {
  var audio = new Audio('sounds/' + filename);
  audio.play();
}

function stopSound() {
  var audioElements = document.getElementsByTagName('audio');
  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
  }
}





