const express = require('express');

import { addCards } from "../controllers/cards.controller"

const router = express.Router();

router.post("/add-card", addCards);

export default router;