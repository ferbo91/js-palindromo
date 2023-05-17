var resultado = document.getElementById('resultado');
var texto = document.getElementById('palavra');

document.querySelector("#btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})

function verificaPalindromo(palavra) {
  var separaLetras = palavra.split("");
  var palavraInvertida = separaLetras.reverse();
  palavraInvertida = palavraInvertida.join("");

  if (palavra == "") {
    return "Palavra inválida!"
  } else if (palavra == palavraInvertida) {
    return "A palavra " + palavra + " é um palíndromo!";
  } else {
    return "A palavra " + palavra + " não é um palíndromo!";
  }
}

function limpaMensagem() {
  setTimeout(escondeElemento, 2000);
  function escondeElemento() {
    resultado.style.display = 'none'
  }
}

document.getElementById('enviar').addEventListener('click', () => {
  resultado.style.display = 'block';
  palavra = texto.value;
  resultado.innerHTML = verificaPalindromo(palavra);
  texto.value = "";

  limpaMensagem();

})