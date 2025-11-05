let qtd = 3;                   // quantidade de números
let soma = 0;                   // totalizador de números

// solicitação de textos que representam valores númericos (em quantidade definida anteriormente)
for (let i = 0; i < qtd; i++) {
    // solicitação de enésimo texto que represente um valor númérico
    let n = prompt(`Digite ${i + 1}º dos ${qtd} números:\n` +
                   `Caso deseje encerrar, clique em "Cancelar".`);

    // se usuário não confirmar entrada de enésimo texto ou ele não for um número...
    if (n == null || isNaN(n)) {
        alert('Entrada de números encerrada por sua própria escolha ou por digitação incorreta!');
        break;                  // encerramento de bloco de repetição
    }              

    // conversão de enésimo texto para número e, após isso, inclusão em array
    soma += parseFloat(n);
}

let media = soma / qtd;     // média de números

// exibição de caixa de diálogo de alerta com média de números
alert(`Média: ${media}`);