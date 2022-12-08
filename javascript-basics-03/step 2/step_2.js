var a = document.querySelectorAll("a")
var div = document.getElementById("texte")
a.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.id == 'show') {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
        }
    })
});