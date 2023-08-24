// import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
// import GlassNavbar from './Components/GlassNavbar';
// import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <GlassNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
