import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setCounter(counter => counter + 1),
      1000,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {counter}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
