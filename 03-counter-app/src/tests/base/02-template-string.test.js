import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template.string.js', () => {
  test('getSaludo debe de retornar Hola Borja', () => {
    const nombre = 'Borja';

    const saludo = getSaludo(nombre);

    expect( saludo ).toBe('Hola ' + nombre);
  });

  // getSaludo debe retornar
  test('getSaludo debe retornar por defecto Hola Carlos', () => {
    expect(getSaludo()).toBe(`Hola Carlos`);
  })
});