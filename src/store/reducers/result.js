import * as actions from '../actions';

const initialState = {
    results: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.payload})
            //     不同reducer之间，通过action.payload传值
            };
        case actions.DELETE_RESULT:
            // working the filtered copy of the array. this is great
            const selectedId = action.payload;
            const updatedResults = state.results.filter((item) => selectedId !== item.id);
            return {
                ...state,
                results: updatedResults
            };
        default:
            return state

    }
};


export default reducer;