let _button = document.getElementById("_button")
let box = document.getElementById("box")

_button.addEventListener("click",function(){
    _h3 = document.createElement("h3")
    _h3.textContent = "ฮวย"
    box.append(_h3)
})
