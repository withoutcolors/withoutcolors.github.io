// grau

const musicContent = document.getElementById('music');
const playBtn = document.getElementById('music-button');
const audio = document.getElementById('audio');

// song titles
const songs = [
  'grau-technics-trials',
  'grau-technics-trials',
  'grau-technics-trials',
  'grau-technics-trials'];

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