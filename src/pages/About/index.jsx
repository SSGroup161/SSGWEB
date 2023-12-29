import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const aboutkakshell = "/Asset2.svg";
const aboutkakshell1 =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700460579/SSG/ka_shell_png_3_gg3okw.svg";
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
const imageoffice =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700534909/SSG/fotokantor_uwlvp3.png";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar />
            <div className="h-auto flex items-center md:items-start relative flex-col mt-28 gap-28 md:gap-0">
                <div
                    className="lg:ms-32 md:ms-20 md:mb-48 me-10 md:mt-12 lg:mt-40"
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                >
                    <h1 className="font-aref text-[#D2AC47] lg:text-7xl md:text-5xl text-4xl font-semibold tracking-widest mt-6">
                        Shella Saukia
                    </h1>
                    <h1 className="font-aref text-[#D2AC47] lg:text-5xl md:text-4xl text-2xl font-semibold tracking-widest mt-2 md:mt-4">
                        Group
                    </h1>
                    <p className="font-roboto text-[#A18E64] mt-4 lg:mt-6 text-sm md:text-xl md:w-80 w-48 lg:w-[32rem]">
                        “ The only place where the magic of beauty happened ”
                    </p>
                </div>
                <img
                    src={aboutkakshell}
                    alt="aboutkakshell"
                    width={1500}
                    height="auto"
                    className="absolute top-0 right-0 mt-12 hidden md:block"
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                />
                <img
                    src={aboutkakshell1}
                    alt="aboutkakshell1"
                    width={800}
                    height="auto"
                    className="md:hidden w-[50rem]"
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                />
            </div>
            <div data-aos="flip-up" data-aos-duration="1500">
                <video
                    width={200}
                    height={200}
                    className="w-96 md:w-[40rem] lg:w-full h-auto max-w-screen-lg mt-28 lg:mt-64 m-auto rounded-lg"
                    poster="https://res.cloudinary.com/dixxtnquz/image/upload/v1701915715/SSG/imgtv_ch8qot.png"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/dixxtnquz/video/upload/v1701677188/SSG/bank_bjb___Company_Profile_2023_b2c39c.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div
                className="flex justify-center items-center flex-col mt-32 lg:mt-52 gap-10"
                data-aos="fade-down"
                data-aos-duration="2000"
            >
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 314 653"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                >
                    <path
                        d="M35.4601 427.49C53.9671 427.49 68.9701 412.487 68.9701 393.98C68.9701 375.473 53.9671 360.47 35.4601 360.47C16.953 360.47 1.95007 375.473 1.95007 393.98C1.95007 412.487 16.953 427.49 35.4601 427.49Z"
                        fill="#D2AC47"
                    />
                    <path
                        d="M130.82 233.21C108.34 219.45 91.16 209.65 78.96 199.95C10.32 145.31 37.05 78.08 37.05 78.08C1.95003 104.38 -7.97995 156.61 8.76005 195.48C25.7401 234.92 69.3 258.86 103.68 281.11C123.21 293.75 149.57 306.44 165.64 323.85C188.93 349.1 195.2 384.8 177.71 413.78C156.99 448.1 116.34 456.94 79.05 440.88C79.05 440.88 139.13 471.23 192.6 438.56C192.6 438.56 229.48 415.97 231.75 362.32C234.02 308.68 197.65 274.13 130.82 233.21Z"
                        fill="#D2AC47"
                    />
                    <path
                        d="M175.86 172.93C150.78 157.58 122.49 143.44 103.09 120.39C83.05 96.57 78.68 61.04 98.72 35.59C111.7 19.11 132.41 10.85 153.13 11.54C194.5 12.9 240.88 41.55 243.15 116.56H255.9V5.16999C255.9 5.16999 246.08 5.16999 246 5.16999C246 5.16999 244.25 12.75 244.1 13.4C243.19 17.3 242.17 22.22 239.19 25.1C235.81 28.37 230.65 28.59 226.33 27.45C209.05 22.9 189.05 -11.65 115.85 5.16999C57.72 18.53 36.75 84.34 55.74 136.25C78.39 198.13 150.03 213.05 195.41 252.95C266.79 312.46 245.06 375.95 245.05 375.97C252.15 370.11 257.89 362.56 262.96 354.93C269.87 344.53 276.02 332.84 278.25 320.49C290.96 250.04 228.17 204.95 175.86 172.93Z"
                        fill="#D2AC47"
                    />
                    <path
                        d="M59.2517 587.986C57.8233 584.7 55.633 582.129 52.6809 580.272C49.7763 578.368 46.348 577.415 42.396 577.415C38.682 577.415 35.349 578.272 32.3968 579.987C29.4447 581.701 27.1116 584.153 25.3974 587.343C23.6833 590.486 22.8262 594.152 22.8262 598.342C22.8262 602.532 23.6833 606.222 25.3974 609.413C27.1116 612.603 29.4447 615.055 32.3968 616.769C35.349 618.483 38.682 619.34 42.396 619.34C45.8719 619.34 48.9907 618.602 51.7524 617.126C54.5617 615.603 56.7996 613.46 58.4661 610.698C60.1802 607.889 61.1563 604.627 61.3944 600.913H40.3962V596.842H66.6797V600.485C66.4416 604.865 65.2512 608.841 63.1086 612.412C60.9659 615.936 58.0852 618.721 54.4664 620.769C50.8953 622.816 46.8718 623.84 42.396 623.84C37.7773 623.84 33.5872 622.769 29.8256 620.626C26.064 618.436 23.0881 615.412 20.8978 611.555C18.7551 607.651 17.6838 603.247 17.6838 598.342C17.6838 593.438 18.7551 589.057 20.8978 585.2C23.0881 581.296 26.064 578.272 29.8256 576.13C33.5872 573.939 37.7773 572.844 42.396 572.844C47.7289 572.844 52.3952 574.178 56.3948 576.844C60.3945 579.51 63.299 583.224 65.1084 587.986H59.2517ZM102.407 623.34L90.0511 602.485H80.8375V623.34H75.838V573.416H90.8367C96.4077 573.416 100.622 574.749 103.479 577.415C106.383 580.082 107.835 583.582 107.835 587.914C107.835 591.533 106.788 594.628 104.693 597.199C102.645 599.723 99.5979 601.366 95.5506 602.128L108.407 623.34H102.407ZM80.8375 598.414H90.9081C94.8126 598.414 97.7409 597.461 99.6931 595.557C101.693 593.652 102.693 591.105 102.693 587.914C102.693 584.629 101.741 582.105 99.836 580.344C97.9313 578.534 94.9316 577.63 90.8367 577.63H80.8375V598.414ZM140.184 623.84C135.565 623.84 131.375 622.769 127.613 620.626C123.852 618.436 120.876 615.412 118.685 611.555C116.543 607.651 115.471 603.247 115.471 598.342C115.471 593.438 116.543 589.057 118.685 585.2C120.876 581.296 123.852 578.272 127.613 576.13C131.375 573.939 135.565 572.844 140.184 572.844C144.85 572.844 149.064 573.939 152.825 576.13C156.587 578.272 159.539 581.296 161.682 585.2C163.824 589.057 164.896 593.438 164.896 598.342C164.896 603.247 163.824 607.651 161.682 611.555C159.539 615.412 156.587 618.436 152.825 620.626C149.064 622.769 144.85 623.84 140.184 623.84ZM140.184 619.483C143.898 619.483 147.231 618.626 150.183 616.912C153.135 615.198 155.468 612.746 157.182 609.556C158.896 606.318 159.753 602.58 159.753 598.342C159.753 594.104 158.896 590.39 157.182 587.2C155.468 584.01 153.135 581.558 150.183 579.844C147.231 578.13 143.898 577.273 140.184 577.273C136.47 577.273 133.137 578.13 130.184 579.844C127.232 581.558 124.899 584.01 123.185 587.2C121.471 590.39 120.614 594.104 120.614 598.342C120.614 602.58 121.471 606.318 123.185 609.556C124.899 612.746 127.232 615.198 130.184 616.912C133.137 618.626 136.47 619.483 140.184 619.483ZM178.829 573.416V604.842C178.829 609.794 179.996 613.46 182.329 615.841C184.71 618.221 187.948 619.412 192.043 619.412C196.137 619.412 199.328 618.245 201.613 615.912C203.946 613.531 205.113 609.841 205.113 604.842V573.416H210.112V604.77C210.112 611.103 208.422 615.865 205.041 619.055C201.708 622.245 197.352 623.84 191.971 623.84C186.591 623.84 182.21 622.245 178.829 619.055C175.496 615.865 173.83 611.103 173.83 604.77V573.416H178.829ZM253.19 587.772C253.19 592.057 251.785 595.509 248.976 598.128C246.167 600.747 241.953 602.056 236.334 602.056H226.263V623.34H221.264V573.416H236.334C241.905 573.416 246.095 574.725 248.904 577.344C251.761 579.963 253.19 583.439 253.19 587.772ZM236.334 597.771C244.143 597.771 248.047 594.438 248.047 587.772C248.047 584.439 247.119 581.915 245.262 580.201C243.405 578.487 240.429 577.63 236.334 577.63H226.263V597.771H236.334Z"
                        fill="black"
                    />
                    <path
                        d="M305.68 619.02C309.789 619.02 313.12 615.689 313.12 611.58C313.12 607.471 309.789 604.14 305.68 604.14C301.571 604.14 298.24 607.471 298.24 611.58C298.24 615.689 301.571 619.02 305.68 619.02Z"
                        fill="#D2AC47"
                    />
                </svg>
                <p className="font-roboto text-[#A18E64] lg:w-[60rem] w-80 md:w-[40rem] text-center">
                    SS Group stands for Shella Saukia Group is an Indonesia
                    company engaged in beauty, fashion, and personal care
                    products. SS Group is established in 2019 and already have
                    massive success in products- selling at various platforms
                    through the act of their well-known social media influencer
                    owner, Shella Saukia. One of their most sensational success
                    is gaining 16 billion IDR from one time live streaming
                    selling in September 2023. SS Group is aiming to be the
                    leading brand providing fashion, beauty, and personal care
                    for all Indonesian people. SS Group will continuously
                    discover the best high quality products in all of our
                    business unit to bring the highest satisfactory level for
                    our loyal customer around the country. This is the place
                    where the magic of beauty happened!
                </p>
            </div>
            <div
                className="flex justify-center items-center flex-col mt-32 lg:mt-48 gap-8"
                data-aos="fade-down"
                data-aos-duration="2000"
            >
                <h1 className="font-roboto text-[#D2AC47] text-3xl">Vision</h1>
                <p className="font-roboto text-[#A18E64] lg:w-[60rem] w-80 md:w-[40rem] text-center">
                    To be at the forefront of the fashion and beauty care
                    industry by prioritizing added value for its users both
                    locally and globally.
                </p>
            </div>
            <div
                className="flex justify-center items-center flex-col mt-12 lg:mt-20 gap-8"
                data-aos="fade-down"
                data-aos-duration="2000"
            >
                <h1 className="font-roboto text-[#D2AC47] text-3xl">Mission</h1>
                <p className="font-roboto text-[#A18E64] lg:w-[60rem] w-80 md:w-[40rem] text-center">
                    1. Always committed to creating high quality products with
                    the best and highest quality materials. <br /> 2. Continue
                    to innovate in development and research to improve product
                    quality and usability for customers. <br /> 3. Providing the
                    best service for partners and customers in an effort to
                    maintain the sustainability of the company's business
                    ecosystem and the progress of the fashion and beauty
                    industry.
                </p>
            </div>
            <section className="flex flex-col justify-center items-center mt-32 lg:mt-48">
                <h1
                    className="text-[#D2AC47] font-roboto mt-28 text-2xl md:text-3xl mb-8 md:mb-14"
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
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col justify-center items-center mt-32 lg:mt-48">
                <h1
                    className="text-[#D2AC47] font-roboto text-2xl md:text-3xl mb-8 md:mb-14"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Our Office
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-32">
                    <img
                        src={imageoffice}
                        alt="imageoffice"
                        width={350}
                        height="auto"
                        className="hidden lg:block"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    />
                    <img
                        src={imageoffice}
                        alt="imageoffice"
                        width={300}
                        height="auto"
                        className="lg:hidden"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    />
                    <div
                        className="flex flex-col gap-6 md:gap-7 lg:gap-8 w-72 md:w-auto"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <h1 className="font-roboto text-[#A18E64] font-normal text-2xl">
                            Shella Saukia Skin Office
                        </h1>
                        <p className="text-[#A18E64] font-roboto font-light w-72 md:w-[24rem] md:text-lg">
                            Jl. K.H. Wahid Hasyim No.161, RT.1/RW.5, Kb. Kacang,
                            Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah
                            Khusus Ibukota Jakarta 10240
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <path
                                        d="M31.75 8.18335C30.222 6.63989 28.4019 5.41613 26.396 4.58344C24.3901 3.75074 22.2385 3.32579 20.0666 3.33335C10.9666 3.33335 3.54996 10.75 3.54996 19.85C3.54996 22.7667 4.31663 25.6 5.74996 28.1L3.41663 36.6667L12.1666 34.3667C14.5833 35.6833 17.3 36.3834 20.0666 36.3834C29.1666 36.3834 36.5833 28.9667 36.5833 19.8667C36.5833 15.45 34.8666 11.3 31.75 8.18335ZM20.0666 33.5833C17.6 33.5833 15.1833 32.9167 13.0666 31.6667L12.5666 31.3667L7.36663 32.7333L8.74996 27.6667L8.41663 27.15C7.0462 24.9616 6.31853 22.4321 6.31663 19.85C6.31663 12.2833 12.4833 6.11668 20.05 6.11668C23.7166 6.11668 27.1666 7.55002 29.75 10.15C31.0291 11.4233 32.0428 12.9378 32.7323 14.6057C33.4218 16.2737 33.7733 18.0619 33.7666 19.8667C33.8 27.4333 27.6333 33.5833 20.0666 33.5833ZM27.6 23.3167C27.1833 23.1167 25.15 22.1167 24.7833 21.9667C24.4 21.8334 24.1333 21.7667 23.85 22.1667C23.5666 22.5834 22.7833 23.5167 22.55 23.7833C22.3166 24.0667 22.0666 24.1 21.65 23.8834C21.2333 23.6833 19.9 23.2334 18.3333 21.8334C17.1 20.7334 16.2833 19.3834 16.0333 18.9667C15.8 18.55 16 18.3334 16.2166 18.1167C16.4 17.9333 16.6333 17.6333 16.8333 17.4C17.0333 17.1667 17.1166 16.9833 17.25 16.7167C17.3833 16.4333 17.3166 16.2 17.2166 16C17.1166 15.8 16.2833 13.7667 15.95 12.9334C15.6166 12.1334 15.2666 12.2334 15.0166 12.2167H14.2166C13.9333 12.2167 13.5 12.3167 13.1166 12.7334C12.75 13.15 11.6833 14.15 11.6833 16.1834C11.6833 18.2167 13.1666 20.1834 13.3666 20.45C13.5666 20.7334 16.2833 24.9 20.4166 26.6833C21.4 27.1167 22.1666 27.3667 22.7666 27.55C23.75 27.8667 24.65 27.8167 25.3666 27.7167C26.1666 27.6 27.8166 26.7167 28.15 25.75C28.5 24.7833 28.5 23.9667 28.3833 23.7833C28.2666 23.6 28.0166 23.5167 27.6 23.3167Z"
                                        fill="#A18E64"
                                    />
                                </svg>
                                <h1 className="font-roboto text-[#A18E64] md:text-lg">
                                    (+62)853-5102-3811
                                </h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <path
                                        d="M36.6667 10.0001C36.6667 8.16675 35.1667 6.66675 33.3334 6.66675H6.66671C4.83337 6.66675 3.33337 8.16675 3.33337 10.0001V30.0001C3.33337 31.8334 4.83337 33.3334 6.66671 33.3334H33.3334C35.1667 33.3334 36.6667 31.8334 36.6667 30.0001V10.0001ZM33.3334 10.0001L20 18.3334L6.66671 10.0001H33.3334ZM33.3334 30.0001H6.66671V13.3334L20 21.6667L33.3334 13.3334V30.0001Z"
                                        fill="#A18E64"
                                    />
                                </svg>
                                <h1 className="font-roboto text-[#A18E64] md:text-lg">
                                    info@ssgroup.id
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-roboto text-[#A18E64] md:text-lg">
                                Working hours:
                            </h1>
                            <h1 className="font-roboto text-[#A18E64] md:text-lg">
                                10.00 WIB s/d 16.00 WIB
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
