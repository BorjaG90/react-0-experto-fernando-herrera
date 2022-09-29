export const getGifs = async(category) => {
  const url = `api.giphy.com/v1/gifs/search?api_key=B20j9iunukSNMktQHeyg0mZHZHMP3BWl&q=${category}&limit=10`
  const res = await fetch(url);
  const {data} = await res.json();
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.downsized_medium.url
  }));
  return gifs;
}