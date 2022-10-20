import React, { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const handleNameFilter = ({ target }) => {
    setNameFilter(target.value);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const url = 'https://swapi.dev/api/planets';
        const request = await fetch(url);
        const { results } = await request.json();
        const filterResults = results.filter((e) => delete e.residents);
        setData(filterResults);
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchAPI();
  }, []);

  const contexto = useMemo(
    () => ({
      data,
      nameFilter,
      handleNameFilter,
    }),
  );

  return (
    <MyContext.Provider value={ contexto }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.shape(),
}.isRequired;

export default Provider;
