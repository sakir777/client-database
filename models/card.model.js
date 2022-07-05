const mongoose = require("mongoose");

const { Schema } = mongoose;
const cardSchema = new mongoose.Schema(
  {
    card_id: {
      type: String,
      required: [true, "Please Add Card ID"],
    },
    token_id: {
      type: String,
      required: [true, "Please Add Token ID"],
    },
    last_four_digits: {
      type: String,
      required: [true, "Please Add Last Four Digits"],
    },
    client_id: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("card", cardSchema);