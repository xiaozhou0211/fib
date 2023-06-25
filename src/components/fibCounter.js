import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class FibonacciCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previous1: 1,
            previous2: 0,
        }
        this.clickDecrease = this.clickDecrease.bind(this);
        this.clickIncrease = this.clickIncrease.bind(this);
    }

    clickIncrease(e) {
        let a = this.state.previous1 + this.state.previous2;
        this.setState({
            previous1: a,
            previous2: this.state.previous1,
        });
    }

    clickDecrease(e) {
        this.setState({
            previous1: this.state.previous2,
            previous2: this.state.previous1 - this.state.previous2,
        });
    }

    render() {
        return (
            <>
                <h3> The current number is: {this.state.previous1} </h3>
                <br />
                <div className='counterContainer'>
                    <button onClick={this.clickDecrease} className="NavBtn"><span className='counterSpan'>-</span></button>
                    <button onClick={this.clickIncrease} className="NavBtn"><span className='counterSpan'>+</span></button>
                </div>

            </>
        )
    }
}

export default FibonacciCounter;