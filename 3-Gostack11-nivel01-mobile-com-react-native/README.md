## :computer: Projeto
<p>Projeto do zero utilizando o React Native, esse projeto foi utilizado para entender o React native na pratica.</p>
<p>Site do Projeto: https://www.douglasneves.net/projetos/25-gostack11-noje-js-reactjs-e-react-native/43-mobile-com-react-native </p>
<p>Resumo do Projeto: https://www.douglasneves.net/resumos/14-gostack11/25-mobile-com-react-native </p>

## :rocket: Tecnologias
- React
- React Native
- Axios

## :information_source: Como usar ?
<p>Baixe o projeto do github, depois execute o comando abaixo que vai baixar as dependências.</p>

```
yarn
```

<p>Para executar o aplicativo no android/ios execute o comando abaixo:</p>

```
react-native run-android
react-native run-ios
```


## :book: Detalhes do projeto
```bash
npx react-native init mobile-com-react-native
npm install -g react-native-cli
yarn add axios
```

### Funcionalidades
**Metro bundle**: Quando inciamos nosso projeto, uma janela do metro bundle abre e fica ouvindo alterações do nossos arquivos e atualiza no smartphone de forma automática, toda vez que existe uma alteração no arquivo ele constrói um novo bundle.js.<br />
**Fast reflesh**: Atualiza partes do código sem alterar o restante, ou seja, supondo que você tem um carrinho de compras e precisa atualizar um texto, apenas o texto é alterado e o restante do conteúdo não é afetado, não perdemos o estado da nossa aplicação.<br />


### Observações
- No React Native nenhum elemento tem valor semântico (significado), exemplo, o footer na web tem significado.
- Os elementos não possuem uma estilização própria.
- Todos elementos por padrão possuem por padrão display: flex.
- Não temos heranças de estilo.
- FlatList é melhor para desempenho, nos bastidores ela renderiza apenas o que é exibido na tela.
- SafeAreaView funciona como área segura para exibir informações.


## Axios
- **IOS com Emulador:** localhost	
- **IOS com físico:** IP da maquina
- **Android com emulador(localhost):** adb reverse tcp:3333 tcp:3333
- **Android com Emulador(Android Studio):** 10.0.2.2
- **Android com Emulador(Genymotion):** 10.0.3.2
- **Android com físico:** IP da maquina.



