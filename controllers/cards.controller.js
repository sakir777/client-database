import cardModel from "../models/card.model";
import Client from "../models/client.model";

export const addCards = async (req, res) => {
    let addCardQuery;
    let { card_id, token_id, last_four_digits, email } = req.body;
    let clientData = await Client.findOne({ email: email });
    if(clientData) {
        let cardData = {
            card_id: card_id,
            token_id: token_id,
            last_four_digits: last_four_digits,
            client_id: clientData._id,
          };
    addCardQuery = await cardModel.create(cardData);
    if (addCardQuery) {
        let updateClientData = await Client.updateOne(
          { _id: clientData._id },
          { $push: { creditcard_id: addCardQuery._id } }
        );
        return res.status(200).json({
          message: "Credit Card added successfully",
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