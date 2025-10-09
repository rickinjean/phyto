document.addEventListener("DOMContentLoaded", function() {
    // Carregar o cabeçalho
    fetch("../admin-header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("admin-header-placeholder").innerHTML = data;
        });

    // Carregar o rodapé
    fetch("../admin-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("admin-footer-placeholder").innerHTML = data;
        });
});
