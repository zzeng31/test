import React from 'react';

const UserList = ({ users }) => {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Gmail</th>
        </tr>
      </thead>
      <tbody>{users.length > 0 && renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
