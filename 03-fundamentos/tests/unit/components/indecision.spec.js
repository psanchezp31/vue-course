import { shallowMount, mount } from "@vue/test-utils";
import Indecision from "@/components/Indecision";

describe("Indecision Component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  ); //global.fetch.. Global es como el window de js en NODE, ya que node no tiene fetch
  //promise.resolve, se usa para simular el THEN que se le debe dar al fetch. Primero hace el fetch, luego necesita un then.
  //el json() es un método, se mockea con la respuesta que da el promise.resolve

  beforeEach(() => {
    wrapper = shallowMount(Indecision);

    clgSpy = jest.spyOn(console, "log"); //espiar el console.log

    jest.clearAllMocks();
  });

  test("Debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada excepto el (console.log)", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer"); //vm es la instancia de vue. No se puede usar solamente wrapper, porque no es una función.

    const input = wrapper.find("input");
    await input.setValue("hola mundo");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).toHaveBeenCalledTimes(0);
  });

  test('Escribir el símbolo de interrogación "?" debe disparar el getAnswer', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer"); //vm es la instancia de vue. No se puede usar solamente wrapper, porque no es una función.

    const input = wrapper.find("input");
    await input.setValue("hola mundo?");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });

  test("pruebas en getAnswer", async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si!");
  });

  test("pruebas en getAnswer - Fallo en el API", async () => {
    //mock de un catch

    fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo cargar del API");
  });
});
