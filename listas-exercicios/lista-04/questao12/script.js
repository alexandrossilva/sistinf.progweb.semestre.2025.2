// solicitação de entrada de um texto que represente um número inteiro
let n = prompt("Digite um número:");

// se usuário confirmar entrada de texto...
if (n != null) {
    if (isNaN(n)) {                     // se texto fornecido não for um número...
        alert("Não é um número válido!");
    }
    else if (n <= 0) {                  // se número não for positivo...
        alert(`O número ${n} não é positivo!`);
    }
    else {                              // caso contrário...
        let divPares = [];              // array de divisores
        let divImpares = [];            // array de divisores

        // identificação de divisores entre 1 (um) e menores que o próprio número
        for (let i = 2; i < n; i++) {
            // se resto de divisão de enésimo valor de contador por número for 0 (zero)...
            if (n % i == 0) {
                // inclusão de enésimo valor de contador em um dos arrays (divisores pares ou divisores ímpares)
                if (i % 2 == 0) {
                    divPares.push(i);
                }
                else {
                    divImpares.push(i);
                }
            }
        }

        // exibição de caixa de diálogo de alerta com sequência de divisores e média dos mesmos
        alert(`Divisores pares de ${n}: ${divPares}\n` +
              `Divisores ímpares de ${n}: ${divImpares}`);
    }
}