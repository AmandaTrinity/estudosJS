//0 + 4
const entradaUser = document.querySelector('div.entradaUser')
const botaoCalc = document.querySelector('div.tecladoNum');

const addNum = (event) =>{
    const conteudo = event.target.textContent;
    console.log(conteudo)
    if (isNaN(conteudo)){
       if (conteudo === 'AC'){
        entradaUser.textContent = ``
       }else if(conteudo === '⌫'){
            entradaUser.textContent = entradaUser.textContent.slice(0,-1);
       }
    
    }else{
        entradaUser.textContent += `${conteudo}`;
    }

}

botaoCalc.addEventListener('click',addNum);