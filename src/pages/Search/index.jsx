import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, Dropdown, Pagination } from "flowbite-react";

const Search = () => {
    const navigate = useNavigate();
    const [all, setAll] = useState(true);
    const [ssskin, setSsskin] = useState(false);
    const [ssshop, setSsshop] = useState(false);
    const [levelupStyle, setLevelupStyle] = useState(false);
    const [levelupBeaute, setLevelupBeaute] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAll = () => {
        setAll(true);
        setSsskin(false);
        setSsshop(false);
        setLevelupStyle(false);
        setLevelupBeaute(false);
    };
    const handleSkin = () => {
        setAll(false);
        setSsskin(true);
        setSsshop(false);
        setLevelupStyle(false);
        setLevelupBeaute(false);
    };
    const handleShop = () => {
        setAll(false);
        setSsskin(false);
        setSsshop(true);
        setLevelupStyle(false);
        setLevelupBeaute(false);
    };
    const handlelevelupStyle = () => {
        setAll(false);
        setSsskin(false);
        setSsshop(false);
        setLevelupStyle(true);
        setLevelupBeaute(false);
    };
    const handlelevelupBeaute = () => {
        setAll(false);
        setSsskin(false);
        setSsshop(false);
        setLevelupStyle(false);
        setLevelupBeaute(true);
    };

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="w-full bg-[#D2AC47] h-[40rem] rounded-b-[3rem] lg:rounded-b-[7rem] relative flex flex-col justify-between py-20 lg:py-28 items-center">
                <h1 className="font-roboto text-white text-5xl text-center md:text-[6.5rem] font-bold tracking-widest absolute md:relative">
                    FIND YOUR BEAUTY
                </h1>
                <img
                    src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702277408/SSG/AssetSearchkakShell_omisif.svg"
                    alt="KakShella"
                    width={100}
                    height={100}
                    className="md:hidden w-64 lg:w-[26rem] h-auto ms-2 z-10"
                />
                <div className="flex flex-col gap-4 items-center md:items-start md:-ms-52 lg:-ms-[28rem]">
                    <div className="bg-white w-80 md:w-[24rem] lg:w-[40rem] h-14 flex justify-between items-center gap-4 rounded-full px-2 overflow-visible">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.9167 39.5833C32.1214 39.5833 39.5833 32.1214 39.5833 22.9167C39.5833 13.7119 32.1214 6.25 22.9167 6.25C13.7119 6.25 6.25 13.7119 6.25 22.9167C6.25 32.1214 13.7119 39.5833 22.9167 39.5833Z"
                                stroke="#D2AC47"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M43.75 43.75L34.6875 34.6875"
                                stroke="#D2AC47"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input
                            className="bg-white w-full h-12 focus:outline-none px-2 text-lg placeholder:text-[#D2AC47]"
                            placeholder="Search Product"
                        />
                        <div className="w-11 h-11 cursor-pointer hover:scale-150 bg-[#D2AC47] rounded-full flex justify-center items-center hover:border-white hover:border-4 transition-all">
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Feather Icon/arrow-right-circle">
                                    <path
                                        id="Vector"
                                        d="M30 40L40 30L30 20"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M20 30H40"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex md:w-96 lg:w-full flex-wrap gap-1 md:gap-2 lg:gap-5 items-center justify-center">
                        <div
                            className={`w-auto px-6 text-xs h-8 border-2 border-white flex justify-center items-center ${
                                ssskin ? "bg-white" : "bg-[#D2AC47]"
                            } ${
                                ssskin ? "text-[#D2AC47]" : "text-white"
                            } font-roboto rounded-full cursor-pointer text-sm hover:bg-white hover:text-[#D2AC47]`}
                            onClick={handleSkin}
                        >
                            <h1>SS SKIN</h1>
                        </div>
                        <div
                            className={`w-auto px-6 text-xs h-8 border-2 border-white flex justify-center items-center ${
                                ssshop ? "bg-white" : "bg-[#D2AC47]"
                            } ${
                                ssshop ? "text-[#D2AC47]" : "text-white"
                            } font-roboto rounded-full cursor-pointer text-sm hover:bg-white hover:text-[#D2AC47]`}
                            onClick={handleShop}
                        >
                            <h1>SS SHOP</h1>
                        </div>
                        <div
                            className={`w-auto px-6 text-xs h-8 border-2 border-white flex justify-center items-center ${
                                levelupStyle ? "bg-white" : "bg-[#D2AC47]"
                            } ${
                                levelupStyle ? "text-[#D2AC47]" : "text-white"
                            } font-roboto rounded-full cursor-pointer text-sm hover:bg-white hover:text-[#D2AC47]`}
                            onClick={handlelevelupStyle}
                        >
                            <h1>LEVEL UP STYLE</h1>
                        </div>
                        <div
                            className={`w-auto px-6 text-xs h-8 border-2 border-white flex justify-center items-center ${
                                levelupBeaute ? "bg-white" : "bg-[#D2AC47]"
                            } ${
                                levelupBeaute ? "text-[#D2AC47]" : "text-white"
                            } font-roboto rounded-full cursor-pointer text-sm hover:bg-white hover:text-[#D2AC47]`}
                            onClick={handlelevelupBeaute}
                        >
                            <h1>LEVEL UP BEAUTE</h1>
                        </div>
                        <div
                            className={`w-auto px-6 text-xs h-8 border-2 border-white flex justify-center items-center ${
                                all ? "bg-white" : "bg-[#D2AC47]"
                            } ${
                                all ? "text-[#D2AC47]" : "text-white"
                            } font-roboto rounded-full cursor-pointer text-sm hover:bg-white hover:text-[#D2AC47]`}
                            onClick={handleAll}
                        >
                            <h1>ALL</h1>
                        </div>
                    </div>
                </div>
                <img
                    src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702277408/SSG/AssetSearchkakShell_omisif.svg"
                    alt="KakShella"
                    width={100}
                    height={100}
                    className="hidden md:block w-80 lg:w-[26rem] h-auto absolute bottom-0 lg:right-0 lg:me-20 right-4"
                />
            </section>
            <section className="mt-20 flex flex-wrap gap-8 justify-center" onch>
                <Card className="w-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-48 cursor-pointer hover:scale-110"
                            onClick={() => navigate("/product/search/catalog")}
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Rp. 20.000
                        </span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Buy
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-48"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Rp. 20.000
                        </span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Buy
                            </a>
                        </div>
                    </div>
                </Card>
            </section>
            <div className="flex overflow-x-auto sm:justify-center mt-20">
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination
                        layout="pagination"
                        currentPage={currentPage}
                        totalPages={10}
                        onPageChange={onPageChange}
                        previousLabel="Go back"
                        nextLabel="Go forward"
                        showIcons
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;
