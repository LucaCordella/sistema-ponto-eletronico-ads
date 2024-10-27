function criarRelatorio() {

    const containerRegistros = document.getElementById("container-registros");

    let registros = JSON.parse(localStorage.getItem("registro"));
    registros.forEach(registro => {
        console.log(registro);

        const divRegistro = document.createElement("div");
        divRegistro.classList.add("abcd");

        let hora = registro.hora;
        let data = registro.data;
        let tipo = registro.tipo;

        divRegistro.innerHTML = `<p> ${tipo} | ${data} | ${hora} </p>`
        const buttonEditar = document.createElement("button");
        
        // Adicionar botões
        containerRegistros.appendChild(divRegistro);
        divRegistro.appendChild(buttonEditar);
    })
}

criarRelatorio();