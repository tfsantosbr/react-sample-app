export function ProductForm() {
  return (
    <form action="">
      <fieldset>
        <legend>Informações do Produto</legend>

        <div className="input-wrapper">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="categoryId">Categoria:</label>
          <select id="categoryId" defaultValue="">
            <option value="">Selecionar</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição:</label>
          <textarea id="description"></textarea>
        </div>

        <div className="input-wrapper">
          <label htmlFor="price">Preço:</label>
          <input type="number" id="price" step="0.01" min="0" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="manufactureAt">Data de Fabricação:</label>
          <input type="date" id="manufactureAt" />
        </div>

        <div className="input-wrapper checkbox-wrapper">
          <input type="checkbox" id="isActive" />
          <label htmlFor="isActive">Ativo</label>
        </div>

        <div className="actions-wrapper">
          <button type="submit">Salvar</button>
          <button type="button">Cancelar</button>
        </div>
      </fieldset>
    </form>
  );
}
