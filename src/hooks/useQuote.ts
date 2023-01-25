import { useState, useEffect } from "react";

function useQuote(): [(newState: string) => void] {
  const [state, setState] = useState<string>("");

  const url = `${import.meta.env.VITE_CITATION_API_URL}`;

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setState(result);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return [state, setState];
}

export default useQuote;
