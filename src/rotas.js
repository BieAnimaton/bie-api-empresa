const express = require('express');
const router = express.Router();

//banco de dados
const db_query = require('./db/conectar')

router.get('/usuarios', (req, res) =>{
    db_query('SELECT * FROM usuarios', res);
})

router.get('/usuarios/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_pessoa =' + parseInt(req.params.id);
    db_query('SELECT * FROM usuarios' + filter, res);
})

router.get('/usuarios_n/:nome?', (req, res) =>{
    let filter = '';
    if(req.params.nome) filter = ' WHERE nome_pessoa = ' + req.params.nome;
    db_query('SELECT * FROM usuarios' + filter, res);
})

router.delete('/deletar_usuario/:id', (req, res) =>{
    db_query('DELETE FROM usuarios WHERE id_pessoa=' + parseInt(req.params.id), res);
})

router.post('/adicionar_usuario', (req, res) =>{
    const nome = req.body.nome.substring(0,45);
    const sobrenome = req.body.sobrenome.substring(0,45);
    const email = req.body.email.substring(0,45);
    db_query(`INSERT INTO usuarios(nome_pessoa, sobrenome_pessoa, email_pessoa) VALUES('${nome}','${sobrenome}','${email}')`, res);
});

router.patch('/atualizar_usuario/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,45);
    const sobrenome = req.body.sobrenome.substring(0,45);
    const email = req.body.email.substring(0,45);
    db_query(`UPDATE usuarios SET nome_pessoa='${nome}', sobrenome_pessoa='${sobrenome}', email_pessoa='${email}' WHERE id_pessoa=${id}`, res);
})

module.exports = router;