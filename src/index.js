import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlinesName = [
    {id:1, name: 'Ryan Air'},
    {id:2, name:'Spirit'},
    {id:3, name: 'Sun Country'}
]
const airlines = (state = ['a', 'b', 'c'], action) =>{
    if(action.type === 'ADD_AIRLINE'){
        const airlinesName = action.payload;
        // //make copy of state
        // const copyOfState = [...state];
        // //modify state
        // copyOfState.push(airlinesName);
        // //return the modify copy of state
        // return copyOfState;

        // The Vang Method
        return [...state, airlinesName]
    }

    return state;
}


/** TODO: Create store */
const ourFirstStore = createStore(
    combineReducers({
        airlines
    }),
    applyMiddleware(logger
        )
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store ={ourFirstStore}>
            <App />
        </Provider>
    </React.StrictMode>
);