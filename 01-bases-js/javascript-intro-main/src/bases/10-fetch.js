const API_KEY = "KusKXTb5PqIHjYC1u61UpQMoZ5m7Ep2Y";

//https://api.giphy.com/v1/gifs/random?api_key=KusKXTb5PqIHjYC1u61UpQMoZ5m7Ep2Y

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
// .then(response =>{
//     console.log(response)
// })
// .catch(e => console.log(e))

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
  .then((response) => response.json()) // El fetch API genera un redableStream el cual no permite ver la información del body del objeto Response, por eso se utiliza json() para serializar la información y acceder a ella
  .then(({ data }) => {
    // acá ya se tiene la respuesta de forma accesible, se toma la DATA del objeto RESPONSE
    console.log(data);
    const { url } = data.images.original; // acá accedemos a una propiedad y con desestructuración obtenemos la propiedad url
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
