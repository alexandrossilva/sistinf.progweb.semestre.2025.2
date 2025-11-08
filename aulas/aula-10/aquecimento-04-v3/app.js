function identificarMaior() {
  const numero1 = parseFloat(document.getElementById("n1").value);
  const numero2 = parseFloat(document.getElementById("n2").value);
  let msg = "";

  if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
      msg = numero1 + " é o maior número";
    }
    else if (numero2 > numero1) {
      msg = numero2 + " é o maior número";
    }
    else {
      msg = "Os dois números são iguais";
    }
  }
  else {
    msg = "Use números válidos. Decimais devem ser separados por ponto.";
  }

  /*const par = document.querySelector("p");
  par.innerHTML = msg;*/

  const pars = document.querySelectorAll("p");
  for (let i = 0; i < pars.length; i++) {
    pars[i].innerHTML = msg;
  }
}

const botao = document.querySelector("button");
botao.addEventListener("click", identificarMaior);