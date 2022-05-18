import { createConnection } from 'typeorm';

// Busca o arquivo de configuração em todo o projeto, no caso ormconfig.json
// Se encontrar realiza a conexão com banco de dados.
// Poderiamos passar um objeto a createConnection({}) com os campos de conexão.
createConnection();
