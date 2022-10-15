import { useState } from "react";
import Header from "./components/Header/Header";
import WidgetContainer from "./components/Widget/WidgetContainer";

import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen w-screen">
        <Header />
        <WidgetContainer />
      </div>
    </>
  );
}

export default App;
