const open_coffee = document.getElementById("abrir_café")
const mdcoffee_close = document.getElementById("close_coffee")
const modal_coffee = document.getElementById("modal_café") 
open_coffee.onclick = function(){
    modal_coffee.showModal()
}

mdcoffee_close.onclick = function(){
    modal_coffee.close()
}