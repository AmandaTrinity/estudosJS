//Evento DOM
var NomeCalculadoraIMC = window.document.getElementByClassName('title')
NomeCalculadoraIMC.addEventListener('onclick', clicar)

function clicar() {
    NomeCalculadoraIMC.innerText = 'Coloque todas as informações para saber seu Indíce de Massa Corporal!'
}
function calcular() {
    let resultadoIMC = window.document.getElementById('calculo').value
    let altura = window.document.getElementsByClassName('input')[1].value
    //var valorAltura = Number(altura.value)
    let peso = window.document.getElementsByClassName('input')[2].value
    //var valorPeso = Number(peso.value)
    let calculoIMC = number((altura / (peso ** 2)).toFixed(2))
    resultadoIMC.innerHTML = 'Seu IMC é ${calculoIMC}'
    console.log(calculoIMC)
}