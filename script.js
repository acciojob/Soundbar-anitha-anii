//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('.btn');
  let stopButton = document.querySelector('.stop');
  let audio = new Audio();
  let isPlaying = false;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let soundFile = button.textContent.trim() + '.mp3';
      audio.src = 'sounds/' + soundFile;
      audio.play();
      isPlaying = true;
    });
  });

  stopButton.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
    }
  });
});
