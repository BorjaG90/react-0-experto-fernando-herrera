import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {
  /**
   * getState trae todo el rootState
   */
  return async ( dispatch, getState ) => {
    dispatch(startLoadingPokemons())

    // TODO realizar peticion http
    

    // dispatch(setPokemons());
  }
}