import React from 'react';
import {useFetch} from '../../hooks/useFetch';

import './effects.css';

export const MultipleCustomHooks = () => {

  useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  return (
    <div>
      <h1>Custom Hooks!!!</h1>
    </div>
  )
}
