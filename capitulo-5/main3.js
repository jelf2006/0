let senha = document.getElementById("senha");

document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();
    let regex = /^.{8,}$/;

    if (regex.test(senha.value)) {
        alert("boa meu fi, tua senha segue os padrões");
    } else {
        alert("meu fi, é pra ter mais de 8 digitos");
    }
})