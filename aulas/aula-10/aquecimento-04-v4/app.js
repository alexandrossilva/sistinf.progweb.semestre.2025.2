function identificarMaior() {
  const numero1 = parseFloat(document.getElementById("n1").value);
  const numero2 = parseFloat(document.getElementById("n2").value);
  const resInput = document.getElementById("r");

  if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
      resInput.value = numero1;
    }
    else if (numero2 > numero1) {
      resInput.value = numero2;
    }
    else {
      alert("Os dois números são iguais");
      resInput.value = numero2;
    }
  }
  else {
    alert("Use números válidos. Decimais devem ser separados por ponto.");
  }
}

const botao = document.querySelector("button");
botao.addEventListener("click", identificarMaior);