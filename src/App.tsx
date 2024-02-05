import { useEffect, useState } from "react";
import "./index.css";
import yahooFinance from "yahoo-finance2";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const response = await yahooFinance.quote("TSLA");
        console.log(response);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };

    getQuote();
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="text-lg">{isLoading ? `Loading...` : `Hello world!`}</div>
    </div>
  );
}

export default App;
