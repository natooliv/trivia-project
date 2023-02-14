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

     it('testa se existe um botão play e se ele só ativado quando os campos são devidamente preenchidos', () => 
  {
renderWithRouterAndRedux(<App />)

    const btnPlay = screen.getByRole('button', {  name: /play/i});
    expect(btnPlay).toBeInTheDocument();

    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();
    
    const inputName = screen.getByTestId('input-player-name');
    expect(inputName).toBeInTheDocument();
    expect(btnPlay).toBeDisabled();

    userEvent.type(inputEmail, 'teste@test.com');
    expect(btnPlay).toBeDisabled();

    userEvent.type(inputName, 'testonildo');
    expect(btnPlay).toBeEnabled();

  });

  it('teste se o botão play funciona', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const btnPlay = screen.getByRole('button', {  name: /play/i});
    const inputEmail = screen.getByTestId('input-gravatar-email');
    const inputName = screen.getByTestId('input-player-name');

    userEvent.type(inputEmail, 'teste@test.com');
    userEvent.type(inputName, 'testonildo');
    userEvent.click(btnPlay);

    const namePlayer = await screen.findByTestId('header-player-name');
    expect(namePlayer).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/trivia');
  });

  it('testa se há um botão de configuração',() => {
    const { history } = renderWithRouterAndRedux(<App />);

    const btnSettings = screen.getByRole('button', {  name: /configurações/i})
    expect(btnSettings).toBeInTheDocument();

    userEvent.click(btnSettings);
    const {pathname} = history.location;
    expect(pathname).toBe('settings');

  })

})