Sistema de Gerenciamento de Usuários

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de usuários, utilizando um servidor backend em Node.js e uma interface frontend básica.

Funcionalidades Atuais

Adicionar Usuário: Formulário para cadastrar novos usuários com nome, e-mail e idade.

 Listar Usuários: Exibição em uma tabela dos usuários cadastrados.

Excluir Usuário: Botão para remover um usuário da lista.

Tecnologias Utilizadas

Frontend

 HTML5: Estrutura da página (teste.html).

CSS3: Estilização com um visual moderno e responsivo (style.css).

JavaScript: Lógica de interação com a API (uselist.js).

Backend

  Node.js: Ambiente de execução do servidor (index.js).

  Express: Framework para criar a API REST.
  
 CORS: Middleware para permitir requisições de origens diferentes.
 
users.json: Arquivo JSON para persistência temporária dos dados.

Estrutura do Projeto

 index.js: Servidor backend que define as rotas da API para manipular os dados dos usuários e serve os arquivos estáticos.

 teste.html: Página principal contendo o formulário de cadastro e a tabela de usuários.

 uselist.js: Lógica do frontend que se comunica com a API para gerenciar os dados.

style.css: Estilos aplicados à página para um design limpo e funcional.

users.json: Arquivo que age como um banco de dados temporário, armazenando as informações dos usuários.

Como Executar o Projeto

Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

Passos

 Instale as dependências no terminal, no diretório do projeto:
Bash

npm install express body-parser cors

Inicie o servidor executando o arquivo index.js:
Bash

    node index.js

    Abra seu navegador e acesse: http://localhost:3000.

Próximos Passos

O projeto ainda terá novas atualizações.
