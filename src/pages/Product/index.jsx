import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const banner = "/BannerProduct1.svg";
const banner2 = "/BannerProduct2.svg";
const banner3 = "/Bannerproduct3.svg";
const louminus =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700639629/SSG/Luminous_GLow_2_rqfrnn.svg";
const imagebeauty =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700207915/SSG/Acne_series_1_lwltcw.png";
const imagessskin =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSKIN_nnzc1p.svg";
const imagessshop =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSHOP_w8okrk.svg";
const imagelevelup =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136420/SSG/LEVELUP_ymv49h.svg";
const imagessskingold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSKINGOLD_kseonm.png";
const imagessshopgold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSHOPGOLD_zuncts.png";
const imagelevelupblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137656/SSG/LEVELUPBLACK_qmwklj.svg";

const Product = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="h-64 md:h-[36rem] lg:h-[40rem] xl:h-[49rem] 2xl:h-[55rem] mt-20 lg:mt-0 top-0 ">
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
            </section>
            <section className="flex flex-col md:flex-row justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
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
            </section>
            <section className="flex flex-col md:flex-row-reverse justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
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
            </section>
            <section className="flex flex-col md:flex-row justify-between items-center mt-14 lg:mt-48 md:px-10 lg:px-56">
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
            </section>
            <section className="flex flex-col items-center justify-center mt-14 lg:mt-48 md:px-10 lg:px-56">
                <h1 className="text-[#D2AC47] font-roboto text-3xl mb-12">
                    Any Problem, One Solution
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div className="flex flex-col w-52 lg:w-64 items-center">
                        <img
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1701916640/SSG/assetproduct1_hw1leg.svg"
                            alt="assset1"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            Dull Skin
                        </h1>
                        <p className="text-center font-roboto">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                    <div className="flex flex-col w-52 lg:w-64 items-center">
                        <img
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1701916644/SSG/assetproduct2_czzofl.svg"
                            alt="assset2"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            Wrinkled Skin
                        </h1>
                        <p className="text-center font-roboto">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                    <div className="flex flex-col w-52 lg:w-64 items-center">
                        <img
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1701916641/SSG/assetproduct3_kbkhze.svg"
                            alt="assset3"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            Dry Skin
                        </h1>
                        <p className="text-center font-roboto">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center mt-32 md:mt-48">
                <h1 className="text-[#D2AC47] font-roboto text-2xl md:text-3xl mb-8 md:mb-14">
                    Our Brand
                </h1>
                <div className="flex items-center gap-10 md:gap-32 lg:gap-44">
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={150}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={100}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={100}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={110}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={70}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={70}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={80}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                </div>
            </section>
            <section className="flex justify-center items-center mt-32 md:mt-48">
                <div className="w-80 md:w-[40rem] lg:w-[46rem] h-20 lg:h-24 bg-[#D2AC47] rounded-2xl flex justify-between items-center px-4 md:px-12 lg:px-16">
                    <h1 className="font-roboto text-lg md:text-3xl text-white">
                        See our product
                    </h1>
                    <div
                        className="border-2 border-white rounded-lg w-32 lg:w-52 h-10 text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#D2AC47]"
                        onClick={() => navigate("/product/search")}
                    >
                        <h1 className="font-roboto lg:text-lg">See here</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Product;
