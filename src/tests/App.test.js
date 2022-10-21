import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Criando testes para requisito 5', () => {
  jest.setTimeout(25000)
  it('Criando testes 30% cobertura', async () => {
    render(<App />)

    const inputText = screen.getByTestId('name-filter');
    const inputGenero = screen.getByRole('combobox', { name: /coluna:/i });
    const inputOperator = screen.getByRole('combobox', { name: /comparador:/i });
    const inputValue = screen.getByTestId('value-filter');
    const buttonFiltrar = screen.getByTestId('button-filter');

    userEvent.type(inputText, 'Ta');

    expect(inputText).toBeInTheDocument();
    expect(inputGenero).toBeInTheDocument();
    expect(inputOperator).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(buttonFiltrar).toBeInTheDocument();

    const planetaTatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});
    expect(planetaTatooine).toBeInTheDocument();

    userEvent.selectOptions(inputGenero, 'orbital_period');
    userEvent.selectOptions(inputOperator, 'maior que');
    userEvent.type(inputValue, '200');
    userEvent.click(buttonFiltrar);

    userEvent.selectOptions(inputGenero, 'population');
    userEvent.selectOptions(inputOperator, 'menor que');
    userEvent.type(inputValue, '200');
    userEvent.click(buttonFiltrar);

    userEvent.selectOptions(inputGenero, 'diameter');
    userEvent.selectOptions(inputOperator, 'igual a');
    userEvent.type(inputValue, '200');
    userEvent.click(buttonFiltrar);

    // const buttonExcluir = screen.getAllByRole('button', {
    //   name: /excluir/i
    // });

    // console.log(buttonExcluir)

    // buttonExcluir.forEach((e) => {
    //   userEvent.click(e)
    // })


    userEvent.selectOptions(inputGenero, 'rotation_period');
    userEvent.selectOptions(inputOperator, 'maior que');
    userEvent.type(inputValue, '10');
    userEvent.click(buttonFiltrar);

    userEvent.selectOptions(inputGenero, 'surface_water');
    userEvent.selectOptions(inputOperator, 'maior que');
    userEvent.type(inputValue, '2');
    userEvent.click(buttonFiltrar);

    // const buttonRemoveAll = screen.getByRole('button', {
    //   name: /remove filters/i
    // })

    // userEvent.click(buttonRemoveAll);

  })
})
