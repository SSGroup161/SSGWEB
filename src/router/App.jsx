import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Product from "../pages/Product";
import Brand from "../pages/Brand";
import Search from "../pages/Search";
import News from "../pages/News";
import Login from "../pages/Login";
import Faq from "../pages/Faq";
import NewsDetail from "../pages/NewsDetail";
import UnderConstraction from "../pages/UnderConstraction";
import AOS from "aos";
import Catalog from "../pages/Catalog";
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
                <Route path="/product/search/catalog" element={<Catalog />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/brand/:id" element={<Brand />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/news/detail" element={<NewsDetail />} />
                <Route
                    path="/underconstruction"
                    element={<UnderConstraction />}
                />
            </Routes>
        </Router>
    );
};

export default App;
