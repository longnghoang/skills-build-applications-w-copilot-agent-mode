import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://symmetrical-halibut-wvx47v6j5vg2w54-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2>Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Add User</button>
      </div>
    </div>
  );
}

export default Users;