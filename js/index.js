const diaSemana = document .getElementById("dia-semana");
const diaMesAno = document .getElementById("dia-mes-ano");
const horaMinSeg = document .getElementById("hora-min-seg"); 

// Todo conjunto numérico (exceto ano) deve ter 2 dígitos (adicioanar 0 se for menor que 10)
// Retornar dia da semana por extenso (em pt-br)

function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function horaCompleta() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

diaMesAno.textContent = dataCompleta();
horaMinSeg.textContent = horaCompleta();