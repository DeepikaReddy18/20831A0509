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
