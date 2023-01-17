import {fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate // Solo se sobrescribe el useNavigate
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el resultado y el input con el valor de queryString', () => {
    const heroValue = 'batman';

    render(
      <MemoryRouter initialEntries={[`/search?q=${heroValue}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe(heroValue);

    const img = screen.getByRole('img');
    expect(img.src).toContain(heroValue);

    const showError = screen.getByLabelText('show-error');
    expect(showError.style.display).toBe('none');
  });

  test('debe de mostrar un error si no se encuentra el heroe', () => {
    const heroValue = 'fakeHeroe123';

    render(
      <MemoryRouter initialEntries={[`/search?q=${heroValue}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const showError = screen.getByLabelText('show-error');
    expect(showError.style.display).not.toBe('none');
  });

  test('debe de llamar el navigate a la pantalla nueva de busqueda', () => {
    const inputValue = 'superman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {name: 'searchText', value: inputValue}});

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});