import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./componenets/Sidebar";

import Main from "./componenets/Main";
import Convertorroute from "./Routes/Convertorroutepage";
import Exchangeroute from "./Routes/Exchaneratepage";
import CryptoPriceUI from "./Routes/CryptoPriceUI";
import { useEffect, useState } from "react";

function App() {
  const [currencydata, setcurrencydata] = useState();
  function getcurrencydata(currencydata) {
    setcurrencydata(currencydata);
  }

  return (
    <Router>
      <div className="App bg-zinc-900 w-full h-screen flex">
        <Sidebar />
        <div className="flex-1  overflow-y-scroll">
          <Routes>
            <Route
              path="/"
              element={<Main getcurrencydata={getcurrencydata} />}
            />
            <Route path="/converter" element={<Convertorroute />} />
            <Route
              path="/exchange"
              element={<Exchangeroute currencydata={currencydata} />}
            />
            <Route path="/crypto" element={<CryptoPriceUI />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
