import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


describe('Pruebas en <SearchPage />', () => {
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
});