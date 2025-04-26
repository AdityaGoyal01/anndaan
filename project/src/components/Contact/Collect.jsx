import React, { useEffect, useState } from "react";
const dummyDonations = [
  {
    id: 1,
    foodName: "Bread and Butter",
    quantity: "10 packs",
    shelfLife: "2 days",
    description: "Freshly baked bread with butter",
    donorName: "Sunrise Bakery"
  },
  
  {
    id: 2,
    foodName: "Milk Cartons",
    quantity: "30 cartons",
    shelfLife: "5 days",
    description: "Fresh dairy milk cartons",
    donorName: "DairyBest Farms"
  }
];

export default function Collect() {
    const [availableItems, setAvailableItems] = useState([]);
    
    

    useEffect(() => {
      const fetchDonations = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/donations/collect");
            const data = await res.json();
            setAvailableItems(data);
        } catch (error) {
            console.error("Error fetching donations:", error);
            setAvailableItems(dummyDonations); // fallback if error
        }
    };

    fetchDonations();
    }, []);

    return (

        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-6 gap-10">
        {/* Left Banner */}
        <div className="w-full lg:w-1/2 mt-5 text-center">
          <h2 className="text-7xl font-extrabold text-gray-600">Let's help the needy ones.</h2>
          <p className="text-lg mt-4 text-yellow-600">
            Join us in reducing food waste and feeding those in need.Let's bring a smile to someone’s face.
          </p>

         
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.91mqUxaCfB9XGVyKO1wB6QHaEc&pid=Api&P=0&h=180"
            alt="Donate Food"
            className="w-full h-[200px] object-cover rounded-lg shadow-md mt-6"
          />
          
        </div>
      
        {/* Right Donations List */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-gray-600 text-xl font-bold mb-4">Available Donations</h1>
          {availableItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 border rounded-md shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              <div>
                <h2 className="text-lg text-gray-600 font-semibold">{item.foodName}</h2>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">Shelf-Life: {item.shelfLife}</p>
                <p className="text-gray-500">Description: {item.description}</p>
                <p className="text-gray-500">Donor Name: {item.donorName}</p>
              </div>
              <button className="mt-2 sm:mt-0 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">
                Chat with Donor
              </button>
            </div>
          ))}
        </div>
      </div>
      
    );
}
