import Client from "../models/client.model";
import mongoose from "mongoose";

export const clientRegistration = async function(req,res) {
    const clientData = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        notes: req.body.notes,
        address: req.body.address_id,
        creditcard: req.body.creditcard_id,
    };

    let email = req.body.email;
    const clientExists = await Client.findOne({ email });
 
    if(clientExists){
        return res.status(400).json({
            message: "Client Exists",
            status: false
        });
    }
    
    Client.create(clientData, function(err, data){
        if(err) {
            return res.status(500).json({
                message: "Something went wrong.",
                status: false
            });
        }
        return res.status(200).json({
            message: "Client Added Succesfully",
            data:data,
            status:true
        });
    });
}


export const findClient = async function (req, res) {
    const { id } = req.params;
    const ObjectId = mongoose.Types.ObjectId;
  
    const clientInfo = await Client.find({ _id: ObjectId(id)}).populate('address_id').populate('creditcard_id');
  
    res.status(200).json({
        message:"Data fetched successfully",
        data:clientInfo,
        status:true,
    })
};


export const showClient = async function (req, res) {
    const { id } = req.params;
    const ObjectId = mongoose.Types.ObjectId;
  
    const clientInfo = await Client.find({}).populate('address_id').populate('creditcard_id');

    res.status(200).json({
        message:"Data fetched successfully",
        data:clientInfo,
        status:true,
    })
};
