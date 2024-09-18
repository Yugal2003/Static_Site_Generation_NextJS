import React from 'react'
import getUsers from '../../../fecthApiData/FetchData'
import Link from 'next/link';

const usersData = async() => {
    const getUserList = getUsers();
    const users = await getUserList;
    // console.log(users);
  return (
    <div>
        <h1>Welcome To UserData Page</h1>
        {
            users.map((user)=>(
                <h2 key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </h2>
            ))
        }
    </div>
  )
}

export default usersData
