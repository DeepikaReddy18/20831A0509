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
// src/api.js
const BASE_URL = 'http://20.244.56.144/train';

// Register the company and get clientID and clientSecret
export async function registerCompany() {
  const requestBody = {
    companyName: 'Train Central',
    rollNo: '1',
    ownerEmail: 'ram@abc.edu',
    accessCode: 'FKDLjg'
  };

  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Company registration failed');
  }
}

// Obtain an authorization token
export async function getAuthToken() {
  // Include the code for obtaining an authorization token here
  // Use the provided token for making authenticated API calls
}

// Use the obtained token for making authenticated API calls
export async function fetchAllTrains(authToken) {
  // Include the code for making API calls using the provided token
}

