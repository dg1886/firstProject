import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Preloader from '../../Common/Preloader';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState({
    anime: '',
    character: '',
    quote: '',
  });

  const fetchAnimeAPI = useCallback(async () => {
    setIsLoaded(true);
    try {
      let response = await axios.get('https://animechan.vercel.app/api/random');
      response = await response;
      setData({ ...response.data });
      setIsLoaded(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchAnimeAPI();
  }, [fetchAnimeAPI]);
  const { anime, character, quote } = data;

  return (
    <>
      <div>Home page</div>
      {
        isLoaded ? <Preloader />
          : (
            <div>
              anime:
              {anime}
              character:
              {character}
              quote:
              {quote}
            </div>
          )
      }
      <button type="button" onClick={fetchAnimeAPI}>fetch</button>
    </>
  );
};

export default HomePage;
