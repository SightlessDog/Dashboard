import { useState, useEffect } from "react";
interface State {
  // define the shape of the state object here
}

interface Props {
  lat: string;
  long: string;
  days?: string;
}

function useQuote(): [State, (newState: State) => void] {
  const [state, setState] = useState<State>({});

  const url = `${import.meta.env.VITE_CITATION_API_URL}`;

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setState(result);
            console.log(result);
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
