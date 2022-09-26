import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState( value );

  const handleAdd = (event) => {
    // console.log(event)
    // setCounter(counter + 1);
    setCounter( (c) => c +1 );
  }

  const handleSubstract = () => setCounter( (c) => c -1 );

  const handleReset = () => setCounter( (c) => value );

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button aria-label="btn-add"onClick={ handleAdd }> +1 </button>
      <button aria-label="btn-substract"onClick={ handleSubstract }> -1 </button>
      <button aria-label="btn-reset"onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}
