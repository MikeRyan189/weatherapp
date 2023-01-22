import React from "react";
import { Routes, Route} from 'react-router-dom'
import Forecast from "./Forecast";
import Home from './Home'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast/:city" element={<Forecast />} />
      </Routes>
      
    </div>
  );
}

export default App;
