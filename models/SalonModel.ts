import { Schema, models, model } from "mongoose";

interface SalonPattern {
    name : string;
    owner : string;
    subscription : string;
    haircuts : [string];
    artists : [{
        name : string , image : string,
    }]
}

const  SalonSchema : Schema<SalonPattern> = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    subscription: { type: String, required: true , default : "inactive"},
    haircuts : [{type: String}],
    artists : [{
        name: { type: String },
        image: { type: String }
    }]
});

const Salon = models.Salon || model('Salon',SalonSchema)
export default Salon
