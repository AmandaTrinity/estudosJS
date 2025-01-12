const GerarTabuada = document.getElementById('buttonTabuada');
GerarTabuada.addEventListener('click', function (){
    const Numeros = document.getElementById('numeros').value
    const tab = document.getElementById('seltab')

    if (isNaN(Numeros)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    tab.innerHTML = ' '
    for(var t=0;t<=10; t++){
        let item = document.createElement('option')
        item.textContent += `${Numeros} x ${t}  =  ${t * Numeros  };  `
        tab.appendChild(item)
    }

    
});