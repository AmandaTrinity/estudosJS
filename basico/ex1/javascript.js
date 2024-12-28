//Evento DOM
var NomeCalculadoraIMC = window.document.getElementById('titulo')
NomeCalculadoraIMC.addEventListener('click', clicar)

function clicar() {
    NomeCalculadoraIMC.innerText = 'Coloque todas as informações para saber seu Indíce de Massa Corporal!'
}
