function criarRelatorio() {

    const containerRegistros = document.getElementById("container-registros");

    let registros = JSON.parse(localStorage.getItem("registro"));
    registros.forEach(registro => {
        console.log(registro);

        const divRegistro = document.createElement("div");
        divRegistro.classList.add("abcd");

        // para cara registro, temos
        // hora: registro.hora (já está na variável hora)
        // data: registro.data
        // tipo: registro.tipo

        let hora = registro.hora;
        let data = registro.data;
        let tipo = registro.tipo;

        divRegistro.innerHTML = `<p> ${tipo} | ${data} | ${hora} </p>`
        const buttonEditar = document.createElement("button");
        
        // Adicionar botões
        containerRegistros.appendChild(divRegistro);
        divRegistro.appendChild(buttonEditar);
    })

    /* 
    2. iterar sobre os registros
    2.1 para cada registro, criar um elemento na página
    2.2 Tipo | hora | obs? | anexo? | editar | excluir
    2.3 agrupar registros por data
    */

}
