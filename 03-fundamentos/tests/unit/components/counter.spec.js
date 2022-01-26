import { shallowMount, mount } from "@vue/test-utils";
//el mount, monta los componentes para que pueda ser utilizado en la prueba
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

    test("Debe hacer match con el snapshot", () => {

      expect(wrapper.html()).toMatchSnapshot();
    });

  test('H2 debe tener el valor por defecto "Counter', () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();

    const h2Value = wrapper.find("h2").text(); //abstraer el texto del h2

    expect(h2Value).toBe("Counter"); //revisar que ese texto sea igual a Counter
  });

  test("El valor por defecto debe ser 100 en el p", () => {
    const value = wrapper.find('[data-testid="counter"]').text();
    //console.log(allPtags);

    // const secondPTag = value[1];
    // expect(secondPTag).toBe("100");
    expect(value).toBe("100");
  });

  test("Debe incrementar y decrementar en 1 el valor del contador", async () => {
    //refactorización, desestructurando:
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    // const increaseBtn = wrapper.find('[data-testid="increaseBtn"]');
    // const decreaseBtn = wrapper.find('[data-testid="decreaseBtn"]');

    await increaseBtn.trigger("click"); // toca con asycn/await porque al darle click el renderizado del resultado no es inmediato
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    //expect(value).toBe("101");
    expect(value).toBe("99");
  });

  test("debe establecer el valor por defecto", () => {
    console.log(wrapper.props()); //accede a las props del counter, es decir start, y title

    const { start } = wrapper.props();

    expect(start).toBeInstanceOf(Number)

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  test("Debe mostrar la prop title", () => {
    const title = "Hola Mundo";

    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });
    console.log(wrapper.html());

    expect(wrapper.find("h2")
      .text())
      .toBe(title);
  });
});
