function FibonacciList() {

    const getFibonacciResult = () => {
        let fib = [0, 1];
        let i;
        for (i = 0; i <= 6; i++) {
            fib.toString();
            fib[fib.length] = fib[i] + fib[i + 1];
        }
        return fib;
    };

    const fibonacciList = getFibonacciResult();

    return (
        <>
            {fibonacciList.map((element, index) => <p data-testid={index} key={index}> {element} </p>)
            }
        </>
    );
}

export default FibonacciList;