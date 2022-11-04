import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate";
import FormCalendar from "./Components/FormCalendar";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="" element={<HomeTemplate />} />
          <Route path="home">
          
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
