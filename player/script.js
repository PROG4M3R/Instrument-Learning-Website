const playButton = document.querySelector('.play');
const videoContainer = document.getElementById('video-container');

playButton.addEventListener('click', () => {
    if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }
});
