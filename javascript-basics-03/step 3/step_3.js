// var green = document.querySelector(".green")
// var red = document.querySelector(".red")
// var blue = document.querySelector(".blue")

// green.addEventListener("click", function() {
//     document.getElementById("text").style.color = "green"
// })


var color = document.querySelectorAll("div .color")
var text = document.getElementById("text")

color.forEach(e => { 
    e.addEventListener("click", (e) => {
        if (e.target.className == "color green") {
            text.style.color = "green"
            console.log(text.style.color)
        } else if (e.target.className == "color red") {
            text.style.color = "red"
        } else {
            text.style.color = "blue"
        }
})
})