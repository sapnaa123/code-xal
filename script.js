const menuBTN = document.querySelector("#menubutton")
const list = document.querySelector("#list")
const closleBTn = document.querySelector("#closebutton")

menuBTN.addEventListener("click",function(){
    list.style.display = "flex"
    menuBTN.style.display = "none"
    closleBTn.style.display = "block"
})

closleBTn.addEventListener("click", function(){
    list.style.display = "none"
    closleBTn.style.display = "none"
    menuBTN.style.display = "flex"
})
