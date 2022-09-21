function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#imagem')
    var data =  new Date()
    var hora = data.getHours()
    //var hora = 01    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        //bom dia
        img.src = 'imagens/amanhecer.jpg'
        document.body.style.background = '#faca44'
    } else if ( hora < 18){
        //boa tarde
        img.src = 'imagens/entardecer.jpg'
        document.body.style.background = '#773f04'
    } else {
        //noa noite
        img.src = 'imagens/anoitecer.jpg'
        document.body.style.background = '#3e425b'
    }


}

