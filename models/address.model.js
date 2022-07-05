const mongoose = require("mongoose");

const { Schema } = mongoose;
const addressSchema = new mongoose.Schema(
  {
    apartment: {
      type: String,
      required: [true, "Please Add Name"],
    },
    address: {
      type: String,
      required: [true, "Please Add Address"],
    },
    zipcode: {
      type: Number,
      required: [true, "Please Add Zip Code"],
    },
    client_id: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("address", addressSchema);