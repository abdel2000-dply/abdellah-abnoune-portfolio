// for adding the typing effect to the text
var typed = new Typed('.typing', {
    strings: ["Software Engineer", "Web Developer", "Full-stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    // startDelay: 1500,
    loop: true
});

// for the table toggle
document.querySelectorAll('#skills tr').forEach(row => {
    row.addEventListener('click', function() {
        document.querySelectorAll('#skills td.content').forEach(td => {
            td.classList.remove('active');
        });
        this.querySelector('td.content').classList.add('active');
    });
});