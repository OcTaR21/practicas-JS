const posicionInicial = Math.round(Math.random() * 359); // numero aleatorio entre 0 y 359 
const vueltas = Math.round(Math.random() * 10) + 5; // numero aleatorio entre 5 y 10 
const anguloFinal = Math.round(posicionInicial + (vueltas * 360)) % 360; //ángulo final sumando la posición inicial y las vueltas al círculo

console.log("Posición o ángulo Inicial G.A.:", posicionInicial);
console.log("Valor Aleatorio Generado en Grados:", vueltas * 360);
console.log("Ángulo Final:", anguloFinal);