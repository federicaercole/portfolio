const menuButton = document.querySelector("#toggle");
const span = menuButton.querySelector("span");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded");

    if (expanded === "true") {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("show-menu");
        nav.classList.remove("show-menu");
        span.textContent = "Apri menu";
    } else {
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.classList.add("show-menu");
        nav.classList.add("show-menu");
        span.textContent = "Chiudi menu";
    }
});