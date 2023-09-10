function simularTiradas() {
    for (var i = 1; i <= 10; i++) {
        var vueltas = Math.floor(Math.random() * (37 * 10 - 37 * 5 + 1)) + 37 * 5;
        var posicionFinal = Math.floor(vueltas % 37);
        var resultado = `Nro de Juego: ${i}\n`;
        resultado += `Valor Aleatorio Generado: ${vueltas}\n`;
        resultado += `Nro que cayó en la ruleta: ${posicionFinal}\n`;
        resultado += "...\n\n";
        console.log(resultado);
    }
}
simularTiradas();