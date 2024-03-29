import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import counterReducer from './store/reducers/counters';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';

const reducer = combineReducers({
    counter: counterReducer,
    result: resultReducer,

});

const store = createStore(reducer);


ReactDOM.render(
    <Provider
        store={store}
    ><App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
