import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
