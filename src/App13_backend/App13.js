import React, { useEffect, useState } from 'react';

function App13() {
  const [organismes,setOrganismes] =useState([])
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Send the input text to the server (you will implement this)
    console.log('Sending text to server:', inputText);


    fetch('http://localhost:5000/api/saveText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"texta":inputText}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
       
    // Optionally, you can clear the input field after sending
    setInputText('');
  };

  useEffect(() => {
    
    // Make a GET request to fetch product listings from the backend
    fetch('http://localhost:5000/api/regions')
      .then((response) => response.json())
      .then((data) => setOrganismes(data))
      .catch((error) => console.error('Error:', error));


    // Make a POST request to collect user data when the component mounts
    fetch('http://localhost:5000/api/collectuserdata', {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          console.log('User data collected.');
        } else {
          console.error('Failed to collect user data.');
        }
      })
      .catch((error) => {
        console.error('Error collecting user data:', error);
      });

  
    }, []);

  return (
    <div>
      <h1>Your React App13 about Backend</h1>
      <br></br>
      <br></br>
      <h2>the organisme getted from the server are :</h2>
      <ul>
        {organismes.map((organisme,index) => (
          <li key={index}>
            <h3>{organisme.label}</h3>
            <p>{organisme.val}</p>
          </li>
        ))}
      </ul>
      <br></br>
      
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>

      </div>
  );
}

export default App13;
