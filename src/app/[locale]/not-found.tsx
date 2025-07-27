import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-600">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-500">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
