document.addEventListener("DOMContentLoaded", () => {
    console.log("Site de Postos de Reciclagem carregado.");

    const form = document.getElementById('cadastro-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Cadastro enviado com sucesso!');
            form.reset();
        });
    }
});
