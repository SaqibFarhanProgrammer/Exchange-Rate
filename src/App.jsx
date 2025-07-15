import { useState } from "react";
import "./App.css";
import Sidebar from "./componenets/Sidebar";
import Main from "./componenets/Main";
import { Route, Router, Routes } from "react-router-dom";

import Exchaneratepage from "./Routes/Exchaneratepage";
import ProfilePage from "./Routes/Profileroutepage";
import Convertorroutepage from "./Routes/Convertorroutepage";

import Convertorroute from "./Routes/Convertorroutepage";
import Profileroute from "./Routes/Profileroutepage";
import Exchangeroute from "./Routes/Exchaneratepage";
import CryptoPriceUI from "./Routes/CryptoPriceUI";

function App() {
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/converter" element={<Convertorroute />} />
      <Route path="/profile" element={<Profileroute />} />
      <Route path="/exchange" element={<Exchangeroute />} />
      <Route path="/crypto" element={<CryptoPriceUI />} />
    </Routes>
    ;
  </Router>;
  return (
    <div className="App bg-zinc-900 width-full h-screen flex justify-between">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
