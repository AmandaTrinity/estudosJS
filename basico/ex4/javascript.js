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

let bancoDados = [ //array-ler banco
    {'tarefa': 'Estudar', 'status': ''},
   
]
const acrescentarItem = (tarefa,status='') => {
    const itemLista = document.createElement('label');
    itemLista.classList.add('to-do-item')//criar classe 
    itemLista.innerHTML = `
        <input type = "checkbox" ${status}>
        <div> ${tarefa} </div>
        <input type = "button" value="X">
    `
    document.getElementById('lista-itens').appendChild(itemLista)//acrescentar dentro desse um elemento( o item)
}   //variavel que irá receber uma função anonima(uma hero) e ela vai retornar o label

const limparTarefas = () =>{
    const todoList = document.getElementById('lista-itens')
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizartela = () => {
     limparTarefas()
      bancoDados. forEach(itemLista=> acrescentarItem(itemLista.tarefa,itemLista.status))
     //forEach é um método que percorre todo array e passa alguns elementos para o callBack
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    if (tecla ==='Enter'){
      bancoDados.push({
        'tarefa': evento.target.value,
         'status': evento
       
      })
      atualizartela(); 
      evento.target.value = '' //limpar
    }
}
const clickitem = (evento) => {
    const elemento = evento.target;
    console.log(elemento)
}

document.getElementById('DigiteItem').addEventListener('keypress',inserirItem); //o addEvent manda o evento que aconteceu
document.getElementById('container').addEventListener('click', clickitem);
atualizartela();