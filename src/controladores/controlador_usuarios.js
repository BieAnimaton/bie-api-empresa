//banco de dados
const db_query = require('../db/conectar');

module.exports = {
    async mostrar (req, res) {
        return db_query('SELECT * FROM usuarios', res);
    },

    async enc_pelo_id (req, res) {
        let filter = '';
        if(req.params.id) filter = ' WHERE id_pessoa =' + parseInt(req.params.id);
        return db_query('SELECT * FROM usuarios' + filter, res);
    },

    async end_pelo_nome (req, res) {
        let filter = '';
        if(req.params.nome) filter = ' WHERE nome_pessoa = ' + req.params.nome;
        return db_query('SELECT * FROM usuarios' + filter, res);
    },

    async deletar (req, res) {
        return db_query('DELETE FROM usuarios WHERE id_pessoa=' + parseInt(req.params.id), res);
    },

    async adicionar (req, res) {
        const nome = req.body.nome.substring(0,45);
        const sobrenome = req.body.sobrenome.substring(0,45);
        const email = req.body.email.substring(0,45);
        return db_query(`INSERT INTO usuarios(nome_pessoa, sobrenome_pessoa, email_pessoa) VALUES('${nome}','${sobrenome}','${email}')`, res);
    },

    async atualizar (req, res) {
        const id = parseInt(req.params.id);
        const nome = req.body.nome.substring(0,45);
        const sobrenome = req.body.sobrenome.substring(0,45);
        const email = req.body.email.substring(0,45);
        return db_query(`UPDATE usuarios SET nome_pessoa='${nome}', sobrenome_pessoa='${sobrenome}', email_pessoa='${email}' WHERE id_pessoa=${id}`, res);
    }
}