const audio = document.getElementById("music_player");
const currDuration = document.getElementById("currDuration");
const slider = document.getElementById("slider");
var pause = document.getElementById("pause_button");
var play = document.getElementById("play_button");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    startplayer();
    startMultiPlayer(trackIndex);
  },
  false
);

audio.addEventListener("loadedmetadata", () => {
  setSlider();
  //updates de duration prompter
  showCurrDuration();
  addTotalDuration();
});

audio.addEventListener("timeupdate", () => {
  setSliderVal();
  showCurrDuration();
  if (audio.currentTime >= audio.duration) {
    audio.currentTime === 0;
  }
});

var player;

function startplayer() {
  player = document.getElementById("music_player");
  player.controls = false;
  pause.classList.add("hidden");
}

function play_aud() {
  audio.play();
  pause.classList.remove("hidden");
  play.classList.add("hidden");
}
function pause_aud() {
  audio.pause();
  play.classList.remove("hidden");
  pause.classList.add("hidden");
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
  var currSeconds = parseInt(audio.currentTime % 60);
  var currMinutes = parseInt(audio.currentTime / 60, 10);
  currDuration.value = "0" + currMinutes + ":" + ("0" + currSeconds);
}

function addTotalDuration() {
  var totalDuration = document.getElementById("totalDuration");
  var seconds = parseInt(audio.duration % 60);
  var minutes = parseInt(audio.duration / 60, 10);

  totalDuration.value = "0" + minutes + ":" + ("0" + seconds);
}


//second player

const playerArray = ["sample1", "sample2", "sample3"];
var aud = document.getElementById("aud");
var trackCurrDuration = document.getElementById("trackDuration");
var trackSlider = document.getElementById("trackSlider");
var pauseBtn = document.getElementById("pauseBtn");
var playBtn = document.getElementById("playBtn");
var prev = document.getElementById("prevBtn");
var next = document.getElementById("nextBtn");
var trackIndex = 0;


//eventListeners

aud.addEventListener("loadedmetadata", () => {
  setTrackSlider();
  //updates de duration prompter
  showTrackCurrDuration();
  addTrackDuration();
});

aud.addEventListener("timeupdate", () => {
  setTrackSliderVal();
  showTrackCurrDuration();
  if (audio.currentTime >= audio.duration) {
    audio.currentTime === 0;
  }
});

//change time of audio when clicking on slider

trackSlider.addEventListener("input", setSliderPos);

function setSliderPos() {
  aud.currentTime = trackSlider.value;
}

//prev and next btns

function changeTrack(n) {
  startMultiPlayer(trackIndex += n)
}
//main function 

function startMultiPlayer (n) {
 
  if (playerArray.length === 0) {
    prev.classList.add("hidden");
    next.classList.add("hidden");
    multiplayer = document.getElementById("multiplayer");
    multiplayer.controls = false;
    pauseBtn.classList.add("hidden");
    aud.setAttribute('src', `./assets/sample1.mp3`)
  } else {
    multiplayer = document.getElementById("multiplayer");
    multiplayer.controls = false;
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    if (n > playerArray.length){trackIndex = 0} 
    if (n < 0) {trackIndex = playerArray.length -1}
    aud.setAttribute('src', `./assets/${playerArray[trackIndex]}.mp3`);
  }
}
//main functionalities 

function playAudio() {
  aud.play();
  pauseBtn.classList.remove("hidden");
  playBtn.classList.add("hidden");
}
function pauseAudio() {
  aud.pause();
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
}

function changevol() {
  aud.volume = document.getElementById("vol").value;
}

//time indicators

function setTrackSlider() {
  trackSlider.setAttribute("max", aud.duration);
}
function setTrackSliderVal() {
  trackSlider.value = aud.currentTime;
}

function showTrackCurrDuration() {
  var currSeconds = parseInt(aud.currentTime % 60);
  var currMinutes = parseInt(aud.currentTime / 60, 10);
  currDuration.value = "0" + currMinutes + ":" + ("0" + currSeconds);
}

function addTrackDuration() {
  var totalDuration = document.getElementById("trackDuration");
  var seconds = parseInt(aud.duration % 60);
  var minutes = parseInt(aud.duration / 60, 10);

  totalDuration.value = "0" + minutes + ":" + ("0" + seconds);
}






