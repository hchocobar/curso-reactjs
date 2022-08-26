import React, { useState, useEffect } from 'react';

const Lista4Function = () => {
  const [newUser, setNewUser] = useState({ id: undefined, name: '', username: '', email: ''})
  const [users, setUsers] = useState()
  const endpoint = 'https://jsonplaceholder.typicode.com/users'

  const fetchUsers = async () => {
    const response = await fetch(endpoint)
    const resJSON = await response.json()
    setUsers(resJSON)
  };





  const handleNameInput = e => {
    setNewUser({...newUser, name: e.target.value});
  };

  const handleAddUser = () => {
    setUsers([...users, newUser])
  };




  useEffect(()=>{
    fetchUsers()
  },[]);

  return (
    <div>
      <h3>Function Component</h3>
      <input type="text" onChange={handleNameInput} value={newUser.name} placeholder="User Name" />
      <button onClick={handleAddUser}> Add </button>
      <section>
        <ul>
          {!users ? 'Cargando...' :
            users.map((users, index) => {
              return <li key={index}>{users.name}</li>
            })}
        </ul>
      </section>
    </div>
  );
};

export default Lista4Function;
