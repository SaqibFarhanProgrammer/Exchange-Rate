import axios from "axios";
import { createContext, useEffect } from "react";

export const context = createContext();

const Contextprovider = () => {
  async function getdata() {
    const response = await axios.get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_h27pZ6dzuX5xT8hDSLAvPGYiee5oXG0j8M6iB60Y&base_currency=PKR"
    );
    const currencydata = await response.data;
    console.log(currencydata);
  }

  useEffect(() => {}, [getdata()]);
  async function cryptodata() {
    const response2 = await axios.get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_h27pZ6dzuX5xT8hDSLAvPGYiee5oXG0j8M6iB60Y&base_currency=PKR"
    );
    const cryptodata = await response2.data;
    console.log(cryptodata);
  }

  useEffect(() => {}, [getdata(), cryptodata()]);
};
