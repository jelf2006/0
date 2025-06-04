let campoNome = document.getElementById("nome");

document.getElementById("meuFormulario").addEventListener('submit', function (event){
    event.preventDefault();
    if (campoNome.value === '') {
        alert("vc n botou porra nenhuma");
        console.log("aaaa");
    } else {
        alert("tu escreveu " + campoNome.value);
    }
})