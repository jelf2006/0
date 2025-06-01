let campoNome = document.getElementById("nome");
let nomeAtual = campoNome.value

document.getElementById("meuFormulario").addEventListener("subimit", function (event){
    event.preventDefault();
    if (campoNome.value === '') {
        alert("vc n botou porra nenhuma");
    } else {
        alert("tu escreveu " + campoNome.value);
    }
})