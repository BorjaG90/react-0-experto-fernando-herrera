import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'Pokemon'] );
  //   setCategories( cats => [...categories, 'Pokemon'] );
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {
          categories.map((category) =>(
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>

    </>
  );
};

export default GifExpertApp;