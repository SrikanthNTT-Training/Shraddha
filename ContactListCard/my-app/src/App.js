import React, { useState } from 'react';

import './styles.css';

const App = () =>{
  const contacts = [
    {name:"Shraddha Joshi", email:"shraddhajoshi333@gmail.com", age:27},
    {name:"Nishant Joshi", email:"Nishantjoshi09@gmail.com", age:29},
    {name:"Abhishek Joshi", email:"AbhiJoshi01@gmail.com", age:23}
  ];

  return (
    <>
    {contacts.map(it =>(
      <ContactCard 
      avtar="https://via.placeholder.com/150"
      name={it.name}
      email={it.email}
      age={it.age}
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
