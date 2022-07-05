import express from "express";

import { clientRegistration, findClient, showClient, clientUpdate, clientDelete } from "../controllers/client.controller";

const router = express.Router();

router.post('/client-add/', clientRegistration);
router.get('/client-id/:id', findClient);
router.get('/client-all/', showClient);


export default router;