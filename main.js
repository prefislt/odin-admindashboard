
let nav = false;

document.querySelector(".nav-btn").addEventListener("click", () => {
    nav = !nav;

    if (nav) {
    document.querySelector(".sidebar").classList.add("nav-unhide");

    document.querySelector("#nav-close").classList.remove("hide");
    document.querySelector("#nav-show").classList.add("hide");
    } else {
        document.querySelector(".sidebar").classList.remove("nav-unhide");

        document.querySelector("#nav-close").classList.add("hide");
        document.querySelector("#nav-show").classList.remove("hide");
    }
})