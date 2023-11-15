import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;