$(
    function(){
    var aud = $('audio')[0];
    $('.play-pause').on('click', function(){
    if (aud.paused) {
      aud.play();
      $('.play-pause').removeClass('fa-play');
      $('.play-pause').addClass('fa-pause');
    }
    else {
      aud.pause();
      $('.play-pause').removeClass('fa-pause');
      $('.play-pause').addClass('fa-play');
    }
    
  })
     aud.ontimeupdate = function(){
      $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
    }
  })