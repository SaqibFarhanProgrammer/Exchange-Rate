import { useState } from "react";
import "./App.css";
import Sidebar from "./componenets/Sidebar";
import Main from "./componenets/Main";
import Exchaneratepage from "./Routes/Exchaneratepage";
import ProfilePage from "./Routes/Profileroutepage";

function App() {
  return (
    <div className="App bg-zinc-900 width-full h-screen flex justify-between">
      <Sidebar />
      {/* <Main /> */}
      {/* <Exchaneratepage /> */}
      <ProfilePage />
    </div>
  );
}

export default App;
