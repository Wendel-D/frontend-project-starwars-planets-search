import React, { useContext } from "react";
import MyContext from "../context/myContext";

export default function Form() {
    const contexto = useContext(MyContext);
    const { nameFilter, handleNameFilter } = contexto;
    return (
        <form>
            <label htmlFor="name-filter">
                <input
                data-testid='name-filter'
                    type="text"
                    name="name-filter"
                    value={ nameFilter }
                    onChange={ handleNameFilter }
                />
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>

                </select>
            </label>
            <button>filtrar</button>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>

                </select>
            </label>
            <label>
                <input type='checkbox' />
                <input type='checkbox' />
            </label>
            <button>ordenar</button>
            <button>remover filtros</button>
        </form>
    );
};
