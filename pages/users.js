import { useState } from "react";
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'alla'},
    {id: 2, name: 'sveta'}
  ])

  return (
    <main>
      <h1>Users List</h1>
      <ul>
        {
          users.map(user => (
            <li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>
          ))
        }
      </ul>
    </main>
  );
};

export default Users;
