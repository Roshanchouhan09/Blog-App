import React from "react";
import Firstpage from "./components/Firstpage/Firstpage.jsx";
import Secondpage from "./components/Secondpage/Secondpage.jsx";
import Thirdpage from "./components/Thirdpage/Thirdpage.jsx";

import Fourthpage from "./components/Fourthpage/Fourthpage.jsx";
import Fifthpage from "./components/Fifthpage/Fifthpage.jsx";
import Sixthpage from "./components/Sixthpage/Sixthpage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/secondpage" element={<Secondpage />} />
        <Route path="/thirdpage" element={<Thirdpage />} />
        <Route path="/fourthpage" element={<Fourthpage />} />
        <Route path="/fifthpage" element={<Fifthpage />} />
        <Route path="/sixthpage" element={<Sixthpage />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
