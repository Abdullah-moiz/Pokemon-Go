import { Pokemon } from "../types";

type PokemonCardProps = {
  key: string;
  card: Pokemon;
};

export default function PokemonCard({card , key} : PokemonCardProps) {
  return (
    <div key={key} className="w-72 hover:scale-105 transition-all duration-700 cursor-pointer h-[30rem] p-1 border border-black rounded m-2">
      <div className="w-full h-72 rounded flex items-center  justify-center">
        <img src={card?.imageURL} alt="no img" className=" w-full h-full rounded object-fill" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{card?.name}</h2>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div>
            <h3 className="font-semibold">Attack</h3>
            <p>{card?.attack}</p>
          </div>
          <div>
            <h3 className="font-semibold">Defense</h3>
            <p>{card?.defense}</p>
          </div>
          <div>
            <h3 className="font-semibold">Stamina 1</h3>
            <p>{card?.stamina}</p>
          </div>
          <div>
            <h3 className="font-semibold">Weather</h3>
            <p>{card?.weather1}</p>
          </div>
        </div>
      </div>
    </div>

  )
}
