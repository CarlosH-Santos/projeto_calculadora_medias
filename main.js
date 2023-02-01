const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt ="emogi_feliz" />';
const imgReprovado = '<img src="./images/reprovado.png" alt ="emogi_triste" />';
const atividade = []; // armazenar todas as atividades
const notas = [];  //armazenar todas as notas
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = prompt('Digite a nota minima: '); //prompt para receber um valor

let linhas = ''; // zera as linhas para adicionar uma nova(let a variável só funciona dentro do bloco); let não guarda espaço na memória 

form.addEventListener('submit', function(e){
    e.preventDefault();  //para remover o comportamento de atualizar a página quando recarregada.

    addLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function addLinha(){
    const inputNomeAtividade = document.getElementById("nome-da-matéria");  //Local que irá receber a função declarada acima.
    const inputNotaAtividade = document.getElementById("nota-da-atividade");
    
    if (atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inclusa`);
    
    } else{
        atividade.push(inputNomeAtividade.value);  //envia as atividades para o array atividade
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';  // tr = linha começa
        linha += `<td>${inputNomeAtividade.value}</td>`; // += significa que irá concatenar linha novamente evita ex: (linha + linha 'outro conteudo')
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;       //? = if(positivo) | : = else(negativo)
        linha += `</tr>`; //linha termina
        
        linhas += linha; //adiciona esta linha recem criada a variavel linhas
    }

    inputNomeAtividade.value = '';  //Para limpar o campo após enviar os dados
    inputNotaAtividade.value = '';
};

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');  // irá buscar o elemento tbody(Retorna null se nenhum resultado for encontrado; caso contrário, retorna o primeiro elemento correspondente.)
    corpotabela.innerHTML = linhas;    //"document." é necessário para especificar que a seleção está sendo feita no contexto do documento HTML atual e não em outro contexto.
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);  //tofixed = serve para arredondar e clocar quantas casas decimais irá.
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia(){
    let = somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length
}