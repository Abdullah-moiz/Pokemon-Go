import express from "express";
import { AddPokemonCard , GetPokemonCard } from "../controller/index.js";
const router = express.Router();


router.post("/Add-pokemon-card" , AddPokemonCard);
router.get("/get-pokemon-card" , GetPokemonCard)

router.use("*" , (req, res) => {
    res.status(404).json({ error: "Requested Resource Not Found" });
});


export default router;

