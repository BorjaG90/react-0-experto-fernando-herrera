import React from 'react'

// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);
  const {loading} = useFetchGifs();

  console.log(loading);

  // useEffect( () => {
  //   getGifs(category)
  //     .then(images => setImages(images)); 
  // }, [ category ]);

  return (
    <>
      <h3>{category}</h3>

      {loading ? 'Cargando...': 'Data cargada'}

      {/* <div className='card-grid'>
        {
          images.map((image) => (
            <GifGridItem
            key={image.id}
            { ...image }
            />
            ))
          }
      </div> */}
    </>
  )
}
