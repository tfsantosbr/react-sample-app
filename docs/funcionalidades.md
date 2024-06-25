# Funcionalidades do App

- Login
- Cadastrar
- Dashboard
  - Menu
    - Novo Produto
    - Listar Produtos
  - Cadastrar Produto
  - Listar Produtos
    - Editar Produto
    - Remover Produto
    - Cadastrar Novo Produto

## Tela de Cadastro

### Campos

| Campo                 | Tipo                      |
|-----------------------|---------------------------|
| ID                    | Somente Leitura           |
| Nome                  | Text                      |
| Descrição             | Textarea                  |
| Categoria             | Select                    |
| Preço                 | Numérico com Decimal      |
| Imagens               | Arquivo (Aba separada)    |
| Data de Fabricação    | Data                      |
| Ativo                 | Checkbox                  |

### Opções

- Cadastrar
- Cancelar

## Tela Listagem

### Campos

| Campo                 | Tipo                      |
|-----------------------|---------------------------|
| Nome                  | Text                      |
| Categoria             | Text                      |
| Preço                 | Decimal com formatação    |
| Ativo                 | Sim ou Não                |
| Editar                | Link                      |
| Remover               | Ação                      |

### Funcionalidades

- Filtro por Nome
- Filtro por Categoria
- Filtro por Ativos
- Paginação
- Ordenação
