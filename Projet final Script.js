document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");

    if (name && email && message) {
        status.textContent = "Message envoyé avec succès ✔";
        this.reset();
    } else {
        status.textContent = "Veuillez remplir tous les champs.";
        status.style.color = "red";
    }
});