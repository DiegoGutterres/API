// importar o pacote express para o js
const express = require('express');

//criando uma instancia de express na variavel app
const app = express();

//definindo a porta
const PORT = 5000;

app.get('/api/teste', (request, response) => { 
    response.send('nao é um bambole afiado')
 });


//testar o server pra ver se ta rodando
app.listen(PORT, () => console.log(`Running at port ${PORT}`))