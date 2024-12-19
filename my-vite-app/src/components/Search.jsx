import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exactMatch, setExactMatch] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 mt-9">
      <div className="max-w-4xl mx-auto">
        {/* Search Header */}
        <h1 className="text-4xl font-bold mb-6">SEARCH YOUR FAVOURITE MOVIE, ACTOR, CHARACTER</h1>

        {/* Search Input */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="movies, people..."
            className="w-full p-3 pl-4 rounded-md bg-gray-800 border border-white-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters Section */}
        <div className="space-y-6">
          {/* Filter by Type */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Filter by Type</h2>
            <div className="flex gap-3 flex-wrap">
              {['Titles', 'People', 'Companies', 'Keywords'].map((filter) => (
                <button
                  key={filter}
                  className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Filter by Title Type */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Filter by Title Type</h2>
            <div className="flex gap-3 flex-wrap">
              {['Movies', 'TV', 'TV Episodes', 'Music Videos', 'Podcasts', 'Podcast Episodes', 'Video Games'].map(
                (filter) => (
                  <button
                    key={filter}
                    className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Exact Match and Actions */}
        <div className="mt-6 flex items-center gap-6">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={exactMatch}
              onChange={() => setExactMatch(!exactMatch)}
              className="form-checkbox h-4 w-4 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-300">Exact Matches</span>
          </label>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600">
              Clear
            </button>
            <button className="px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
