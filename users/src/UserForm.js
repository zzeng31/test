import React from 'react';
import { useState } from 'react';
const UserForm = ({ onAddUser }) => {
  const [isValid, setIsValid] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddUser({
          firstName,
          lastName,
          email,
        });
      }}
    >
      {/* <div>
        <label>FirstName</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>LastName</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />
      </div> */}
      {/* <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
      </div>
      <button>Add User</button> */}
    </form>
  );
};

export default UserForm;
