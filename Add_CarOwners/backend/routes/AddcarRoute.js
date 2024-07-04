import express from 'express';
import { Addcar } from '../Controllers/AddcarController';

const router = express.Router();

router.post("/create",Addcar);