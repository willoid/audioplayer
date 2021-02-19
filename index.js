const audio = document.getElementById("music_player");
const currDuration = document.getElementById("currDuration");
const slider = document.getElementById("slider");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    startplayer();
  },
  false
);

audio.addEventListener("loadedmetadata", () => {
  setSlider();
  //updates de duration prompter
  showCurrDuration();
  addTotalDuration();
});

audio.addEventListener("timeupdate", () => { setSliderVal();
  showCurrDuration();
});


var player;

function startplayer() {
  player = document.getElementById("music_player");
  player.controls = false;
}

function play_aud() {
  audio.play();
}
function pause_aud() {
  audio.pause();
}
function stop_aud() {
  audio.pause();
  audio.currentTime = 0;
}
function change_vol() {
  audio.volume = document.getElementById("change_vol").value;
}

//slider



function setSlider() {
  slider.setAttribute("max", audio.duration);
}
function setSliderVal() {
  slider.value = audio.currentTime;
}
//change audio position

slider.addEventListener("input", setPos);
function setPos() {
  player.currentTime = slider.value;
}

function showCurrDuration() {
  var currSeconds = audio.currentTime % 60;
  var currMinutes = Math.floor(audio.currentTime / 60);
  currDuration.value =
    ("0" + currMinutes).substr(-2) + ":" + ("0" + currSeconds).substr(-2);
}

function addTotalDuration() {
  var totalDuration = document.getElementById("totalDuration");
  var seconds = audio.duration % 60;
  var minutes = Math.floor(audio.duration / 60);

  totalDuration.value =
    ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2);
}
