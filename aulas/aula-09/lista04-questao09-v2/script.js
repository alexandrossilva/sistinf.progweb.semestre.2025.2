function identificarNumeros() {
    let soma = 0;           // totalizador de números
    let nums = [];

    const inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const texto = input.value;

        if (texto != "" && !isNaN(texto)) {
            const n = parseFloat(texto);

            nums.push(n);

            // conversão de enésimo texto para número e, após isso, inclusão em array
            soma += n;
        }
    }

    let media = soma / nums.length;     // média de números

    let numsAbaixo = "";
    let numsAcima = "";

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < media)
            numsAbaixo += (numsAbaixo != "" ? ", " : "") + nums[i];
        else
            numsAcima += (numsAcima != "" ? ", " : "") + nums[i];
    }

    // exibição de caixa de diálogo de alerta
    alert(`Números abaixo da média: ${numsAbaixo}\n` +
        `Números acima da média: ${numsAcima}\n`);
}

let botao = document.getElementById("botao");
botao.addEventListener("click", identificarNumeros);