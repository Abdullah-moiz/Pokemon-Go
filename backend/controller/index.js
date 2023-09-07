import Pokemon from "../models/Pokemon.js";
import { ProvidePokemonSchema } from "../validation/index.js";



export const AddPokemonCard = async (req, res) => {
    try {

        const data = await req.body;
        const {
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        } = data;


        const { error } = ProvidePokemonSchema.validate({
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        });
        
        if (error) return res.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });


        const newPokemon = new Pokemon({
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        });

        await newPokemon.save();

        return res.status(201).json({ success: true, message: "Pokemon added successfully" });


    } catch (error) {

        console.log("🚀 ~ file: index.js:125 ~ AddPokemonCard ~ error:", error)

        return res.status(500).json({ success: false, error: "something went wrong" });

    }

}



export const GetPokemonCard = async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
  
      const getData = await Pokemon.find({})
        .skip((page - 1) * limit)
        .limit(limit);
  
      return res.status(200).json({ success: true, data: getData });
    } catch (error) {
      console.log("🚀 ~ file: index.js:101 ~ GetPokemonCard ~ error:", error);
      return res.status(500).json({ success: false, error: "something went wrong" });
    }
  };
  


export const DeletePokemonCard = async (req, res) => {
    try {
        const { id } = req.params;
        await Pokemon.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Pokemon deleted successfully" });
    } catch (error) {
        console.log("🚀 ~ file: index.js:125 ~ AddPokemonCard ~ error:", error)
        return res.status(500).json({ success: false, error: "something went wrong" });
    }
}



export const GetSpecificCardData = async (req, res) => {

    try {

        const { id } = req.params;

        const data = await Pokemon.findById(id);

        return res.status(200).json({ success: true, data: data });

    } catch (error) {

        console.log("🚀 ~ file: index.js:125 ~ AddPokemonCard ~ error:", error)

        return res.status(500).json({ success: false, error: "something went wrong" });

    }


}



export const UpdatePokemonCard = async (req, res) => {

    try {

        const { id } = req.params;

        const data = await req.body;

        const {
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        } = data;


        const { error } = ProvidePokemonSchema.validate({
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        });


        if (error) return res.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

        await Pokemon.findByIdAndUpdate(id, {
            name,
            generation,
            familyID,
            imageURL,
            type1,
            type2,
            pokeDexNumber,
            eveolutionState,
            weather1,
            weather2,
            statTotal,
            attack,
            defense,
            stamina,
            legandary,
            aquireable,
            spawns,
            regional,
        });

        return res.status(200).json({ success: true, message: "Pokemon updated successfully" });
    }catch(error){
        console.log("🚀 ~ file: index.js:125 ~ AddPokemonCard ~ error:", error)
        return res.status(500).json({ success: false, error: "something went wrong" });
    }

}


export const SearchPokemonCard = async (req, res) => {

    try {

        const { search } = req.query;
        const name = `${search}`
        
        const data = await Pokemon.find({ name: { $regex: name, $options: "i" } });

        return res.status(200).json({ success: true, data: data });

    } catch (error) {

        console.log("🚀 ~ file: index.js:125 ~ search pokemoncard ~ error:", error)

        return res.status(500).json({ success: false, error: "something went wrong" });

    }

}