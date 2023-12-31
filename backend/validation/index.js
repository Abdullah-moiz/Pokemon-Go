import Joi from "joi";
export const ProvidePokemonSchema  = Joi.object({
    name : Joi.string().required(),
    generation  : Joi.string().required(),
    familyID  : Joi.string().required(),
    imageURL  : Joi.string().required(),
    type1  : Joi.string().required(),
    type2  : Joi.string().required(),
    pokeDexNumber  : Joi.string().required(),
    eveolutionState  : Joi.string().required(),
    weather1  : Joi.string().required(),
    weather2  : Joi.string().required(),
    statTotal  : Joi.string().required(),
    attack  : Joi.string().required(),
    defense  : Joi.string().required(),
    stamina  : Joi.string().required(),
    legandary  : Joi.string().required(),
    aquireable  : Joi.string().required(),
    spawns  : Joi.string().required(),
    regional  : Joi.string().required(),
})