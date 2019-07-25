import actions from '../constant/actionTypes';

const initialState = {
    counter: 50,
    results: [],
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
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value:state.counter})
            };
        case actions.DELETE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value:state.counter})
            };

        default:
            return state

    }
};


export default reducer;