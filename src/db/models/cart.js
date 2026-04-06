import { model, Schema } from 'mongoose';

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      unique: true,
    },
    items: [cartItemSchema],
  },
  { timestamps: true, versionKey: false }
);

export const CartCollection = model('orders', cartSchema);