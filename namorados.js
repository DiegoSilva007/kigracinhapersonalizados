const open_lovers = document.getElementById('abrir_namorados')
const close_lovers = document.getElementById('fechar_namorados')
const modal_nam = document.getElementById("modal_love")

 open_lovers.onclick = function() { 
   modal_nam.showModal()
}

close_lovers.onclick = function() {
    modal_nam.close()
}
