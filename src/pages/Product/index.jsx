import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Carousel } from "flowbite-react";

const banner =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700546436/SSG/fe301633c49dde9779b551a6edb8fed0_azlygg.png";
const banner2 =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700628156/SSG/bannerdummy2_ggmssc.svg";
const banner3 =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700628142/SSG/bannerdummy1_t2jezh.svg";
const louminus =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700639629/SSG/Luminous_GLow_2_rqfrnn.svg";
const imagebeauty =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700207915/SSG/Acne_series_1_lwltcw.png";

const Product = () => {
    return (
        <>
            <Navbar />
            <div className="h-52 md:h-96 lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] mt-20 lg:mt-0 top-0 ">
                <Carousel pauseOnHover className="carousel-custom">
                    <img src={banner} alt="banner" width="full" height="full" />
                    <img
                        src={banner2}
                        alt="banner2"
                        width="full"
                        height="full"
                    />
                    <img
                        src={banner3}
                        alt="banner3"
                        width="full"
                        height="full"
                    />
                </Carousel>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
                <div className="w-80 md:w-[24rem] lg:w-[30rem]">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Key For Your Beauty
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
                <div>
                    <img src={louminus} alt="imagebeauty" width={400} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
                <div className="w-80 md:w-[24rem] lg:w-[30rem]">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Looks Young
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
                <div>
                    <img src={imagebeauty} alt="imagebeauty" width={400} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
                <div className="w-80 md:w-[24rem] lg:w-[30rem]">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Trusted and certified
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
                <div>
                    <img src={louminus} alt="imagebeauty" width={400} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
