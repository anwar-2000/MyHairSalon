import {createMongoConnection} from "@/database/Conn"
import { deleteUser, getUsers, postUser, updateUser } from "@/database/userControllers";
import { NextApiRequest , NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

   // createMongoConnection().catch(()=>res.status(405).json({error : 'Error in the connection'}))
   try {
    await createMongoConnection();
  } catch (err) {
    res.status(500).json({ error: "Error in the connection" });
    return;
  }
    const {method} = req

    switch(method){
      case 'GET' : 
      getUsers(req,res)
      break;
          //res.status(200).json({method,name:'GET RESPONSE'});break;
      case 'POST' :
      postUser(req,res)
       // res.status(200).json({method,name:'POST RESPONSE'});
        break;
      case 'PUT' :
        updateUser(req,res)
         // res.status(200).json({method,name:'PUT RESPONSE'});
         break;
      case 'DELETE' :
        deleteUser(req,res);
           // res.status(200).json({method,name:'DELETE RESPONSE'});
            break;
      default :
            res.setHeader('Allow',['GET','POST','PUT','DELETE'])
            res.status(405).end(`Method ${method} is not ALLOWED`)
            break;
          }}