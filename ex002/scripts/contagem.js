btn = document.querySelector('#btn')
btn.addEventListener('click', clicou)
function clicou(){
    
    inicio = Number(document.querySelector('#inicio').value)
    fim = Number(document.querySelector('#fim').value)
    cont = Number(document.querySelector('#passo').value)
    res = document.querySelector('#res')
    div = document.querySelector('#cont')
    teste = ''
    
    for (c = inicio; c<= fim; c += cont){
        res.innerHTML += `${c} &#128073`

    }
    res.innerHTML += '&#127988;'
        
    
    
    
}

