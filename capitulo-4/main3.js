let x = document.getElementById("myButtom")
let y = document.getElementById("button2")
let z = document.getElementById("button3")


x.addEventListener("click", function() {
    document.getElementById("potato").style.color = "red";
})

y.addEventListener("click", function() {
    document.getElementById("potato").style.color = "green";
})

z.addEventListener("click", function() {
    document.getElementById("potato").style.color = "blue";
})