//Evento DOM
const form = document.getElementById('form');

form.addEventListener('submit', function(dados) {
    dados.preventDefault();

    const  altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;

    const resultado = (peso / (altura**2)).toFixed(2)

    const value = document.getElementById('value');
    let description = '';

});
document.getElementById("botaocalculo").addEventListener('click',() => {
    document.getElementById('infos').hidden=false
});