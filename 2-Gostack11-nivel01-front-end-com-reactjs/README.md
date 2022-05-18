## :computer: Projeto
<p>Projeto do zero utilizando o Reactjs, esse projeto foi utilizado para entender os conceitos do React, esses conceitos são componentes, propriedades e estado, ao longo do desenvolvimento foi praticado as alternativas de exibir conteúdos.</p>
<p>Nesse projeto o Babel e WebPack foram instalados e configurados manualmente para entender o papel de cada biblioteca e suas funcionalidades, utilizamos o Axios para comunicação com API Externa.</p>
<p>Link do Projeto: https://www.douglasneves.net/projetos/25-gostack11-noje-js-reactjs-e-react-native/42-front-end-com-reactjs</p>
<p>Link do Resumo sobre ReactJS: https://www.douglasneves.net/resumos/14-gostack11/24-front-end-com-reactjs</p>

## :rocket: Tecnologias
- React
- ReactJS
- Babel 
- WebPack
- Axios

## :information_source: Como usar ?
<p>Baixe o projeto do github, depois execute o comando abaixo que vai baixar as dependencias.</p>

```
yarn
```

<p>Se precisar transpilar algum código utilize o comando abaixo:</p>

```
yarn babel src/index.js --out-file public/bundle.js 
```

<p>Se precisar transpilar passando pelo webpack(correto) segue comando:</p>

```
yarn webpack --mode development 
```

<p>Se precisar transpilar passando pelo webpack(correto) e monitorar mudanças no código:</p>

```
yarn webpack-dev-server --mode development 
```

<p>Para facilitar, foi criado um scripts que executa a aplicação:</p>

```
yarn dev 
```


## :book: Detalhes do projeto
```bash
yarn init -y // Inicia Projeto
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
yarn add @babel/cli
yarn add babel-loader
yarn add webpack-dev-server -D
yarn add style-loader css-loader
yarn add file-loader
yarn add axios
yarn add @babel/plugin-transform-runtime -D
```

### Utilitários
**Babel**: O papel do babel é converter (transpilar) código do react para um código que o browser entenda.<br />
**WebPack**: Para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneire diferente.<br />
**Loaders**: Um conceito dentro do webpack responsável por converter o javascript de uma maneira que o browser entenda. (babel-loader, css-loader, image-loader).<br />


### Observações
- Sempre utilize path para definir caminhos, garantindo assim compatibilidade entre sistemas.
- Para utilizar o Babel e Webpack precisamos de arquivos de configuração no diretório raiz do projeto.

