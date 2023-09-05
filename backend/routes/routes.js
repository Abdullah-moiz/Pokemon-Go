import express from "express";
import { test } from "../controller/index.js";
const router = express.Router();


router.get('/' , test);


export default router;

