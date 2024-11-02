// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
const categories = [
    { name: 'Fiction', image: 'data:image/jpeg;base64,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' },
    { name: 'Non-Fiction', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQHvuq_t7YDmQG6iv8cqMTnYRaCCxZUgwTA&s' },
    { name: 'Sci-Fi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnduQM-M1uFRKDL45skzKxeOHfE9Fleabvg&s' },
    { name: 'Mystery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi70JUlAiDnnY8VEFk6SIvJ7NAohFc5nlIzA&s' },
    { name: 'Romance', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAsZC01mvQaO1au7YRPDfTsMzDNVgUQF3tg&s' },
];

const popularBooks = [
    { id: 1, title: 'The Great Gatsby', link: '#', description: 'A novel by F. Scott Fitzgerald.' },
    { id: 2, title: '1984', link: '#', description: 'A dystopian novel by George Orwell.' },
    { id: 3, title: 'To Kill a Mockingbird', link: '#', description: 'A novel by Harper Lee.' },
    { id: 4, title: 'The Catcher in the Rye', link: '#', description: 'A novel by J.D. Salinger.' },
    { id: 5, title: 'Pride and Prejudice', link: '#', description: 'A novel by Jane Austen.' },
];

const HomePage = () => {
    const backgroundImageUrl = 'https://e1.pxfuel.com/desktop-wallpaper/688/312/desktop-wallpaper-bookstore-book-shop.jpg'; // Same image for both sections

    return (
        <div className="min-h-screen text-white m-0 p-0">
            {/* Hero Section */}
            <div className="relative h-screen bg-gradient-to-br from-purple-600 to-blue-500">
                <img
                    src={backgroundImageUrl}
                    alt="Hero"
                    className="absolute inset-0 object-cover w-full h-full opacity-60"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
                <div className="relative flex flex-col items-center justify-center h-full p-10 backdrop-blur-sm">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
                        Dive Into the World of <span className="text-blue-300">Books</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-center mt-4">
                        Explore a wide selection of categories and genres to discover your next favorite book.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out">
                            <Link to="/books" className="hover:text-blue-300 transition duration-200">Discover More</Link>


                        </button>
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-200 ease-in-out">
                            <Link to="/add-book" className="hover:text-blue-300 transition duration-200">Add a Book</Link>

                        </button>

                    </div>
                    <div className="bg-cover bg-center rounded-lg" >
                        <div className="bg-transparent bg-opacity-50 p-4 rounded-lg">
                            {/* <h2 className="text-4xl font-bold text-center mb-10">Categories</h2> */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {categories.map(({ name, image }) => (
                                    <div key={name} className="bg-white text-gray-800 p-2 rounded-lg shadow-lg w-32 text-center hover:shadow-xl transition-shadow duration-200 ease-in-out transform hover:scale-105">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="mb-1 rounded-lg h-16 w-full object-cover"
                                        />
                                        <h3 className="text-sm font-semibold">{name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-transparent">
                        <h2 className="text-2xl font-bold mb-4 text-white text-center">Popular Books</h2>
                        <div className="flex overflow-x-auto space-x-4">
                            {popularBooks.map((book, index) => (
                                <div key={index} className="p-4 bg-white rounded shadow flex-shrink-0">
                                    <Link to={`/book/${book.id}`} className="block w-full "><h3 className="text-l font-semibold text-black">{book.title}</h3></Link>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HomePage;
