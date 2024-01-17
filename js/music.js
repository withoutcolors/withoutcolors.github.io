// grau

const musicContent = document.getElementById('music');
const playBtn = document.getElementById('music-button');
const audio = document.getElementById('audio');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

// song titles
const songs = [
  'grau-trials'];

// keep track of song
let songIndex = 0;

// update song details
function loadSong(song) {
  audio.src = `audio/${song}.mp3`;
}

// play song
function playSong() {
  musicContent.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// pause song
function pauseSong() {
  musicContent.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContent.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// time/song update
audio.addEventListener('timeupdate', updateProgress);

// click on progress bar
progressContainer.addEventListener('click', setProgress);
