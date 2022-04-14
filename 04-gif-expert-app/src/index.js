import React from 'react';
import { createRoot } from 'react-dom/client';

import GifExpertApp from './GifExpertApp';

import './index.css';

createRoot(document.querySelector('#root')).render( <GifExpertApp />);
