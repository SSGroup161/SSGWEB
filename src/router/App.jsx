import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Product from "../pages/Product";
import SSShop from "../pages/SSShop";
import Search from "../pages/Search";
import SSSkin from "../pages/SSSkin";
import LevelUp from "../pages/LevelUp";
import News from "../pages/News";
import Login from "../pages/Login";
import Faq from "../pages/Faq";
import NewsDetail from "../pages/NewsDetail";
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
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/search" element={<Search />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ssskin" element={<SSSkin />} />
                <Route path="/ssshop" element={<SSShop />} />
                <Route path="/levelup" element={<LevelUp />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/news/detail" element={<NewsDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
