// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition duration-200">
                    Online Library
                </Link>
                <div className="space-x-4 hidden md:flex"> {/* Hide on mobile, show on larger screens */}
                    <Link to="/" className="hover:text-blue-300 transition duration-200">Home</Link>
                    <Link to="/books" className="hover:text-blue-300 transition duration-200">Browse Books</Link>
                    <Link to="/add-book" className="hover:text-blue-300 transition duration-200">Add Book</Link>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-lg focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
