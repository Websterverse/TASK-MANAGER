import {catchAsyncErrors} from "../middlewares/catchAsyncError.js"
import {errorMiddleware} from "../middlewares/error.js"
import ErrorHandler from "../middlewares/error.js"
import {Task} from "../models/taskSchema.js"


export const createdTask =  catchAsyncErrors((req , resp , next)=>{});
export const deleteTask =  catchAsyncErrors((req , resp , next)=>{});
export const updateTask =  catchAsyncErrors((req , resp , next)=>{});
export const getMyTask =  catchAsyncErrors((req , resp , next)=>{});
export const getSingleTask =  catchAsyncErrors((req , resp , next)=>{});
