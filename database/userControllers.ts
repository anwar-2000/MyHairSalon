import type { NextApiRequest, NextApiResponse } from 'next'

import bcrypt from "bcrypt"
import UserModel from '@/models/UserModel';


export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
        const userEmail = req.query?.userEmail;
         const page = parseInt(req.query.page as string) || 1;
         const limit = parseInt(req.query.limit as string) || 50;
        let users;
      
        if (userEmail) {
          // Fetch user data by email
          users = await UserModel.find({ email: userEmail });
        } else {
          if(page && limit) {
          const skip: number = (page - 1) * limit;
          users = await UserModel.find({}).skip(skip).limit(limit);
        }
        }   
        if (!users) {
          return res.status(400).json({ error: "User Not Found" });
        }
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
      }
  }

  export async function postUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body;
        let { password, password2 } = body;
        if (password !== password2) {
          return res.status(400).json('Passwords do not match');
        }
        const hashedPassword = await bcrypt.hash(password, 2);
        body.password = hashedPassword; // Updating the password of user by the crypted one
        const newUser = await UserModel.create(body);
        return res.status(200).json({'USER CREATED ' : newUser});
      } catch (error) {
        console.error(error);
        return res.status(500).json({error});
      }
    }

export async function deleteUser(req : NextApiRequest , res : NextApiResponse){
    try{
        
        const {userId} = req.query;
 
         const deletedUser = await UserModel.findByIdAndDelete(userId);
 
         if(!deletedUser){
                 return res.status(400).json({error : 'error deleting user'})
         }
 
         return res.status(200).json({'USER Deleted' : deletedUser})
 
     }catch(error){
        return res.status(500).json( {'ERROR ' : error})
     }
}

export async function updateUser(req : NextApiRequest , res : NextApiResponse){
    try {
        const {userId} = req.query;
  
        const formData = req.body;
    
        if(userId && formData){
          const user = await UserModel.findByIdAndUpdate(userId,formData)
          return res.status(200).json({"product Modified" : user})
        }
        return res.status(400).json({error : "user Not Selected"})
      } catch (err) {
          return res.status(500).json({ err });
      }
}