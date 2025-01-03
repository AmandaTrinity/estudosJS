//Evento DOM
const form = document.getElementById('form');

form.addEventListener('submit', function (dados) {
    dados.preventDefault();
    
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;

    const imc = number((peso / (altura ** 2)).toFixed(2))

    const value = document.getElementById('value')
    let description = '';

    if (imc < 18, 5) {
        description = 'magreza'
    } else if (imc < 24, 9) {
        description = 'Peso Normal'
    } else if (resultado < 29,9){
        description = 'Sobrepeso'
    } else if (resultado < 34, 9) {
        description = 'Obesidade Grau 1'
    } else if (resultado < 39, 9) { 
        description = 'Obesidade Grau 2'
    } else if (resultado >= 40) {
        description = 'Obesidade Grau 3'
    };

    
    value.textContent = imc
    document.getElementById('description').textContent = description;
});
document.getElementById("botaocalculo").addEventListener('click', () => {
    document.getElementById('infos').hidden = false
});