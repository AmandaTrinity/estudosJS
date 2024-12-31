//Evento DOM
const form = document.querySelector('div.form');

form.addEventListener('submit', function(dados) {
    dados.preventDefault();

    const  altura = window.document.querySelector('div#altura input').value;
    const peso = window.document.querySelector('div#peso input').value;

    const resultado = (peso / (altura**2)).toFixed(2)

    const value = document.querySelector('div#value');
    value.textContent = `Seu IMIC é ${resultado}`;

    value.classList.remove('visually-hidden');
    console.log(calculoIMC)

});