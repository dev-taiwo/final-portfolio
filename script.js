console.log("Portfolio loaded!");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Project clicked!");
    });
});