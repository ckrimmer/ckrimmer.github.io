function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    document.querySelectorAll('nav a').forEach((link) => {
        link.classList.toggle('dark-mode');
    });

    // Toggle the particle animation AND emoji
    const toggleIcon = document.getElementById('toggleDarkModeIcon');
    const toggleGit = document.getElementById('toggleGitIcon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.innerHTML = '&#x2600;&#xFE0F;'; // Sonne
        toggleGit.innerHTML = '<img src="/images/icons/3259374_github_media_social_icon.png" class="ficon" alt="Github">'; //SpaceGit
        startParticles();
    } else {
        stopParticles();
    }

    // Speichere den aktuellen Modus im Local Storage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

window.onload = function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        toggleDarkMode(); // Setzt den Dark Mode beim Laden der Seite, falls er aktiviert ist
    }
}
