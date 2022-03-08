import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => { 
  test('debe de retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar undefined si Heroé no existe', () => {
    const id = 18;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arrray de heroés de DC', () => {
    const owner = 'DC';
    const heroesData = heroes.filter( (h) => h.owner === owner );;
    const dcHeroes = getHeroesByOwner(owner);
    expect(dcHeroes).toEqual(heroesData);
  });

  test('debe de retornar un arrray de heroés de Marvel', ()=>{
    const owner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(owner);
    expect(marvelHeroes.length).toBe(2);
  });

 });