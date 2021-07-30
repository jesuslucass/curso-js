btn = document.querySelector('#btn')
btn.addEventListener('click', clicou)
function clicou(){
    num = document.querySelector('#numero')
    selct = document.querySelector('#tab')
    c = 0
    selct.innerHTML = ''
    while (c < 10){
        c++
        mult = `${num.value} x ${c} = ${num.value * c}`
        opt = document.createElement("option")
        opt.text = mult
        selct.appendChild(opt)
    }
    selct.style.width = 'auto'
}