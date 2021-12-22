import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import {pokemons} from '../mocks/pokemons.mock'

describe("PokemonPage Component", () => {
  let wrapper;
  let mixPokemonArraySpy;

  beforeEach(() => {
    mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, "mixPokemonArray"); // se llama acá para que el wrapper sepa que tiene que spiar el metodo en el mount, o sea cuando se renderiza 
    wrapper = shallowMount(PokemonPage);
  });

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });
  test("debe de llamar el mixPokemonArray ", () => {

    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });
  test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data(){
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      }
    }) 

    expect(wrapper.html()).toMatchSnapshot()
  });

  test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data(){
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      }
    }) 

    //PokemonPicture debe de existir
    //PokemonOptions debe de existir
    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    expect(picture.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()
    //PokemonPicture attribute pokemonId  === '5'
    expect(picture.attributes('pokemonid')).toBe("5")
    //PokemonOptions attribute pokemons toBe true
    expect(options.attributes('pokemons')).toBeTruthy()

  });

  test('pruebas con checkAnswer', async() => {
    const wrapper = shallowMount(PokemonPage, {
      data(){
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      }
    }) 
    
    await wrapper.vm.checkAnswer(5)

    expect(wrapper.find('h2').exists()).toBeTruthy()

  });

});
