import express from "express";

import {createdTask , getMyTask , getSingleTask , updateTask , deleteTask} from "../controller/taskController.js"

const  router = express.Router() ; 


router.post("/post" , createdTask);
router.put("/update/:id" , updateTask);
router.delete("/delete/:id" , deleteTask);
router.get("/mytask" , getMyTask);
router.get("/single/:id" , getSingleTask);


export default router ; 

