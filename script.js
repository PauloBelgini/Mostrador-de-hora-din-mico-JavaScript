
function carregar(){
    //Pega os atributos HTML com DOM
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    //Pega a Hora do sistema e coloca na variavel data
    var data = new Date()
    //Extraindo as horas e o minutos da variavel
    var hora = data.getHours()
    var min = data.getMinutes()
    
    //Mostra as hora atual do sistema
    msg.innerHTML = `Agora são ${hora}:${min}`

    //Condicional para mostrar a mensagem e trocar a foto
    if(hora>=3 && hora < 12 ){
        msg.innerHTML += "<br><strong>Boa dia</strong>"
        img.src = 'foto_manha.png'
        document.body.style.background= '#e2cd9f'
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML += "<br><strong>Boa tarde</strong>"
        img.src = 'foto_tarde.png'
        document.body.style.background= '#b9846f'
    } else {
        msg.innerHTML += "<br><strong>Boa noite</strong>"
        img.src = 'foto_noite.png'
        document.body.style.background= '#515154'

    }
}