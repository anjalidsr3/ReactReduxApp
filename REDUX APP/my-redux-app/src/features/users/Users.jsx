import { useEffect,useState } from "react";
import { API } from "../../apiService";

const Users =() =>{
    const [users,setUsers]=useState([]);
     const [loading,setLoading]=useState(false);

     console.log("users",users)

     const fetchUsers=async()=>{
 setLoading(true);
 const usersFromAPI=await API.fetchUsers();
 setLoading(false);
 setUsers(usersFromAPI);
     };

     useEffect(()=>{
        fetchUsers();
     },[]);
      return(
        <>
        <h2>Users List:</h2>
        {loading ? (
            <div>Loading...</div>
        ):(

       
        <ul>
            {users.map((user)=>
            (
              <li key={user.id}>{user.name}</li>  
            ))}
        </ul>
         )}
        </>
      )
}
 export default Users;