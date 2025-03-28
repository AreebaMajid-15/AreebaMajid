const roles = [
    "Front-end Developer",
    "Web Designer",

    "Creative Coder",
    
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed
const erasingSpeed = 50; // Erasing speed
const pauseBetweenWords = 2000; // Pause before erasing
const changingTextElement = document.querySelector('.changing-text');

function typeText() {
    if (charIndex < roles[roleIndex].length) {
        changingTextElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, pauseBetweenWords);
    }
}

function eraseText() {
    if (charIndex > 0) {
        changingTextElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing effect on page load
typeText();

// function showContact() {
//     alert("Contact me at: areebamajid@example.com");
// }

document.getElementById("HomeResume").addEventListener("click", function() {
    const resumeUrl = "https://drive.google.com/file/d/1nxYb6bCnenEoozdVCttTSAF-PzbI9vDo/view?usp=sharing";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Try downloading the file
    fetch(resumeUrl)
        .then(response => response.blob()) // Convert response to a blob
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Areeba-Majid.pdf"; // Set a custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error("Download failed:", error));
});


function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}