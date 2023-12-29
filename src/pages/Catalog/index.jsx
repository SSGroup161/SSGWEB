import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <section className="h-auto px-12 gap-8 w-full flex flex-col md:flex-row pt-40">
                <div className="flex-1 flex justify-center items-start">
                    <img
                        alt="Bonnie image"
                        height="96"
                        src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                        width="96"
                        className="mb-3 w-96"
                    />
                </div>
                <div className="flex-1">
                    <div className="w-full md:w-96">
                        <h1 className="font-roboto text-3xl md:text-5xl">
                            Acne Serum
                        </h1>
                        <div className="mt-8 flex">
                            <div className="flex flex-col gap-4">
                                <h1>Brand</h1>
                                <h1>Category</h1>
                                <h1>Variant</h1>
                                <h1>Netto</h1>
                                <h1>Dimension</h1>
                                <h1>Desc</h1>
                            </div>
                            <div className="flex flex-col gap-4 ms-4">
                                <h1>:</h1>
                                <h1>:</h1>
                                <h1>:</h1>
                                <h1>:</h1>
                                <h1>:</h1>
                                <h1>:</h1>
                            </div>
                            <div className="flex flex-col gap-4 ms-6 text-[#A18E64]">
                                <h1>Brand</h1>
                                <h1>Category</h1>
                                <h1>Variant</h1>
                                <h1>Netto</h1>
                                <h1>Dimension</h1>
                                <h1>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Tortor posuere risus turpis amet nulla vel
                                    donec turpis. Ultrices ut lacus morbi semper
                                    sed cras. Sem bibendum consequat mauris
                                    sagittis enim. Condimentum faucibus massa eu
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-12 bg-[#D2AC47] flex items-center justify-center mt-8 rounded-lg text-white font-roboto hover:text-[#D2AC47] hover:bg-white hover:border-2 hover:border-[#D2AC47] cursor-pointer">
                            Buy
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Catalog;
