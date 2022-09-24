import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
  test('getHeroeById debe de retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
  });

  test('getHeroeById debe de retornar undefined si no existe el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroeByOwner debe retornar los heroes de DC', () => {
    const owner = 'DC';
    const testHeroes = getHeroesByOwner(owner);

    // Inflexible
    expect(testHeroes.length).toBe(3);
    expect(testHeroes).toStrictEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);

    // Flexible
    expect(testHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });
  test('getHeroeByOwner debe retornar los heroes de Marvel', () => {
    const owner = 'Marvel';
    const testHeroes = getHeroesByOwner(owner);

    // Inflexible
    expect(testHeroes.length).toBe(2);
    expect(testHeroes).toStrictEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);

    // Flexible
    expect(testHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });
});