import { useEffect, useState } from "react";

function useFetchApi({ url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      const dataP = data.products
      setData(dataP);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
}

export default useFetchApi;
