import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(user).toStrictEqual(userTest);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const nombre = 'Borja'

    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toStrictEqual({
      uid: 'ABC567',
      username: 'Borja'
    });
  })
});