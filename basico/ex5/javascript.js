//0 + 4
const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id*=number]') //O * fala q é para o elemente q tem.no mínimo,parte de atributo o 'tecla'


const addNum = (evento) => atualizarDisplay(evento.target.textContent)
numbers.forEach(number => number.addEventListener('click', addNum)
)