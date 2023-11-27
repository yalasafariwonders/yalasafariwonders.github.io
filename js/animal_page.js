const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const seekBar = document.getElementById('seek-bar');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');

// Update the duration display when the audio metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    durationElement.textContent = formatTime(audio.duration);
});

// Update the current time display as the audio plays
audio.addEventListener('timeupdate', () => {
    currentTimeElement.textContent = formatTime(audio.currentTime);
    seekBar.value = (audio.currentTime / audio.duration) * 100;})
