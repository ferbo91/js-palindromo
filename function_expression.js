const verificaPalindromo = function (palavra) {
    var separaLetras = palavra.split("");
    var palavraInvertida = separaLetras.reverse();

    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}

verificaPalindromo("radar");