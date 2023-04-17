const getNome = document.getElementById('inputNome');
const getEstado = document.getElementById('inputEstado');
const getNumero = document.getElementById('inputNumero');
const getEnsino = document.getElementById('selectFormacao');
const getProfissao = document.getElementById('inputProfissao');
   var vazia = '';



function novoDado(){
    if(getNome.value == vazia || getEstado.value == vazia || getNumero.value == vazia
        ||getEnsino.value == vazia || getProfissao.value == vazia){
        alert('Por favor, preencha todos os campos!');
    }else{
        novoDado2()
    }

}


//cria a div e coloca os dados dentro
function novoDado2() {

    //cria nova div
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('dadosPessoa');
    document.body.appendChild(novaDiv);
     
    //para adicionar nome à nova div

    const valueNome = getNome.value;

    const novoNome = document.createElement('h3');
    novaDiv.appendChild(novoNome);

    novoNome.innerHTML = valueNome;

    //para adicionar estado à nova div

    const valueEstado = getEstado.value;

    const novoEstado = document.createElement('h3');
    novaDiv.appendChild(novoEstado);

    novoEstado.innerHTML = valueEstado;

    //para adicionar o telefone à nova div

    const valueNumero = getNumero.value;

    const novoNumero = document.createElement('p');
    novoNumero.classList.add('dadoOculto');
    novaDiv.appendChild(novoNumero);

    novoNumero.innerHTML = valueNumero;

    //para adicionar o ensino

    const valueEnsino = getEnsino.value;

    const novoEnsino = document.createElement('p');
    novaDiv.appendChild(novoEnsino);
    novoEnsino.classList.add('dadoOculto');

    novoEnsino.innerHTML = valueEnsino;


    //para adicionar a profissão

    const valueProfissao = getProfissao.value;

    const novaProfissao = document.createElement('p');
    novaDiv.appendChild(novaProfissao);
    novaProfissao.classList.add('dadoOculto');
    novaProfissao.innerHTML = valueProfissao;

    novaDiv.addEventListener('click', () => {
        novoNumero.classList.toggle('dadoOculto');
        novoEnsino.classList.toggle('dadoOculto');
        novaProfissao.classList.toggle('dadoOculto');
})

   const isso = novaDiv.style.cursor = 'pointer'

  
}

//'Mostrar mais' da primeira div


