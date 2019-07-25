import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    props;

    render() {
        return (
            <div>
                <CounterOutput value={this.props.count}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.count)}> Store Results</button>
                <ul>
                    {this.props.store_results.map(item => (
                        <li onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

// @ connect with 2 args:
// two args； 1. state we want to get, 2. the action we want to dispatch

// 1.get state from redux and then convert it into the props of the react component.
const mapStateToProps = state => {
    return {
        count: state.counter.counter,
        store_results: state.result.results
    };
};

// 2. dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actions.DECREMENT}),
        onAddCounter: () => dispatch({type: actions.ADD, payload: 15}),
        onSubtractCounter: () => dispatch({type: actions.SUBTRACT}),
        onStoreResult: (result) => dispatch({type: actions.STORE_RESULT, payload: result}),
        onDeleteResult: (id) => dispatch({type: actions.DELETE_RESULT, payload: id}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);