import React, { useState } from 'react';

function AddBookForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && description && rating) {
            onSubmit({ title, author, description, rating });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" required />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookForm;
