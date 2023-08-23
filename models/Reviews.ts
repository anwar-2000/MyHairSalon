import { Schema, model } from "mongoose";

interface Review {
    name: string;
    text: string;
    stars: number;
}

interface ReviewPattern {
    salon: string;
    review: Review;
}

const ReviewSchema: Schema<ReviewPattern> = new Schema({
    salon: { type: String, required: true },
    review: {
        name: { type: String, required: true },
        text: { type: String, required: true },
        stars: { type: Number, required: true, min: 1, max: 5 }
    }
});

const Reviews = model<ReviewPattern>('usersReviews', ReviewSchema);

export default Reviews;
