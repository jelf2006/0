let x = document.getElementById("myInput");

x.addEventListener("change", function() {
    console.log("o valor do input foi altera para " + this.value);
})