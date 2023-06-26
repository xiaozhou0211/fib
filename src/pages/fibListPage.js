import React from 'react';
import FibonacciList from '../components/fibList';

function FibListPage() {
    return (
        <>
            <div className="container" data-testid='fibList-container'>
                <div className="App-header">
                    <h3 className='PageTitle'>Fibonacci List</h3>
                    <FibonacciList></FibonacciList>
                </div>
            </div>
        </>
    );
}
export default FibListPage;