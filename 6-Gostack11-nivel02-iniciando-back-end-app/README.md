## :computer: Projeto
<p>Nessa etapa vamos continuar os aprendizados com Node.js aproveitando o projeto desenvovlido até agora para comçar a trabalhar com conceitos de banco de dados, autenticação, autorização, etc.</p>
<p>Link do Projeto: https://www.douglasneves.net/projetos/25-gostack11-noje-js-reactjs-e-react-native/71-iniciando-back-end-do-app-projeto</p>
<p>Link do Resumo: https://www.douglasneves.net/resumos/14-gostack11/70-iniciando-back-end-do-app</p>

## :rocket: Tecnologias
- TypeScript


## :information_source: Como usar ?
<p>Baixe o projeto do github, depois execute o comando abaixo que vai baixar as dependências.</p>

```
yarn
```

<p>Converte arquivo typescript para javascript.</p>

```
yarn tsc src/index.ts
yarn tsc //Pode ser assim se criar o arquivo de configuração do typescript.
```
<p>Iniciar projeto</p>

```
yarn dev:server
```

## :book: Detalhes do projeto
```bash
yarn add typeorm pg // instala o typeorm e driver do postgres
yarn add reflect-metadata //Dependencia para usar decorator no TypeOR
yarn add bcryptjs //Biblioteca de criptografia
yarn add @types/bcryptjs //Declaração de tipos da biblioteca de criptografia
yarn add jsonwebtoken //Biblioteca JWT
yarn add @types/jsonwebtoken //Tipagens JWT
yarn add multer //Middleware express para upload de imagens
yarn add @types/multer //Adiciona tipagens do multer.
yarn add express-async-errors //Biblioteca que trata erros assíncrono de rotas.
```

### Arquivo de configuração do banco de dados
Criamos um arquivo de configuração do TypeORM que fica na raiz do projeto -> ormconfig.json


### Modificações de configuração do TypeScript
No arquivo tsconfig.json.<br/>
**"experimentalDecorators": true**      /* Enables experimental support for ES7 decorators. */ <br/>
**"emitDecoratorMetadata": true**        /* Enables experimental support for emitting type metadata for decorators. */<br/>
**"strictPropertyInitialization": false**  /* Enable strict checking of property initialization in */


