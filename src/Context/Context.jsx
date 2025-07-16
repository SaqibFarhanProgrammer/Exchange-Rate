// Context.jsx
import { createContext } from "react";
import axios from "axios";

export const context = createContext();

const Contextprovider = ({ children }) => {
  const getdata = async () => {
    try {
      const res = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "fa42bd09-7593-4453-9511-a30f92a7e8b2",
          },
        }
      );
      return res.data;
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return <context.Provider value={{ getdata }}>{children}</context.Provider>;
};

export default Contextprovider;
