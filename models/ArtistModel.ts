import { Schema, models, model } from "mongoose";

interface ArtistPattern {
    name : string;
    salon : string;
    appointments : [string];
}

const ArtistSchema : Schema<ArtistPattern> = new Schema({
    name: { type: String, required: true },
    salon: { type: String, required: true },
    appointments: [{ type: String }]
});

const Artist = models.Artist || model('Artist', ArtistSchema);
export default Artist;