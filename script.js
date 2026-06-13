const API_URL =
"https://crudcrud.com/api/197753c0463e4f979e1a9468b0766b07/clientes";

let clientes = [];

const form =
document.getElementById("formCliente");

const listaClientes =
document.getElementById("listaClientes");

const campoBusca =
document.getElementById("campoBusca");

async function carregarClientes(){

    try{

        const resposta =
        await fetch(API_URL);

        clientes =
        await resposta.json();

        renderizarClientes(clientes);

        document.getElementById(
        "totalClientes"
        ).textContent = clientes.length;

    }catch(erro){

        console.error(erro);

    }

}

form.addEventListener(
"submit",
async function(event){

    event.preventDefault();

    const cliente = {

        nome:
        document.getElementById("nome").value,

        email:
        document.getElementById("email").value,

        telefone:
        document.getElementById("telefone").value

    };

    try{

        await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(cliente)

        });

        form.reset();

        carregarClientes();

    }catch(erro){

        console.error(erro);

    }

});

function renderizarClientes(lista){

    listaClientes.innerHTML = "";

    lista.forEach(cliente => {

        listaClientes.innerHTML += `
            <tr>

                <td>${cliente.nome}</td>

                <td>${cliente.email}</td>

                <td>${cliente.telefone}</td>

                <td>

                    <button
                    class="btnExcluir"
                    onclick="excluirCliente('${cliente._id}')">

                        Excluir

                    </button>

                </td>

            </tr>
        `;

    });

}

async function excluirCliente(id){

    if(
        !confirm(
            "Deseja excluir este cliente?"
        )
    ){
        return;
    }

    try{

        await fetch(
        `${API_URL}/${id}`,
        {
            method:"DELETE"
        });

        carregarClientes();

    }catch(erro){

        console.error(erro);

    }

}

campoBusca.addEventListener(
"input",
function(){

    const termo =
    this.value.toLowerCase();

    const resultado =
    clientes.filter(cliente =>

        cliente.nome
        .toLowerCase()
        .includes(termo)

        ||

        cliente.email
        .toLowerCase()
        .includes(termo)

        ||

        cliente.telefone
        .toLowerCase()
        .includes(termo)

    );

    renderizarClientes(resultado);

});

carregarClientes();