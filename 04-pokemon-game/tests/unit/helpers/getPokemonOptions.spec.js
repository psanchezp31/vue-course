import { getPokemons, getPokemonNames} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("debe de regresar un arreglo de números", () => {
      const pokemons = getPokemons()
      console.log(pokemons)
      expect(pokemons.length).toBe(650)
  });
  test('debe de retornar un arreglo de 4 elementos con nombres de pokemon ', async() => {
      const pokemons = await getPokemonNames([1,2,3,4])

      expect(pokemons[0].name).toBe('bulbasaur')
      expect(pokemons[1].name).toBe('ivysaur')
      expect(pokemons[2].name).toBe('venusaur')
      expect(pokemons[3].name).toBe('charmander')
      console.log(pokemons)
  });
});
