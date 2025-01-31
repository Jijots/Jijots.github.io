document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".change-color-btn");
    const resume = document.querySelector(".resume-container");

    button.addEventListener("click", function () {
        resume.classList.toggle("alt-mode");
    });

});
