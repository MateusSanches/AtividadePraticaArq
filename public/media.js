

const calcularMedia =  document.querySelector("#b1");
const limpar =  document.querySelector("#b2");
const n1 =  document.querySelector("#n1");
const n2 =  document.querySelector("#n2");
const n3 =  document.querySelector("#n3");
const nome = document.querySelector('#nome');
const divResp = document.querySelector('#resp');


calcularMedia.addEventListener('click',() => {
    
    let med = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value)) / 3;
    

    console.log(med.toString());
    console.log(nome.value);

    const dadoNovo = {
        n: nome.value,
        media: med.toString()
    };

    
    axios.post('/calcular', dadoNovo)
        .then(response => {
            
        })
        .catch(error => {
            console.log('Erro ao enviar dados para o servidor')
            console.error(error);
        });
    
    divResp.innerHTML = '';
    divResp.innerHTML = 'A média do aluno' + nome.value + ' foi salva com sucesso!';
    
    
});


limpar.addEventListener('click',()=>{
    n1.value = '';
    n2.value = '';
    n3.value = '';
    nome.value = '';
    divResp.innerHTML = '';
});
