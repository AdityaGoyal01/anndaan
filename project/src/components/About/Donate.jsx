import React, { useState } from "react";

export default function DonateFood() {
    const [donation, setDonation] = useState({
        foodName: '',
        quantity: '',
        shelfLife: '',
        description: '',
        donorName: ''
          
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const BASE_URL = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${BASE_URL}/api/donations/donate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(donation)
        });

        if (response.ok) {
            alert("Food donation recorded successfully!");
            setDonation({ foodName: '', quantity: '', shelfLife: '', description: '', donorName: '' });
        } else {
            alert("Failed to donate food.");
        }
    };

    return (
        
       

        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-5xl ml-[420px] justify-center items-center min-h-screen  w-full mx-auto p-6 bg-white mb-10 shadow-lg rounded-lg mt-8">
            <h1 classname="font-bold text-gray-400">Donate Food</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium text-gray-700">Food Name:</label>
                    <input 
                        type="text" 
                        value={donation.foodName} 
                        onChange={(e) => setDonation({ ...donation, foodName: e.target.value })}
                        className="w-full p-2 border rounded-md bg-blue-100 text-black"
                        required 
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Quantity (in kg/packets):</label>
                    <input 
                        type="number" 
                        value={donation.quantity} 
                        onChange={(e) => setDonation({ ...donation, quantity: e.target.value })}
                        className="w-full p-2 border rounded-md bg-blue-100 text-black"
                        required 
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Shelf Life (days):</label>
                    <input 
                        type="number" 
                        value={donation.shelfLife} 
                        onChange={(e) => setDonation({ ...donation, shelfLife: e.target.value })}
                        className="w-full p-2 border rounded-l bg-blue-100 text-black"
                        required 
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Additional Description:</label>
                    <textarea 
                        value={donation.description} 
                        onChange={(e) => setDonation({ ...donation, description: e.target.value })}
                        className="w-full p-6 border rounded-md bg-blue-100 text-black"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md"
                >
                    Donate Now
                </button>
            </form>
            </div>
        </div>
    );
}
