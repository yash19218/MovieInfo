import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware} from 'redux';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './components/App';
import { rootReducer } from './reducers';

//function logger(obj,next,action)
//in curried format -> logger(obj)(next)(action)
const logger = function({dispatch,getState}){
    return function(next){
        return function(action){
            //middleware code
            console.log("ACTION TYPE = ",action.type);
            next(action);
        }
    }
}


const store = createStore(rootReducer,applyMiddleware(logger));
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