import { useEffect } from "react";
import yahooFinance from "yahoo-finance2";

const GetCurrentData = () => {
  useEffect(() => {
    const getCurrency = async () => {
      try {
        const response = await yahooFinance.quote("TSLA");
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  return null; 
};

export default GetCurrentData;
