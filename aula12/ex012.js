var agora = new Date()
var hora = agora.getHours() // hora atual do sistema
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 4){
    console.log('Boa Madrugada')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa Tarde!')
} else if (hora < 1){
    console.log('Boa Noite!')
} 