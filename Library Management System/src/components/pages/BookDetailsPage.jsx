import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Adjusted to select books from the correct state structure
    const books = useSelector(state => state.books.books);

    const book = books.find(book => book.id === id); // Use string comparison for id

    if (!book) {
        return <div className="flex flex-col items-center justify-center w-full h-full">

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoujLXGt-WSD_dQt9ilGXyoIJgbqjsfBJ2gFssvOA5ZCEce44nKMzV64l_Mx4p4I3WsA&usqp=CAU"
                alt="No books found"
                className="mt-2 w-64 h-auto" // Adjust size as needed
            />
            <p className="text-black text-center text-2xl mt-6">No books found.</p>
        </div>;
    }

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center h-auto backdrop-blur-sm opacity-50"
                style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/old-book-page-background-with-copy-space_839035-886228.jpg?w=826")` }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-center w-full h-full mx-auto">
                <div className="md:w-1/3 w-full flex justify-center">
                    <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-auto object-contain rounded shadow-xl shadow-black"
                    />
                </div>

                <div className="md:w-1/3 md:pl-6 bg-transparent p-4 rounded-lg shadow-xl shadow-black">
                    <h1 className="text-3xl font-bold mb-4 text-black">{book.title}</h1>
                    <h2 className="text-xl font-semibold mb-2 text-black">Author: {book.author}</h2>
                    <p className="mb-4 text-black">{book.description}</p>
                    <p className="mb-4 text-black">Rating: {book.rating} / 5</p>
                    <button
                        onClick={() => navigate('/books')}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
                    >
                        Back to Browse
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
// 


