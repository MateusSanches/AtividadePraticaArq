const express = require('express');
const banco = require('./controllers/banco.js');


const app = express();

app.use(express.json());

app.use(express.static('public'));
app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('home.ejs');
});

app.get('/lista', (req,res)=>{
    medias = banco.lerMedias();
    console.log(medias);
    res.render('list.ejs',{medias});
});


app.get('/calcular',(req,res)=>{
    res.render('media.ejs');
});

app.post('/calcular',(req,res)=>{
    const novaMedia = req.body;
    banco.salvarMedia(novaMedia);
    console.log('Media salva');
});


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});

