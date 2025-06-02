📋 API RESTful de Cadastro de Clientes
🚀 Sobre o Projeto
Essa é uma API RESTful simples, feita em Node.js com Express e PostgreSQL, que permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) de clientes.
Ideal para aprender e praticar como criar APIs organizadas, com validação, tratamento de erros e integração com banco de dados usando Sequelize.

🛠️ Tecnologias Utilizadas
Node.js (versão LTS)

Express.js

PostgreSQL

Sequelize (ORM)

DBeaver (para gerenciar o banco de dados)

Insomnia (para testar as rotas)

VSCode (editor)

✅ Pré-requisitos
Node.js instalado

npm ou yarn instalado

PostgreSQL instalado e em execução


📚 Documentação das Rotas
✅ Criar Cliente
POST /clientes

Body (JSON):

json
Copiar
Editar
{
  "nome": "João Silva",
  "data_nascimento": "1990-01-01",
  "rg": "1234567",
  "cpf": "123.456.789-00",
  "telefone": "(11) 99999-9999",
  "endereco": "Rua Exemplo",
  "numero": "123",
  "cidade": "São Paulo",
  "uf": "SP",
  "cep": "12345-678"
}
Respostas:
✔️ 201 Created → cliente criado com sucesso
❌ 400 Bad Request → validação falhou
❌ 500 Internal Server Error → erro inesperado

✅ Buscar Cliente por Código
GET /clientes/:codigo
Exemplo: /clientes/1

Respostas:
✔️ 200 OK → cliente encontrado
❌ 404 Not Found → cliente não existe
❌ 500 Internal Server Error → erro inesperado

✅ Listar todos os Clientes
GET /clientes

Respostas:
✔️ 200 OK → lista de clientes
❌ 500 Internal Server Error → erro inesperado

✅ Atualizar Cliente
PUT /clientes/:codigo
Body (JSON): Só mande os campos que quer alterar!

Respostas:
✔️ 200 OK → cliente atualizado
❌ 400 Bad Request → validação falhou
❌ 404 Not Found → cliente não existe
❌ 500 Internal Server Error → erro inesperado

✅ Deletar Cliente
DELETE /clientes/:codigo

Respostas:
✔️ 204 No Content → cliente deletado
❌ 404 Not Found → cliente não existe
❌ 500 Internal Server Error → erro inesperado

🛠️ Como testar
Use o Insomnia (ou Postman) para mandar as requisições e testar todos os endpoints.
O projeto está preparado para responder com status adequados e mensagens de erro claras.

💡 Observações
Foi implementado um validador simples para os campos obrigatórios.

O CPF é único no banco.

O código está modularizado em: models, controllers, routes e validators.

🔮 Melhorias Futuras
Autenticação (JWT).

Filtros avançados na listagem.

Paginação.

Logs mais detalhados.
