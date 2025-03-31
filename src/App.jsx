import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Laboratory from "./components/Laboratory";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Students from "./components/Students";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="space-y-6 mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
