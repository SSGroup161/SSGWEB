import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const NewsDetail = () => {
    return (
        <>
            <Navbar />
            <section className="w-full h-auto mt-20 px-36">
                <div className="mt-32">
                    <h1 className="font-roboto text-base md:text-4xl text-black font-medium">
                        Dukung Gaza, Palestina. SS Group berikan donasi sebesar
                        1 Milyar Rupiah!
                    </h1>
                    <h4>Admin | LevelUp</h4>
                    <h5 className="text-gray-400">Senin, 25 Oktober 2029</h5>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsDetail;
