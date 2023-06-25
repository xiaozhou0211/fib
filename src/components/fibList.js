function FibonacciList() {

    const getFibonacciResult = () => {
        let fib = [0, 1];
        let i;
        for (i = 0; i <= 10; i++) {
            fib.toString();
            fib[fib.length] = fib[i] + fib[i + 1];
        }
        return fib;
    };

    const fibonacciList = getFibonacciResult();

    return (
        <>
            {fibonacciList.map((element, i) => <p key={i}> {element} </p>)}
        </>
    );
}

export default FibonacciList;