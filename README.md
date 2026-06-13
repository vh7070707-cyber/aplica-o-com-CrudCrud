# CRM de Clientes com CrudCrud

Sistema web para gerenciamento de clientes desenvolvido com HTML, CSS e JavaScript, utilizando a API CrudCrud para armazenar os dados.

## Funcionalidades

* Cadastro de clientes
* Listagem de clientes
* Busca por nome, e-mail ou telefone
* Exclusão de clientes
* Contador de clientes cadastrados
* Interface responsiva

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* CrudCrud API

## Estrutura do Projeto

```text
projeto-clientes/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/aplica-o-com-CrudCrud.git
```

2. Entre na pasta do projeto:

```bash
cd aplica-o-com-CrudCrud
```

3. Abra o arquivo `index.html` no navegador.

## Configuração da API

No arquivo `script.js`, substitua a URL abaixo pela sua chave do CrudCrud:

```javascript
const API_URL =
"https://crudcrud.com/api/SUA_CHAVE_AQUI/clientes";
```

Exemplo:

```javascript
const API_URL =
"https://crudcrud.com/api/123456789abcdef/clientes";
```

## Funcionalidades Futuras

* Edição de clientes
* Dashboard com gráficos
* Exportação para CSV
* Sistema de login
* Tema escuro
* Paginação

## Autor

Desenvolvido por Vinicius Henrique para estudos e prática de desenvolvimento web.
