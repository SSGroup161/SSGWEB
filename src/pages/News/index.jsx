import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Carousel, Card, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDetail = () => {
        navigate("/news/detail");
    };

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section
                className="h-64 md:h-[36rem] lg:h-[40rem] xl:h-[49rem] 2xl:h-[55rem] lg:mt-0 top-0"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Carousel pauseOnHover className="carousel-custom">
                    <div className="h-full relative">
                        <div className="absolute w-full h-full flex items-center justify-start">
                            <div className="bg-[#D2AC47] absolute opacity-60 w-full h-full"></div>
                            <div className="content-container z-10 w-72 md:w-[35rem] ms-14 items-center justify-center md:items-start md:justify-start md:ms-20 lg:ms-44 mt-10 flex flex-col gap-2 md:gap-4">
                                <h1 className="font-roboto text-base md:text-4xl text-white font-medium">
                                    Dukung Gaza, Palestina. SS Group berikan
                                    donasi sebesar 1 Milyar Rupiah!
                                </h1>
                                <p className="font-roboto text-[#CDCCC8] text-xs md:text-base">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit neque nobis
                                    perspiciatis ipsam! Molestias, perspiciatis!
                                    Debit...
                                </p>
                                <div
                                    className="w-28 md:w-48 h-8 md:h-14 border-white border-2 flex justify-center items-center text-white font-roboto text-xs md:text-base rounded-md md:rounded-md cursor-pointer hover:text-[#D2AC47] hover:bg-white"
                                    onClick={handleDetail}
                                >
                                    <h1>Read more</h1>
                                </div>
                            </div>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                            alt="jxb"
                            width="full"
                            height="full"
                            className="h-full w-full object-cover z-10"
                        />
                    </div>
                    <div className="h-full relative">
                        <div className="absolute w-full h-full bg-[#D2AC47] opacity-50 flex items-center justify-start">
                            <div className="content-container">
                                {/* Tambahkan konten atau elemen tambahan di dalam slide kedua jika diperlukan */}
                            </div>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                            alt="jxb"
                            width="full"
                            height="full"
                            className="h-full w-full object-cover z-10"
                        />
                    </div>
                </Carousel>
            </section>
            <section className="mt-12 md:mt-20 px-8 md:px-0">
                <h1
                    className="text-center text-[#D2AC47] font-roboto font-medium text-3xl md:text-5xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    News & Event
                </h1>
                <div className="mt-8 md:mt-20 flex flex-wrap gap-8 justify-center">
                    <Card
                        className="max-w-sm"
                        imgSrc="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                        horizontal
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a href="#readmore" className="text-end">
                            Readmore
                        </a>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgSrc="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                        horizontal
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a href="#readmore" className="text-end">
                            Readmore
                        </a>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgSrc="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                        horizontal
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a href="#readmore" className="text-end">
                            Readmore
                        </a>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgSrc="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                        horizontal
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a href="#readmore" className="text-end">
                            Readmore
                        </a>
                    </Card>
                </div>
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

export default News;
