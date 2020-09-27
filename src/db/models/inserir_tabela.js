function insertColumns(conn){
  const sql = "INSERT INTO pessoas (nome_pessoa, sobrenome_pessoa, email_pessoa, senha_pessoa, " +
              "sexo_pessoa, cidade_pessoa, cpf_pessoa, nascimento_pessoa, comentarios_pessoa, cricao_pessoa) VALUES ?";
  const values = [
        ['', '', '', '', '', '', '', '', , '']
      ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();
      });
}

module.exports = insertColumns;