import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: true,
    },
    contact: {
        type: String,
        required: [true, "Please Add Contact Number"],
        unique: true,
    },
    notes: {
        type: String
    },
    address_id: [{
        type: Schema.Types.ObjectId,
        ref: 'address'
    }],
    creditcard_id: [{
        type: Schema.Types.ObjectId,
        ref: 'card'
    }],
    },
    {
        timestamps: true,
    }
);

const Client = mongoose.model('Client',schema);
export default Client;