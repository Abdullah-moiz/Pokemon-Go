import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import {IoAddCircleSharp} from 'react-icons/io5'
import toast from 'react-hot-toast';


export default function Navbar() {
    const [search , setSearch] = useState('');
    const navigate = useNavigate()


    const handleSearch  = async () => {
        if(search === '') return toast.error('Please enter a name');
        navigate(`/search/${search}`)

    }

    return (
        <div className="navbar bg-base-100">
            <div className=" hidden lg:flex flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case hidden lg:flex lg:text-xl">Pokemon Card</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="w-60 border-black rounded-xl flex items-center border-2  justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search by Name" className="py-2 px-2 rounded-xl border-none outline-none  w-full max-w-xs" />
                    <AiOutlineSearch onClick={handleSearch} className="text-2xl hover:cursor-pointer hover:text-green-500 mx-2"/>
                </div>
                <div className="dropdown dropdown-end">
                    <button onClick={() => navigate('/add-new-data')} className="btn btn-neutral lg:flex hidden  text-white">Add Pokemon</button>
                    <button onClick={() => navigate('/add-new-data')} className="btn btn-circle lg:hidden"><IoAddCircleSharp /></button>
                </div>
            </div>
        </div>
    )
}
