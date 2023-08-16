import { Schema, models, model } from "mongoose";


interface SalonPattern {
    name: string;
    description: string;
    owner: string;
    address: string;
    subscription: string;
    place: string;
    country: string;
    image: string;
    date_subscribe : Date;
    haircuts: [
      {
        name: string;
        price: number;
      }
    ];
    artists: [
      {
        name: string;
        price: number;
      }
    ];
    weekends: string[];
    openDays: [
      {
        startTime: string;
        endTime: string;
      }
    ];
    closedDays: [
      {
        date: Date;
      }
    ];
  }


const SalonSchema  = new Schema<SalonPattern>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    owner: { type: String, required: true },
    place: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    date_subscribe : {type : Date, required : false},
    subscription: {
      type: String,
      required: true,
      default: "inactive",
    },
    haircuts: [
      {
        name: { type: String },
        price: { type: Number }
      }
    ],
    artists : [
      {
        name : {type : String},
        price : {type : Number}
      }
    ],
    weekends: [String],
    openDays : [
      {
        startTime : {type : String},
        endTime : {type : String}
      }
    ],
    closedDays : [
      {
        date : {type : Date}
      }
    ]
  });

const AllSalon = models.AllSalon || model('AllSalon',SalonSchema)
export default AllSalon
