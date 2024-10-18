import React from'react';
import {useState, useEffect} from'react';

export const Gallery = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters');
                const result = await response.json();
                console.log(result);
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log('error fetching data',error);
                setLoading(false);
            }
        }


        fetchData();
    }, []); // este hooke solo se ejecutara una vez


    return (
        <div className='bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full'>
            <div className="">
                <h1 className='text-2xl font-bold text-center mb-4'>Personajes</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className='grid grid-cols-2 gap-4'>
                        {data.items.map((item, index) => {
                            return (
                                <li key={index} className='bg-gray-100 rounded-lg'>
                                <img src={item.image} alt={item.name} className='h-64'/>
                                <h2 className='text-lg font-bold text-center mt-2'>{item.name}</h2>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}
