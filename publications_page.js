window.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".csl-entry");
    console.log("Found", entries.length, "entries");

    entries.forEach((entry, i) => {
        entry.setAttribute("data-number", entries.length - i);
    });
});