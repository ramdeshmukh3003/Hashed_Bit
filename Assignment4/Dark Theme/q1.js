document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', function () {
        bodyElement.classList.toggle('dark-theme');
    });
});
