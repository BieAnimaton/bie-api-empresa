const mysql = require('mysql');
const criarTab = require('./models/criar_tabela');
const inserirTab = require('./models/inserir_tabela');

function executar_query_sql(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'empresa_bie'
  });

  // Criando db
  criarTab;
  console.log('Tabela Criada');

  // Inserindo dados
  //inserirTab;
  //console('Inserindo primeiros dados na Tabela!')


  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

module.exports = executar_query_sql;