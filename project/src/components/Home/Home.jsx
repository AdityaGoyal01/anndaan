import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col items-center justify-center px-6 py-12">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg text-center sm:py-10 w-full">
                <div className="relative z-10 max-w-4xl mx-auto">
                  
                    {/* Heading with Background Image */}
                    <h1  
                       className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg text-white mb-15 px-40 py-20 bg-cover bg-center rounded-lg" 
                       style={{ 
                           backgroundImage: "url('/images/bg.jpeg')",
                           backgroundSize: "cover",
                           backgroundPosition: "center"
                       }} 
                    >
                        Reduce Food Waste, <br />
                        <span className="text-yellow-300">Make a Difference!</span>
                    </h1>
                    
                    {/* Mission Statement */}
                    <p className="mt-6 text-lg sm:text-xl text-gray-800">
                        Every year, tons of food go to waste while many people remain hungry. 
                        Our platform bridges the gap between event organizers, restaurants, and donors 
                        with NGOs and collectors to ensure excess food reaches those in need.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            to="/donate" 
                            className="bg-white-500 hover:text-yellow-600 text-black font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition"
                        >
                            🍽️ Donate Food
                        </Link>
                        <Link 
                            to="/collect" 
                            className="bg-yellow-400 hover:text-black text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition"
                        >
                            📦 Collect Food
                        </Link>
                    </div>

                    {/* Login / Signup Section */}
                    <p className="mt-6 text-gray-700 text-lg">
                        Already have an account?  
                        <Link to="/login" className="text-gray-800 font-semibold hover:underline"> Log in</Link>
                    </p>
                    <p className="mt-2 text-gray-700 text-lg">
                        New here?  
                        <Link to="/signup" className="text-gray-800 font-semibold hover:underline"> Sign up</Link>
                    </p>
                </div>
            </aside>

            {/* Purpose & Values Section */}
            <section className="mt-16 mb-20 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Our Purpose & Values</h2>
                <p className="text-lg text-gray-700 mt-2">We are committed to reducing food waste and helping those in need.</p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">😇 Open and honest</h3>
                        <p className="text-gray-700 mt-2">
                        We want you to know how your donation is used and the impact you’re having around the world.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                        ❤️ Every shared meal counts</h3>
                        <p className="text-gray-700 mt-2">
                        Give what you can — whether it’s one meal or one year of meals — and know that it makes a difference.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">🫂 We’re in it together</h3>
                        <p className="text-gray-700 mt-2">
                        We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
