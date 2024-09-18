import React from 'react'
import getUsers from '../../../../fecthApiData/FetchData'

const page =async(props) => {
    const getUserList = getUsers();
    const users = await getUserList;
    const currId = props.params.userId;
    console.log("currid :",currId);
    const userData = users[currId-1];
    console.log("Clickable User ID : ",userData);
    
  return (
    <div>
        <h3>User Details Page</h3>
        <h4>Id : {userData.id}</h4>
        <h4>Name : {userData.name}</h4>
        <h4>Website : {userData.website}</h4>
    </div>
  )
}

export default page


export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map((user) =>{
        userId : user.id.toString()
    })
}
