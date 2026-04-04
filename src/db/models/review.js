import { model, Schema } from 'mongoose';

const reviewsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref:'customers',
      required: true,
    },
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const reviewsCollection = model('reviews', reviewsSchema);