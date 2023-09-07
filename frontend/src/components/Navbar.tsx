import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'


export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case hidden lg:flex lg:text-xl">Pokemon Card</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="w-32 flex items-center justify-center">
                    <button className="btn w-32 flex items-center justify-center btn-square btn-ghost"><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <AiOutlineSearch />
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <button onClick={() => navigate('/add-new-data')} className="btn btn-neutral text-white">Add Pokemon</button>
                </div>
            </div>
        </div>
    )
}
