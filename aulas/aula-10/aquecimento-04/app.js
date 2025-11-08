function identificarMaior() {
  const numero1 = parseFloat(document.getElementById("n1").value);
  const numero2 = parseFloat(document.getElementById("n2").value);

  if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
      alert(numero1 + " é o maior número");
    }
    else if (numero2 > numero1) {
      alert(numero2 + " é o maior número");
    }
    else {
      alert("Os dois números são iguais");
    }
  }
  else {
    alert("Use números válidos. Decimais devem ser separados por ponto.");
  }
}

const botao = document.querySelector("button");
botao.addEventListener("click", identificarMaior);