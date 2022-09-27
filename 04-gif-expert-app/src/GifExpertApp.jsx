import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([...categories, 'Valorant']);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {
          categories.map((category) => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
