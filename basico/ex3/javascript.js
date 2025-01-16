var diaFinal = new Date("April 16, 2025 00:00:01").getTime();
var CadaSegundo = setInterval(function(){ //setInterval demora um tempo para dar a resposta
    var now = new Date().getTime();
    var distancia = diaFinal - now;

    var days= Math.floor(distancia/(60 * 60 * 24 * 1000))
    var minutes = Math.floor( ( distancia % (1000 * 60 *60) ) / (1000*60))
    var hours = Math.floor((distancia% (1000 * 60 * 60 *24))/(1000*60*60));
    var seconds = Math.floor( ( distancia % (1000 * 60))/ 1000)

    document.getElementById('dias').innerHTML = days;
    document.getElementById('minutos').innerHTML = minutes;
    document.getElementById('horas').innerHTML = hours;
    document.getElementById('segundos').innerHTML = seconds;

    if (distancia < 0) {
        clearInterval(CadaSegundo);
        document.getElementById('aovivo').innerHTML = 'Expirado'
    }

    if (days<10) {
        document.getElementById('dias').innerHTML = `0${days}`; 
    }
    if (hours<10) {
        document.getElementById('horas').innerHTML = `0${hours}`; 
    } 
    if (minutes<10) {
        document.getElementById('minutos').innerHTML = `0${minutes}`; 
   }
    if (seconds<10) {
        document.getElementById('segundos').innerHTML = `0${seconds}`; 
    }
 


}, 1000); //A cada 1 segundo(=1000 milisegundos) vai ser executado essa function('callback')