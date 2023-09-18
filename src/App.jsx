import './App.css';
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
