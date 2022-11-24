import { Router } from "express";

const router = Router();

router.get('/employee', (req, res) =>  res.send('get employee ') );

export default router;