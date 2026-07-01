import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import config from "../../config";
import httpStatus  from "http-status";
import { Request, Response } from "express";
import { userServer } from "./user.service";



const registerUser =  async (req: Request, res: Response) => {
  try {
    const paylod = req.body;

    const user = await userServer.registerUserIntDB(paylod)

    
    

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registration successful",
      data: {user}
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

export const userController = {
  registerUser
}