# caderno-de-receitas

Este projeto tem como objetivo implementar um caderno de receitas culinárias.

## Link do GitHub

https://github.com/kaliane/caderno-de-receitas

## Endereço de Deploy - GitHub Pages

https://kaliane.github.io/caderno-de-receitas/receita

## Protótipo

https://www.figma.com/file/2uZDTmE7eWjA5bmdVVd9Hz/Caderno-de-Receitas?type=design&node-id=1%3A2&mode=design&t=mKuLvsrc99bTTr1Y-1

## Link gravação explicação do projeto

https://www.loom.com/share/7bf515c5d0954abfab390306b118bd7f?sid=b0d0e9e4-5c46-4f36-a51a-e42c352bd2e1

## Checklist

- [X] Criar um repositório no GitHub com a estrutura do Gitflow, incluindo pelo menos as branches principais "main" e "develop."
- [X] Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
- [X] Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
- [X] Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [X] Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding, 
- [X] Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo.
- [X] Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output.
- [X] Transferir dados, por meio de serviços, entre componentes que não estão diretamente relacionados.
- [X] Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente.
- [X] Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação.
- [X] Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
- [X] Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados.
- [X] Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido.
- [X] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.
- [X] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [X] Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server.
- [X] Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário.
- [X] Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo.
- [X] Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas.
- [X] Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo.
- [X] Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server` 
  - Ou via Execução explícita: `json-server --watch db.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng serve`