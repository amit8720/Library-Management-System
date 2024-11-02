
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import BrowseBooksPage from './components/pages/BrowseBooksPage';
import AddBookPage from './components/pages/AddBookPage';
import BookDetailsPage from './components/pages/BookDetailsPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="flex-grow p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BrowseBooksPage />} />
          <Route path="/books/:category" element={<BrowseBooksPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
