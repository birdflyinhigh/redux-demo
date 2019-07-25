const redux = require('redux');

const createStore = redux.createStore;


const initialState = {
    counter: 1
};

// reducer
// into  state and action, output
const rootReducer = (state = initialState, action) => {

    return state
};

// store
// store will be initialized with a reducer,
// reducer is the only thing that will update the state

const store = createStore(rootReducer);


console.log(store.getState());
