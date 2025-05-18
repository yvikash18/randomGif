import React, { useState } from "react";
import useRandom from "../hooks/useRandom";
import RandomGen from "./randomGen";
import Spinner from "./spinner";

const TextGen = () => {
  const [tag, setTag] = useState("");
  const { gifUrl, loading, getRandomGif } = useRandom(tag);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Generate GIF from Text
      </h2>
      <div id="textGifContainer" className="mt-4">
        {loading ? (
          Spinner
        ) : (
          (
            <img
              src={gifUrl}
              alt={`GIF for ${tag}`}
              className="max-w-full h-auto rounded-lg mx-auto"
            />
          )
        )}
      </div>
      <input
        type="text"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder="Enter a keyword (e.g. cat, dance)"
        className="my-2 w-full px-4 py-2 border border-gray-600 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export default TextGen;
