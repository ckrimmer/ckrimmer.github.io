function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    document.querySelectorAll('nav a').forEach((link) => {
        link.classList.toggle('dark-mode');
    });

    // Toggle the particle animation AND emoji
    const toggleIcon = document.getElementById('toggleDarkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.innerHTML = '&#x2600;&#xFE0F;'; // Sonne
        startParticles();
    } else {
        toggleIcon.innerHTML = '&#x1F319;'; // Mond
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