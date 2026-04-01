import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
{
        image: {
            type: String,
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
            type: Number,
            default: 0,
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

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('customers', usersSchema);
