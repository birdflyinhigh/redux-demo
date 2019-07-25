const initialState = {
    counter: 50
};


const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 66
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 66
        }
    }
    if(action.type === 'ADD'){
        return {
            counter: state.counter + 66
        }
    }
    if(action.type === 'SUBTRACT'){
        return {
            counter: state.counter + 66
        }
    }


    return state
};


export default reducer;