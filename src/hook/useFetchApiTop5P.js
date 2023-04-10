import { useEffect, useState } from "react";

function useFetchApiTop5P({ url }) {
  const [dataTop5, setDataTop5] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setDataTop5(data);
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
    dataTop5
  };
}

export default useFetchApiTop5P;