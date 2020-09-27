function createTable(conn){
    const sql = "create table if not exists usuarios ("+
                "id_pessoa int NOT NULL AUTO_INCREMENT,"+
                "nome_pessoa varchar(45) NOT NULL,"+
                "sobrenome_pessoa varchar(45),"+
                "email_pessoa varchar(45) NOT NULL UNIQUE,"+
                "senha_pessoa varchar(45) NOT NULL,"+
                "sexo_pessoa varchar(45),"+
                "cidade_pessoa varchar(45),"+
                "cpf_pessoa char(11),"+
                "nascimento_pessoa varchar(45),"+
                "comentarios_pessoa int,"+
                "criacao_pessoa timestamp now(),"+
                "PRIMARY KEY (ID)"+
                ");";
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('tabela criada!');
    });
}

module.exports = createTable;