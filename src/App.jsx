import { useState } from "react";
import "./App.css";
import Sidebar from "./componenets/Sidebar";
import Main from "./componenets/Main";
import Exchaneratepage from "./Routes/Exchaneratepage";

function App() {
  return (
    <div className="App bg-zinc-900 width-full h-screen flex justify-between">
      <Sidebar />
      {/* <Main /> */}
      <Exchaneratepage />
    </div>
  );
}

export default App;
