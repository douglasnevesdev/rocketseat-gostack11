## :computer: Projeto
<p>Primeiro Projeto com Node.JS (TypeScript)</p>
<p>Link do Projeto: https://www.douglasneves.net/projetos/25-gostack11-noje-js-reactjs-e-react-native/64-primeiro-projeto-com-node-js</p>
<p>Link do Resumo: https://www.douglasneves.net/resumos/14-gostack11/27-primeiro-projeto-com-node-js</p>

## :rocket: Tecnologias
- TypeScript


## :information_source: Como usar ?
<p>Baixe o projeto do github, depois execute o comando abaixo que vai baixar as dependências.</p>

```
yarn
```

<p>Para iniciar o projeto, execute o comando:</p>

```
yarn dev:server //Inicia projeto com ts-node-dev (desenvolvimento)
yarn tsc //converte o codigo para javascript puro, usado para produção, salva o build na pasta dist
```


## :book: Detalhes do projeto
```bash
yarn init -y
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn tsc --init
yarn add @types/express -D
yarn add ts-node-dev -D
```

### Configurações do arquivo tsconfig.json
**rootDir**: Define o diretório base do projeto, no caso ( ./src )  <br />
**outDir**: Define o diretório aonde compila os códigos javascript ( ./dist )<br />

### Modificações
**remoção do dist**: A biblioteca **ts-node-dev** remove a necessidade de ter uma pasta **dist** na raiz do projeto para arquivos compilados .ts para .js, isso porque ela faz papel do **nodemon** que recarrega automaticamente de acordo com as mudanças no código e oculta o ato de compilação, ou seja, podemos subir um arquivo.ts diretamente em desenvolvimento, configuramos em **package.json** uma linha de comando para executar a biblioteca.
<br />
**Obs:** Dentro de **package.json** adicionamos o parâmetro **--transpile-only** que não corrige os erros do código, apenas compila, isso acelera a execução, também usamos  **--ignore-watch node_modules** para ignorar a pasta **node_modules**, por ultimo, temos o parâmetro **--inspect** que é utilizado para **debug**.

