const pessoas = [];

const input_nome = document.getElementById("input_nome");
const input_email = document.getElementById("input_email");
const input_phone =  document.getElementById("input_phone");

const botao_listar =  document.getElementById("botao_listar");

function salvar() 
{
    if (!input_nome.value || !input_email.value || !input_phone.value)
    {
        return alert("Todos os campos são obrigatórios!");
    }

    const pessoa = 
    {
        nome: input_nome.value,
        email: input_email.value,
        phone: input_phone.value
    }
    pessoas.push(pessoa);

    alert("Adicionado a lista!");
    botao_listar.disabled = false;
}

function listar() 
{
    if (pessoas.length === 0)
    {
        return alert("Adicione uma pessoa a Lista.");
    }

    const lista = document.getElementById("lista");
    lista.innerHTML =  '';

    for (let i = 0; i < pessoas.length; i++)
    {
        lista.innerHTML +=  
        `
            <div id="container">
                <h3>${pessoas[i].nome}</h3>
                <p>${pessoas[i].email}</p>
                <p>${pessoas[i].phone}</p>
            </div>
        `;
    }
}
