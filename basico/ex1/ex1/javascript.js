//Evento DOM
var NomeCalculadoraIMC = window.document.getElementById('titulo')
NomeCalculadoraIMC.addEventListener('click', clicar)

function clicar() {
    NomeCalculadoraIMC.innerText = 'Coloque todas as informações para saber seu Indíce de Massa Corporal!'
}
function calcular() {
    let resultadoIMC = window.document.getElementById('botao')
    let altura = window.document.getElementsByClassName('input')[1]
    var valorAltura = Number(altura.value)
    let peso = window.document.getElementsByClassName('input')[2]
    var valorPeso = Number(peso.value)
    let calculoIMC = number((altura / (peso ** 2)).valueOf)
    resultadoIMC.innerHTML = 'Seu IMC é ${calculoIMC}'
    console.log(calculoIMC)
}