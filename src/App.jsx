import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import AndroidDev from "./pages/AndroidDev";

export default function App() {
  return (
   <>
       <NavBar /> 
      <main className="max-w-9xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<WebDev/>}/>
          <Route path="/android" element={<AndroidDev/>}/>
        </Routes>
      </main>
   </>
   
  );
}
