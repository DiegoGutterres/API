const app = require('./app');

const PORT = app.get('port')


app.get('/api/teste', (request, response) => { 
    response.send('Listar')
 });

 app.post('/api/teste', (request, response) => { 
    response.send('salvar')
 });

 app.put('/api/teste', (request, response) => { 
    response.send('editar')
 });

 app.delete('/api/teste', (request, response) => { 
    response.send('excluir')
 });


//testar o server pra ver se ta rodando
app.listen(PORT, () => console.log(`Running at port ${PORT}`))