import mongoose from "mongoose";

const AddPokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  generation: { type: String, required: true },
  familyID: { type: String, required: true },
  imageURL: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String, default: "" },
  pokeDexNumber: { type: String, required: true },
  eveolutionState: { type: String, required: true },
  weather1: { type: String, required: true },
  weather2: { type: String, default: "" },
  statTotal: { type: String, required: true },
  attack: { type: String, required: true },
  defense: { type: String, required: true },
  stamina: { type: String, required: true },
  legandary: { type: String, enum: ["0", "1"], required: true },
  aquireable: { type: String, enum: ["0", "1"], required: true },
  spawns: { type: String, enum: ["0", "1"], required: true },
  regional: { type: String, enum: ["0", "1"], required: true }
});

const Pokemon  = mongoose.models.pokemons ||  mongoose.model("pokemons", AddPokemonSchema);

export default Pokemon;
