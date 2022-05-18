## :computer: Projeto
<p>Projeto do zero utilizando o TypeScript, esse projeto foi utilizado para entender o TypeScript na pratica.</p>
<p>Link do Projeto: https://www.douglasneves.net/projetos/25-gostack11-noje-js-reactjs-e-react-native/49-typescript</p>
<p>Link do Resumo: https://www.douglasneves.net/resumos/14-gostack11/26-typescript</p>

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

## :book: Detalhes do projeto
```bash
yarn init -y // Inicia Projeto
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn tsc --init
```

### Caracteristicas do TypeScript
**Extensões**: As extensões agora são .ts e não .js.  <br />
**Visual Studio Code**: Foi construído com TypeScript (Framework Electron).<br />
**AutoComplete**: Nos bastidores o visual studio code que faz o autocomplete, ele adicionava as tipagens sem ninguém perceber (usando typescript), quando programamos usando a linguagem TypeScript isso não ocorre de forma automática, ele aguarda os programadores fazer o processo manualmente quando necessário.<br />
**...**: Quando em uma importação encontrar os ..., significa que existe dependências de tipos necessárias.<br />
**Arquivo de configuração**:  Assim como babel, o typescript precisa de um arquivo de configuração.<br />
**Arquivos index.d.ts**: Arquivos do tipo d.ts significa que é um arquivo de definição de tipos.<br />
**Importações**: Normalmente, todas as bibliotecas importa seus tipos, exemplo, express importa o tipo Request, Response entre outros para ser usados para tipar uma variável.<br />


### Configurações
**outDir**: Define o diretório aonde ficara os arquivos typescript transformados em javascript.


