let email = document.getElementById("email");

document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    if (email.value.includes("@") && email.value.includes(".")) {
        alert("parabéns sabe o proprio email " + document.getElementById("nome").value);
    }
})