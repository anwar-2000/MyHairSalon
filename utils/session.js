import CredentialProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
//import { createMongoConnection} from "@/database/conn"
import User from "@/models/UserModel";
import { getServerSession } from "next-auth/next";

export const authOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    session : {
    },
    providers : [
        CredentialProvider({
                   name : "Credentials",
                   async  authorize(credentials,req){
                   // console.log(credentials)
                    const result = await User.findOne({email : credentials.email})
                    if(!result){
                        return null;
                    }
                    //comparing pwds
                    const checkPassword = await bcrypt.compare(credentials.password,result.password);
                    //if incorrect 
                    if(!checkPassword || result.email !== credentials.email){
                        return null;
                    }
                   // console.log("result in Authorize ",result)
       return result;}
        })
    ],

}

export async function getCurrentUser() {
    const session = (await getServerSession(authOptions));
    //console.log('SESSION',session)
    return session;
}