import './App.css';

function App() {
  return (
    <>
      <div className="container" data-testid='main-container'>
        <h3 className='PageTitle'>Fibonacci</h3>
        <div className="NavBtnContaier centered">
          <a href="/fibList" className='NavBtn'>Fibonacci List</a>
          <a href="/fibCounter" className='NavBtn'>Fibonacci Counter</a>
        </div>
      </div>
    </>

  );
}

export default App;
