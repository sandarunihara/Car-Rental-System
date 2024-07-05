import express from 'express';
import { Addcars } from '../Controllers/AddcarController.js';

const router = express.Router();

router.post("/create",Addcars);

export default router;