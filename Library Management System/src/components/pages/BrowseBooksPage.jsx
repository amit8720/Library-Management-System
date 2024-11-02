// src/pages/BrowseBooksPage.js
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const BrowseBooksPage = () => {
    const { category } = useParams(); // Get category from URL parameters
    const navigate = useNavigate(); // Hook for navigation
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(category || 'All'); // Set initial state based on URL

    // Accessing books from Redux state
    const books = useSelector(state => state.books.books);

    const categories = ['All', 'Fiction', 'Non-Fiction', 'Romance', 'Sci-Fi'];

    useEffect(() => {
        // Update selected category based on URL
        if (category) {
            setSelectedCategory(category);
        }
    }, [category]);

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
            (book.author && book.author.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
        navigate(`/books/${newCategory}`); // Navigate to the new category route
    };

    const backgroundImageUrl = 'https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg';

    return (
        <div className="relative h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <img
                src={backgroundImageUrl}
                alt="Hero"
                className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="relative flex min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm"
                    style={{
                        backgroundImage: "url('https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg')",
                    }}
                />
                <div className="relative w-full p-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-3">
                        <span className="text-white">Browse</span><span className="text-blue-300">Books</span>
                    </h1>

                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            className="w-full p-2 border border-gray-300 rounded-md mr-2"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <select
                            value={selectedCategory}
                            onChange={e => handleCategoryChange(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md mr-2"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {selectedCategory !== 'All' && (
                            <button
                                onClick={() => handleCategoryChange('All')}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:text-red-700 transition duration-300 p-2 rounded-md"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
                                    {book.imageUrl && (
                                        <img src={book.imageUrl} alt={book.title} className="mb-2 h-32 object-cover w-full rounded" />
                                    )}
                                    <h3 className="text-xl font-bold">{book.title}</h3>
                                    <p className="text-gray-700">{book.author}</p>
                                    <p className="text-blue-500">{book.category}</p>

                                    <Link to={`/book/${book.id}`} className="mt-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300">
                                        View Details
                                    </Link>
                                </div>
                            ))
                        ) : (

                            <p className="text-white text-center">No books found.</p>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseBooksPage;
