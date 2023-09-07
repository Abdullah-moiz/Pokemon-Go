import express from "express";
import { AddPokemonCard , GetPokemonCard ,UpdatePokemonCard,GetSpecificCardData, DeletePokemonCard} from "../controller/index.js";
const router = express.Router();


router.post("/Add-pokemon-card" , AddPokemonCard);
router.get("/get-pokemon-card" , GetPokemonCard)
router.delete('/delete-pokemon-card/:id' , DeletePokemonCard)
router.get("/get-specific-card-data/:id",GetSpecificCardData)
router.put("/update-pokemon-card/:id",UpdatePokemonCard)

router.use("*" , (req, res) => {
    res.status(404).json({ error: "Requested Resource Not Found" });
});


export default router;

