import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"


const Navbar = ( setTasks,
  setIsAuthenticated,
  isAuthenticated,
  setTaskTitle,) => {

    const [allTasks, setAllTasks] = useState([]);


  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    fetchTasks();
  }, [isAuthenticated]);



 // Fetch tasks from the server
 const fetchTasks = async () => {
  try {
    const {data} = await axios.get(
      "http://localhost:4000/api/v1/task/mytask",
      { withCredentials: true }
    );
    setAllTasks(data.tasks);
    setTasks(data.tasks); // Update tasks with fetched tasks
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};



// const handleLogout = async () => {
//   try {
//     const response = await axios.get('http://localhost:4000/api/v1/user/logout', {
//       withCredentials: true, // To include cookies in the request
//     });

//     if (response.status === 200) {
//       toast.success(response.data.message); // Display success toast
//       // Perform any additional logout handling like redirecting to a login page or updating the state
//     } else {
//       toast.error('Logout failed'); // Display error toast
//     }
//   } catch (error) {
//     toast.error('An error occurred'); // Display error toast
//   }
// };












// const handleLogout = async () => {
//   await axios
//     .get("http://localhost:4000/api/v1/user/logout", {
//       withCredentials: true,
//     })
//     .then((res) => {
//       // console.log(res.data.message)
//       toast.success(res.data.message);
//       setIsAuthenticated(false);
//     })
//     .catch((err) => {
//       toast.error(err.response.data.message);
//       // console.log(err.response.data.message)
//     });
// };








const handleLogout = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/user/logout",
      { withCredentials: "true" }
    );
    toast.success(data.message);
    setIsAuthenticated(false);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};


  // const filterTasks = (filterType) => {
  //   let filteredTasks = [];

  //   switch (filterType) {
  //     case "completed":
  //       filteredTasks = allTasks.filter((task) => task.status === "completed");
  //       setTaskTitle("Completed Tasks");
  //       break;
  //     case "incomplete":
  //       filteredTasks = allTasks.filter((task) => task.status === "incomplete");
  //       setTaskTitle("Incomplete Tasks");
  //       break;
  //     case "archived":
  //       filteredTasks = allTasks.filter((task) => task.archived === true);
  //       setTaskTitle("Archived Tasks");
  //       break;
  //     case "all":
  //       filteredTasks = allTasks;
  //       setTaskTitle("Tasks");
  //       break;
  //     default:
  //       filteredTasks = allTasks;
  //   }
  //   setTasks(filteredTasks);
  // };














  return (
    <>

<div>

<h2>TASK MANAGER</h2>
<Link  to="/" >Home</Link>
{/* <Link  to="/profile" >Profile</Link> */}

{/* <select name="pets" id="pet-select">
  <option value="">--CHOOSE TASKS--</option>
  <option  onClick={() => filterTasks("all")}  value="all">All Tasks</option>
  <option  onClick={() => filterTasks("completed")}  value="completed">  Completed Tasks</option>
  <option onClick={() => filterTasks("incomplete")} value="incomplete">Incomplete Tasks</option>
  <option onClick={() => filterTasks("archived")}  value="archived"> Archived Tasks</option>
</select> */}

<button  onClick={handleLogout} >LogOut</button>






</div>






    </>
  )
}

export default Navbar
