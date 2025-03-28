
document.querySelectorAll(".skill").forEach((skill) => {
    skill.addEventListener("click", () => {
        skill.classList.toggle("flipped");
    });
});
