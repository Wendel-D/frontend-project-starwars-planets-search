import React, { useContext } from 'react';
import MyContext from '../context/myContext';

export default function Form() {
  const contexto = useContext(MyContext);
  const { nameFilter, handleNameFilter } = contexto;
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
      <label htmlFor="coluna">
        <select name="coluna">
          <option>population</option>
        </select>
      </label>
      <label htmlFor="operador">
        <select name="operador">
          <option>maior que</option>
        </select>
      </label>
      <button type="button">filtrar</button>
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
