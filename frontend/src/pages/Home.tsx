import { useState } from "react";
import { Loading, Navbar, PokemonCard } from "../components";
import { Pokemon } from "../types";
import { useQuery } from "@tanstack/react-query";
import { get_all_pokemon_cards } from "../services";

export default function Home() {
    const [page, setPage] = useState(1);
    const [PokemonData, setPokemonData] = useState<Pokemon[] | []>([])

    const { data, isLoading } = useQuery({
        queryKey: ["get-pokemon-data", page],
        keepPreviousData: true,
        queryFn: () => get_all_pokemon_cards(page),
        onSuccess: (data) => {
            setPokemonData((prev) => [...prev, ...data]);
        }
    });

    console.log("🚀 ~ file: Home.tsx:11 ~ Home ~ data:", data);

    return (
        <div className="w-full relative flex flex-col items-center h-screen bg-gray-200">
            <Navbar />
            
            {isLoading && <Loading />}
            <div className="py-3 px-4 w-full h-[90%] overflow-auto flex items-center justify-center flex-wrap">
                {PokemonData?.map((card: Pokemon) => {
                    return <PokemonCard key={card?._id} card={card} />;
                })}
            </div>
            {data?.length > 0 && (
                <button className="btn btn-neutral my-1" onClick={() => setPage(page + 1)}>Load More</button>
            )}
        </div>
    );
}


