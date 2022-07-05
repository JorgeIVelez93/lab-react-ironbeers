import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Allbeers from "./components/Allbeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/allbeers" element={<Allbeers />} />
        <Route path="/singlebeer/:_id" element={<SingleBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
