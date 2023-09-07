import { useForm, SubmitHandler } from "react-hook-form";
import { AddPokemonDatatype } from "../types";
import React, { useState } from 'react'
import { maxSize, uploadImages } from "../helper/upload";
import toast, { Toaster } from 'react-hot-toast';
import { Loading } from "../components";
import { add_new_pokemon_card } from "../services";
import { Link, useNavigate } from "react-router-dom";



export default function AddNewData() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)


    const { register, formState: { errors }, handleSubmit } = useForm<AddPokemonDatatype>({
        criteriaMode: "all"
    });

    const onSubmit: SubmitHandler<AddPokemonDatatype> = async data => {
        setLoading(true)
        const fileInput = document.getElementById('image') as HTMLInputElement;
        const imageFile = fileInput.files?.[0];

        let categoryImage;

        if (imageFile) {
            const CheckFileSize = maxSize(imageFile);
            if (CheckFileSize) {
                setLoading(false)
                return toast.error('Image size must be less then 1MB')
            }
            const uploadImageToFirebase = await uploadImages(imageFile);
            categoryImage = uploadImageToFirebase;
        } else {
            setLoading(false)
            return toast.error('Please select a image')
        }
        const finalData = {
            ...data,
            imageURL: categoryImage
        }

        const res = await add_new_pokemon_card(finalData);
        if (res?.success) {
            toast.success(res?.message)
            setLoading(false)
            setTimeout(() => {
                navigate('/')
            }, 500);
        } else {
            toast.error(res?.error)
            setLoading(false)
        }

    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='bg-gray-200 min-h-screen w-full px-2 '>

            {loading && <Loading />}
            <Toaster />
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Add Document
                    </li>
                </ul>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/2 h-full flex  flex-col  items-center  py-4'>
                    <h1 className='text-xl font-semibold py-2 border-b tracking-widest border-indigo-600'>Add Pokemon Card</h1>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label >
                        <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Family ID</span>
                        </label >
                        <input {...register("familyID", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.familyID && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Pokedex Number</span>
                        </label >
                        <input {...register("pokeDexNumber", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.pokeDexNumber && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Generation</span>
                        </label >
                        <select {...register("generation", { required: true })} className="select select-bordered w-full">
                            {pokemonGenerations.map(generation => (
                                <option key={generation} value={generation}>
                                    {generation}
                                </option>
                            ))}
                        </select>
                        {errors.generation && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Evalution Stage</span>
                        </label >
                        <select {...register("eveolutionState", { required: true })} className="select select-bordered w-full">
                            {EveolutionState.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>
                        {errors.eveolutionState && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Type 1</span>
                        </label >
                        <select {...register("type1", { required: true })} className="select select-bordered w-full">
                            {pokemonCardTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>
                        {errors.type1 && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Type 2</span>
                        </label >
                        <select {...register("type2", { required: true })} className="select select-bordered w-full">
                            {pokemonCardTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>
                        {errors.type2 && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Weather 1</span>
                        </label >
                        <select {...register("weather1", { required: true })} className="select select-bordered w-full">
                            {weatherConditions.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>
                        {errors.weather1 && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Weather 2</span>
                        </label >
                        <select {...register("weather2", { required: true })} className="select select-bordered w-full">
                            {weatherConditions.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>
                        {errors.weather2 && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Legendary</span>
                        </label >
                        <select {...register("legandary", { required: true })} className="select select-bordered w-full">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        {errors.legandary && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Spawns</span>
                        </label >
                        <select {...register("spawns", { required: true })} className="select select-bordered w-full">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        {errors.spawns && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Aquireable</span>
                        </label >
                        <select {...register("aquireable", { required: true })} className="select select-bordered w-full">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        {errors.aquireable && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Regional</span>
                        </label >
                        <select {...register("regional", { required: true })} className="select select-bordered w-full">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        {errors.regional && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >

                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Attack</span>
                        </label >
                        <input {...register("attack", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.attack && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Defense</span>
                        </label >
                        <input {...register("defense", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.defense && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Stamina</span>
                        </label >
                        <input {...register("stamina", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.stamina && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Stats Total</span>
                        </label >
                        <input {...register("statTotal", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.statTotal && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    {
                        selectedImage &&

                        <img src={selectedImage} alt='no Image found' className='my-4 w-52 h-52 rounded p-2 border border-black ' />

                    }
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Image </span>
                        </label >
                        <input onChange={handleImageChange} name='image' id="image" required accept="image/*" type="file" className="file-input input-bordered w-full " />
                        {errors.imageURL && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >

                    <div className='flex flex-col'>
                        <button className='btn btn-wide mt-4 btn-neutral' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



const pokemonCardTypes = [
    'Grass',
    'Fire',
    'Water',
    'Electric',
    'Psychic',
    'Fighting',
    'Darkness',
    'Metal',
    'Fairy',
    'Dragon',
    'Colorless'
];

const weatherConditions = [
    'Sunny',
    'Cloudy',
    'Rainy',
    'Snowy',
    'Windy',
    'Foggy',
    'Hail',
    'Thunderstorm'
];


const EveolutionState = [
    "1",
    "2",
    "3"
]

const pokemonGenerations = [
    'Generation I',
    'Generation II',
    'Generation III',
    'Generation IV',
    'Generation V',
    'Generation VI',
    'Generation VII',
    'Generation VIII'
];