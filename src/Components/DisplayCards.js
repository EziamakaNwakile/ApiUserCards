import React from 'react';
import {useState, useEffect} from 'react';

function DisplayCards(){
  console.log("Hello Amaka");
  const [users, setUsers] = useState([]);
  const url = "http://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(users => {
        setUsers(users);
      })

  })

    return (
      <React.Fragment>
        <div className="card-row">
          {users.map(user => ( <div id="CardsDetails">
            <img src={`https://robohash.org/${user.id}`} alt="hirobo" />
            <h2>{user.id}</h2>
            <h3> {user.name}</h3>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.company["name"]}</h4>
          </div>))}
        </div>    
      </React.Fragment>
     )
    }

export default DisplayCards;