import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-zinc-600 mt-2 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
