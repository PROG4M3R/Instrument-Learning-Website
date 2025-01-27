document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get("section");

  if (section === "1") {
    document.getElementById("section-1").style.display = "block";
  } else if (section === "2") {
    document.getElementById("section-2").style.display = "block";
  }else if (section === "3") {
    document.getElementById("section-3").style.display = "block";
  }else if (section === "4") {
    document.getElementById("section-4").style.display = "block";
  }else if (section === "5") {
    document.getElementById("section-5").style.display = "block";
  }
});



const playButtons = document.querySelectorAll('.play');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoContainer = button.nextElementSibling; 
    
    if (videoContainer.style.display === 'none' || !videoContainer.style.display) {
      videoContainer.style.display = 'block';
      button.innerHTML='Hide Video';
    } else {
      videoContainer.style.display = 'none';
      button.innerHTML='Play Video';
    }
    
  });
});


const mainDropdownToggle = document.getElementById('main-dropdown-toggle');
const mainDropdown = document.getElementById('main-dropdown');

mainDropdownToggle.addEventListener('click', () => {
  mainDropdown.style.display =
    mainDropdown.style.display === 'block' ? 'none' : 'block';
});

// Sub-dropdown toggles
const subDropdownToggles = document.querySelectorAll('.sub-dropdown-toggle');

subDropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', event => {
    const subDropdown = event.target.nextElementSibling;
    subDropdown.style.display =
      subDropdown.style.display === 'block' ? 'none' : 'block';
  });
});