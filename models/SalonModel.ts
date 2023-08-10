import { Schema, models, model } from "mongoose";

interface SalonPattern {
    name : string;
    description : string;
    owner : string;
    address : string;
    subscription : string;
    place : string;
    country : string;
    image : string;
    haircuts :  [{
        name : string , price : number,
    }];
    artists : [{
        name : string , price : number,
    }]
}

const  SalonSchema : Schema<SalonPattern> = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    owner: { type: String, required: true },
    place: { type: String, required: true },
    country : { type: String, required: true },
    image: { type: String, required: true },
    subscription: { type: String, required: true , default : "inactive"},
    haircuts :  [{
        name: { type: String },
        price: { type: Number }
    }],
    artists : [{
        name: { type: String },
        price: { type: Number }
    }]
});

const AllSalon = models.AllSalon || model('AllSalon',SalonSchema)
export default AllSalon
