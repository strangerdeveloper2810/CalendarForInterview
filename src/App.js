import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate";
import ModalCalendar from "./Components/ModalCalendar/ModalCalendar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ModalCalendar />
        <Routes>
          <Route path="" element={<HomeTemplate />} />
          <Route path="home"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
