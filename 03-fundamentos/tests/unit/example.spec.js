describe("Example Component", () => {
  //describe, en el se escriben los unit test, comprende los test suit
  test("Debe de ser mayor a 10", () => {
    //esta función puede ser async

    //arreglar - preparar el sujeto de pruebas
    let value = 10;

    //estímulo
    value = value + 2;

    //observar el resultado
    expect(value).toBeGreaterThan(10);
  });
});
