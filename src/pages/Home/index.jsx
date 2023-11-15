import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Campaign from "../../components/Campaign";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Campaign/>
            <Navbar />
            <div>
                <h1 className="text-red-500">Home</h1>
            </div>
            <Footer />
        </>
    );
};

export default Home;
