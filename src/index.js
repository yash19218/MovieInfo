import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './components/App';
import { movies } from './reducers';


const store = createStore(movies);
console.log('Store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Superman"}]
// });

// console.log('AFTER STATE',store.getState());

// ReactDOM.render(--->Older version React:17
//   <React.StrictMode>
//     <App  store={store}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



//React:18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App store={store} />);