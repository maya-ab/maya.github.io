
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
