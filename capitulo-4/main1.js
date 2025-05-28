let x = document.getElementById("link");
let y = document.getElementsByClassName("banana")[0];
let z = document.getElementsByTagName("button")[0];
let w = document.querySelector("p");
let h = document.querySelector("input");

x.style.color = "red";
y.style.color = "green";
z.style.color = "blue";
w.style.color = "yellow";
x.textContent = "aaaa";
h.addEventListener("change", function() {
    x.textContent = "vc pesquisou "+ this.value ;
})