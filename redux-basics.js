const redux = require('redux');

const createStore = redux.createStore;


const initialState = {
    counter: 1
};

// reducer
// into  state and action, output
// dont mutate the state, the correct step is to
// 1. copy the js object first,
// 2. make changes then replace it with the new one.
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
// takes arguments, and then trigger the change of state in the reducer
// should always have a args type ->, and some optional payload.
// then you use this payload to update the big state. then make changes in the final react components.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


console.log(store.getState());