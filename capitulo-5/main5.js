let forms = document.getElementById("meuFormulario");
let checkbox = document.getElementById("meuCheckbox");
let senha = document.getElementById("senha");
let email = document.getElementById("email");
let campoNome = document.getElementById("nome");
let comentario = document.getElementById("feedback");
let opcoes = document.getElementById("meuSelector");

forms.addEventListener("submit", function(e) {
    e.preventDefault();

    let regex = /^.{8,}$/
    if (!regex.test(senha.value)) {
        alert("a senha é pra ter 8 digitos cavalo");
    } else if (!checkbox.checked) {
        alert("esqueceu de aceitar os termos mula");
    } else if (!email.value.includes("@") || !email.value.includes(".")){
        alert("até um jegue sabe o proprio email");
    } else if (nome.value === "") {
        alert("tu n esqueceu o nome n, n to crendo nessa porra");
    } else if(comentario.value === "") {
        alert("bote a porra do comentario, vc acha q tem a opção de n darsua opinião?")
    } else if (opcoes.value === "opção1") {
        alert("discordo, minha mulher é MUITO gostosa. Mas tu tá ficando doido de chamar ela de gostosa? quer apanhar?");
    } else if (opcoes.value === "opção2") {
        alert("sem duvidas, parece até autista cheia de doceas vezeskkkkk");
    } else if (opcoes.value === "opção3") {
        alert("o proprio Einstem, vai tirar mil no enem e entrar pro curso q quiser");
    }
})