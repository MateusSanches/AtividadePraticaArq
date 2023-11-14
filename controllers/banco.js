const fs = require('fs');


function salvarMedia(novaMedia){
        let mediaNova = [];
        try {
            mediaNova = JSON.parse(fs.readFileSync('./model/base.txt', 'utf8'));
        } catch (e){
            console.log('Erro ao ler a base de dados:' + e.message);
        }

        mediaNova.push(novaMedia);

        fs.writeFileSync('./model/base.txt', JSON.stringify(mediaNova, null, 2));
}

function lerMedias(){
    let listaMedias = [];
    try {
        listaMedias = JSON.parse(fs.readFileSync('./model/base.txt', 'utf8'));
    } catch (e){
        console.log('Erro ao ler a base de dados:' + e.message);
    }
    return listaMedias;
}

module.exports = {
    salvarMedia,
    lerMedias,
};