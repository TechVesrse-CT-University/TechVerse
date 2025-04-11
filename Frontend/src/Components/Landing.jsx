import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function StartPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <>
          <main className="relative w-full h-screen">
                {/* Background Video */}
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
                    src="/Landing.mp4" 
                    autoPlay 
                    loop 
                    muted 
                />
                
                {/* Black Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
                
                <nav className='flex items-center relative z-10 p-5'>
                    {/* <img src="/Logo.png" alt="Logo" className="h-16 mr-4" /> */}
                    <h1 className='text-3xl text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]'>EduTech</h1>
                </nav>
                <section className='w-full h-[80vh] flex justify-center items-center relative z-10'>
                    <div className="text-center">
                        <h1 className='text-7xl text-white font-extrabold drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]'>
                            Welcome To <span className="text-blue-400">EduTech</span>
                        </h1>
                        <p className='text-2xl font-serif text-gray-200 mt-5 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]'>
                            Welcome to <span className="text-yellow-300">EduTech</span>, your one-stop destination for smart, flexible, and engaging online learning.
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <button 
                                onClick={() => navigate('/teacherLogin')} // Navigate to the teacherLogin page
                                className="border-2 px-6 py-3 text-lg rounded-lg bg-gradient-to-r bg-blue-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_15px_rgba(0,0,0,0.3)] font-bold">
                                Get Started
                            </button>
                            <button 
                                onClick={() => navigate('/login')} // Navigate to the login page
                                className="border-2 px-6 py-3 text-lg rounded-lg bg-gradient-to-r bg-green-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_15px_rgba(0,0,0,0.3)] font-bold">
                                Login
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default StartPage;