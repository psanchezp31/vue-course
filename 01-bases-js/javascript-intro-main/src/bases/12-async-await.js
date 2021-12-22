//una función asíncrona retorna una promesa por defecto
//el await solo puede ser utilizado dentro de una función asíncrona

const myPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("We have a value in the promise");
    }, 1000);
  });
};

//myPromise().then(console.log)

const medirTiempoAsync = async () => {
  //es una función asíncrona, hace que la función retorne una promesa
  //async simplifica todo el codigo de arriba (myPromise)

  try {
    console.log("inicio");
    const response = await myPromise();
    console.log(response);
    console.log("fin");
    return "fin de medir tiempo async";
  } catch (error) {
    return "catch en medirTiempoAsync";
  }
};

medirTiempoAsync().then(console.log).catch(console.log);
