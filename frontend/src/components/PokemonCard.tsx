import { useState } from "react";
import { Pokemon } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { motion } from "framer-motion";
import { delete_pokemon_card } from "../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


type PokemonCardProps = {
  key: string;
  card: Pokemon;
  onDelete: (id: string) => void;
};

export default function PokemonCard({ card, key  , onDelete}: PokemonCardProps) {
  const navigate = useNavigate()
  const [Hovered, setHovered] = useState(false);



  const handleMouseEnter = () => {
    setHovered(true);

  };

  const handleMouseLeave = () => {
    setHovered(false);

  };


  const handleDelete = async (id: string) => {
    const res =  await delete_pokemon_card(id);
    if(res?.success){
      toast.success("Pokemon card deleted successfully");
      onDelete(id);
    }else{
      toast.error("Something went wrong");
    }
  }


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
          {
            Hovered ?
              <>
                <button onClick={() => handleDelete(card?._id)} className="btn btn-circle text-xl btn-ghost"><AiFillDelete /></button>
                <button onClick={() => navigate(`/update-data/${card?._id}`)} className="btn btn-circle text-xl btn-ghost"><AiFillEdit /></button>
              </>

              :
              <>
                <div>
                  <h3 className="font-semibold">Stamina 1</h3>
                  <p>{card?.stamina}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Weather</h3>
                  <p>{card?.weather1}</p>
                </div>
              </>

          }
        </div>
      </div>

    </motion.div >

  )
}
