import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../store/booksSlice'; // Adjust import based on your file structure
import { useNavigate } from 'react-router-dom';
import bookImage from '../../assets/bb.jpg';// Adjust the path to your image

const AddBookPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [imageUrl, setImageUrl] = useState(''); // New state for image URL
    const [errors, setErrors] = useState({}); // State for error messages
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get existing books from the Redux store to calculate the next ID
    const books = useSelector(state => state.books.books); // Adjust based on your state shape
    const nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 7; // Start from ID 7

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = {}; // Object to hold any errors

        // Validate rating
        if (Number(rating) < 1 || Number(rating) > 5) {
            newErrors.rating = 'Rating must be between 1 and 5.'; // Set rating error
        }

        // Check if there are any errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Set errors if there are any
            return; // Stop form submission
        }

        setErrors({}); // Clear errors if validation passes

        const newBook = {
            id: nextId, // Assign the calculated next ID
            title,
            author,
            category,
            description,
            rating: Number(rating),
            imageUrl, // Include the image URL
        };
        dispatch(addBook(newBook)); // Dispatch the action to add a book
        navigate('/books'); // Redirect to the Browse Books page
    };

    return (
        <div className="relative bg-[#424769]">
            <div className="relative flex max-w-4xl mx-auto rounded-lg overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center blur-lg" style={{ backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/688/312/desktop-wallpaper-bookstore-book-shop.jpg)' }} />
                <div className="relative flex-shrink-0 z-10">
                    <img
                        src={bookImage}
                        alt="Book Cover"
                        className="object-cover w-96 h-full rounded-l-lg"
                    />
                </div>
                <div className="ml-0 mr-0 relative flex-grow p-8 z-10 bg-white bg-opacity-80 rounded-lg">
                    <h1 className="text-5xl md:text-4xl font-extrabold text-center leading-tight mb-2">
                        Add a New <span className="text-blue-500">Book</span>
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Book Title"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Author"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Rating (1-5)"
                            className={`w-full p-2 border ${errors.rating ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            value={rating}
                            onChange={e => setRating(e.target.value)} // Handle rating changes
                            required
                        />
                        {errors.rating && <p className="text-red-500">{errors.rating}</p>} {/* Display error message */}
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)} // Handle image URL changes
                            required
                        />
                        <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-2 rounded-md hover:bg-blue-700">
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBookPage;
