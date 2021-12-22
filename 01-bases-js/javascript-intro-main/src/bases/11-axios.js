import axios from "axios";

const API_KEY = "KusKXTb5PqIHjYC1u61UpQMoZ5m7Ep2Y";
//https://api.giphy.com/v1/gifs/random?api_key=KusKXTb5PqIHjYC1u61UpQMoZ5m7Ep2Y

const giphyApi = axios.create({
  // crear instancia de axios
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: API_KEY,
  },
});

giphyApi.get("/random").then(({ data }) => {
  console.log(data);
  const { url } = data.data.images.original; //obtengo la url accediendo al objeto data.. entrando a data.images.original

  console.log(url);

  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
});

export default giphyApi;
