import { Schema, models, model } from "mongoose";

interface AppointmentPattern {
    customer : string;
    artist : string;
    salon : string;
    date : Date;
}

const AppointmentSchema : Schema<AppointmentPattern> = new Schema({
    customer: { type: String, required: true },
    artist: { type: String, required: true },
    salon: { type: String, required: true },
    date: { type: Date, required: true }
});

const Appointment = models.Appointment || model('Appointment', AppointmentSchema);
export default Appointment;