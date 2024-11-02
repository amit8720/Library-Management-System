import React from 'react';

function BookDetails({ book }) {
    return (
        <div>
            <h1>{book.title}</h1>
            <h2>Author: {book.author}</h2>
            <p>{book.description}</p>
            <p>Rating: {book.rating}</p>
        </div>
    );
}

export default BookDetails;
