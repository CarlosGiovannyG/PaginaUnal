import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './Utils/Conected'

import Rout from './Routes/Routes';

import './index.css';


ReactDOM.render(
  <ApolloProvider client={client}>
   
      <Rout />
    
  </ApolloProvider>
 
  ,
  document.getElementById('root')
);


reportWebVitals();
