import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/characters/:id" element={<Character/>} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;