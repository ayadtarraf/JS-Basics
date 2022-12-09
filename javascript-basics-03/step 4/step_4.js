var pass = document.querySelector("#password")
var conf = document.querySelector("#confirmation")
var btn = document.querySelector("button")


btn.addEventListener("click", function() {
    if (pass.value != conf.value) {
        pass.style.border = "1px solid red"
        conf.style.border = "1px solid red"
    }
})