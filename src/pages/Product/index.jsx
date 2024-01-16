import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const banner = "/slide1.png";
const banner2 = "/slide2.png";
const banner3 = "/slide3.png";
const imagessskin =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSKIN_nnzc1p.svg";
const imagessshop =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSHOP_w8okrk.svg";
const imagelevelup =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703038769/SSG/LEVELUPstyle_qthn1c.svg";
const imagessskingold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSKINGOLD_kseonm.png";
const imagessshopgold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSHOPGOLD_zuncts.png";
const imagelevelupblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703038889/SSG/LEVELUPstyleblack_y8xvvt.svg";
const imagelevelupbeaute =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703040124/SSG/LEVELUPbeaute_dtcal7.svg";
const imagelevelupbeauteblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703040140/SSG/LEVELUPbeauteblack_txkvty.svg";

const Product = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section
                className="h-40 md:h-96 lg:h-[32rem]"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
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
            <section className="flex flex-col items-center justify-center mt-12 md:mt-32 md:px-10 lg:px-56">
                <h1
                    className="text-[#D2AC47] font-roboto text-2xl md:text-3xl mb-6 md:mb-12"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    All About Beauty & Style
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div
                        className="flex flex-col w-52 lg:w-64 items-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <img
                            src="/levelstylemodel.png"
                            alt="assset1"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            Level Up Style
                        </h1>
                        <p className="text-center font-roboto text-[#A18E64]">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                    <div
                        className="flex flex-col w-52 lg:w-64 items-center"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    >
                        <img
                            src="/ssmodel.png"
                            alt="assset2"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            SS Skin & SS Shop
                        </h1>
                        <p className="text-center font-roboto text-[#A18E64]">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                    <div
                        className="flex flex-col w-52 lg:w-64 items-center"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <img
                            src="/levelbeautemodel.png"
                            alt="assset3"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                        <h1 className="text-[#D2AC47] font-roboto text-2xl mt-8 mb-4 text-center">
                            Level Up Beaute
                        </h1>
                        <p className="text-center font-roboto text-[#A18E64]">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo.{" "}
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center">
                <h1
                    className="text-[#D2AC47] font-roboto mt-48 text-2xl md:text-3xl mb-8 md:mb-14"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Our Brand
                </h1>
                <div className="flex items-center gap-4 md:gap-24 lg:gap-36">
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        onClick={() =>
                            navigate(
                                "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        onClick={() =>
                            navigate(
                                "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        onClick={() =>
                            navigate(
                                "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                            )
                        }
                    />
                    <img
                        src={imagelevelupbeaute}
                        alt="imagelevelup"
                        width={150}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupbeauteblack)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src = imagelevelupbeaute)
                        }
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        onClick={() =>
                            navigate(
                                "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="800"
                        onClick={() =>
                            navigate(
                                "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        onClick={() =>
                            navigate(
                                "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        onClick={() =>
                            navigate(
                                "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                            )
                        }
                    />
                    <img
                        src={imagelevelupbeaute}
                        alt="imagesskin"
                        width={110}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupbeauteblack)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src = imagelevelupbeaute)
                        }
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        onClick={() =>
                            navigate(
                                "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                            )
                        }
                    />
                    <div className="md:hidden flex flex-col gap-20">
                        <div className="flex gap-20">
                            <img
                                src={imagessskin}
                                alt="imagesskin"
                                width={80}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagessskingold)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagessskin)
                                }
                                data-aos="fade-up"
                                data-aos-duration="800"
                                onClick={() =>
                                    navigate(
                                        "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                                    )
                                }
                            />
                            <img
                                src={imagessshop}
                                alt="imagesskin"
                                width={80}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagessshopgold)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagessshop)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() =>
                                    navigate(
                                        "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                                    )
                                }
                            />
                        </div>
                        <div className="flex gap-16">
                            <img
                                src={imagelevelup}
                                alt="imagesskin"
                                width={90}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagelevelupblack)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagelevelup)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                onClick={() =>
                                    navigate(
                                        "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                                    )
                                }
                            />
                            <img
                                src={imagelevelupbeaute}
                                alt="imagesskin"
                                width={90}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src =
                                        imagelevelupbeauteblack)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagelevelupbeaute)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1400"
                                onClick={() =>
                                    navigate(
                                        "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-48">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div
                        className="text-start font-roboto w-72 flex flex-col gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <h1 className="text-lg font-medium text-[#D2AC47]">
                            Overseas Expansion
                        </h1>
                        <h1 className="text-7xl font-medium text-[#D2AC47]">
                            5
                        </h1>
                        <p className="text-[#A18E64] font-light">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo. Eget cursus mauris
                            faucibus quis leo.
                        </p>
                    </div>
                    <div
                        className="text-start font-roboto w-72 flex flex-col gap-4"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <h1 className="text-lg font-medium text-[#D2AC47]">
                            Happy Customer
                        </h1>
                        <h1 className="text-7xl font-medium text-[#D2AC47]">
                            2M+
                        </h1>
                        <p className="text-[#A18E64] font-light">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo. Eget cursus mauris
                            faucibus quis leo.
                        </p>
                    </div>
                    <div
                        className="text-start font-roboto w-72 flex flex-col gap-4"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    >
                        <h1 className="text-lg font-medium text-[#D2AC47]">
                            Total Product
                        </h1>
                        <h1 className="text-7xl font-medium text-[#D2AC47]">
                            5M+
                        </h1>
                        <p className="text-[#A18E64] font-light">
                            Lorem ipsum dolor sit amet consectetur. Eget cursus
                            mauris faucibus quis leo. Eget cursus mauris
                            faucibus quis leo.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center mt-32 md:mt-48">
                <div
                    className="w-80 md:w-[40rem] lg:w-[46rem] h-20 lg:h-24 bg-[#D2AC47] rounded-2xl flex justify-between items-center px-4 md:px-12 lg:px-16"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
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
