📄 README - Sistema de Sugestões para Melhorar a Cidade
✅ Descrição Geral
Este é um sistema web para envio e gerenciamento de sugestões para melhorias na cidade. O sistema é composto por:

Frontend: Aplicação web feita em HTML, CSS e JavaScript utilizando Firebase Firestore para armazenamento de dados.

Backend (simulado): API REST criada em Java utilizando Spring Boot, responsável por gerenciar as operações de CRUD das sugestões, além de realizar validações e fornecer segurança extra na comunicação.

🏛️ Arquitetura do Projeto
Frontend:

/index.html

/style.css

/app.js

Backend Java (MVC):

/model → Classes que representam os dados (por exemplo, Sugestao.java).

/controller → Camada que recebe as requisições HTTP (SugestaoController.java).

/service → Camada de regras de negócio (SugestaoService.java).

/repository → Interface com o banco de dados (SugestaoRepository.java).

/config → Arquivos de configuração como CORS (CorsConfig.java).

🔄 Como funciona o sistema
1. Fluxo de dados:
O usuário acessa a página e preenche o formulário de sugestão.

O frontend envia os dados para o Firebase Firestore (neste projeto).

Para fins de estudo, considere que os dados também poderiam ser enviados via requisição HTTP (POST /sugestoes) para o backend Java.

O backend:

Receberia a sugestão via um endpoint REST.

Validaria os dados.

Armazenaria no banco de dados relacional (por exemplo, MySQL ou PostgreSQL).

Disponibilizaria endpoints para listar (GET), atualizar status (PATCH), e excluir (DELETE) sugestões.

O frontend consome essas APIs e exibe dinamicamente as sugestões, com possibilidade de alterar status (de "Pendente" para "Visto") ou excluir.

🛠️ Tecnologias utilizadas
Frontend:
HTML5, CSS3

JavaScript (ES6+)

Firebase Firestore

Backend (simulado):
Java 17+

Spring Boot

Spring Data JPA

MySQL / PostgreSQL

Configuração de CORS para permitir requisições do frontend.

🚀 Como rodar o projeto
✅ Frontend:
Clone o repositório.

Configure o Firebase e substitua o firebaseConfig no app.js.

Abra o index.html no navegador.

✅ Backend (Java):
Clone o repositório.

Configure o application.properties para conexão com o banco de dados.

Execute a aplicação Spring Boot com mvn spring-boot:run ou via sua IDE.

API será exposta em http://localhost:8080.

🧩 Exemplos de Endpoints (backend):
Método	Endpoint	Descrição
POST	/sugestoes	Cadastrar nova sugestão
GET	/sugestoes	Listar todas as sugestões
PATCH	/sugestoes/{id}/status	Alterar status de uma sugestão
DELETE	/sugestoes/{id}	Deletar uma sugestão

🛡️ Segurança e Integração
O backend está configurado com CORS liberado para o domínio do frontend.

O backend valida os campos obrigatórios (nome, email, sugestao).

Pode-se adicionar autenticação futura para administradores.

📦 Considerações Finais
Este projeto exemplifica a integração entre frontend e backend, com foco em boas práticas de arquitetura, uso de banco de dados, e interação com o usuário.

🎯 O backend aqui foi descrito para fins didáticos conforme exigido pela atividade, mas a versão funcional utiliza diretamente o Firebase Firestore.

