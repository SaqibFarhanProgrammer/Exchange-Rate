import axios from "axios";
import { createContext, useEffect } from "react";

export const context = createContext();

const Contextprovider = ({ children }) => {
  async function getdata() {
    try {
      const response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=fa42bd09-7593-4453-9511-a30f92a7e8b2"
      );
      const currencydata = response.data;
      console.log(currencydata);
      return currencydata;
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const value = {
    getdata,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default Contextprovider;
