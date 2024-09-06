import React from 'react';
import NavBar from '../Components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import Carcard from '../Components/Carcard';
import Footer from '../Components/Footer';
import { IoChevronBackOutline } from "react-icons/io5";

const Searchpage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { searchResults, searchDetails } = location.state;
    const results = searchResults;
    console.log(results);

    if (!Array.isArray(searchResults) || searchResults.length === 0) {
        return <div className='bg-black text-white'>No results found.</div>;
    }

    const chunkedResults = [];
    for (let i = 0; i < results.length; i += 4) {
        chunkedResults.push(results.slice(i, i + 4));
    }

    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <div className='bg-black pt-24 text-white'>
                {/* Empty div for spacing */}
            </div>
            <div className='p-2 w-full flex flex-wrap justify-around bg-gradient-to-r from-gray-200 to-blue-200'>
                <div className='w-full sm:w-1/3 p-2'>
                    <p className='text-sm absolute ml-3 bg-gradient-to-r from-gray-200 to-blue-200'>Location</p>
                    <div className='mt-3 p-1.5 border border-dashed border-black'>
                        <p className='text-xl sm:text-3xl'>{searchDetails.Location}</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/3 p-2'>
                    <p className='text-sm absolute ml-3 bg-gradient-to-r from-gray-200 to-blue-200'>Vehicle Type</p>
                    <div className='mt-3 p-1.5 border border-dashed border-black'>
                        <p className='text-xl sm:text-3xl'>{searchDetails.Car_type}</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/3 p-2'>
                    <p className='text-sm absolute ml-3 bg-gradient-to-r from-gray-200 to-blue-200'>Rent Date</p>
                    <div className='mt-3 p-1.5 border border-dashed border-black'>
                        <p className='text-xl sm:text-3xl'>{searchDetails.rent_date}</p>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black text-white'>
                <button onClick={() => navigate(-1)} className='pt-3 pl-2 flex w-fit transition-all hover:text-red-500'>
                    <IoChevronBackOutline className='text-2xl mt-[1px]' />
                    <span className='font-semibold ml-2'>Back to Home</span>
                </button>
            </div>
            <div className='flex-grow flex flex-col'>
                <div className='w-full bg-black'>
                    {chunkedResults.map((chunk, rowIndex) => (
                        <div key={rowIndex} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-6'>
                            {chunk.map((car, index) => (
                                <Carcard
                                    key={index}
                                    carimage={car.CarImage}
                                    carname={car.Carname}
                                    fuel={car.Fueltype}
                                    location={car.Location}
                                    price={car.Price}
                                    carId={car._id}
                                    date={searchDetails.rent_date}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Searchpage;
