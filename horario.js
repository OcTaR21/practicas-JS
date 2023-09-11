
var hoy = new Date();
var hora=hoy.getHours();
var minuto=hoy.getMinutes();
console.log("Hora Actual: "+hora+":"+minuto);
minIn=hora*60+minuto;
minAv=Math.floor(Math.random()*(60*10-60*5+1)+60*5);
minTotal=minIn+minAv;
hFinalmin=(minTotal)%(24*60);
hFinal=Math.trunc(hFinalmin/60);
minFinal=hFinalmin-hFinal*60;

console.log("Valor Aleatorio Generado de Minutos: "+minAv);
console.log("Hora Final: "+hFinal+":"+minFinal);