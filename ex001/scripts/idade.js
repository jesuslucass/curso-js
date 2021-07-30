var btn = document.querySelector('input#btn')
ano = document.getElementById('txt')
var sexo = document.getElementsByName('gen')
btn.addEventListener('click', clicou)
var data = new Date()
var hoje = data.getFullYear()
var cont = document.querySelector('div#cont')
function clicou(){
    idade = hoje - ano.value
    genero = ''
    idclass = ''
    if (sexo[0].checked){
        genero = 'Homem'
        

    } else if (sexo[1].checked){
        genero = 'Mulher'
    }
    if (idade <= 12 ) {
        idclass = 'crianca'
    } else if (idade <= 30) {
        idclass = 'jovem'
    } else if (idade <= 60){
        idclass = 'adulto'
    } else{
        idclass = 'idoso'
    }
    if (idclass == 'crianca' && genero == 'Mulher'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/crianca-m.jpg" alt="">`
    } else if (idclass == 'crianca' && genero == 'Homem'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/crianca-h.jpg" alt="">`
    } else if (idclass == 'jovem' && genero == 'Homem'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/jovem-h.jpg" alt="">`
    } else if (idclass == 'jovem' && genero == 'Mulher'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/jovem-m.jpg" alt="">`
    } else if (idclass == 'adulto' && genero == 'Homem'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/adulto-h.jpg" alt="">`
    }else if (idclass == 'adulto' && genero == 'Mulher'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/adulto-m.jpg" alt="">`
    }else if (idclass == 'idoso' && genero == 'Homem'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/idoso-h.jpg" alt="">`
    }else if (idclass == 'idoso' && genero == 'Mulher'){
        cont.innerHTML = `<p id = "outro">Detectamos ${genero} com ${idade} anos.<p> <img src="img/idoso-m.jpg" alt="">`
    }

}
