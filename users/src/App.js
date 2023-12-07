import UserForm from './UserForm';
import UserList from './UserList';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const onAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <div className="App">
      <UserForm onAddUser={onAddUser} />
      <hr /> <hr />
      <hr />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
