import express from "express";
import { AddPokemonCard , GetPokemonCard , DeletePokemonCard} from "../controller/index.js";
const router = express.Router();


router.post("/Add-pokemon-card" , AddPokemonCard);
router.get("/get-pokemon-card" , GetPokemonCard)
router.delete('/delete-pokemon-card/:id' , DeletePokemonCard)

router.use("*" , (req, res) => {
    res.status(404).json({ error: "Requested Resource Not Found" });
});


export default router;

