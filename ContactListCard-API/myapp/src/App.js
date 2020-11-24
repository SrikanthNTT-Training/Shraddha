import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const App = () =>{
  const [contacts, setcontacts] = useState([]);

  useEffect(() =>{

    axios.get("https://randomuser.me/api/?results=3").then(item =>{
    console.log(JSON.stringify(item.data.results));
    setcontacts(item.data.results);
  })

  },[]);
  


  return (
    <>
    {contacts.map(it =>(
      <ContactCard 
      avtar={it.picture.large}
      name={it.name.first}
      email={it.email}
      age={it.dob.age}
      />
    ))}
    </>
    
  );
}


const ContactCard =(props)=>{
  const [showAge,setShowAge] = useState(false);
return(
  <div className="contact-card">
  <img src={props.avtar} alt="profile" />

  <div className="user-details">
  <p>Name: {props.name}</p>
  <p>Email: {props.email}</p>
  <button onClick = {() => setShowAge(!showAge)}>Toggle Age</button>
  {showAge ===true ? <p>Age: {props.age}</p> : null }
  
  </div>

</div>
);
};
export default App;
