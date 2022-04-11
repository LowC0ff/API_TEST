const express = require('express');
const routes = express.Router();

let db = [
    { '1': { Nome: 'Teste 1', Sobrenome: 'Teste11' } },
    { '2': { Nome: 'Teste 2', Sobrenome: 'Teste2' } },
    { '3': { Nome: 'Teste 1', Sobrenome: 'Teste33' } },
];

routes.get('/', (req,res) => {
    return res.json(db)
});

routes.post('/add', (req, res) => {
    const body = req.body;
    
    if(!body)
      return res.status(400).end();

    db.push(body)
    return res.json(body);
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id])
          return item
    });

    db = newDB;

    return res.send(newDB);
});

module.exports = routes