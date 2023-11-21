// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Pages/home";
import Gallery from "./Pages/gallery";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/signup";
import About from "./Pages/About";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/gallery"
                    element={<Gallery />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                {/* <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} /> */}
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;
