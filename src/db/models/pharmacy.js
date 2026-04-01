import { model, Schema } from 'mongoose';

const pharmaciesSchema = new Schema(
    {
    name: { type: String, required: true, },
    address: { type: String, required: true, },
    city: { type: String, required: true, },
    phone: { type: String, required: true, },
    rating: { type: Number, default: 0, },

    location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }, 
    },
    },

    { timestamps: true, versionKey: false },

);

pharmaciesSchema.index({ location: '2dsphere' });

export const Pharmacy = model('pharmacies', pharmaciesSchema);