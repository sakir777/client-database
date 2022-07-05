import addressModel from "../models/address.model";
import Client from "../models/client.model";

export const addAddress = async (req, res) => {
    let addAddressQuery;
    let { apartment, address, zipcode, email } = req.body;
    let clientData = await Client.findOne({ email: email });
    if(clientData) {
        let addressData = {
            apartment: apartment,
            address: address,
            zipcode: zipcode,
            client_id: clientData._id,
          };
    addAddressQuery = await addressModel.create(addressData);
    if (addAddressQuery) {
        let updateClientData = await Client.updateOne(
          { _id: clientData._id },
          { $push: { address_id: addAddressQuery._id } }
        );
        return res.status(200).json({
          message: "Address added successfully",
          status: true,
        });
      }else {
        return res.status(200).json({
        message: "Input Values Invalid",
        status: true,
        });
        }
    }else {
        return res.status(200).json({
        message: "Email Address Invalid",
        status: true,
        });
        }
};