import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search_pokemon_card } from "../services";
import { Loading, Navbar, PokemonCard } from "../components";
import { Pokemon } from "../types";
import toast from "react-hot-toast";


export default function Search() {
    let { search } = useParams();
    const Cardname = search as string;
    const [pokemonCard, setPokemonCard] = useState<Pokemon[] | []>([])
    const [loading , setLoading] = useState<boolean>(true)


    const getData  = async () => {
        const res = await search_pokemon_card(Cardname);
        if(res?.success){
            setLoading(false)
            setPokemonCard(res?.data)
        }else{
            setLoading(false)
            toast.error(res?.error)
        }
    }


    useEffect(() => {getData()}, [Cardname])

    const handleDelete = (id: string) => { }


    return (
        <div className="w-full relative flex flex-col items-center h-screen bg-gray-200">
            <Navbar />

            {loading && <Loading />}
            <div className="py-3 px-4 w-full h-[90%] overflow-auto flex items-center justify-center flex-wrap">
                {pokemonCard?.map((card: Pokemon) => {
                    return <PokemonCard key={card?._id} card={card} onDelete={handleDelete} />;
                })}
            </div>

        </div>
    )
}
