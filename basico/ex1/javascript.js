const botaoCalculo = document.getElementById('botaocalculo');

botaoCalculo.addEventListener('click', function () {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const nome = document.getElementById('nome').value.toLowerCase();
    const nomeFormatado = nome.split(' ');

    for (let i = 0; i < nomeFormatado.length; i++) {
        nomeFormatado[i] = nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].substr(1);
    }

    const nomeFinal = nomeFormatado.join(' ');

    if (isNaN(altura) || isNaN(peso)) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = peso / (altura ** 2);
    const imcFormatado = imc.toFixed(2).replace('.', ',');

    const valueElement = document.getElementById('value');
    const descriptionElement = document.getElementById('description');
    let classification = '';

    if (imc < 18.5) {
        classification = 'Magreza';
        valueElement.style.color = 'rgb(189, 1, 1)';
    } else if (imc < 24.9) { 
        classification = 'Peso Normal';
        valueElement.style.color = 'rgb(97, 221, 15)';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
        valueElement.style.color = 'rgb(255, 217, 0)';
    } else if (imc < 34.9) {
        classification = 'Obesidade Grau 1';
        valueElement.style.color = 'rgb(255, 94, 0)';
    } else if (imc < 39.9) {
        classification = 'Obesidade Grau 2';
        valueElement.style.color = 'rgb(189, 5, 5)';
    } else {
        classification = 'Obesidade Grau 3';
        valueElement.style.color = 'rgb(255, 0, 0)';
    }

    const nomeTextElement = document.getElementById('nomeTexto');
    nomeTextElement.textContent = `Olá ${nomeFinal}, seu IMC é:`;
    valueElement.textContent = ` ${imcFormatado}`;
    descriptionElement.textContent = `Classificação: ${classification}`;

    document.getElementById('infos').hidden = false;
});
