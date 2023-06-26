import React from 'react';
import FibonacciCounter from '../components/fibCounter';

function FibCounterPage() {
    return (
        <>
            <div className="container">
                <div className="App-header">
                    <FibonacciCounter></FibonacciCounter>
                </div>
            </div>
        </>
    );
}
export default FibCounterPage;