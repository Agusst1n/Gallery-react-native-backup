import { createContext, useEffect, useState } from 'react';

const ImagesContext = createContext();

function ImagesProvider({ children }) {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [param, setParam] = useState('');

  if (param === '') {
    setParam('people');
  }

  // const KEY = process.env.API_KEY;
  // console.log(KEY, 'KEY');

  const getImages = async (searchParam) => {
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${searchParam}`,
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001bb69402c7622466bae76ac232a68775a'
          }
        }
      );
      const data = await res.json();

      setImages(data.photos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages(param);
  }, [param]);

  return (
    <ImagesContext.Provider value={{ images, setImages, loading, setParam }}>
      {children}
    </ImagesContext.Provider>
  );
}

export { ImagesProvider };

export default ImagesContext;
