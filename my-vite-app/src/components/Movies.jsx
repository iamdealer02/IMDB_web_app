import React from 'react';

export default function Movies({ movie, index }) {
  return (
    <div key={index} className="flex bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-32 h-48 object-cover rounded-md mr-6 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-100 mb-2 hover:text-pink-500 transition-colors duration-300 ease-in-out">
          {movie.title}
        </h2>
        <p className="text-gray-400 text-sm">{movie.year}</p>
        <p className="text-pink-400 mt-2 text-sm font-semibold">{movie.stars}</p>
        <div className="mt-4">
          <button className="text-pink-500 font-semibold hover:text-pink-300 transition-colors duration-300 ease-in-out">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
