import { Schema, models, model } from "mongoose";

interface UserPattern {
    username : string;
    password : string;
    email : string;
    role : string;
}

const  UserSchema : Schema<UserPattern> = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true},
    role :  { type: String, required: true},
});


const User = models.User || model('User',UserSchema)
export default User