const express = require("express");

import { addAddress } from "../controllers/address.controller";

const router = express.Router();

router.post("/add-address", addAddress);

export default router;