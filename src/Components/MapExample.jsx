import React from "react";

export default  function MapExample(){
  //define a dummy database
  const users = [
    {id:1, name:"John Doe", followers: 120, followed: 1024},
    {id:2, name:"Catherine Jane", followers: 500, followed: 1024},
    {id:3, name:"Ade Kunle", followers: 904, followed: 1024},
  ]
  return(
    <div>
        <h3>Users Profile</h3>
        {users.map((user)=>(
            <div>
                {user.name}
                {user.followers}
                {user.followed}
            </div>
        ))}
    </div>
  )
}
