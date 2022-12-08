var userName = document.getElementById("name")
var surname = document.getElementById("surname")
var city = document.getElementById("city")
var button = document.querySelector("button")

button.addEventListener("click", function() {
     if (confirm("delete?")) {
         userName.value = ""
         surname.value = ""
         city.value = ""
     } else {
        console.log("cancel")
    }

})
