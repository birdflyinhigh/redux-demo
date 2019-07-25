import actions from '../constant/actionTypes';

const initialState = {
    counter: 50
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {counter: state.counter + 66};
        case actions.DECREMENT:
            return {counter: state.counter - 45};
        case actions.ADD:
            return {counter: state.counter + 15};
        case actions.SUBTRACT:
            return {counter: state.counter - 5};
        default:
            return state

    }
};


export default reducer;