import mongoose from "mongoose";

const roomBookSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  room_id: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: false,
    enum: ["Pending", "Complete"],
    default: "Complete",
  },
  payment_status: {
    type: String,
    required: false,
    default: "Completed",
  },

  payment_id: {
    type: String,
    required: false,
  },

  price: {
    type: Number,
    required: true,
  },

  entered_amount: {
    // New field for the amount entered by the student
    type: Number,
    required: true,
  },
});

const payment = new mongoose.Schema({
  total_amount: {
    type: Number,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  transaction_code: {
    type: String,
    required: true,
  },
  transaction_uuid: {
    type: String,
    required: true,
  },
  ref_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const RoomBook = mongoose.model("RoomBook", roomBookSchema);
export const Payment = mongoose.model("Payment", payment);
