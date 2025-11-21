let qtd = 3;                   // quantidade de números
let soma = 0;                   // totalizador de números
let numeros = [];               // array de números

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
    numeros.push(parseFloat(n));

    soma += numeros[i];         // atualização de toalizador com acréscimo de enésimo número
}

if (numeros.length != qtd) {    // se array não conter 10 números...
    alert(`Não foram digitados ${qtd} números!`);
}
else {                          // caso contrário...
    let media = soma / qtd;     // média de números

    let numAbaixoMedia = [];
    let numAcimaMedia = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < media) {
            numAbaixoMedia.push(numeros[i]);
        }
        else if (numeros[i] > media) {
            numAcimaMedia.push(numeros[i]);
        }
    }

    // exibição de caixa de diálogo de alerta com números abaixo da média e números acima da média
    alert(`Média: ${media}\nNúmeros abaixo da média: ${numAbaixoMedia}\nNúmeros acima da média: ${numAcimaMedia}`);
}