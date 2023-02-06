import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [serverMessage, setServerMessage] = useState(" ");
  
  const updateMessage = async () => {
    const response = await fetch("http://localhost:4000/healthcheck");
    const data = await response.json();
    const message = `${data.dummy.date} ${data.dummy.time}: ${data.message}`;
    setServerMessage(message);
  }

  useEffect(() => {
    clearInterval();
    setInterval(updateMessage, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverMessage}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
