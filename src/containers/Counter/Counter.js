import React, {Component} from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    props;
    state = {
        counter: 0
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                })
                break;
            case 'dec':
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1}
                })
                break;
            case 'add':
                this.setState((prevState) => {
                    return {counter: prevState.counter + value}
                })
                break;
            case 'sub':
                this.setState((prevState) => {
                    return {counter: prevState.counter - value}
                })
                break;
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.count}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
            </div>
        );
    }
}
// @ connect with 2 args:
// two args； 1. state we want to get, 2. the action we want to dispatch

// 1.get state from redux and then convert it into the props of the react component.
const mapStateToProps = state => {
    return {
        count: state.counter
    };
};

// 2. dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', payload: 15}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);