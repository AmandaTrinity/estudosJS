/*const acrescentarItem = document.querySelector('#acrescentar-item')
acrescentarItem.addEventListener('keypress',function(){
    if(Event.key === 'Enter') {
        let item = document.createElement('label')
        let input = document.createElement('input')
        let div = document.createElement('div')
        let inputButton = document.createElement('input')
        input.appendChild(item)
        div.appendChild(item)
        inputButton.appendChild(item)
        div.textContent = `Olá`
    }   
    
   
})*/

let bancoDados = [ //array contendo objetos-simular um banco de dados
    {'tarefa': 'Estudar', 'status': ''},
   
]
const acrescentarItem = (tarefa,status='',indice) => {
    const itemLista = document.createElement('label');
    itemLista.classList.add('to-do-item')//criar classe 
    itemLista.innerHTML = `
        <input type = "checkbox" ${status} data-indice = ${indice}>
        <div> ${tarefa} </div>
        <input type = "button" value="X" id="remover-lista" data-indice = ${indice}>
    `//o innerHTML está sendo usado para inserir conteúdo HTML dentro do elemento itemLista (que é um elemento <label> criado dinamicamente). Ele permite adicionar múltiplos elementos HTML como filhos do itemLista de uma vez só.
    document.getElementById('lista-itens').appendChild(itemLista)// o método appendChild está sendo usado para adicionar o elemento itemLista (um elemento <label> criado dinamicamente) como um filho do elemento DOM com o ID lista-itens.
}   //variavel que irá receber uma função anonima(uma hero) e ela vai retornar o label

const limparTarefas = () =>{
    const todoList = document.getElementById('lista-itens')
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }/*while (todoList.firstChild):

O while verifica se o elemento pai (todoList) possui pelo menos um filho.
A propriedade firstChild retorna o primeiro filho do elemento, ou null se não houver filhos.
Enquanto houver pelo menos um filho, o loop continuará executando.
todoList.removeChild(todoList.lastChild):

A função removeChild é usada para remover um filho específico do elemento pai.
Aqui, está removendo o último filho (todoList.lastChild) em cada iteração.
A propriedade lastChild retorna o último filho do elemento*/
}

const atualizartela = () => {
     limparTarefas()
      bancoDados. forEach((itemLista,indice)=> acrescentarItem(itemLista.tarefa,itemLista.status,indice))
     //forEach é um método que percorre todo array e passa alguns elementos para o callBack
}/*array.forEach(function(elemento, indice, array) {
    // Código a ser executado para cada elemento
});
Parâmetros:
elemento (obrigatório): O elemento atual do array sendo processado.
indice (opcional): O índice do elemento atual no array.
array (opcional): O array completo que está sendo percorrido.
Como funciona:
O forEach itera automaticamente sobre cada elemento do array.
Para cada elemento, ele executa a função fornecida como argumento, passando o elemento e outros parâmetros*/

const inserirItem = (evento) => {
    const tecla = evento.key;
    if (tecla ==='Enter'){
      bancoDados.push({ //O método push é usado em arrays para adicionar um ou mais elementos ao final do array. Ele altera o array original e retorna o novo comprimento do array após a adição.
        'tarefa': evento.target.value,// Ele representa o elemento que disparou o evento.
         'status': evento.target.value
       
      })
      atualizartela(); 
      evento.target.value = '' //limpar
    }
}

const removeritem = (indice) => {
    bancoDados.splice(indice,1)
    atualizartela()
}
const atualizarItem = (indice) =>{
    bancoDados[indice].status = bancoDados[indice].status === '' ? 'checked' : ''
    atualizartela()
    console.log(bancoDados)
}
const clickitem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removeritem(indice)
    }else if (elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
}

document.getElementById('DigiteItem').addEventListener('keypress',inserirItem); //o addEvent manda o evento que aconteceu
document.getElementById('container').addEventListener('click', clickitem);
atualizartela();