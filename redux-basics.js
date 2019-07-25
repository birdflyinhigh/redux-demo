const redux = require('redux');

const createStore = redux.createStore;


const initialState = {
    counter: 1
};

// reducer
// into  state and action, output
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }

    return state
};

// store
// store will be initialized with a reducer,
// reducer is the only thing that will update the state

const store = createStore(rootReducer);


console.log(store.getState());

// DISPATCH  TYPE IS ALWAYS NEEDED.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


console.log(store.getState());