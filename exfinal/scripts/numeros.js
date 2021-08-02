btn = document.querySelector('#btn')
fin = document.querySelector('#fin')
let numeros = []
cont = document.querySelector('#finres')
function clicou(){
    cont.innerHTML = ''
    var num = document.querySelector('#numero')
    if (num.value <1 || num.value > 100 || numeros.includes(num.value) == true){
        alert('Número inválido ou já adicionado. Revise e tente novamente.')
        num.value = ''
        
    } else{
        var slct = document.querySelector('#res')
        var opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado.`
        slct.appendChild(opt)
        numeros.push(num.value)
        num.value = ''
    }
}
function finalizar(){
    x = 0
    soma = 0    
    while (x < 5){
        x++
        comp = document.createElement('p')
        switch (x) {
            case 1:
                comp.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados`
                break
            case 2:
                comp.innerHTML = `O maior valor informado foi ${Math.max.apply(null, numeros)}.` 
                break
            case 3:
                comp.innerHTML = `O menor valor informado foi ${Math.min.apply(null, numeros)}.` 
                break
            case 4:
                
                for(c=0; c<numeros.length; c++){soma += Number(numeros[c])}
                comp.innerHTML = `Somando todos os valores, temos ${soma}.` 
                break
            case 5:
                comp.innerHTML = `A média dos valores digitados é ${soma/numeros.length}.` 
                break
        }
        cont.appendChild(comp)
    }
}
fin.addEventListener('click', finalizar)
btn.addEventListener('click', clicou)