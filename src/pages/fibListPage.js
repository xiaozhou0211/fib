import React from 'react';
import FibonacciList from '../components/fibList';

function FibListPage() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>Fibonacci List</h3>
                    <FibonacciList></FibonacciList>
                </header>
            </div>
        </>
    );
}
export default FibListPage;