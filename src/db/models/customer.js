import { model, Schema } from 'mongoose';

const customersSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        spent: {
            type: String,
            required: true,
            default: '0',
        },
        phone: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },
        register_date: {
            type: Date,
            default: Date.now
        },
    },
    { versionKey: false }
);

export const CustomersCollection = model('customers', customersSchema);