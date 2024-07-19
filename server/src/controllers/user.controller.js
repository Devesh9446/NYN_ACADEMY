import {asyncHandler} from '../utils/asyncHandler.js'
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import {user} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import jwt from 'jsonwebtoken'
import { subscription } from '../models/subscription.model.js'

const generateAccessTokenRefreshToken=async(userId)=>{
    try{
        console.log(userId)
        const User=await user.findById(userId)
        console.log(User)
        const accessToken=await User.generateAccessToken()
        const refreshToken=await User.generateRefreshToken()
        // User.refreshToken=refreshToken
        await User.save({validateBeforeSave:false})//as now if we save password and other also required filed so to remove validation
    
        return {accessToken,refreshToken}

    }catch(error){
        throw new apiError(400,error)
    }
}
