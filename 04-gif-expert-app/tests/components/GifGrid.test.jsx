import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Pokemon';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />)
    expect(screen.getByText('Esta cargando'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imágenes del useFetchGIfs', () => {
    const gifs = [
      {
        id: 'PK001',
        title: 'Bulbasaur',
        url: 'https://localhost/Bulbasaur.png'
      },
      {
        id: 'PK004',
        title: 'Charmander',
        url: 'https://localhost/Charmander.png'
      },
      {
        id: 'PK007',
        title: 'Squirtle',
        url: 'https://localhost/Squirtle.png'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(3);
  });
});