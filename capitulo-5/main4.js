let forms = document.getElementById("meuFormulario");
let checkbox = document.getElementById("meuCheckbox");

forms.addEventListener("submit", function(e) {
    e.preventDefault();

    if (checkbox.checked) {
        alert("boa escolha(agora q concordon temvolta)");
    } else {
        alert("esqueceu de concordar com os termos");
    }
})