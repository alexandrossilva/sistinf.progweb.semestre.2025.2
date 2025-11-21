// solicitação de entrada de um texto
let n = prompt("Digite um número:");

// se usuário confirmar entrada de texto...
if (n != null) {
    if (isNaN(n)) {                         // se texto fornecido não for um número...
        alert("Não é um número válido!");
    }
    else if (n > 0) {                       // se número for positivo...
        let potencia = n * n * n;           // potência cúbica do número
        let r = potencia - n;               // diferença entre número e potência
        alert(`Diferença entre ${n} e sua potência: ${r}`);
    }
    else {                                  // caso contrário...
        let r = n * n;                      // quadrado do número
        alert(`Quadrado de ${n}: ${r}`);
    }
}