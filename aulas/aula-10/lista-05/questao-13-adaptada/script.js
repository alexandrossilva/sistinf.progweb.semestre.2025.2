function atualizarHorario() {
    const d = new Date();

    let hor = d.getHours();
    let min = d.getMinutes();
    let seg = d.getSeconds();

    hor = hor < 10 ? `0${hor}` : hor;
    min = min < 10 ? `0${min}` : min;
    seg = seg < 10 ? `0${seg}` : seg;

    const span = document.querySelector("span");
    span.innerHTML = `${hor}:${min}:${seg}`;
}

const botao = document.querySelector("button");
botao.addEventListener("click", atualizarHorario);

window.addEventListener("load", atualizarHorario)