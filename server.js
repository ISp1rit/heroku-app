const http = require('http');
const express = require('express');

const {createWss} = require('./websocket');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send('Heroku App');
});

app.get('/todos', (req, res) => {
    const todos = [
        {id: 1, name: 'Todo 1'}
    ];

    res.send(todos);
});

app.post('/todos', function (req, res) {
   const newTodo = {
      id: 2,
      name: 'Todo 2'
   };

   res.set('Access-Control-Allow-Origin', '*');
   res.send(newTodo);
});

const server = http.createServer(app);

createWss(server);

server.listen(port, () => {
    console.info('Server started successfully', port);
});
