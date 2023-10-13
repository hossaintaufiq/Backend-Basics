

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    //  creating objects 
    const users = { email, name }
    console.log(users)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data =>{ console.log( data)
        const newUsers= [...users,data]
        setUsers(newUsers);
        form.reset();
      })
      
  }

  return (
    <>

      <h1>User Management System Front-end</h1>

      show: {users.length}

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' />
        <br />
        <input type="email" name='email' id='' />
        <br />
        <input type="submit" name='submit' id='' value='Add Users' />
      </form>
      <div>
        {
          users.map(user => <div key={user.id}> {user.id} {user.name} {user.email}</div>)
        }
      </div>

    </>
  )
}

export default App
