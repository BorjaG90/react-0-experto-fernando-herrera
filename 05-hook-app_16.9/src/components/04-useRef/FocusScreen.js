import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
  const inputRef = useRef();
  // console.log(ref);

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder='Su nombre'
      />
      <button 
        className='btn btn-outline-primary mt-5'
        onClick={handleClick}
      >Focus</button>
    </div>
  )
}
