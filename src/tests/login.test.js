import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux' 

describe('testa a tela de Login', () => {
  it('testa se existe um botão play', () => 
  {
renderWithRouterAndRedux(<App />)

    const btnPlay = screen.getByRole('button', {  name: /play/i});
    expect(btnPlay).toBeInTheDocument();
  });

   it('testa se existe um input para o e-mail', () => 
  {
renderWithRouterAndRedux(<App />)

    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();
  });

     it('testa se existe um input para o nome', () => 
  {
renderWithRouterAndRedux(<App />)

    const inputName = screen.getByTestId('input-player-name');
    expect(inputName).toBeInTheDocument();
  });

     it('testa se existe um input para o e-mail', () => 
  {
renderWithRouterAndRedux(<App />)

    const btnPlay = screen.getByRole('button', {  name: /play/i});
    expect(btnPlay).toBeInTheDocument();

    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();
    
    const inputName = screen.getByTestId('input-player-name');
    expect(inputName).toBeInTheDocument();
    expect(btnPlay).toBeDisabled();

    userEvent.type(inputEmail, 'teste@test.com')
    expect(btnPlay).toBeDisabled();

    userEvent.type(inputName, 'testonildo')
    expect(btnPlay).toBeEnabled()
  });

})