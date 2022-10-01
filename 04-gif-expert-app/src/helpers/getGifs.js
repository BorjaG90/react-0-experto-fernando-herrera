export const getGifs = async(category, api_key='B20j9iunukSNMktQHeyg0mZHZHMP3BWl', limit= 10) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`
  const res = await fetch(url);
  const {data} = await res.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs;
}