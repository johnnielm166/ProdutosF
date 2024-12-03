# API de Produtos e Usuários

## Resumo
Este projeto é uma API desenvolvida em Java utilizando o framework Spring Boot. A API permite o gerenciamento de produtos e usuários, com funcionalidades para criar, alterar, listar e remover produtos e usuários. O projeto usa um banco de dados MySQL para armazenar os dados e realiza a comunicação entre as entidades `Produto` e `User`.

## Tecnologias Utilizadas
- Java 17
- Spring Boot
- MySQL
- JPA (Hibernate)
- Lombok

## Funcionalidades
- Cadastro e alteração de produtos e usuários
- Listagem de produtos e usuários
- Remoção de produtos e usuários
- Validação de e-mails e campos obrigatórios para usuários

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

## Como Executar
1. Clone este repositório: `git clone https://github.com/johnnielm166/ProdutosF`
2. Importe o projeto no seu IDE.
3. Configure o banco de dados MySQL com o nome `spring_react` e a tabela `produtos` e `usuarios`.
4. Execute a aplicação com o comando `mvn spring-boot:run` ou vá em `ProdutdosAppication` e de um run.
5. 

## Membros do Grupo
- Integrante 1: Johnnie Luna de Moura
- Integrante 2: Enzo Vigelis
