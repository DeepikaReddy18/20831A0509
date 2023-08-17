import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
// src/api.js
const API_TOKEN = 'YOUR_AUTH_TOKEN';

export async function fetchAllTrains() {
  // Implement API call to fetch all trains' data
}

export async function fetchSingleTrain(trainId) {
  // Implement API call to fetch data of a single train
}

