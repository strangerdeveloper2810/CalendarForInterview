import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate";
import ModalCalendar from "./Components/ModalCalendar/ModalCalendar";
import ModalEditEventCalendar from "./Components/ModalCalendar/ModalEditEventCalendar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ModalCalendar />
        <ModalEditEventCalendar/>
        <Routes>
          <Route path="" element={<HomeTemplate />} />
          <Route path="home"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
