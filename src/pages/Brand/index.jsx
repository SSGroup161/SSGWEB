import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { Card, Dropdown } from "flowbite-react";
import { getBrand } from "../../store/action/brand";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Brand = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isError, errorMessage, data } = useSelector((state) => state.brand);

    useEffect(() => {
        if (isError && errorMessage) {
            toast.warn(errorMessage, {
                hideProgressBar: true,
                autoClose: 2000,
            });
        } else if (isError && !errorMessage) {
            toast.error("Something wrong");
        }
    }, [isError, errorMessage]);

    useEffect(() => {
        getBrand(dispatch, id);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="h-full relative flex-col">
                <div className="absolute w-full h-full flex items-center justify-start">
                    <div className="content-container flex-1 z-10 w-72 md:w-[35rem] px-8 text-center md:text-start items-center justify-center md:items-start md:justify-start md:ms-20 lg:ms-44 flex flex-col gap-2 md:gap-4">
                        <img
                            src={data && data[0] && data[0].logo_img}
                            alt="Logo"
                            width={50}
                            height={50}
                            className="w-28 lg:w-32"
                        />
                        <p className="font-roboto text-white text-xs md:text-base">
                            {data && data[0] && data[0].description}
                        </p>
                        <div className="flex gap-4 items-center">
                            <a
                                href={data && data[0] && data[0].link_web}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-48 h-8 md:h-14 border-white border-2 flex justify-center items-center text-white font-roboto text-xs md:text-base rounded-md md:rounded-md cursor-pointer hover:text-[#D2AC47] hover:bg-white">
                                    <h1>Go to Website</h1>
                                </div>
                            </a>
                            <a
                                href={data && data[0] && data[0].link_ig}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="41"
                                    viewBox="0 0 40 41"
                                    fill="none"
                                    className="cursor-pointer hover:scale-110"
                                >
                                    <path
                                        d="M20.0002 28.1932C21.9647 28.1932 23.8489 27.4128 25.238 26.0237C26.6272 24.6345 27.4076 22.7504 27.4076 20.7858C27.4076 18.8213 26.6272 16.9372 25.238 15.548C23.8489 14.1588 21.9647 13.3784 20.0002 13.3784C18.0356 13.3784 16.1515 14.1588 14.7624 15.548C13.3732 16.9372 12.5928 18.8213 12.5928 20.7858C12.5928 22.7504 13.3732 24.6345 14.7624 26.0237C16.1515 27.4128 18.0356 28.1932 20.0002 28.1932Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.3335 28.1932V13.3784C3.3335 10.9227 4.30902 8.56756 6.04547 6.83111C7.78192 5.09467 10.137 4.11914 12.5928 4.11914H27.4076C29.8633 4.11914 32.2184 5.09467 33.9549 6.83111C35.6913 8.56756 36.6668 10.9227 36.6668 13.3784V28.1932C36.6668 30.6489 35.6913 33.0041 33.9549 34.7405C32.2184 36.4769 29.8633 37.4525 27.4076 37.4525H12.5928C10.137 37.4525 7.78192 36.4769 6.04547 34.7405C4.30902 33.0041 3.3335 30.6489 3.3335 28.1932Z"
                                        stroke="white"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M30.1855 10.6192L30.2041 10.5989"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 z-10 justify-center items-center hidden md:flex">
                        <img
                            src={data && data[0] && data[0].asset_img}
                            alt="asset"
                            width={20}
                            height={20}
                            className="w-60 lg:w-80"
                        />
                    </div>
                    <div className="bg-[#D2AC47] absolute opacity-60 w-full h-full"></div>
                </div>
                {data && data[0] && data[0].video_bg ? (
                    <video
                        src={data && data[0] && data[0].video_bg}
                        width="100%"
                        height="100%"
                        alt="videobg"
                        loop
                        autoPlay
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={data && data[0] && data[0].bg_img}
                        alt="jxb"
                        width="full"
                        height="full"
                        className="h-96 md:h-full w-full object-cover z-10"
                    />
                )}
            </section>
            <section className="mt-20 flex flex-wrap gap-8 justify-center px-10">
                <Card className="w-64 h-96">
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
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Beaute
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
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
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            SS Shop
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
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
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            SS Skin
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
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
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Beaute
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
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
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Style
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
            </section>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Brand;
