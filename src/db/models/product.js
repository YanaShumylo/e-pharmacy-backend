import { model, Schema } from 'mongoose';

const productsSchema = new Schema(
    {
        photo: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            enum: ['heart', 'medicine', 'head', 'hand', 'leg'],
            required: true,
            default: 'heart',
        },
        supplier: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        reviews: [{
            type: Schema.Types.ObjectId, ref: 'reviews',
        },]
    },
        {timestamps: true, versionKey: false },
     );

export const productsCollection = model('products', productsSchema);
