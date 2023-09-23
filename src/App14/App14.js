import React, { useState,useEffect } from 'react'

export default function App14() {
  //const [texta,setTexta]=useState('');
  
  const [name,setName] = useState('');
  const [listnames,setListnames]=useState([]);

  const handleChange = (e) =>{
    setName(e.target.value)
  }
  const fetchNames = () => {
    fetch(`http://localhost:5500/api/getlistnames`,{
      method:'GET',
      //credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseData => {
        const names2 = responseData.map(item => item.name);
        setListnames(names2);
          })
      .catch(error => console.error('Error fetching user data:', error));
  }

  const firstconnect = () => {
    fetch(`http://localhost:5500/api/firstconnect`,{
      method:'GET',
      //credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseData => {
        localStorage.setItem('idusername_test',responseData.idusername_first);
        localStorage.setItem('token_first',responseData.token_first);
        

                })
      .catch(error => console.error('Error fetching user data:', error));
  }

  useEffect(() => {
    if(localStorage.getItem('idusername_test')){
      alert('we have idusername_test in local storage')
    } else {
      firstconnect();
    }
    fetchNames();
  }, [])
  
  const handleSubmit = async ()=>{
    try {
      const response = await fetch('http://localhost:5500/api/addname', {
         method: 'POST',
         //credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({"name":name , "token":localStorage.getItem('token_first'),"username":localStorage.getItem('idusername_test') })//data_localstorage})
       });
 
       if (response.ok) {
         console.log('Data sent successfully to the server.');
         //setListnames([...l istnames, name]);
        } else {
         console.error('Error sending data to the server.');
       }
     } catch (error) {
       console.error('Error:', error);
     }
}
  return (
    <div>
        App14
        <br></br>
        <input onChange={handleChange} type='text'/>
        <button onClick={handleSubmit}>Submit</button>
        <br></br>
        the list of names that you added : {listnames}
    </div>
  )
}
