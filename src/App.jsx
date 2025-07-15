import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./componenets/Sidebar";

import Main from "./componenets/Main";
import Convertorroute from "./Routes/Convertorroutepage";
import Profileroute from "./Routes/Profileroutepage";
import Exchangeroute from "./Routes/Exchaneratepage";
import CryptoPriceUI from "./Routes/CryptoPriceUI";

function App() {
  return (
    <Router>
      <div className="App bg-zinc-900 w-full h-screen flex">
        <Sidebar />
        <div className="flex-1  overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/converter" element={<Convertorroute />} />
            <Route path="/profile" element={<Profileroute />} />
            <Route path="/exchange" element={<Exchangeroute />} />
            <Route path="/crypto" element={<CryptoPriceUI />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
