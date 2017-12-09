$(function() {
  $('.end').hide();

    var synth = new (window.AudioContext || window.webkitAudioContext)(),
      oscillator = synth.createOscillator(),
      gain = synth.createGain(),
      keys = document.querySelectorAll('input');
  oscillator.type = 'triangle'
  oscillator.connect(gain)
  gain.connect(synth.destination)
  gain.gain.value = 0
  oscillator.start()
  for (i=0;i<keys.length;i++){
    var boop = function(num){
      oscillator.frequency.value = num*10
      gain.gain.value = 1
      setTimeout(function(){
        gain.gain.value = 0
      },500)
    }

    var noteCount = 0;
    var play = function(e){
      noteCount = noteCount + 1;
      e.preventDefault()
      var note = Math.random()*15 + noteCount*3;
      boop(note);

      if (noteCount > 25) {
        $('.end').show();
        alert('Goed gezongen!');
        $('.sing').hide();
      }
    };

    keys[i].addEventListener('click',play)
    keys[i].addEventListener('touchstart',play)
    keys[i].addEventListener('touchmove',play)
  }
});