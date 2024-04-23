import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";


const Users = () => {
    const loaderUser = useLoaderData()
    const [users,setUsers]=useState(loaderUser)

    const handelUserDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/user/${id}`,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
               const updatedUser =  users.filter(user=>user._id!==id)
               setUsers(updatedUser)
                alert('deleted successfully')
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className=" text-4xl text-center my-5 font-bold">Users : {loaderUser.length}</h1>
            <hr />
            <div className="grid gap-3 grid-cols-2 p-4 ">
              {
                users.map((user,idx)=>  <div key={idx} className=" bg-slate-300 rounded-xl p-4">
                <h1 className="text-2xl my-2">User : {idx+1} </h1>
                <hr />
                <p>Name: {user?.name} </p>
                <p>Email: {user?.email} </p>
                <p>Create Time: {user?.createAt} </p>
                <p>Last Login Time: {user?.lastLogTime} </p>
                
                <div className="flex justify-end">
                    <button onClick={()=>handelUserDelete(user?._id)} className="btn btn-error">Delete</button>
                </div>
            </div>)
              }
            </div>

        </div>
    );
};

export default Users;