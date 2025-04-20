import React, { useEffect, useState } from "react";

export default function Collect() {
    const [availableItems, setAvailableItems] = useState([]);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;


    useEffect(() => {
        console.log("BASE_URL is", `${BASE_URL}`);
        

        fetch(`${BASE_URL}/api/donations/collect`)
            .then((res) => res.json())
            .then((data) => setAvailableItems(data));

    }, []);

    return (
        <div className="max-w-5xl mx-auto ml-[420px] justify-center items-center min-h-screen center p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1>Available Donations</h1>
            {availableItems.map((item) => (
                <div key={item.id} className="p-4 border rounded-md shadow-md flex justify-between items-center">
                <div>
                    <h2 className="text-lg text-gray-600 font-semibold">{item.foodName}</h2>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-500">Donor: {item.donorName}</p>
                </div>
                <button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md"
                >
                    Chat with Donor
                </button>
            </div>
            ))}
        </div>
    );
}
