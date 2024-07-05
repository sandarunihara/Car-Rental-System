import express from 'express';
import { Addcars ,getcars,updatecar,deletecar,fetchcar} from '../Controllers/AddcarController.js';

const router = express.Router();

router.post("/createcar",Addcars);
router.get("/getcar",getcars);
router.put("/updatecar/:id",updatecar);
router.delete("/deletecar/:id",deletecar)
router.get("/fetchcar/:id",fetchcar);

export default router;