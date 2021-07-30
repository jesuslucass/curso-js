agora = new Date()
hora = agora.getHours()
min = agora.getMinutes()
corpo = document.querySelector('body')
cont = document.querySelector("#msg")
img = document.querySelector("#img")
cont.innerHTML = `Agora são aproximadamente ${hora} horas.`
if (hora>=6 && hora< 12){
    corpo.style.backgroundColor = '#8f8f8f'
} else if(hora >= 12 && hora<18){
    img.src = "img/tarde.jpg"
    corpo.style.backgroundColor = '#4d291c'} else if (hora>=0 || hora >=18){
        img.src = 'img/noite.jpg'
        corpo.style.backgroundColor = '#211d27'
    }