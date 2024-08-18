const open_modal = document.getElementById("abrir_pet")
const modal_pet = document.querySelector("dialog")
const close_modal = document.getElementById("fechar_modal1")
open_modal.onclick = function() {
    modal_pet.showModal() 
}
close_modal.onclick = function(){
    modal_pet.close()
}
