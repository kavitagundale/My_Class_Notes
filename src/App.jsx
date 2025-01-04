// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HtmlRoadmap from "./Component/Html/HtmlRoadmap"; // Adjust path if needed
import Home from "./Component/Home"; // Adjust path if needed

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html-roadmap" element={<HtmlRoadmap />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
