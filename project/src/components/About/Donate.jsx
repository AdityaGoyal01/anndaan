
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
        const response = await fetch("http://localhost:8080/api/donations/donate", {
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

            <div className="w-full max-w-5xl ml-20 mt-0.5 mb-10 px-6  text-center">
            <h2 className="text-7xl font-extrabold text-green-600">Make a Difference Today</h2>
            <p className="text-lg mt-4 text-gray-600">
                Join us in reducing food waste and feeding those in need. Your donation can bring a smile to someone’s face.
            </p>
            <img 
                src="https://tse3.mm.bing.net/th?id=OIP.91mqUxaCfB9XGVyKO1wB6QHaEc&pid=Api&P=0&h=180" 
                alt="Donate Food" 
                className="w-full h-45 object-cover rounded-lg shadow-md mt-6"
            />
            </div>


            <div className="max-w-5xl ml-[150px] justify-center items-center min-h-screen  w-full mx-auto p-6 bg-white mb-10 shadow-lg rounded-lg mt-8">
            <h1 classname="text-gray-600">Donate Food</h1>
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

                <div>
                    <label className="block font-medium text-gray-700">Donor-Name:</label>
                    <textarea 
                        value={donation.donorName} 
                        onChange={(e) => setDonation({ ...donation, donorName: e.target.value })}
                        className="w-full p-2 border rounded-md bg-blue-100 text-black"
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
