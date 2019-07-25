import * as actions from '../actions';

const initialState = {
    counter: 50,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 66
            };
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 45
            };
        case actions.ADD:
            return {
                ...state,
                counter: state.counter + 15
            };
        case actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter - 5
            };
        default:
            return state

    }
};


export default reducer;