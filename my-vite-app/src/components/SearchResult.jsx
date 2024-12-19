import React from "react";
import Movies from "./movies";

const SearchResults = () => {
  const results = [
    {
      title: "Her",
      year: 2013,
      stars: "Joaquin Phoenix, Amy Adams",
      poster: "https://via.placeholder.com/200x300",
    },
    {
      title: "Heretic",
      year: 2024,
      stars: "Hugh Grant, Sophie Thatcher",
      poster: "https://via.placeholder.com/200x300",
    },
    {
      title: "Her Story",
      year: 2024,
      stars: "Jia Song, Elane Zhong",
      poster: "https://via.placeholder.com/200x300",
    },
    {
      title: "Here",
      year: 2023,
      stars: "Tom Hardy, Emma Stone",
      poster: "https://via.placeholder.com/200x300",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Search Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Results for 'her'</h1>
          <div className="flex items-center gap-4">
            
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-8">
          {results.map((movie, index) => (

            <Movies movie={movie} key={index}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
