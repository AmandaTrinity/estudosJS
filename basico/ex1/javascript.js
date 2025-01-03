   const botaoCalculo = document.getElementById('botaocalculo');

    botaoCalculo.addEventListener('click', function () {
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);
        const nome = document.getElementById('nome').value;

        if (isNaN(altura) || isNaN(peso)) {
            alert('Por favor, insira valores válidos para altura e peso.');
            return;
        }

        const imc = (peso / (altura ** 2)).toFixed(2);
        let description = '';

        if (imc < 18.5) {
            description = 'Magreza';
        } else if (imc < 24.9) { //obs: usp do ponto é melhor que vírgula
            description = 'Peso Normal';
        } else if (imc < 29.9) {
            description = 'Sobrepeso';
        } else if (imc < 34.9) {
            description = 'Obesidade Grau 1';
        } else if (imc < 39.9) {
            description = 'Obesidade Grau 2';
        } else {
            description = 'Obesidade Grau 3';
        }

        const valueElement = document.getElementById('value');
        const descriptionElement = document.getElementById('description');

        valueElement.textContent = `Olá ${nome}, seu IMC é ${imc}`;
        descriptionElement.textContent = `Classificação: ${description}`;

        document.getElementById('infos').hidden = false;
    });
