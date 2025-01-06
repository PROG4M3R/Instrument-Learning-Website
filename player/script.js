const playButtons = document.querySelectorAll('.play');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoContainer = button.nextElementSibling; // Access the corresponding video container
    if (videoContainer.style.display === 'none' || !videoContainer.style.display) {
      videoContainer.style.display = 'block';
    } else {
      videoContainer.style.display = 'none';
    }
  });
});
