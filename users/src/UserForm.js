import React from 'react';
import { useState } from 'react';
const UserForm = ({ onAddUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name, email);
        onAddUser({
          name,
          email,
        });
      }}
    >
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
