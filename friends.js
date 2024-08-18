const open_friends = document.getElementById("abrir_amizade")
const close_amizade = document.getElementById("close_friends")
const mdl_friends = document.getElementById("modal_amizade")  

open_friends.onclick = function(){
    mdl_friends.showModal() 
}
close_amizade.onclick = function(){
    mdl_friends.close()
} 