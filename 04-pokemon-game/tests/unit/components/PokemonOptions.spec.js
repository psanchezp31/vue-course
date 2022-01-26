import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot ", () => {
    console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar las 4 opciones correctamente", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(4);

    expect(liTags[0].text()).toBe("pikachu");
    expect(liTags[1].text()).toBe("charmander");
    expect(liTags[2].text()).toBe("venusaur");
    expect(liTags[3].text()).toBe("mew");
  });

  test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger("click");
    console.log(wrapper)
    console.log(wrapper.emitted("selection"));

    expect(wrapper.emitted("selection").length).toBe(1); //para mirar que se emitió solo una vez
    expect(wrapper.emitted("selection")[0]).toEqual([5]); //asegura que se espere un arreglo con 5 dentro. 
    // Tiene que se con toEqual ya que no se pueden comparar objetos o arrays con toBe, los objetos no son iguales, ya que {} === {} esto es false,
    // pues guardan diferente espacio en memoria
  });
});
