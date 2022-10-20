import React, { useContext } from 'react';
import MyContext from '../context/myContext';

export default function Form() {
  const contexto = useContext(MyContext);
  const {
    nameFilter,
    column,
    comparisonFilter,
    value,
    handleNameFilter,
    handleColumn,
    handleComparisonFilter,
    handleValue,
    filterValue,
  } = contexto;
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
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ handleColumn }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
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
        onClick={ filterValue }
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
    </form>
  );
}
