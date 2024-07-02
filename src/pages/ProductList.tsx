import { NavLink } from "react-router-dom";

export function ProductList() {
  return (
    <div className="report-wrapper">
      <h1>Listagem de Produtos</h1>

      <form className="filter-container">
        <div className="filter-wrapper">
          <input
            type="text"
            id="product-name-filter"
            placeholder="Filtrar por nome"
          />
        </div>

        <div className="filter-wrapper">
          <select id="category-id-filter" defaultValue="">
            <option value="">Todas as categorias</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>

        <div className="actions-wrapper right">
          <NavLink to="/admin/products/create" className="action-button">
            Novo Produto
          </NavLink>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Data de Fabricação</th>
            <th>Ativo</th>
            <th className="actions">Ações</th>
          </tr>
        </thead>
        <tbody id="product-list">
          <tr>
            <td>1</td>
            <td>Produto A</td>
            <td>Categoria A</td>
            <td>R$ 19,90</td>
            <td>02/10/2022</td>
            <td>Sim</td>
            <td className="actions">
              <a href="#" className="edit-btn">
                Editar
              </a>
              <a href="#" className="delete-btn">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Produto B</td>
            <td>Categoria B</td>
            <td>R$ 19,90</td>
            <td>02/10/2022</td>
            <td>Não</td>
            <td className="actions">
              <a href="#" className="edit-btn">
                Editar
              </a>
              <a href="#" className="delete-btn">
                Excluir
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <a href="#" className="active">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
      </div>
    </div>
  );
}
