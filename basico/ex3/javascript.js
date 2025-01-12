var diaFinal = new Date("April 16, 2025 00:00:01").getTime();
var CadaSegundo = setInterval(function(){ //setInterval demora um tempo para dar a resposta
    var now = new Date().getTime();
    var distancia = diaFinal - now;

    var days= Math.floor(distancia/(60 * 60 * 24 * 1000))
    var minutes = Math.floor( ( distancia % (1000 * 60 *60) ) / (1000*60))
    var hours = Math.floor((distancia% (1000 * 60 * 60 *24))/(1000*60));
    var seconds = Math.floor( ( distancia % (1000 * 60))/ 1000)

    document.getElementById('dias').innerHTML = days;

    
})