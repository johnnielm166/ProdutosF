# API de Produtos e Usuários

## Resumo
Este projeto é uma API desenvolvida em Java utilizando o framework Spring Boot. A API permite o gerenciamento de produtos e usuários, com funcionalidades para criar, alterar, listar e remover produtos e usuários. O projeto usa um banco de dados MySQL para armazenar os dados e realiza a comunicação entre as entidades `Produto` e `User`.

## Tecnologias Utilizadas
### Back-end
- Java 17
- Spring Boot
- MySQL
- JPA (Hibernate)
- Lombok

### Front-end
- React.js
- JavaScript (ES6+)
- CSS
- Bootstrap

## Funcionalidades API
- Cadastro e alteração de produtos e usuários
- Listagem de produtos e usuários
- Remoção de produtos e usuários
- Validação de e-mails e campos obrigatórios para usuários

### Front-end
- Formulários para cadastro e alteração de produtos e usuários.
- Exibição de listas de produtos e usuários com opção de seleção.
- Integração com a API para realizar operações de CRUD (Create, Read, Update, Delete).


## Estrutura de Banco de Dados
O banco de dados contém as seguintes tabelas:

- **Produto**
  - id (PK)
  - nome
  - marca
  - quantidade

- **User**
  - id (PK)
  - nome
  - e-mail
  - idade

### Front-end
## Componentes Front-end

### App.js
Arquivo principal que controla as funcionalidades de produtos e usuários. Possui lógica para integração com a API e exibe os componentes `Formulario`, `Tabela`, `FormularioUsuario` e `TabelaUsuario`.

### Formulario.js
Componente para manipulação de dados dos produtos (cadastrar, alterar, excluir). Contém campos como:
- Nome
- Marca
- Quantidade

### FormularioUsuario.js
Componente para manipulação de dados dos usuários (cadastrar, alterar, excluir). Contém campos como:
- Nome
- E-mail
- Idade

### Tabela.js
Componente responsável por exibir a tabela de produtos. Apresenta as colunas:
- Código
- Nome
- Marca
- Quantidade
- Selecionar

### TabelaUsuario.js
Componente responsável por exibir a tabela de usuários. Apresenta as colunas:
- Código
- Nome
- E-mail
- Selecionar

## Como Executar
## Back-end
1. Clone este repositório: `git clone https://github.com/johnnielm166/ProdutosF`
2. Importe o projeto no seu IDE.
3. Configure o banco de dados MySQL com o nome `spring_react` e a tabela `produtos` e `usuarios`.
4. Execute a aplicação com o comando `mvn spring-boot:run` ou vá em `ProdutdosAppication` e de um run.

## Front-end

1. Navegue até o diretório do front-end.
2. Instale as dependências: `npm install`  `Nodejs` e  `Maven`
3. Execute o projeto: `npm start`
4. Acesse o aplicativo no navegador em: `http://localhost:3000`

## Membros do Grupo
- Integrante 1: Johnnie Luna de Moura
- Integrante 2: Enzo Vigelis
