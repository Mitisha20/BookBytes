// JavaScript for rotating featured artisan profiles
let currentIndex = 0;
const profiles = document.querySelectorAll('.profile-card');

function rotateProfiles() {
    profiles[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % profiles.length;
    profiles[currentIndex].style.display = 'block';
}

// Rotate profiles every 5 seconds
setInterval(rotateProfiles, 5000);
