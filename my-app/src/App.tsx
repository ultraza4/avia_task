import React from 'react';
import "./style.scss";
import Avia from "./pages/Avia";
import Info from "./pages/Info";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/avia' element={<Avia/>} />
          <Route path='/avia/info' element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
