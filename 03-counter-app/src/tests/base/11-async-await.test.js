import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await-fetch', () => {
  test('debe de retornar el url de la imagen', async() => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });

  test('debe retornar error si no es https', async() => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});