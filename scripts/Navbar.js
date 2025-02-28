const dropdownMenu = document.getElementById('dropdownMenu');
const menuButton = document.getElementById('menuButton');

// Toggle menu visibility
menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Smooth scroll to section
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        dropdownMenu.classList.remove('active'); // Hide menu after selection
    });
});
