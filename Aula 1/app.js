'use strict'


const calcular = document.getElementById('calcular')

function somar() {
    const formulario = document.getElementById('formulario')
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado')
    const situacao = document.getElementById('situacao')
    
    
    const resultado1 = (nota1 + nota2 + nota3 + nota4) / 4
    resultado.setAttribute('value', resultado1)
    

    if(resultado1 >= 5){
        formulario.classList.add('cor-verde')
        formulario.classList.remove('cor-vermelha')
        situacao.setAttribute('value', 'Aprovado')
    }else if(resultado1 < 5){
        formulario.classList.add('cor-vermelha')
        formulario.classList.remove('cor-verde')
        situacao.setAttribute('value', 'Reprovado')
    }
    
    

}

calcular.addEventListener('click', somar)
