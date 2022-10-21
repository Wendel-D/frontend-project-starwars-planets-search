import React, { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './myContext';

const arrayColumnInitial = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [arrayColumn, setArrayColumn] = useState(arrayColumnInitial);
  const [isAtt, setIsAtt] = useState(false);

  const handleNameFilter = ({ target }) => { setNameFilter(target.value); };
  const handleColumn = ({ target }) => { setColumn(target.value); };
  const handleComparisonFilter = ({ target }) => { setComparisonFilter(target.value); };
  const handleValue = ({ target }) => { setValue(target.value); };

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

  const columnFilter = () => {
    const string = filterByNumericValues.map((e) => (e.column));
    setArrayColumn(arrayColumn.filter((e) => !string.includes(e) && e));
    setIsAtt(false);
  };

  useEffect(() => {
    if (isAtt) {
      columnFilter();
    }
  }, [arrayColumn, filterByNumericValues, columnFilter]);

  const filterValue = () => {
    if (comparisonFilter.includes('maior que')) {
      const dataFilter = data.filter((e) => Number(e[column]) > Number(value));
      setData(dataFilter);
    }
    if (comparisonFilter.includes('menor que')) {
      const dataFilter = data.filter((e) => Number(e[column]) < Number(value));
      setData(dataFilter);
    }
    if (comparisonFilter.includes('igual a')) {
      const dataFilter = data.filter((e) => Number(e[column]) === Number(value));
      setData(dataFilter);
    }
  };

  const handleClick = (obj) => {
    setfilterByNumericValues((prevState) => [...prevState, obj]);
    filterValue();
    setIsAtt(true);
  };

  const contexto = useMemo(
    () => ({
      data,
      nameFilter,
      column,
      comparisonFilter,
      value,
      arrayColumn,
      filterByNumericValues,
      handleNameFilter,
      handleColumn,
      handleComparisonFilter,
      handleValue,
      handleClick,
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
