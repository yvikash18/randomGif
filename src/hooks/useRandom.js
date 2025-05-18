import { useState, useEffect } from "react";

function useRandom(tag) {
  const [gifUrl, setGifUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  const fetchUrl = tag ? `${url}&tag=${encodeURIComponent(tag)}` : url;

  const getRandomGif = async () => {
    try {
      setLoading(true);
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setGifUrl(data.data?.images?.downsized_medium?.url || null);
    } catch (error) {
      console.error("Failed to fetch GIF", error);
      setGifUrl(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomGif();
  }, [tag]); 

  return { gifUrl, loading, getRandomGif };
}

export default useRandom;
