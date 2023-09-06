export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}


export type AddPokemonDatatype = {
    name: string,
    generation: string,
    familyID: string,
    imageURL: string,
    type1: string,
    type2: string,
    pokeDexNumber: string,
    eveolutionState: string,
    weather1: string,
    weather2: string,
    statTotal: string,
    attack: string,
    defense: string,
    stamina: string,
    legandary: string,
    aquireable: string,
    spawns: string,
    regional: string,
}