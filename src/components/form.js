import React, { useContext } from 'react';
import MyContext from '../context/myContext';

export default function Form() {
  const contexto = useContext(MyContext);
  const {
    nameFilter,
    column,
    comparisonFilter,
    value,
    filterByNumericValues,
    handleNameFilter,
    handleColumn,
    handleComparisonFilter,
    handleValue,
    arrayColumn,
    handleClick,
    removeFilter,
  } = contexto;
  console.log(filterByNumericValues);
  return (
    <form>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          type="text"
          name="name-filter"
          value={ nameFilter }
          onChange={ handleNameFilter }
          placeholder="Search Name"
        />
      </label>
      <label htmlFor="genero">
        Coluna:
        <select
          name="genero"
          id="genero"
          data-testid="column-filter"
          value={ column }
          onChange={ handleColumn }
        >
          {
            arrayColumn.map(
              (e, index) => (
                <option
                  key={ index }
                  value={ e }
                >
                  {e}
                </option>),
            )
          }
        </select>
      </label>
      <label htmlFor="operator">
        Comparador:
        <select
          name="operator"
          id="operator"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ handleComparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value-filter"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ handleValue }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick({
          column,
          comparisonFilter,
          value,
        }) }
      >
        filtrar
      </button>
      <label htmlFor="ordernar">
        <select name="ordenar">
          <option>population</option>
        </select>
      </label>
      <label htmlFor="checkboxOrdem">
        <input type="checkbox" name="checkboxOrdem" />
        <input type="checkbox" name="checkboxOrdem" />
      </label>
      <button type="button">ordenar</button>
      <button type="button">remover filtros</button>
      {
        filterByNumericValues?.map((e, index) => (
          <div key={ index } data-testid="filter">
            <p>
              {`${e.column} ${e.comparisonFilter} ${e.value}`}
            </p>
            <button
              type="button"
              onClick={ () => removeFilter(e) }
            >
              Excluir

            </button>
          </div>
        ))
      }
    </form>
  );
}
