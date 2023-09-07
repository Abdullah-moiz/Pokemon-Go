import { useState } from "react";
import { Pokemon } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { motion } from "framer-motion";


type PokemonCardProps = {
  key: string;
  card: Pokemon;
};

export default function PokemonCard({ card, key }: PokemonCardProps) {
  const [Hovered, setHovered] = useState(false);



  const handleMouseEnter = () => {
    setHovered(true);
    
  };

  const handleMouseLeave = () => {
    setHovered(false);
    
  };


  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={key} className="w-72 relative hover:scale-105 transition-all duration-700 cursor-pointer h-[30rem] p-1 border border-black rounded m-2">
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
      {Hovered && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-44 bg-slate-950/50 transition-all duration-500 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AiFillDelete className="text-red-600 text-2xl m-2" />
          <AiFillEdit className="text-green-600 text-2xl m-2" />
        </motion.div>
      )}
    </motion.div >

  )
}
