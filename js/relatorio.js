function criarRelatorio() {

    const containerRegistros = document.getElementById("container-registros");

    let registros = JSON.parse(localStorage.getItem("registro"));
    registros.forEach(registro => {
        console.log(registros);

        const divRegistros = document.createElement("div");

        let hora = registro.hora;

        // para cara registro, temos
        // hora: registro.hora (já está na variável hora)
        // data: registro.data
        // tipo: registro.tipo

        // Escreva no seguinte formato: TIPO | DATA | HORA | 
        divRegistro.innerHTML = "<p>Olá, Mundo! " + hora + "</p>";
        
        // Adicionar botões
        containerRegistros.appendChild(divRegistro);
    })

    /* 
    2. iterar sobre os registros
    2.1 para cada registro, criar um elemento na página
    2.2 Tipo | hora | obs? | anexo? | editar | excluir
    2.3 agrupar registros por data
    */

}

criarRelatorio();