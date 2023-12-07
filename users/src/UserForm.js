import React from 'react';
import { useState } from 'react';
const UserForm = ({ onAddUser }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <div>
      <span>1</span>
      <span>C</span>
      <span>D</span>
      <span>E</span>
      <span>F</span>
      <span>G</span>
      <span>2</span>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>6</span>
    </div>
  );
};

export default UserForm;
