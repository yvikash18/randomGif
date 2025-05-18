import React, { useState, useEffect } from "react";
import Spinner from "./spinner";  // Capitalized import
import useRandom from "../hooks/useRandom";
const RandomGen = ({ tag }) => {
  const { gifUrl, loading, getRandomGif } = useRandom(tag);
  return (<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 text-center">
    <h2 className="flex item-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">
      Generate Random GIF
    </h2>
    <div className="mt-4 flex justify-center items-center min-h-[200px]">
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gifUrl}
          alt="Random GIF"
          className="max-w-full h-auto rounded-lg"
        />
      )}
    </div>

    <button
      onClick={getRandomGif}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300 my-2"
    >
      Generate Random
    </button>
  </div>)
 
};

export default RandomGen;
