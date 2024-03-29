import mongoose from "mongoose";

const bikeSchema = mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  status: {
    type: String,
    default: "active",
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
  },
  banRequestAmount: {
    type: Number,
    default: 0,
  },
  image: String,
  report_By: Array,
  rented_By: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
});

export const bikeModel = mongoose.model("bike", bikeSchema);
