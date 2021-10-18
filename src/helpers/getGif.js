

//Creamos una funcion asincrona para obtener la url de las imagenes
export const getGif = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=N36fdd956LuB03Wi36jmSo22PW3QvhHJ&limit=6&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const { data } =  await resp.json();

   //Se realiza un map de los datos obtenidos de la respuesta de la API de Gifs
   const gifs = data.map( img =>{
    return {
       id: img.id,
       gif: img.images.downsized_medium.url,
       title: img.title
   }})

   return gifs;
}

export default getGif;