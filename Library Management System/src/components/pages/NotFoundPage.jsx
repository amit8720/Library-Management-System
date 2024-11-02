import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-96 text-center ">
            <h1 className='text-4xl md:text-5xl font-extrabold  leading-tight text-red-500'>404 - Page Not Found</h1>
            <p className='mt-4 text-3xl md:text-3xl   leading-tight text-red-500 mb-4'>The page you are looking for does not exist.</p>
            <Link to="/" style={{ textDecoration: 'underline ', color: '#3D246C' }}>
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFoundPage;
